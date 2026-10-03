# Organization maintenance on 3 October 2026

## Scope and baseline

The owner requested a current audit of every VINASIG repository, resolution of open pull requests, publication of missing websites and refreshed repository details. The GitHub API returned nine public, active repositories. All nine local checkouts were clean on `main` and matched their fetched `origin/main` before changes.

| Repository              | Purpose                                          | Publication                                                  |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| `vinasig`               | Project website                                  | GitHub Pages                                                 |
| `bmi-calculator`        | Military BMI criterion and CDC adult BMI tools   | GitHub Pages                                                 |
| `qr-generator`          | Traditional local QR generation                  | GitHub Pages                                                 |
| `favicon-forge`         | Local favicon packages                           | GitHub Pages                                                 |
| `unphar`                | Local PHAR and ZIP conversion                    | GitHub Pages                                                 |
| `web-design-system`     | Draft documentation and interactive UI specimens | Missing deployment at baseline, Pages workflow added         |
| `agent-standards`       | Policies, skills and offline integration CLI     | Public source, no website required                           |
| `vinasig-brand-assets`  | Original artwork, exports and fonts              | Public asset archive, no website required                    |
| `vinasig-org-directory` | Schema-validated account and contact references  | Public JSON and generated documentation, no website required |

## Dependency review and pull requests

All 17 open pull requests were Dependabot proposals affecting package manifests and lockfiles. Nine proposed TypeScript 7.0.2. Eight proposed Node 26 declarations for repositories supporting Node 24. Each proposal's diff and CI status was inspected, and failure logs were retained where present.

The official registry still lists `typescript-eslint` 8.71.0 with a TypeScript peer below 6.1, and `@astrojs/check` 0.9.10 with support for TypeScript 5 or 6. The TypeScript proposals failed installation in CI. Node 26 declarations do not establish compatibility with a Node 24 runtime, including proposals whose existing source checks were green. All 17 incompatible proposals were closed individually with the relevant reason. No major proposal was merged by bypassing a check.

Each repository now records its reviewed version selection and narrow Dependabot bounds in `docs/audits/dependencies-2026-10-03.md`. Weekly updates remain enabled for supported versions and GitHub Actions. Review the compiler and runtime bounds by 17 October 2026. The five repositories still using ESLint 10.11.0 were updated to the verified compatible 10.12.0 release. Other direct dependencies already matched the selected compatible stable versions.

## Repository details and website publication

Descriptions, homepages and topics were refreshed for all nine repositories. Tool websites point to their live project URL. Source-only resources point to their repository documentation. All repositories already had private vulnerability reporting enabled. Existing artwork, fonts, account references and immutable standards snapshots retain their bytes and recorded provenance.

The design-system website lacked an authenticated Cloudflare deployment. Its new GitHub Pages workflow publishes only the checked `dist/` artifact after the Linux and Windows browser matrix. Navigation, downloads, favicon references, provider marks and font URLs now account for `/web-design-system/`. New path regression tests cover both quote styles in specimen HTML, root hosting, project hosting and preservation of external links and anchors. The deployment decision is recorded in its own repository.

The design-system matrix now includes Chromium, Firefox and WebKit, normal and reduced motion, touch input, local font loading, favicon requests and keyboard navigation. The long element library exceeds WebKit's screenshot dimension limit, so capture retains the actual viewport and records every scroll segment. Layout assertions and interactive cases remain intact.

## Local verification

The source checks, native unit tests and available builds were executed across all nine repositories. Checks include type diagnostics, configured lint and formatting, source or generated HTML, asset or data integrity and managed standards integrity where provided by each project. Installer quality fixtures and PHAR interoperability were also executed.

| Repository              | Native tests observed                                 |
| ----------------------- | ----------------------------------------------------- |
| `agent-standards`       | 15 passed, plus quality fixtures                      |
| `bmi-calculator`        | 38 passed                                             |
| `favicon-forge`         | 16 passed                                             |
| `qr-generator`          | 19 passed                                             |
| `unphar`                | 26 passed, plus PHP interoperability                  |
| `vinasig`               | 23 passed                                             |
| `vinasig-brand-assets`  | 17 passed                                             |
| `vinasig-org-directory` | 20 passed                                             |
| `web-design-system`     | Standards gate fixtures and two deployment path tests |

The two local clean installs in QR Generator and Favicon Forge encountered Windows file locks from existing development servers. Those servers were retained. Locked installs were repaired with the pinned manager, and source checks, unit tests and builds were rerun successfully. Final CI performs clean locked installs on independent Linux and Windows runners.

An old agent-standards PR run contained a 320 px enlarged-heading overflow. Git history showed that `main` already repaired it before this audit. The current fixture passed 38 local Chromium and WebKit cases, so no duplicate layout patch was applied. Local Firefox cannot launch in this Windows environment and is checked through the configured CI matrix.

## Dependency security limits

An explicit `npm audit --json` was also executed for all nine lockfiles. Brand Assets and Organization Directory reported zero vulnerabilities. The other seven repositories retain high-severity affected package entries tracing to two upstream advisories: [braces](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) in Stylelint/glob tooling and [http-cache-semantics](https://github.com/advisories/GHSA-ch52-4w7c-c8xp) through Astro. Each repository's dependency audit records its actual count and dependency path.

Both official registry latest releases are still within the affected ranges, and both reviewed advisories list no patched version. No forced downgrades, overrides, warnings suppression or vulnerability dismissals were applied. Repository-owned lint patterns and static Pages deployments limit the current exposure; they do not remove the advisories. Security audit outcomes remain **FAIL** in those seven repositories until supported upstream patches are available. Review by 17 October 2026 and before introducing untrusted glob inputs, a server deployment or a private remote-content cache.

## Final verification receipts

This document records the reviewed maintenance candidate. Final pushed commit hashes, exact-revision CI outcomes, PR resolution receipts, HTTP and browser checks of public URLs, screenshots and logs are retained under ignored `output/org-audit-2026-10-03/`. Source commits cannot contain their own final hashes. Read the CI run for the published revision before concluding that deployment completed.

The design-system repository now runs axe in its browser matrix and still documents phased adoption of typed lint, Stylelint, generated-HTML validation and Lighthouse presets. Its framework, content and browser checks do not certify full shared-preset adoption. Automated browser and axe checks in other projects are also partial evidence. Physical devices, screen readers, field performance, search indexing and independent SI-agent task trials are outside this maintenance verification and remain unverified.
