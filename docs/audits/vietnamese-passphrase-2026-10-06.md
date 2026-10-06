# Vietnamese Passphrase resource publication

Observation date 6 October 2026. The new public repository provides wordlists, provenance, a reproducible data pipeline and a local reference generator. It is a research preview. Its repository homepage is the README and it has no deployed generator website.

Add the project to the shared foundations inventory with the same outcome and preview status in English and Vietnamese. Preserve its official name in both languages. Existing templates render the entry and its native repository link. No layout, runtime dependency, browser tool or domain is added.

## Local observations

| Check                                                   | Status  | Evidence                                                                                                                                                                                 |
| ------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source, types, lint, formatting, standards and licenses | PASS    | npm run check                                                                                                                                                                            |
| Public inventory tests                                  | PASS    | 48 tests, including the new repository reference and five distinct foundations                                                                                                           |
| Built HTML, metadata, preserved assets and licenses     | PASS    | npm run build                                                                                                                                                                            |
| Browser flows and responsive matrix                     | PASS    | 202 Chromium/WebKit cases passed in the full run. The two localization coverage failures were corrected and both affected preference cases passed in a targeted rerun                    |
| New resource copy coverage                              | PASS    | The official project name has an explicit same-name translation. The outcome description is translated. No coverage check or assertion was relaxed                                       |
| Resource layout and native destination                  | PASS    | 24 locale/theme/viewport states at 320, 360, 390, 768, 1024 and 1440 px, plus enlarged 320 px captures. Five standard-width screenshots and enlarged Vietnamese content were opened      |
| Shared chrome and controls                              | PASS    | Existing Chromium/WebKit chrome and interface checks retained                                                                                                                            |
| Lab performance                                         | PASS    | Unchanged budgets passed for three mobile and three desktop runs in each locale. Median LCP about 1.654 s mobile and 0.403 s desktop, CLS 0 and TBT 0                                    |
| Local Firefox                                           | NOT_RUN | The installed executable failed to spawn in the separate library smoke check. No local Firefox result is claimed. Remote publication still requires the unchanged six-job browser matrix |
| Related organization profile                            | PASS    | English and Vietnamese rows pushed at b33f61fcacd12a5a25108d2ec1b71b6392739c1a. Actual GitHub-rendered rows, text and destination inspected                                              |
| Physical devices, screen readers and field metrics      | NOT_RUN | Browser emulation and lab performance do not establish these results                                                                                                                     |
| Exact-commit website CI, deployment and live content    | NOT_RUN | Pending execution after this source observation. Record actual results separately                                                                                                        |

Immutable before captures are under ignored output/responsive/passphrase-before. Full browser captures use the passphrase-after phase. Focused resource captures and measurements are under output/responsive/passphrase-resource-after. Local logs retain the initial localization failure and corrected preference rerun.

The first local Lighthouse attempt stopped when a desktop run returned missing numeric metrics. Its completed reports and failure log were retained. A rerun after the browser jobs finished passed all twelve measurements with the original budgets. The cause of the missing metrics was not established and no performance assertion was weakened.

Repository details for the new source project were read back from GitHub. Its description, README homepage, eight topics and public visibility match the published scope. The final project release and later public observations belong to that repository's publication record.
