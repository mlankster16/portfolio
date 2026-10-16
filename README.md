# Megan Lancaster | Portfolio

Static portfolio site for Megan Lancaster, a Senior Learning Experience Designer, STEM Educator, and PMP-certified Project Manager.

Live site: https://mlankster16.github.io/portfolio/

There is no build step, framework, or package manager. Every page is plain HTML, CSS, and JavaScript, served as-is by GitHub Pages from the `main` branch.

## Run it locally

```bash
python3 -m http.server 8744
```

Then open http://localhost:8744. Any static file server works.

## What's in the repo

| Path | What it is |
| --- | --- |
| `index.html` | Home page with the filterable sample grid |
| `about.html`, `resume.html`, `course-portfolio.html`, `project-management.html` | Main pages |
| `space-medicine.html`, `choose-your-own-adventure.html`, `beacon-escape-room.html`, `drone-inspection-training.html`, `ai-for-nurses.html`, `digital-you.html` | Sample pages |
| `admin-certification.html` | Kept but intentionally unlinked and set to `noindex` |
| `404.html` | Page shown by GitHub Pages for unknown URLs |
| `css/lagoon.css` | Shared base styles (page-specific styling is inline in each page) |
| `css/faq.css`, `js/faq.js`, `js/faq-data.js` | The Q&A chat widget and its content |
| `js/lagoon.js` | Shared behavior: nav menus, embed resizing, scroll highlighting, loads the chat |
| `js/lagoon-dc.js` | Small state helper for pages with interactions (tabs, toggles, simulators) |
| `js/rethink-data.js` | Content for the walkthrough on the Branching Biology page |
| `assets/img/` | Images (WebP), grouped by page, plus `share-card.png` (the link-preview card used in the share tags) |
| `assets/fonts/` | Plus Jakarta Sans, self-hosted (no Google Fonts request) |
| `assets/interactives/` | Self-contained interactive modules embedded in sample pages |
| `assets/resume/` | Résumé PDF linked from the Résumé page |
| `partials/` | Shared header and footer markup (see "Shared header and footer") |
| `tools/build.py` | Copies the partials into every page |
| `tools/bump-version.py` | Cache-buster helper (see below) |
| `sitemap.xml` | Page list for search engines |
| `.github/workflows/check.yml` | GitHub Action that checks every push (see "Checks") |

Note: `choose-your-own-adventure.html` is the Branching Biology page. The file name predates the project title and is kept so existing links keep working.

## Shared header and footer

The header and footer live in `partials/header.html` and `partials/footer.html`, and their styles are in `css/lagoon.css`. Each page holds a generated copy between `<!-- build:header -->` and `<!-- build:footer -->` marker comments, so the pages stay plain static HTML that works without JavaScript. To change the nav or footer, edit the partial and run:

```bash
python3 tools/build.py
```

The script marks the current page in the nav automatically. `python3 tools/build.py --check` exits with an error if any page is out of date. Commit the regenerated pages along with the partial.

## How the interactive pages work

Pages with interactions define a `Component` class with `state` and `renderVals()`, then call `DCMount(Component)`. The markup uses `data-*` attributes (`data-if`, `data-text`, `data-click`, `data-for`, and so on) to bind to that state. The full list of attributes is documented at the top of `js/lagoon-dc.js`.

## Editing the Q&A chat

The "Ask a question" button appears on every page, but the answers and chat script (about 95KB) load only when a visitor hovers, focuses, touches, or clicks it. All questions and answers live in `js/faq-data.js`. The matcher in `js/faq.js` scores what a visitor types against each item's `phrases` and `keys`. It makes no network calls, stores nothing, and uses no AI. The comment at the top of `faq-data.js` describes each field.

## Cache-busting

Shared files are referenced with a version query string, for example `js/lagoon.js?v=38`. After you change a shared CSS or JS file, bump its version everywhere it is referenced:

```bash
python3 tools/bump-version.py js/lagoon.js
```

## Checks

`.github/workflows/check.yml` runs on every push and pull request. It confirms the shared header and footer are up to date (`tools/build.py --check`), that every JavaScript file parses, and that no page has duplicate ids or an em dash. Run the same checks locally with `python3 tools/build.py --check` and `node --check js/*.js`.

## Conventions

- Plus Jakarta Sans (self-hosted, with a size-matched fallback so text does not jump when it loads), with a teal, seafoam, and sun-yellow palette
- Text contrast meets WCAG AA, and body text is at least 13px
- Pages must not scroll horizontally at phone widths
- Images are WebP, carry descriptive `alt` text, and below-the-fold images use `loading="lazy"`. The share card stays PNG because link previews do not reliably support WebP
- Writing style: plain, warm language and no em dashes

## Deploying

Push to `main`. GitHub Pages publishes the site from the repository root within a minute or two.

## License and content

All site content, writing, images, and code are © Megan Lancaster, all rights reserved. This repository is public for viewing, not for reuse. See [LICENSE](LICENSE).
