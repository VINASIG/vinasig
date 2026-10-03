# Toolchain selection

Versions were verified from the official npm registry on 3 October 2026. `toolchain-lock.json` records latest and selected releases, engines, peers, licenses and selection reasons. `package-lock.json` locks the actual dependency graph.

Node 24.21.0 LTS and npm 12.2.0 match the reviewed runtime used by the latest VINASIG tools. Astro 7.3.5, Lucide Astro 1.50.0 and Playwright 1.63.0 are selected stable compatible releases. TypeScript 6.0.3 is retained because latest stable 7.0.2 is outside the typed ESLint peer range. Node type declarations match runtime major 24 rather than latest major 26. No peer constraints are forced and no global installation is changed.

The site produces static HTML and CSS with no executable client JavaScript. Browser and quality packages are development tools. CSS handles the modest motion without adding a runtime framework.

CI actions are pinned to verified release commits. Dependabot proposes weekly npm and action updates without automatic merging. A new release must still pass the product's checks and a reviewed compatibility decision.

## Primary implementation references

- [Astro base configuration](https://docs.astro.build/en/reference/configuration-reference/#base) explains how BASE_URL can vary with trailingSlash. The layout normalizes its final slash explicitly.
- [GitHub Pages custom 404](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) requires a 404.html file in the publishing output.

Generated-HTML and actual-browser tests verify these paths in this consumer. Documentation by itself does not establish runtime behavior.
