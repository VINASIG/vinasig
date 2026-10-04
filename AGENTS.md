# Build the VINASIG website

Read README.md, docs/PRODUCT.md, docs/BRAND.md and docs/TOOLCHAIN.md before changing this static Astro and TypeScript site.

- This repository is the public VINASIG homepage. Help visitors open working tools and find organization resources. Keep the curated project inventory in src/data/projects.ts. Verify project destinations and descriptions against their actual public repositories before changing them.
- Keep visible product copy in reviewed Vietnamese and English. Keep technical documentation, source and commit subjects in English. Respond to a Vietnamese user in Vietnamese. Use SI agents and Super Intelligence in VINASIG copy without inventing capability or industry claims.
- Adopt the shared Bright Playful Minimalism proposal for this website. Use local Space Grotesk, Lucide interface icons, supplied byte-preserved VINASIG artwork and the pinned semantic tokens. Use Simple Icons only when a third-party brand mark is actually needed.
- Keep the site static and usable without JavaScript. Use native links and disclosures. Do not add accounts, tracking, forms, live repository API calls, ornamental animation or unnecessary navigation machinery. Do not infer a custom domain from a directory entry.
- Preserve the canonical https://vinasig.io.vn/ deployment at the origin root. Validate the homepage, custom 404 page, favicon, fonts, canonical, social metadata, sitemap, project inventory and truthful structured data.
- Run npm run check, npm test, npm run build and Playwright tests after changes. Open real screenshots at the five standard viewports, 320 px, content breakpoint neighbors, intermediate widths and 200 percent text. Check both themes, keyboard, touch, disclosures, links and normal/reduced motion. Fix overflow in source without clipping or hiding content.
- Keep immutable before captures and local reports under ignored output/. Record durable audits under docs/audits/. Exact-commit CI, deployment and live verification are post-commit evidence. Do not invent future results in source documents.
- Preserve unrelated sibling repositories and user changes. Review staged changes before an authorized commit. Verify pushed HEAD, required CI, deployment and live content for that revision. Physical devices, screen readers, field metrics, fresh Codex discovery and independent SI-agent trials stay NOT_RUN unless observed.

## Canonical domain

The owner authorized the custom-domain migration on 4 October 2026. Publish this site at https://vinasig.io.vn/ with an origin-root base. Preserve that domain in canonical/social metadata, sitemap, robots, package homepage, preview and browser assertions. Keep GitHub repository/source links intact. Read docs/DOMAIN.md. GitHub Actions deploys through the repository Pages custom-domain setting; a CNAME file alone does not configure an Actions deployment.

## Language and appearance

Read `docs/LOCALIZATION.md`. Both locales must include navigation, accessible names, validation, loading and result copy. Keep native reciprocal language links and locale metadata. Preserve technical identifiers, code and user content. Only the optional light or dark preference uses `vinasig-theme` storage. Never save or send measurements, files or generator content. Verify both locales and themes before publishing.

<!-- VINASIG STANDARDS BEGIN -->
## VINASIG SI agent standards 0.1.0

Read `.vinasig/standards/policies/core.md` and `language.md` before repository work. Respect platform instructions, current user authorization and local project guidance. Preserve unrelated changes. Never invent verification or weaken a quality gate to pass.

Active profile is `web-typescript`. Read `.vinasig/standards/profiles/web-typescript.md` and the task-relevant policies. Core is valid for CLI and documentation projects and installs no browser dependencies.

Use `$vinasig-workflow` for implementation work and `$vinasig-dependencies` when adding or upgrading dependencies. Report PASS, FAIL, NOT_RUN or NOT_APPLICABLE with evidence and reasons. Commit, push and publish only within the task authorization.

For license selection, imported material or distribution changes read `policies/licensing.md` and `LICENSES.md` inside the snapshot. LIC-001 through LIC-004 require purpose-based selection, authority and dependency review, separate documentation/font/data/brand rights, consistent SPDX metadata and delivery evidence. Importing this standard does not relicense the host project.

For UI changes read `policies/web.md` inside the snapshot. Apply LANG-004/LANG-005 to all visible copy and locales. WEB-001 requires original transparent header logos matched to the actual surface, without a padded or rounded logo card, linking to https://vinasig.io.vn/. Run inspectHeaderBrand and exercise the logo link on local and deployed pages. WEB-008 requires a full control inventory and styled initial/open/scrolled states, including popup scrollbars, checkbox/radio, search clear, range/progress parts and disclosure indicators. Use the reviewed control-surfaces CSS, preserve native form/keyboard/touch behavior and test forced colors. Run inspectControlSurfaces and inspectControlIndicators with nonzero expected counts. Ordinary dropdown indicators need a measured 16 px inner trailing inset, a 12 px value gap and their declared SVG size. Open before/after and deployed screenshots. Use `$vinasig-responsive` for layout/accessibility, `$vinasig-motion` for movement, `$vinasig-search` for SEO/AEO/GEO, `$vinasig-performance` for speed, and `$vinasig-agent-readiness` for browser-agent tasks. Space Grotesk, Lucide and Simple Icons follow their separate roles.

The local manifest pins the approved snapshot. A Markdown path is a reading instruction, not an automatic import. Stop and report unresolved conflicts with mandatory policy. Record approved exceptions with owner, reason and review date.
<!-- VINASIG STANDARDS END -->
