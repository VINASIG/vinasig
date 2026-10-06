# VINASIG

The public VINASIG website for discovering practical tools and the shared resources behind our projects.

- [Visit VINASIG](https://vinasig.io.vn/)
- [Explore the organization](https://github.com/VINASIG)

## What is here

The homepage introduces BMI Calculator, QR Generator, QR Scanner, TOTP Generator, Metadata Cleaner, Metadata Reader, Favicon Forge and Unphar. Each tool has separate website and source links. The metadata tools remove optional image metadata without re-encoding and inspect supported file metadata locally. The foundations section points to Agent Standards, Web Design System, Brand Assets and Organization Directory.

Search tools by name or task as you type. English and Vietnamese terms work in either locale, including Vietnamese without accents. Results use six tools per page, with numbered navigation when more than one page is needed. The search and page can be bookmarked through `q` and `page` URL parameters. Clearing the search restores the complete catalog.

The website is generated with Astro and TypeScript. Its content, navigation and native disclosures work without browser JavaScript. Without scripts, every tool remains listed and enhancement controls stay hidden. Fonts and artwork are served locally. There are no accounts, submission forms, analytics or cookies. Only an explicit light or dark preference is saved in local storage. Search filtering needs no server request or storage. Search terms in a bookmarked or reloaded URL can be included in ordinary hosting requests. Following a project or repository link opens that destination, which has its own hosting behavior.

VINASIG builds software and technology with Super Intelligence agents. SI is our preferred terminology, not a claim of an official industry renaming or a capability certification.

## Develop

Use Node 24.21.0 and npm 12.2.0. Read the URL printed by Astro rather than assuming a port. The site uses the origin-root `/` deployment base.

```sh
npx --yes npm@12.2.0 ci
npx --yes npm@12.2.0 run dev
```

Check and build:

```sh
npx --yes npm@12.2.0 run check
npx --yes npm@12.2.0 test
npx --yes npm@12.2.0 run build
npx --yes npm@12.2.0 exec playwright -- install chromium firefox webkit
npx --yes npm@12.2.0 run test:browser
npx --yes npm@12.2.0 run test:performance
```

`check` runs strict Astro/TypeScript diagnostics, typed ESLint, Stylelint, formatting and standards integrity. `build` also validates generated HTML, metadata, project links, deployment paths and preserved asset bytes. Browser tests use an automatically allocated production-preview port, exercise real roles and disclosures, and retain responsive screenshots. Lighthouse measurements are local lab results.

See [the browser test guide](tests/README.md), [toolchain decisions](docs/TOOLCHAIN.md) and [the product brief](docs/PRODUCT.md).

## Maintain the project inventory

Update `src/data/projects.ts` after reviewing the actual public repository, deployed destination and supported behavior. Add useful English and Vietnamese task aliases to `searchTerms` with each tool. The same inventory generates the cards, search index, pagination and structured data. Keep tools and foundation resources distinct. Do not turn private, archived, missing or unverified repositories into public website entries. The website does not fetch organization metadata at runtime, expose access tokens or depend on GitHub API quotas. See [tool catalog maintenance](docs/TOOL_CATALOG.md).

## Publication

[GitHub Actions](https://github.com/VINASIG/vinasig/actions/workflows/deploy.yml) verifies the exact commit in six isolated Linux/Windows and Chromium/Firefox/WebKit jobs. Deployment waits for all six. The Linux Chromium job packages the checked static output for GitHub Pages. A workflow definition alone does not establish a successful run.

The canonical website is `https://vinasig.io.vn/`. The repository Pages custom domain is `vinasig.io.vn`. GitHub Pages uses the generated `404.html` for unknown paths. Source references and post-commit publication evidence are recorded separately.

## Standards and rights

[AGENTS.md](AGENTS.md) contains this project's operating guide and an actual pinned import of VINASIG SI agent standards. [Standards integration](docs/STANDARDS.md) records the source and verification boundary. This website explicitly adopts the design system's Bright Playful Minimalism proposal for this brief.

Space Grotesk retains its SIL OFL notice. Lucide retains its ISC notice. VINASIG artwork is copied without alteration and follows [the separate brand policy](BRAND_POLICY.md). Authored software uses AGPL-3.0-or-later and documentation uses CC-BY-SA-4.0. The npm package remains private and unpublished. See [brand adoption](docs/BRAND.md) and [the material map](LICENSES.md).

For contributions and sensitive findings, read [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).

## Canonical domain

The public site uses [vinasig.io.vn](https://vinasig.io.vn/) at the origin root. GitHub Pages remains the deployment service. [Domain maintenance](docs/DOMAIN.md) records DNS, HTTPS, search submission and verification boundaries.

## License scopes

VINASIG-authored software uses **AGPL-3.0-or-later**. Authored documentation uses **CC-BY-SA-4.0**. Commercial use is allowed under those standard licenses. Fonts and third-party components retain their original terms. Official VINASIG identity assets follow the separate brand policy.

Read [LICENSE](LICENSE), [LICENSES.md](LICENSES.md), [VINASIG Brand Usage Policy](BRAND_POLICY.md) and [the licensing review](docs/audits/licensing-2026-10-04.md) for exact scopes, rationale and remaining review.

## Languages and appearance

English `/` and Vietnamese `/vi/` provide the same features with localized navigation, guidance and accessible controls. Use the compact EN or VI link and adjacent theme button. Only an explicit appearance preference is stored. Inputs and files remain local and unsaved. See [localization maintenance](docs/LOCALIZATION.md).
