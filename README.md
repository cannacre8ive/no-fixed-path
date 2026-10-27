# No Fixed Path

A photographic field journal by **Spencer Gray**: cannabis, live music, open air, and the confidence to follow a creative path.

**Live edition:** https://no-fixed-path.vercel.app/

Vercel is connected to this GitHub repository. Pushes to `main` deploy the production site automatically.

Version 2 is a 48-page zine with 47 unique photographs: 30 cannabis, nine concert and eight nature photographs. This revision includes two Dijon images and two Allan Rayman images selected from Spencer's archive. The personal narrative includes Spencer's own account of LSD helping him believe in himself and choose a creative life.

![Portfolio website](screenshots/desktop.png)

## Web edition

A static, responsive portfolio with a complete 48-page reader, chapter jumps, keyboard navigation, accessible page selection and a downloadable reader PDF. The site includes a curated 1200 × 630 social image, Open Graph and Twitter metadata, a canonical production URL, sitemap and favicon. It has no analytics, tracking, external fonts or build dependencies.

## Companion editions

The home page now includes a companion bookshelf below the original reader. No Fixed Path's designed pages, PDF, selected photographs, chapter jumps, reader script and social image are unchanged.

| Book | Subject | Reading URL |
| --- | --- | --- |
| Afterimage v2 | Live music, including six Behance selections | https://no-fixed-path.vercel.app/zines/afterimage-v2 |
| Living Structure | Cannabis photography | https://no-fixed-path.vercel.app/zines/living-structure |
| A Slower Measure | Nature and the Mt. Hood archive | https://no-fixed-path.vercel.app/zines/a-slower-measure |
| Interior Weather | Existing digital art and Midjourney explorations | https://no-fixed-path.vercel.app/zines/interior-weather |
| The Only Place That Felt Like Home | Cabin journal, 48 pages | https://no-fixed-path.vercel.app/zines/the-only-place |
| Afterimage, first edition | The preserved original concert companion | https://no-fixed-path.vercel.app/zines/afterimage |

Each companion has an accessible web reader, downloadable reading PDF, dedicated social preview and canonical URL. Reader links can retain a specific page, for example `/zines/afterimage-v2#page-9`. The copy-link control copies that public URL. Keyboard navigation supports left/right arrows and Home/End when the reader is focused. The first edition remains available from the revised Afterimage page and its home-page entry.

The companion additions use `companions.css`, `companion-reader.js`, and `zines/<edition>/`. Only optimized reading images, reading PDFs and public presentation metadata are published. The InDesign packages, print masters, full-size source images, source manifests, Photos records and printer quotes remain in the owner's separate local production folders.

Run locally with `python3 -m http.server 4175`, then open http://localhost:4175. Deploy as a static “Other” project on Vercel with the repository root as output. `vercel.json` records the configuration.

- `index.html`: narrative and selected photographs.
- `style.css`: responsive design.
- `reader.js`: page and chapter navigation.
- `assets/pages/`: optimized images of all 48 designed pages.
- `assets/gallery/`: display derivatives of selected photographs, with location metadata omitted.
- `assets/share.jpg`: curated social preview.
- `No-Fixed-Path-v2-Reader.pdf`: complete reading edition.

The editable InDesign package, full-resolution originals, private photo-source paths and printer quotations are preserved separately in the owner's local production package. The original v1 edition was retained unchanged. This repository is the public web edition, not a full-resolution production archive.

## Validation

The native v2 package passed 48-page, link, font, overset and effective-resolution checks (minimum 300 ppi). The print master is a sequential, single-page CMYK PDF/X-4 with 0.125-inch bleed; the linked reader PDF is trimmed to 5.5 × 8.5 inches with two-page-right display preference. The web edition was checked at desktop and 390-pixel mobile widths, including chapter/page navigation and PDF availability. Deployment evidence is recorded in the local handoff.

All companion reading PDFs are byte-identical to their approved local editions. The earlier companion readers each include 24 designed pages; the cabin journal includes 48. The original production packages and existing No Fixed Path web assets are checked against pre-change SHA-256 records. The companion pages are checked for local link targets, unique social metadata, image dimensions and script syntax before publication, followed by responsive browser checks and live deployment verification.

## Rights

All photography and personal narrative © Spencer Gray. See [RIGHTS.md](RIGHTS.md). The public availability of this repository is not a grant to reuse the photographs. Design and editorial assistance: Codex, as credited in the zine.

## The Only Place That Felt Like Home

The new 48-page cabin edition is an additional companion. It has its own reading page, exact reading-PDF download, chapter links and curated social image. The original No Fixed Path and previous companion readers are retained.

## Art & imagination

The additional `/art` collection features Night Logic (48 pages, 39 works) and links to the preserved Interior Weather edition. Night Logic uses existing Midjourney generations and digital design exports from Spencer's archive, with an editorial narrative adapted from his account of free association and psychedelic experiments. It has its own reader, reader PDF and curated share image at `/zines/night-logic`.

The homepage adds a navigation link and a separate art feature. Existing No Fixed Path sections, five companion entries, all prior readers, PDFs, page images, metadata and scripts remain unchanged. Native InDesign/IDML, print PDF, full-size source images and provenance records stay in the local production package. New public files contain reading derivatives only.
