# Metadata Editor catalog entry - 6 October 2026

The owner requested a third separate metadata project within the existing publication authorization. VINASIG/metadata-editor a9ec4b93153e3467846c5d82e48b1146e09b8662 passed its Windows and Ubuntu checks and was deployed by run 37412476562. Actual HTTPS at edit.vinasig.io.vn serves that source revision after GitHub's DNS recheck and certificate approval. The source repository and About details describe XMP editing rather than arbitrary binary EXIF/IPTC editing.

The homepage inventory now includes Metadata Editor alongside Cleaner and Reader, with locale-correct website/source links and English/Vietnamese task aliases. Both language descriptions explain JPEG/PNG/WebP XMP editing and image-data preservation. The nine-entry inventory still paginates six per page, while searching metadata shows all three tools together. A regression exercises the Vietnamese editing alias and the exact English destination. The existing inventory tests now include the ninth verified identity.

Source checks, standards/license validation, all 47 unit tests, built HTML/metadata and original asset digests PASS. All 312 shared-chrome cases and 306 browser tests PASS across Chromium, Firefox and WebKit, retaining the existing themes, widths, 200 percent text, keyboard, no-script, discovery and accessibility coverage. No CSS, runtime library, shared chrome or search implementation change was needed. Before/after catalog screenshots for both locales and mobile/desktop were retained in ignored output/metadata-editor and opened.

Three Lighthouse mobile and desktop measurements per locale PASS unchanged budgets. Median LCP is 1655 ms English and 1653 ms Vietnamese on mobile, and 403 ms on desktop for both. CLS and TBT are zero. All four laboratory categories score 100. These are local lab observations. Physical devices, field metrics, screen readers and fresh independent agent discovery remain NOT_RUN.

Homepage commit, exact-commit CI and live catalog verification are post-commit evidence and are recorded separately after execution.
