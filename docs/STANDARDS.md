# Standards integration

The website imports the `web-typescript` profile from VINASIG/agent-standards version 0.1.0 at commit `76901601b193c963b849b253d11f51363b447ffe`.

The reviewed offline bundle digest is `bb555aad2e5c66da8ba2cdd5530446ca95c1235bb28706cb82066222adcb61f1`. Its dry-run paths and instruction block were reviewed before the installer was applied. The provenance file pins the bundle and manifest digests. The integrity gate checks the marked AGENTS.md block and all 38 managed payloads. Seven namespaced skills are installed locally.

Source enforcement uses Astro's strictest TypeScript profile with declaration checking, typed ESLint with zero warnings, Astro's parser, Stylelint on actual CSS, one formatter and validation of generated HTML. Consumer adaptation is explicit and does not modify the immutable snapshot. The formatter ignores managed snapshot files, artwork, fonts and the instruction entrypoint.

No global Codex settings or MCP configuration are changed. Structural doctor and checks cannot establish fresh Codex skill discovery or independent agent usability. Those outcomes remain NOT_RUN. Deterministic role/name browser tasks provide a narrower regression check.

## Interface rules approved on 3 October 2026

The owner requested this standards update across VINASIG. LANG-004 requires natural punctuation, sentence case and custom list markers in authored interfaces. LANG-005 requires ordinary-reader language and limits parenthetical labels. Required code, URLs, times, regulatory identifiers, official names and user input retain their correct syntax.

WEB-008 requires matching closed and opened dropdown, calendar, color and slider controls. Operating-system popups do not satisfy the requirement. The snapshot includes `templates/web/interface.mjs` for rendered-copy and control regressions. Consumer tests exercise real routes and dynamic states. Visual, keyboard and ordinary-language review remain necessary.
