# Standards integration

The website imports the `web-typescript` profile from VINASIG/agent-standards version 0.1.0 at commit `3dc9486b3cba4d7d7c4375fa145d73e53b6137a2`.

The reviewed offline bundle digest is `eb0d35d45c774fa157fc64763f8bd235d5a7b7ed8c860819c1ce524d76c6d939`. Its dry-run paths and instruction block were reviewed before the installer was applied. The provenance file pins the bundle and manifest digests. The integrity gate checks the marked AGENTS.md block and all 47 managed payloads. Seven namespaced skills are installed locally.

Source enforcement uses Astro's strictest TypeScript profile with declaration checking, typed ESLint with zero warnings, Astro's parser, Stylelint on actual CSS, one formatter and validation of generated HTML. Consumer adaptation is explicit and does not modify the immutable snapshot. The formatter ignores managed snapshot files, artwork, fonts and the instruction entrypoint.

No global Codex settings or MCP configuration are changed. Structural doctor and checks cannot establish fresh Codex skill discovery or independent agent usability. Those outcomes remain NOT_RUN. Deterministic role/name browser tasks provide a narrower regression check.

## Interface rules approved on 3 October 2026

The owner requested this standards update across VINASIG. LANG-004 requires natural punctuation, sentence case and custom list markers in authored interfaces. LANG-005 requires ordinary-reader language and limits parenthetical labels. Required code, URLs, times, regulatory identifiers, official names and user input retain their correct syntax.

WEB-008 requires matching closed and opened dropdown, calendar, color and slider controls. Operating-system popups do not satisfy the requirement. The snapshot includes `templates/web/interface.mjs` for rendered-copy and control regressions. Consumer tests exercise real routes and dynamic states. Visual, keyboard and ordinary-language review remain necessary.

## Header rules approved on 4 October 2026

The owner approved original transparent horizontal logos selected for the actual header surface under WEB-001. Keep the source asset bytes, proportions and internal artwork. Avoid white panels, padded or rounded cards and artwork effects. Maintain the accessible logo link and its usable target independently of image size.

This reviewed snapshot adds `inspectHeaderBrand` to `templates/web/interface.mjs`. The consumer browser regressions check the real header alongside rendered copy. Asset integrity, screenshot review and script-unavailable states remain separate checks.

## Licensing adopted on 4 October 2026

The reviewed snapshot includes the licensing policy, LIC-001 through LIC-004, full GPL/CC texts, material map, brand policy, review template and license checker. It retains its own software/prose grants rather than setting this project's primary license. The owner separately selected this project's scopes in LICENSES.md. Use npm run check:licenses for source metadata/text verification. Web builds also verify published legal text and source notices. Original assets and existing gates remain required.
