# VINASIG public domains

The owner selected **vinasig.io.vn** as VINASIG's primary domain on 4 October 2026. Existing repositories continue to build and deploy independently through GitHub Pages.

| Repository                                                            | Canonical website               |
| --------------------------------------------------------------------- | ------------------------------- |
| [vinasig](https://github.com/VINASIG/vinasig)                         | https://vinasig.io.vn/          |
| [web-design-system](https://github.com/VINASIG/web-design-system)     | https://design.vinasig.io.vn/   |
| [qr-generator](https://github.com/VINASIG/qr-generator)               | https://qr.vinasig.io.vn/       |
| [qr-scanner](https://github.com/VINASIG/qr-scanner)                   | https://scan.vinasig.io.vn/     |
| [totp-generator](https://github.com/VINASIG/totp-generator)           | https://totp.vinasig.io.vn/     |
| [bmi-calculator](https://github.com/VINASIG/bmi-calculator)           | https://bmi.vinasig.io.vn/      |
| [nvqs-bmi-calculator](https://github.com/VINASIG/nvqs-bmi-calculator) | https://nvqs-bmi.vinasig.io.vn/ |
| [favicon-forge](https://github.com/VINASIG/favicon-forge)             | https://favicon.vinasig.io.vn/  |
| [unphar](https://github.com/VINASIG/unphar)                           | https://unphar.vinasig.io.vn/   |

The "www.vinasig.io.vn" hostname redirects to the primary apex. BMI, QR Scanner and TOTP Generator use Vietnamese at the root and English at "/en/" on their respective domains. Other tools use English at the root and Vietnamese at "/vi/". Design-system guides retain their existing route paths. Source links remain on github.com.

## DNS and ownership

The apex uses GitHub's four A and four AAAA records. Every listed subdomain and www has a DNS-only CNAME to vinasig.github.io. There is no wildcard record. The pre-existing organization verification TXT is retained. Permanent TXT records also verify GitHub Pages ownership and the Google Search Console Domain property.

## Maintenance

Keep the repository Pages custom-domain settings, build origins and root bases, repository details, package homepages, canonical/social/structured metadata, sitemaps, robots, translations and cross-project links consistent. Do not replace GitHub source links with a website URL. Preserve old URLs in dated historical audits and source provenance.

[Domain operations](DOMAIN.md) records certificate, search and verification requirements. Submission to Search Console does not guarantee immediate indexing or search ranking.
