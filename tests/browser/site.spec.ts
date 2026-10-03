import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { tools, foundations, siteUrl } from '../../src/data/projects.ts';
import { startServer } from '../../scripts/serve.ts';
import {
  record,
  parseJson,
  writeOutput,
  repositoryRoot,
} from '../../scripts/local.ts';

let app: Awaited<ReturnType<typeof startServer>>;
test.beforeAll(async () => {
  app = await startServer();
});
test.afterAll(async () => {
  await app.close();
});
const phase = process.env['RESPONSIVE_PHASE'] ?? 'after';
if (!/^[a-z0-9-]+$/.test(phase)) throw new Error('Invalid evidence phase');
const viewports = [
  [320, 800],
  [360, 800],
  [390, 844],
  [440, 800],
  [600, 800],
  [759, 1024],
  [760, 1024],
  [761, 1024],
  [768, 1024],
  [900, 800],
  [1023, 768],
  [1024, 768],
  [1439, 900],
  [1440, 900],
] as const;
const standard = [
  [360, 800],
  [390, 844],
  [768, 1024],
  [1024, 768],
  [1440, 900],
] as const;

async function ready(page: Page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await expect(
    page.getByRole('img', { name: 'VINASIG', exact: true }),
  ).toBeVisible();
  expect(
    await page.evaluate(() =>
      [...document.images].every(
        (image) => image.complete && image.naturalWidth > 0,
      ),
    ),
  ).toBe(true);
  expect(
    await page.evaluate(() =>
      [...document.fonts].some(
        (font) =>
          font.family.includes('Space Grotesk') && font.status === 'loaded',
      ),
    ),
  ).toBe(true);
}
async function capture(page: Page, label: string) {
  const height = await page.evaluate(
    () => document.documentElement.scrollHeight,
  );
  const viewportHeight = page.viewportSize()?.height ?? 800;
  for (let y = 0; y < height; y += viewportHeight)
    await page.evaluate((offset) => {
      scrollTo(0, offset);
    }, y);
  await page.evaluate(() => {
    scrollTo(0, 0);
  });
  const geometry = await page.evaluate(() => ({
    viewport: innerWidth,
    width: document.documentElement.scrollWidth,
    fontSize: getComputedStyle(document.documentElement).fontSize,
    grid: getComputedStyle(
      document.querySelector('.tool-grid') ?? document.body,
    ).gridTemplateColumns,
    overflow: [...document.querySelectorAll('body *')]
      .filter((element) => {
        const box = element.getBoundingClientRect();
        return box.width > 0 && (box.left < -1 || box.right > innerWidth + 1);
      })
      .map((element) => ({
        tag: element.tagName,
        class: element.className,
        text: element.textContent.slice(0, 80),
      })),
  }));
  await page.screenshot({
    path: `output/responsive/${phase}-${label}.png`,
    fullPage: true,
  });
  await writeOutput(
    repositoryRoot,
    `output/checks/geometry-${phase}-${label}.json`,
    `${JSON.stringify(geometry, null, 2)}\n`,
  );
  expect(geometry.width, JSON.stringify(geometry.overflow)).toBeLessThanOrEqual(
    geometry.viewport + 1,
  );
  expect(geometry.overflow).toEqual([]);
}
async function axe(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    .analyze();
  expect(results.violations).toEqual([]);
}

for (const [width, height] of viewports)
  for (const theme of ['light', 'dark'] as const)
    for (const percent of [100, 200]) {
      test(`responsive home ${String(width)}x${String(height)} ${theme} text ${String(percent)}`, async ({
        browser,
      }, info) => {
        const context = await browser.newContext({
          viewport: { width, height },
          colorScheme: theme,
        });
        const page = await context.newPage();
        const errors: string[] = [];
        page.on('pageerror', (error) => errors.push(error.message));
        try {
          await page.goto(app.url);
          await ready(page);
          if (percent === 200)
            await page.evaluate(() => {
              document.documentElement.style.fontSize = '200%';
            });
          const label = `home-${String(width)}x${String(height)}-${info.project.name}-${theme}-text-${String(percent)}`;
          await capture(page, `${label}-idle`);
          const summaries = page.locator('summary');
          for (let index = 0; index < (await summaries.count()); index++)
            await summaries.nth(index).click();
          await expect(
            page.getByText('SI stands for Super Intelligence.', {
              exact: false,
            }),
          ).toBeVisible();
          await capture(page, `${label}-notes-open`);
          await axe(page);
          expect(errors).toEqual([]);
        } finally {
          await context.close();
        }
      });
    }

