# Tool search and pagination

Requested by the owner on 5 October 2026. This is a static-site enhancement for a growing tool inventory, with no new dependencies or server work.

## Source and behavior

- `src/data/projects.ts` is the single inventory for tool cards, search and structured data. Keep verified destinations and product descriptions there. Each tool entry includes English and Vietnamese task aliases in `searchTerms`. Aliases must describe supported behavior. The separate foundations and Data and libraries inventories render outside tool search and pagination.
- `src/components/ToolCatalog.astro` renders every tool into HTML and defines the page size of six. Do not maintain a second inventory or hardcoded tool count. Pagination follows the actual inventory and filtered results. The catalog paginates the actual inventory into pages of at most six tools, while a query with at most six matches hides the pager.
- `src/scripts/tool-catalog.ts` builds a local index from those aliases, the original copy and the rendered localized card text. Matching ignores letter case, combining accents and Vietnamese `đ`. Every whitespace-separated term must match the same card. Literal input never becomes HTML.
- Results update after a 150 ms pause. Enter applies immediately. IME composition is allowed to finish before filtering. A query change resets to page one. The clear button, Escape and empty-state action clear the query and restore the list, returning focus to the input.
- Pagination shows a bounded set of numbers with first/last access and gaps. It filters before slicing. Page changes preserve the query, move focus to the result summary and scroll to the search area. Numbered buttons expose `aria-current="page"`. Previous and next are disabled at their boundaries.
- The result summary is a polite status region. The search has a visible label and a named clear button. Input, focus, hover, disabled, current-page and empty states use existing theme tokens and local Space Grotesk. New controls retain at least 44 px targets.

## URL and privacy

`?q=qr&page=2#tools` can represent a filtered page once the inventory contains enough matches. Query changes replace the current history entry. Page changes create a history entry. Back/Forward restores the query and page. Invalid, zero, noninteger, oversized and out-of-range page values resolve to a valid result page. URL queries are capped at the input's 200-character limit. Unknown query parameters and existing fragments are preserved.

Filtering and history updates make no network requests. No search data is saved in localStorage or sessionStorage. Opening, sharing or reloading a URL can expose its query to static hosting and its recipient. The canonical remains the unfiltered language homepage. The sitemap lists the real locale routes rather than transient search states.

Language links retain their existing behavior. They preserve the current section fragment and start a fresh catalog in the other language without copying queries or input values. Theme changes preserve search and page state.

## Progressive enhancement

The generated HTML contains every tool and destination. Enhancement controls start hidden and disabled. The script installs handlers before enabling them. With disabled or blocked JavaScript, visitors can browse all cards and use native tool/source links and disclosures. Search and paginated slicing are enhancements, not prerequisites to access.

## Maintenance evidence

Review actual interactions and screenshots in both locales and themes, including no results, clearing, keyboard/IME input, direct URLs, history, page boundaries, 320 px and enlarged text. Use an ignored local expanded-inventory fixture to inspect multiple pages when the public inventory fits on one page. Never publish invented entries merely to expose pagination.

Read the existing search and pagination guidance in `web-design-system/docs/elements/catalog.json`. The implementation uses the reviewed semantic patterns with ordinary website touch targets rather than copying compact specimen dimensions. See [the implementation audit](audits/tool-catalog-2026-10-05.md) for observed evidence and unrun boundaries.
