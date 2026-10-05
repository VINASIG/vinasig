# Tool catalog discovery audit

## Scope and authority

The owner requested search and pagination for https://vinasig.io.vn/ on 5 October 2026, anticipating more tools. The initial checkout was clean on `main` at `2bdf719d807cedec42de2aa087a59fdea008c4f8`. Existing publication authorization continues to apply. The inventory had six verified tools and four foundation resources. This change covers the tool catalog in both homepage locales. The shared header/footer, tool destinations, brand assets and foundation inventory are unchanged.

Read the product, brand, toolchain, localization and domain guides, the pinned core/language/web/quality policies and the workflow/responsive skills. Reviewed the search-field and pagination guidance and specimens in the design system. No new dependency, server function, account system, storage or remote index was added.

## Implementation

- One inventory now provides cards, the local search index, automatic pagination and the existing structured data. Curated aliases supplement both original and localized copy.
- Search ignores case and Vietnamese accents, including `đ`. All terms must match the same card. It updates after 150 ms, supports immediate Enter, waits for composition to finish and renders no user input as markup.
- Results are filtered before slicing into six-item pages. The seventh inventory entry automatically activates navigation. Page numbers are bounded rather than generating hundreds of buttons. Current, disabled, focus, hover and empty states use the existing theme tokens.
- Search changes reset to page one. Clear, Escape and the empty-state action restore results and focus the input. Pagination preserves the query, announces its range and returns to the search area.
- `q` and `page` support reloads, bookmarks and Back/Forward. Native fragment history keeps its own behavior. Locale links preserve their prior fresh-page semantics. The canonical and sitemap remain unfiltered locale routes.
- Controls start hidden and disabled until handlers are installed. All tool and source links remain in static HTML when scripts are disabled or unavailable.
- Updated the project README, product/toolchain notes and the owner-maintained AGENTS section. The pinned standards payload was not modified.

## Observed evidence

Local artifacts are ignored under `output/tool-search-2026-10-05/`. Before images were captured and opened at 1440 px light and 390 px dark. After images were opened for the search, empty state, pagination, enlarged text and forced-color rendering.

| Check                                          | Status  | Observed boundary                                                                                                                                                                                                                            |
| ---------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source diagnostics                             | PASS    | Strict Astro/TypeScript, typed ESLint, Stylelint, formatting, standards integrity and license delivery                                                                                                                                       |
| Static build                                   | PASS    | Four existing routes, generated HTML/metadata, project links, origin-root paths and all ten preserved asset digests                                                                                                                          |
| Real-inventory search                          | PASS    | `QR`, `xac thuc`, `ĐỌC QR`, `zip` and a no-match query produced the expected visible cards in both languages                                                                                                                                 |
| Expanded inventory                             | PASS    | Ignored 42-card local response fixture exercised seven pages and three filtered QR pages. No fixture entries were published                                                                                                                  |
| Navigation and state                           | PASS    | Previous/next, direct numbers, first/last boundaries, Back/Forward, reload, filter reset, theme retention and malformed page values were observed in Chromium and WebKit                                                                     |
| Final layout observations                      | PASS    | 120 locale/theme/engine views across 320, 360, 390, 479, 480, 481, 600, 759, 760, 761, 768, 1024, 1280 and 1440 CSS px, plus 320 px at 200 percent text. No page overflow, undersized visible controls or interface/control-surface findings |
| Final interaction observations                 | PASS    | 72 states covered keyboard pagination/clearing, empty recovery, Vietnamese task lookup, synthetic composition boundaries, literal markup-like input, 200-character URL-query capping and forced colors                                       |
| No-script access                               | PASS    | Eight disabled/removed-script observations in Chromium/WebKit retained all six tools and all destinations. Search and pager stayed hidden                                                                                                    |
| Search network behavior                        | PASS    | Recorded interactions issued zero requests after initial document/font loading and used no browser storage                                                                                                                                   |
| Local Firefox                                  | NOT_RUN | Installed managed Firefox failed to launch with `spawn UNKNOWN`. Existing CI has a separate Firefox environment                                                                                                                              |
| Dedicated local test suites                    | NOT_RUN | No new regression tests or local test-suite commands were added or run for this request. Browser drivers recorded UI observations                                                                                                            |
| Physical device, real OS IME and screen reader | NOT_RUN | Browser emulation and synthetic composition events do not establish these results                                                                                                                                                            |
| Field performance and independent agent trial  | NOT_RUN | No field measurement or separate agent was used                                                                                                                                                                                              |

The first source passes exposed closure-nullability, an unnecessary fallback and selector ordering issues. They were fixed without suppressing diagnostics or changing gates. Enlarged mobile pagination initially used a cramped center column. The final layout places numbers across their own row below 480 px and was captured and opened again.

## Publication boundary

This source document records local implementation evidence. The exact commit, required CI, Pages deployment and public HTML/CSS/runtime observations are post-commit facts. Record them separately after publication. Do not infer successful deployment from this audit or from the workflow definition alone.
