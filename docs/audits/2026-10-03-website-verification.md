# Website implementation verification

Date: 3 October 2026. Scope: the existing VINASIG/vinasig repository, initially a clean main branch at e1d0b48. The owner requested a public VINASIG project website, standardization and deployment. Sibling repositories remain outside the edit scope.

This is the pre-publication implementation record. Exact pushed revision, CI, Pages deployment and live-byte verification are separate post-commit evidence. Their status at the time of writing this record is NOT_RUN; a workflow definition is not a successful deployment.

## Product and sources

The implementation contains one English homepage and a custom 404. Four deployed tools have distinct website/source links; four public foundation repositories have descriptions and source links. The actual nine-repository organization inventory and the tools' source descriptions were reviewed. Anonymous requests to all four tool websites returned 200 with the expected titles (`output/research/destinations.json`). No medical or legal thresholds are duplicated here.

The owner supplied the shared VINASIG design system and brand assets. This product explicitly adopts Bright Playful Minimalism, local Space Grotesk and build-time Lucide icons. `docs/BRAND.md`, `docs/STANDARDS.md`, `docs/asset-manifest.json` and `docs/toolchain-lock.json` record provenance and selection. Nine supplied asset/notice digests and 37 managed standards payloads are checked. The source contains no executable client JavaScript, accounts, forms, analytics, cookies, web storage or runtime GitHub API request.

The deployment uses https://vinasig.github.io/vinasig/. No custom domain or DNS change is assumed.

## Defects found and resolved

| Route and state                                                  | Observed defect and cause                                                                                                                            | Source correction and regression                                                                                                                                  | Before / after evidence under output/responsive/                                                                                |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Homepage, initial development views including 360x800            | Fonts and logo requested at a malformed path because BASE_URL had no final slash.                                                                    | Normalize the base in the shared layout; validate generated paths and actual font/image loading.                                                                  | before-home-360x800-chromium-light-idle.png; after-home-360x800-chromium-light-text-100-idle.png                                |
| Homepage, 320x800, 200 percent text                              | Brand exceeded the viewport; initial document width was 360 px at a 320 px viewport.                                                                 | Constrain brand/image width while keeping proportional artwork. Assert document and element bounds.                                                               | before-home-320x800-chromium-text-200-top.png; after-home-320x800-chromium-light-text-200-native-top.png                        |
| Homepage, 320x800, synthetic long heading/link, 200 percent text | Unbroken content expanded the flex heading's minimum size and document width.                                                                        | Allow the heading to shrink and provide emergency wrapping. Keep all content and links.                                                                           | before-home-320x800-chromium-long-text-200-card.png; after-home-320x800-chromium-long-text-200.png                              |
| Homepage, 320x800, 200 percent text                              | Screenshot review found card content too narrow despite passing overflow bounds. Rem-based padding consumed 128 px inside the card at enlarged text. | Cap the normal card padding and container gutter; retain enlarged text. Add a content-width assertion of at least 220 px; observed final content width is 238 px. | before-spacing-home-320x800-chromium-light-text-200-native-card.png; after-home-320x800-chromium-light-text-200-native-card.png |

Initial captures and failed reports are retained rather than replaced: `output/checks/browser-probe-failure/` and `output/checks/browser-no-script-capture-failure/`. The latter had 150 passing cases and four timeouts in a screenshot scroll helper. Actual no-script link/disclosure assertions had already completed. The helper used an async browser-side timer loop with JavaScript disabled. It now iterates in Node and performs synchronous scroll evaluations. Assertions, timeouts and zero retries remain intact. The focused rerun passed 8/8, followed by the final full run.

Initial source diagnostics also found an incorrect Lucide prop name, a named generic group without its role, test async/numeric-expression issues and CSS selector ordering. These were corrected without suppressing diagnostics or relaxing source rules.

## Executed gates

| Gate                                                                                | Status  | Evidence                                                                                                                                            |
| ----------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Astro strict TypeScript, typed ESLint, Stylelint, formatter and standards integrity | PASS    | `output/research/check-density-final.log`; zero Astro errors, warnings or hints; 37 managed payloads                                                |
| Public inventory unit tests                                                         | PASS    | 23/23, no skipped/cancelled cases; `output/research/unit-after.log`                                                                                 |
| Production build and generated HTML/metadata/base-path/asset checks                 | PASS    | Two pages, 16 publication files and nine preserved asset digests; `output/research/build-density-final.log`                                         |
| Dependency audit                                                                    | PASS    | Zero reported vulnerabilities in the locked graph; `output/research/npm-audit.json`                                                                 |
| Final local Chromium and WebKit browser suite                                       | PASS    | 154 expected, zero unexpected/skipped/flaky cases and zero retries; `output/playwright/report.json` and `output/research/browser-density-final.log` |
| Local Firefox                                                                       | NOT_RUN | Installed executable cannot launch (`spawn UNKNOWN`); `output/research/browser-availability.json`. CI still requires all three engines.             |
| Lab performance budgets                                                             | PASS    | Six final cold navigations; `output/lighthouse/after/home/summary.json`                                                                             |
| Fresh Codex discovery and independent SI-agent trial                                | NOT_RUN | Snapshot/instruction integrity and deterministic role/name tasks do not establish either outcome.                                                   |

