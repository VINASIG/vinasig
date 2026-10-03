# Header logo audit

Reviewed on 4 October 2026 under the owner's organization-wide request. The interface-language and custom-control work was completed first and has its own audit record.

## Cause and implementation

The header added a white padded card with rounded corners around the Primary Color export. Its dark surface also retained the dark wordmark.

The header now renders the unchanged Primary Color SVG on light surfaces and the unchanged Reversed SVG on dark surfaces using picture media selection. It works before JavaScript loads. The link and image have no background card, padding, rounded image crop or shadow. Layout spacing and a minimum 44 px hit height remain independent of the image.

The application entry is `src/layouts/SiteLayout.astro`. Existing asset digests remain unchanged. The approved horizontal artwork has a 540 by 140 viewBox. Integrity checks preserve the original bytes and internal white geometry. Browser checks compare the declared and rendered ratio against that reviewed viewBox instead of inferring it from browser-rounded natural dimensions.

## Standards adoption

The managed standards snapshot is pinned to `7c699d1dccd05c1dd2c4f0de4bb3abae23174ccd`. Installer diff, dry run, update and doctor completed. Project-owned AGENTS text outside the managed block was preserved byte for byte. The shared WEB001 rule records the owner-approved header requirement. Other draft brand recommendations retain their draft status.

## Local browser verification

Routes reviewed are `/`, `404.html`. Chromium, Firefox and WebKit each visited these routes at 360 by 800, 390 by 844, 768 by 1024, 1024 by 768 and 1440 by 900 with both light and dark system preferences. All 60 route, viewport, preference and engine combinations passed rendered-header, copy, overflow and runtime checks. Pages were scrolled to the bottom. Logo focus and hover were inspected after the initial capture.

Chromium captures are full-page images. Firefox and WebKit captures show the viewport after full-page scrolling. Chromium contact sheets for every route were opened and reviewed, together with Firefox and WebKit header sheets for the home page at 390 and 1440 px in both preferences. Representative full-page captures were also opened. Screenshots are local evidence, not a claim of physical-device or assistive-technology testing.

The project's `tests/browser/interface.spec.ts` regression passed 72 cases across all three browser engines. It checks the initial logo, focus and hover while retaining the existing interface, disclosure and privacy assertions.

## Evidence and limits

Immutable initial header screenshots are under ignored `output/responsive/header-logos-2026-10-04/before/chromium/`. Successful after captures are under `output/responsive/header-logos-2026-10-04/after-verified/`, with a folder for each engine. Earlier diagnostic runs are retained separately and are not the accepted result. The interface-language audit has separate before and after screenshots.

This is a local verification record. Current-head CI and GitHub Pages publication are verified separately before task completion. No font, business calculation, generated output, private data or original logo artwork was changed by the header work.

## Additional completed gates

The final adopted snapshot passed the project's source checks and 23 unit tests. The final production build and its applicable generated-HTML, metadata, deployment-path and original-asset checks passed.

A separate Chromium run passed 92 header, copy, runtime, overflow, focus and hover combinations across this project's routes, both preferences and these additional widths in CSS px: 320, 479, 480, 481, 519, 520, 521, 639, 640, 641, 719, 720, 721, 759, 760, 761, 900, 958, 959, 960, 1099, 1100, 1101. These include 320 px, intermediate widths and the actual breakpoint neighbors used by the reviewed sites. Its immutable captures are under ignored `output/responsive/header-logos-2026-10-04/after-neighbors/chromium/`.

## Capture correction after CI

The first header commit's Ubuntu run, `37147350802`, passed 300 browser cases but received three Chromium compositor errors while requesting full-page screenshots at 320 px and at 759 px with 200% text. The retained log and trace show that fonts had loaded and the capture failed immediately after rapid scrolling. Its available failure screenshot shows the rendered header and content. The original CI artifacts remain under ignored `output/ci-header-first-failure/`.

The existing capture helper now waits for two paint frames at each scroll position and after returning to the top. It verifies the top position, disables finite animations only for the still image and writes geometry before requesting the bitmap. Disabled-script contexts retain host-side status checks. The overflow, accessibility, enlarged-text, privacy, touch and browser-matrix assertions are unchanged. Retries remain zero.

The complete local suite passed all 303 cases across Chromium, Firefox and WebKit after the correction. The three affected captures were opened and reviewed. Their complete-page screenshots and geometry use the separate `header-capture-stable` prefix. Final source checks passed. Current-head CI and publication remain separately verified before task completion.

## CI resource isolation

The capture follow-up passed 302 of 303 cases on Ubuntu, then reported `ENOSPC` while writing browser trace data during context cleanup. The original log is retained in ignored output. Browser jobs now isolate each of Chromium, Firefox and WebKit on Ubuntu and Windows. The six-job matrix retains every browser case, zero retries, existing timeouts and all assertions. Linux Chromium retains the existing Lighthouse budgets and packages Pages. Deployment waits for all six verification jobs. A workflow unit regression checks the declared matrix and deployment dependency.
