# Standards integration

The website imports the `web-typescript` profile from VINASIG/agent-standards version 0.1.0 at commit `7c699d1dccd05c1dd2c4f0de4bb3abae23174ccd`.

The reviewed offline bundle digest is `bd59e07ba80969e9e5b6788a9438e81ba14a6e22ce121e6ef192ef89f54cd07f`. Its dry-run paths and instruction block were reviewed before the installer was applied. The provenance file pins the bundle and manifest digests. The integrity gate checks the marked AGENTS.md block and all 38 managed payloads. Seven namespaced skills are installed locally.

Source enforcement uses Astro's strictest TypeScript profile with declaration checking, typed ESLint with zero warnings, Astro's parser, Stylelint on actual CSS, one formatter and validation of generated HTML. Consumer adaptation is explicit and does not modify the immutable snapshot. The formatter ignores managed snapshot files, artwork, fonts and the instruction entrypoint.

No global Codex settings or MCP configuration are changed. Structural doctor and checks cannot establish fresh Codex skill discovery or independent agent usability. Those outcomes remain NOT_RUN. Deterministic role/name browser tasks provide a narrower regression check.

## Interface rules approved on 3 October 2026

The owner requested this standards update across VINASIG. LANG-004 requires natural punctuation, sentence case and custom list markers in authored interfaces. LANG-005 requires ordinary-reader language and limits parenthetical labels. Required code, URLs, times, regulatory identifiers, official names and user input retain their correct syntax.

WEB-008 requires matching closed and opened dropdown, calendar, color and slider controls. Operating-system popups do not satisfy the requirement. The snapshot includes `templates/web/interface.mjs` for rendered-copy and control regressions. Consumer tests exercise real routes and dynamic states. Visual, keyboard and ordinary-language review remain necessary.

## Header rules approved on 4 October 2026

The owner approved original transparent horizontal logos selected for the actual header surface under WEB-001. Keep the source asset bytes, proportions and internal artwork. Avoid white panels, padded or rounded cards and artwork effects. Maintain the accessible logo link and its usable target independently of image size.

This reviewed snapshot adds `inspectHeaderBrand` to `templates/web/interface.mjs`. The consumer browser regressions check the real header alongside rendered copy. Asset integrity, screenshot review and script-unavailable states remain separate checks.