for (const [width, height] of [...standard, [320, 800] as const])
  for (const theme of ['light', 'dark'] as const) {
    test(`responsive 404 ${String(width)}x${String(height)} ${theme}`, async ({
      browser,
    }, info) => {
      const context = await browser.newContext({
        viewport: { width, height },
        colorScheme: theme,
      });
      const page = await context.newPage();
      try {
        const response = await page.goto(`${app.url}not-a-page`);
        expect(response?.status()).toBe(404);
        await ready(page);
        await expect(
          page.getByRole('heading', { name: 'Page not found', level: 1 }),
        ).toBeVisible();
        await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
          'content',
          'noindex',
        );
        await expect(
          page.getByRole('link', { name: 'Return to VINASIG' }),
        ).toHaveAttribute('href', '/vinasig/');
        if (width === 320)
          await page.evaluate(() => {
            document.documentElement.style.fontSize = '200%';
          });
        await capture(
          page,
          `404-${String(width)}x${String(height)}-${info.project.name}-${theme}-${width === 320 ? 'text-200' : 'text-100'}`,
        );
        await axe(page);
        await page.getByRole('link', { name: 'Return to VINASIG' }).click();
        await expect(
          page.getByRole('heading', {
            name: 'Useful tools. Built with care.',
            level: 1,
          }),
        ).toBeVisible();
      } finally {
        await context.close();
      }
    });
  }

for (const theme of ['light', 'dark'] as const)
  for (const mode of ['disabled', 'blocked'] as const) {
    test(`No-script ${mode} ${theme} keeps every destination and disclosure usable`, async ({
      browser,
    }, info) => {
      const context = await browser.newContext({
        viewport: { width: 390, height: 844 },
        colorScheme: theme,
        javaScriptEnabled: mode !== 'disabled',
      });
      const page = await context.newPage();
      const requests: { url: string; method: string; type: string }[] = [];
      page.on('request', (request) =>
        requests.push({
          url: request.url(),
          method: request.method(),
          type: request.resourceType(),
        }),
      );
      if (mode === 'blocked')
        await page.route('**/*', (route) =>
          route.request().resourceType() === 'script'
            ? route.abort()
            : route.continue(),
        );
      try {
        await page.goto(app.url);
        await ready(page);
        for (const tool of tools) {
          await expect(
            page.getByRole('link', { name: `Open ${tool.name}`, exact: true }),
          ).toHaveAttribute('href', tool.url);
          await expect(
            page.getByRole('link', {
              name: `Source for ${tool.name}`,
              exact: true,
            }),
          ).toHaveAttribute('href', tool.source);
        }
        for (const project of foundations)
          await expect(
            page.getByRole('link', { name: project.name, exact: true }),
          ).toHaveAttribute('href', project.url);
        await page.locator('summary').nth(1).click();
        await expect(
          page.getByText('SI stands for Super Intelligence.', { exact: false }),
        ).toBeVisible();
        await page.getByRole('link', { name: 'Projects', exact: true }).click();
        await expect(page).toHaveURL(`${app.url}#tools`);
        await capture(
          page,
          `home-390x844-${info.project.name}-${theme}-script-${mode}`,
        );
        expect(
          requests.every(
            (request) =>
              request.method === 'GET' &&
              new URL(request.url).origin === new URL(app.url).origin,
          ),
        ).toBe(true);
        expect(requests.filter((request) => request.type === 'script')).toEqual(
          [],
        );
        expect(await context.cookies()).toEqual([]);
        expect(
          await page.evaluate(() => ({
            local: localStorage.length,
            session: sessionStorage.length,
          })),
        ).toEqual({ local: 0, session: 0 });
      } finally {
        await context.close();
      }
    });
  }

