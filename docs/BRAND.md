# Brand adoption

This website adopts the web design system's Bright Playful Minimalism proposal for the owner's current brief. The status of draft guidance for other products is unchanged.

- Design system source is VINASIG/web-design-system at `7ca081e190a7baa3682edf4d1d12ec6485332349`.
- Brand asset source is VINASIG/vinasig-brand-assets at `673d1392d5d78e87323ca91eac480e25b57210a9`.
- The reviewed semantic-token adoption is reused from the BMI tool, retaining all five identity anchors. Interface colors use those semantic roles in both system themes.
- Selected logo, mark and 16/32/48 px favicon exports are byte-preserved. The social image is the supplied 1080 px contained mark export, copied without edits. `asset-manifest.json` records all nine asset digests.
- Space Grotesk is local. The original TTF and OFL are preserved. The existing full-glyph WOFF2 container preserves the 968 glyphs, Vietnamese coverage, shaping tables and 300-700 weight axis. It is reused without additional subsetting or edits.
- Lucide supplies only used interface icons at build time. Decorative icons are hidden from the accessibility tree. This site uses text for GitHub links and needs no third-party brand mark, so Simple Icons is not a dependency.
- Site header, card and native disclosure guidance was read in the element catalog and specimens. A rendered card capture from the pinned design-system audit was inspected before implementation.

Quiet CSS transitions clarify hover and disclosure direction. Primary content is visible immediately. Reduced motion removes transitions, and touch controls do not depend on hover. No animation runtime or decorative reveal is needed.

Supplied artwork is not redrawn or relicensed. Keep asset and third-party notice verification separate from UI judgment.
