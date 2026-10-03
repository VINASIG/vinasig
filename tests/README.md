# Browser verification

Build first. The test suite starts a static production server on an automatically allocated localhost port. CI requires Chromium, Firefox and WebKit and rejects a subset selection. There are no retries or disabled tests.

The homepage matrix covers 320x800, 360x800, 390x844, 440x800, 600x800, 759x1024, 760x1024, 761x1024, 768x1024, 900x800, 1023x768, 1024x768, 1439x900 and 1440x900 in both themes at 100 and 200 percent root text. Every case scrolls the full page, captures idle and expanded disclosures, checks bounds/computed styles, actual font/image loading and axe results.

The custom 404 checks the five standard sizes and 320 px in both themes, enlarging text at 320 px. Other tasks check no-script content, all exact destination links, storage/network privacy, native disclosure keyboard/touch behavior, skip activation, long unbroken synthetic content, reduced motion and metadata.

Firefox's Playwright context does not support isMobile emulation. Its touch task uses the same viewport and hasTouch with isMobile false. This is a browser task, not a claim of a real phone. On Windows WebKit, normal Tab can follow the platform's default focus traversal instead of visiting links. The skip activation test uses explicit DOM focus before Enter on that platform and does not certify native Tab traversal there. Chromium/Firefox and non-Windows WebKit check the initial Tab path.

For a locally unavailable engine, record the exact launch failure and run the available engines. CI still requires all three before deployment:

```sh
# PowerShell example
$env:BROWSER_ENGINES='chromium,webkit'
npx --yes npm@12.2.0 run test:browser
```

Optional RESPONSIVE_PHASE names a capture run. Immutable initial captures use before or probe. Final captures use after. Screenshots are evidence rather than automatically approved visual baselines. Open images before accepting a visible result. Long-content mutations are test fixtures, not shipped project text.

Source inventory tests, generated-HTML validation and fixed role/name tests supplement human visual inspection. Physical devices, screen readers and independent SI-agent sessions need separate evidence. No test sends email, signs in or submits real data.