test('Keyboard activation, source names and anchor navigation', async ({
  page,
  browserName,
}, info) => {
  await page.goto(app.url);
  await ready(page);
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await page.keyboard.press('Tab');
  if (browserName === 'webkit' && process.platform === 'win32')
    await skip.focus();
  await expect(skip).toBeFocused();
  await page.screenshot({
    path: `output/responsive/${phase}-home-${info.project.name}-skip-focused.png`,
  });
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
  await page.getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL(`${app.url}#about`);
  const disclosure = page.locator('summary').nth(1);
  await disclosure.focus();
  await page.keyboard.press('Enter');
  await expect(
    page.getByText('SI stands for Super Intelligence.', { exact: false }),
  ).toBeVisible();
  await page.keyboard.press('Space');
  await expect(
    page.getByText('SI stands for Super Intelligence.', { exact: false }),
  ).not.toBeVisible();
  for (const tool of tools)
    await expect(
      page.getByRole('link', { name: `Source for ${tool.name}` }),
    ).toHaveAttribute('href', tool.source);
});

test('Long project content reflows at 320 px and 200 percent text', async ({
  page,
}, info) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto(app.url);
  await ready(page);
  await page.evaluate(() => {
    document.documentElement.style.fontSize = '200%';
    const title = document.querySelector('.tool-card h3');
    const description = document.querySelector('.card-description');
    if (title)
      title.textContent = 'AReallyLongProjectNameWithoutSpaces'.repeat(3);
    if (description)
      description.textContent = 'https://example.com/' + 'longpath'.repeat(40);
  });
  await capture(page, `home-320x800-${info.project.name}-long-text-200`);
  const contentWidth = await page
    .locator('.tool-card')
    .first()
    .evaluate((card) => {
      const style = getComputedStyle(card);
      return (
        card.clientWidth -
        parseFloat(style.paddingLeft) -
        parseFloat(style.paddingRight)
      );
    });
  expect(contentWidth).toBeGreaterThanOrEqual(220);
});

for (const reducedMotion of ['no-preference', 'reduce'] as const) {
  test(`Touch and motion reversal with ${reducedMotion}`, async ({
    browser,
  }, info) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: info.project.name !== 'firefox',
      hasTouch: true,
      reducedMotion,
    });
    const page = await context.newPage();
    try {
      await page.goto(app.url);
      await ready(page);
      const summary = page.locator('summary').nth(1);
      for (let index = 0; index < 4; index++) await summary.tap();
      await expect(
        page.getByText('SI stands for Super Intelligence.', { exact: false }),
      ).not.toBeVisible();
      await summary.tap();
      const duration = await summary
        .locator('svg')
        .evaluate((element) => getComputedStyle(element).transitionDuration);
      expect(duration).toBe(reducedMotion === 'reduce' ? '0s' : '0.16s');
      await capture(
        page,
        `home-390x844-${info.project.name}-touch-${reducedMotion}`,
      );
      await axe(page);
    } finally {
      await context.close();
    }
  });
}

test('Public metadata matches visible projects and the canonical website', async ({
  page,
}) => {
  await page.goto(app.url);
  await expect(page).toHaveTitle('VINASIG | Practical tools and projects');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    siteUrl,
  );
  const contents = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(contents).not.toBeNull();
  const graph = record(parseJson(Buffer.from(contents ?? '')))['@graph'];
  expect(Array.isArray(graph)).toBe(true);
  expect(JSON.stringify(graph)).toContain('Organization');
  for (const tool of tools) {
    expect(contents).toContain(tool.name);
    expect(contents).toContain(tool.url);
  }
  for (const favicon of ['16', '32', '48'])
    expect(
      (
        await page.request.get(`${app.url}brand/favicon-${favicon}.png`)
      ).status(),
    ).toBe(200);
});
