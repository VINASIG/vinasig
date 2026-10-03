# VINASIG

The public VINASIG website for discovering practical tools and the shared resources behind our projects.

- [Visit VINASIG](https://vinasig.github.io/vinasig/)
- [Explore the organization](https://github.com/VINASIG)

## What is here

The homepage introduces BMI Calculator, QR Generator, Favicon Forge and Unphar. Each tool has separate website and source links. The foundations section points to Agent Standards, Web Design System, Brand Assets and Organization Directory.

The website is generated with Astro and TypeScript. Its content, navigation and native disclosures work without browser JavaScript. Fonts and artwork are served locally. There are no accounts, forms, analytics, cookies or browser storage in this application. Following a project or repository link opens that destination, which has its own hosting behavior.

VINASIG builds software and technology with Super Intelligence agents. SI is our preferred terminology, not a claim of an official industry renaming or a capability certification.

## Develop

Use Node 24.21.0 and npm 12.2.0. Read the URL printed by Astro rather than assuming a port. The project site uses the `/vinasig/` deployment base.

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

Update `src/data/projects.ts` after reviewing the actual public repository, deployed destination and supported behavior. Keep tools and foundation resources distinct. Do not turn private, archived, missing or unverified repositories into public website entries. The website does not fetch organization metadata at runtime, expose access tokens or depend on GitHub API quotas.

## Publication

[GitHub Actions](https://github.com/VINASIG/vinasig/actions/workflows/deploy.yml) verifies the exact commit on Linux and Windows with Chromium, Firefox and WebKit. Deployment waits for both jobs. The Linux job packages the checked static output and deploys it to GitHub Pages. A workflow definition alone does not establish a successful run.

The canonical website is `https://vinasig.github.io/vinasig/`. A custom domain is not configured. GitHub Pages uses the generated `404.html` for unknown paths. Source references and post-commit publication evidence are recorded separately.

## Standards and rights

[AGENTS.md](AGENTS.md) contains this project's operating guide and an actual pinned import of VINASIG SI agent standards. [Standards integration](docs/STANDARDS.md) records the source and verification boundary. This website explicitly adopts the design system's Bright Playful Minimalism proposal for this brief.

Space Grotesk retains its SIL OFL notice. Lucide retains its ISC notice. VINASIG artwork is copied without alteration from the supplied assets. Public visibility does not add a general source or artwork license. The npm package is private and is not published. See [brand adoption](docs/BRAND.md) and [license status](LICENSE_STATUS.md).

For contributions and sensitive findings, read [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).
