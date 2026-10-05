function normalizeSearch(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replaceAll('đ', 'd');
}

const catalog = document.querySelector<HTMLElement>('[data-tool-catalog]');
if (catalog) initializeCatalog(catalog);

function initializeCatalog(owner: HTMLElement): void {
  const search = owner.querySelector<HTMLElement>('.tool-search');
  const input = owner.querySelector<HTMLInputElement>('#tool-search');
  const clear = owner.querySelector<HTMLButtonElement>('[data-search-clear]');
  const reset = owner.querySelector<HTMLButtonElement>('[data-search-reset]');
  const summary = owner.querySelector<HTMLElement>('[data-tool-summary]');
  const empty = owner.querySelector<HTMLElement>('[data-tool-empty]');
  const pager = owner.querySelector<HTMLElement>('.tool-pagination');
  const pages = owner.querySelector<HTMLOListElement>('[data-tool-pages]');
  const previous = owner.querySelector<HTMLButtonElement>(
    '[data-page-previous]',
  );
  const next = owner.querySelector<HTMLButtonElement>('[data-page-next]');
  if (
    !search ||
    !input ||
    !clear ||
    !reset ||
    !summary ||
    !empty ||
    !pager ||
    !pages ||
    !previous ||
    !next
  )
    return;

  const entries = Array.from(
    owner.querySelectorAll<HTMLElement>('[data-tool-card]'),
    (card) => ({
      card,
      text: normalizeSearch(
        `${card.dataset['searchTerms'] ?? ''} ${card.textContent}`,
      ),
    }),
  );
  const size = Math.max(1, Number(owner.dataset['pageSize']) || 6);
  let page = 1;
  let timer: number | undefined;
  let composing = false;
  let currentSearch = window.location.search;
  let renderedQuery = '';

  const updateUrl = (push = false): void => {
    const url = new URL(window.location.href);
    const query = input.value.trim();
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    if (page > 1) url.searchParams.set('page', String(page));
    else url.searchParams.delete('page');
    if (url.href === window.location.href) return;
    try {
      if (push) window.history.pushState(null, '', url);
      else window.history.replaceState(null, '', url);
      currentSearch = window.location.search;
    } catch {
      // Filtering still works when a browser restricts history changes.
    }
  };

  const render = (): void => {
    renderedQuery = input.value;
    const terms = normalizeSearch(input.value).split(/\s+/).filter(Boolean);
    const matches = entries.filter(({ text }) =>
      terms.every((term) => text.includes(term)),
    );
    const count = matches.length;
    const total = Math.ceil(count / size);
    page = Math.min(Math.max(1, page), Math.max(1, total));
    const start = (page - 1) * size;
    const visible = new Set(
      matches.slice(start, start + size).map(({ card }) => card),
    );
    for (const { card } of entries) card.hidden = !visible.has(card);
    clear.hidden = input.value.length === 0;
    empty.hidden = count !== 0;
    pager.hidden = total <= 1;
    previous.disabled = page <= 1;
    next.disabled = page >= total;
    summary.textContent =
      (total > 1
        ? summary.dataset['range']
        : count === 1
          ? summary.dataset['single']
          : summary.dataset['count']
      )
        ?.replace('{start}', String(start + 1))
        .replace('{end}', String(Math.min(start + size, count)))
        .replace('{count}', String(count)) ?? '';

    const numbers = [...new Set([1, page - 1, page, page + 1, total])]
      .filter((number) => number >= 1 && number <= total)
      .sort((a, b) => a - b);
    const fragment = document.createDocumentFragment();
    let last = 0;
    const addPage = (number: number): void => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'catalog-button';
      button.dataset['page'] = String(number);
      button.textContent = String(number);
      button.setAttribute(
        'aria-label',
        (pages.dataset['label'] ?? '').replace('{page}', String(number)),
      );
      button.setAttribute('aria-controls', 'tool-results');
      if (number === page) button.setAttribute('aria-current', 'page');
      item.append(button);
      fragment.append(item);
    };
    for (const number of numbers) {
      if (last && number - last === 2) addPage(last + 1);
      else if (last && number - last > 2) {
        const gap = document.createElement('li');
        gap.className = 'page-gap';
        gap.textContent = '…';
        gap.setAttribute('aria-hidden', 'true');
        fragment.append(gap);
      }
      addPage(number);
      last = number;
    }
    pages.replaceChildren(fragment);
  };

  const restore = (): void => {
    window.clearTimeout(timer);
    const parameters = new URL(window.location.href).searchParams;
    input.value = (parameters.get('q') ?? '').slice(0, input.maxLength);
    const requested = Number(parameters.get('page'));
    page = Number.isSafeInteger(requested) && requested > 0 ? requested : 1;
    currentSearch = window.location.search;
    render();
  };

  const applySearch = (): void => {
    window.clearTimeout(timer);
    page = 1;
    render();
    updateUrl();
  };

  const clearSearch = (): void => {
    input.value = '';
    applySearch();
    input.focus();
  };

  const changePage = (target: number): void => {
    window.clearTimeout(timer);
    page = input.value === renderedQuery ? target : 1;
    render();
    updateUrl(true);
    summary.focus({ preventScroll: true });
    search.scrollIntoView({ block: 'start' });
  };

  input.addEventListener('input', () => {
    clear.hidden = input.value.length === 0;
    window.clearTimeout(timer);
    if (!composing) timer = window.setTimeout(applySearch, 150);
  });
  input.addEventListener('compositionstart', () => {
    composing = true;
    window.clearTimeout(timer);
  });
  input.addEventListener('compositionend', () => {
    composing = false;
    applySearch();
  });
  input.addEventListener('keydown', (event) => {
    if (composing || event.isComposing) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      clearSearch();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      applySearch();
    }
  });
  clear.addEventListener('click', clearSearch);
  reset.addEventListener('click', clearSearch);
  previous.addEventListener('click', () => {
    changePage(page - 1);
  });
  next.addEventListener('click', () => {
    changePage(page + 1);
  });
  pages.addEventListener('click', (event) => {
    const button =
      event.target instanceof HTMLElement
        ? event.target.closest<HTMLButtonElement>('button[data-page]')
        : null;
    if (button) changePage(Number(button.dataset['page']));
  });
  window.addEventListener('popstate', () => {
    // Native section history must retain its own scroll and focus behavior.
    if (currentSearch === window.location.search) return;
    restore();
    summary.focus({ preventScroll: true });
    search.scrollIntoView({ block: 'start' });
  });
  restore();
  input.disabled = false;
  clear.disabled = false;
  reset.disabled = false;
  search.hidden = false;
}

export {};
