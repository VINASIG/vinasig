# Metadata tool catalog update, 6 October 2026

The owner authorized publishing Metadata Cleaner and Metadata Reader, their domains and discovery setup, and synchronizing the website and organization profile. The existing single inventory now includes their outcome descriptions, local-processing scope, actual source references, language destinations and English/Vietnamese task aliases. Eight entries use the existing six-item pagination. No additional runtime dependency or search storage is introduced.

Source checks, 44 inventory/localization/workflow tests and static HTML/license/asset build checks pass locally. Cross-engine browser verification and deployed verification are recorded after execution, not assumed from the source definition.

## Script-unavailable test repair

With the eighth entry, the original blocked-script test could no longer locate the seventh and eighth tool links. The test aborted external script requests, but Astro also embeds bundled modules inline. Those modules still enhanced pagination. The earlier six-entry inventory did not expose this false positive because all entries fitted on one page. The actually disabled-JavaScript test retains all eight destinations.

The repaired blocked-script fixture sends a document response with a script-src none CSP header as well as aborting any script fetch. This tests both inline and external script blocking. The assertions still require every correct website and source destination, usable native disclosures, no external requests, no script requests, no cookies and empty browser storage. No production security policy, product behavior, expected result or assertion is relaxed.

The source-name keyboard test previously assumed every enhanced card was on the initial page. It now activates Next and Previous with the keyboard, checks the source links across both pages, restores the first six entries and searches for the two metadata tools. All destination assertions remain. A local trace-file collision caused by overlapping test runs is an evidence-run failure. Affected tests are rerun sequentially with isolated reports.

## Observed local and public verification

The eight affected Chromium/WebKit cases pass after the test repairs. The full Firefox suite passes all 102 cases, and its shared-chrome matrix passes 104 cases. The Chromium/WebKit shared-chrome matrix passes 208 cases. Reports from the original run and subsequent isolated runs remain under ignored output/metadata-publication-2026-10-06. The updated desktop catalog screenshot has been opened and reviewed, including both new tools and the second-page controls. Final full CI and deployed-catalog checks are post-commit work and are not inferred from these local results.

Both new repositories are public with reviewed descriptions, topics and canonical homepages. Their first published source revisions have successful Windows and Ubuntu CI and Pages deployments. The live Vietnamese and English pages, robots and parsed two-route sitemaps return HTTPS 200. Both GitHub Pages domains have approved certificates and enforced HTTPS. The domains are therefore usable destinations for this inventory update. The organization profile update carries the same facts in both languages. Search Console submission, sitemap processing and indexing are recorded separately in the tools' publication audits.
