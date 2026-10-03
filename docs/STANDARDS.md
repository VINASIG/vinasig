# Standards integration

The website imports the `web-typescript` profile from VINASIG/agent-standards version 0.1.0 at commit `c9d33c73a89edaf1773fa4d31f1c7258e549b7b1`.

The reviewed offline bundle digest is `ad5dcbe4601a9a3668d3433330a582e6d780b8f2527e1dcc8cfbb93f8f264870`. Its dry-run paths and instruction block were reviewed before the installer was applied. The provenance file pins the bundle and manifest digests. The integrity gate checks the marked AGENTS.md block and all 37 managed payloads. Seven namespaced skills are installed locally.

Source enforcement uses Astro's strictest TypeScript profile with declaration checking, typed ESLint with zero warnings, Astro's parser, Stylelint on actual CSS, one formatter and validation of generated HTML. Consumer adaptation is explicit and does not modify the immutable snapshot. The formatter ignores managed snapshot files, artwork, fonts and the instruction entrypoint.

No global Codex settings or MCP configuration are changed. Structural doctor and checks cannot establish fresh Codex skill discovery or independent agent usability. Those outcomes remain NOT_RUN. Deterministic role/name browser tasks provide a narrower regression check.