The command sequence uses pinned Node 24.21.0 and npm 12.2.0: `npm run check`, `npm test`, `npm run build`, `npm run test:browser` with the explicitly recorded available local engine subset, and `node scripts/performance.ts`. The CI configuration rejects a subset and checks Linux and Windows before deployment.

## Browser matrix and visual review

The homepage was tested at 320x800, 360x800, 390x844, 440x800, 600x800, 759x1024, 760x1024, 761x1024, 768x1024, 900x800, 1023x768, 1024x768, 1439x900 and 1440x900. This covers the five required sizes, intermediate widths and the actual 760 px content breakpoint. Every size ran in light/dark themes at 100/200 percent text, idle and all disclosures expanded, with full-page scrolling, screenshots, computed styles, bounding checks, actual font/image readiness and axe. Both routes use the shared layout.

The custom 404 ran at the five standard sizes and 320 px in both themes; 320 px uses enlarged text. Other cases exercised JavaScript disabled and blocked, exact named project/foundation links, keyboard disclosures/skip activation, touch, long synthetic content, reduced motion, metadata, initial-page network origin and empty cookies/storage. There are no forms, drawers, tabs, tables or modals in this product; those states are NOT_APPLICABLE.

Images actually opened for manual review include all six initial homepage views, final Chromium homepage light/normal at all five standard sizes, 390 px dark expanded, 759 px light expanded, 761 px dark expanded, native 320 px enlarged-text top/card/footer views, the final custom 404 light/normal at all five standard sizes, a 390 px Chromium JavaScript-disabled view and a 390 px Windows WebKit homepage. Windows WebKit renders the font strokes differently; the image remained legible, actual font loading was checked, and this observation does not establish Safari or physical-device equivalence. Not every generated matrix screenshot was manually opened.

Additional hover/disclosure frames were captured and opened, with transform reversal checked in `output/research/visual-frames.json`. Motion is limited to 160 ms CSS direction feedback, a 1 px hover displacement and a chevron rotation; reduced motion has no transition. Screenshot waits are nominal sampling points, not exact frame timestamps or an FPS measurement. No animation runtime is shipped.

On Windows WebKit the skip test explicitly focuses the link before Enter because platform default Tab traversal does not necessarily visit links. Other supported combinations check initial Tab traversal. Firefox touch emulation uses hasTouch with isMobile false because Playwright does not support its isMobile context. See `tests/README.md` for these verification boundaries.

## Performance measurements

The baseline and final runs use the same pinned Lighthouse 13.5.0 / Chromium tooling, Node 24.21.0, cold-navigation defaults and simulation: mobile 390x844, 150 ms / 1.6 Mbps / 4x CPU; desktop 1440x900, 40 ms / 10 Mbps / 1x CPU. Each phase contains three mobile and three desktop navigations. Reports are stored separately in `output/lighthouse/before/home/` and `after/home/`.

| Profile | Baseline median LCP | Final median LCP | Final LCP range    | Final CLS / TBT |
| ------- | ------------------- | ---------------- | ------------------ | --------------- |
| Mobile  | 1429.39 ms          | 1504.94 ms       | 1504.92-1505.34 ms | 0 / 0 ms        |
| Desktop | 362.63 ms           | 364.61 ms        | 363.62-364.96 ms   | 0 / 0 ms        |

All six final runs scored 100 for performance, accessibility, best practices and SEO. Median budgets of LCP <=2500 ms, CLS <=0.1 and TBT <=200 ms passed. These results do not demonstrate a speed improvement or search ranking; small run variation and responsive source changes are recorded honestly. Field INP/CrUX, real phones, screen-reader use, external search-console indexing and independent agent usability remain NOT_RUN.

## Publication handoff

Before committing, format this record and rerun the source/unit/build gates; review all staged files and exclude ignored local reports. After the authorized push, inspect the exact revision's required jobs, deployment, all published bytes, real destination navigation and live screenshots. Save that later receipt under ignored `output/publication/` with the revision, run URL, verification counts, deployment identity and observations. Do not rewrite this pre-publication record to claim results that had not occurred.
