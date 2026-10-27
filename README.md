# Megan Lancaster | Portfolio

Static portfolio site for Megan Lancaster, a Senior Learning Experience Designer, STEM Educator, and PMP-certified Project Manager.

Live site: https://mlankster16.github.io/portfolio/

The site shows four samples: two live courses I designed and managed at Duke (AI for Nurses and Let’s Talk Digital You), a live Coursera course with a reimagined, story-driven Week 2 (Space Medicine), and a playable Grade 6 math escape room (Light the Beacon). It also includes my résumé, a portfolio of the courses I’ve developed, and a short Q&A chat that answers common questions about my work. I designed the site and built it with Claude Design and Claude Code.

There is no framework, bundler, or package manager. Every page is plain HTML, CSS, and JavaScript, served as-is by GitHub Pages from the `main` branch. The only script you run is `tools/build.py`, which copies the shared header and footer into each page.

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
| `space-medicine.html`, `beacon-escape-room.html`, `ai-for-nurses.html`, `digital-you.html` | Sample pages |
| `choose-your-own-adventure.html` | Placeholder for Branching Biology, a concept in progress (unlisted) |
| `404.html` | Page shown by GitHub Pages for unknown URLs |
| `css/lagoon.css` | Shared base styles (page-specific styling is inline in each page) |
| `css/faq.css`, `js/faq.js`, `js/faq-data.js` | The Q&A chat widget and its content |
| `js/lagoon.js` | Shared behavior: nav menus, embed resizing, scroll highlighting, loads the chat |
| `js/lagoon-dc.js` | Small state helper for pages with interactions (tabs, toggles, simulators) |
| `js/dc-runtime.js` | Claude Design runtime used by the Light the Beacon game and the Space Medicine story in `assets/interactives/` |
| `assets/img/` | Images (WebP), grouped by page, plus `share-card.png` (the link-preview card used in the share tags) |
| `assets/fonts/` | Every font the site uses, self-hosted (no Google Fonts requests). See its README for the list and licenses |
| `assets/interactives/` | Self-contained interactive modules embedded in sample pages, including the Light the Beacon escape room |
| `assets/resume/` | Résumé PDF linked from the Résumé page |
| `partials/` | Shared header and footer markup (see "Shared header and footer") |
| `tools/build.py` | Copies the partials into every page |
| `tools/bump-version.py` | Cache-buster helper (see below) |
| `tools/check.py` | Repo health checks (see "Keeping the repo clean") |
| `.githooks/pre-push` | Optional pre-push hook that runs the checks |
| `sitemap.xml` | Page list for search engines |
| `.github/workflows/check.yml` | GitHub Action that runs `tools/check.py` on every push |

Note: `choose-your-own-adventure.html` is the Branching Biology page. The file name predates the project title and is kept so existing links keep working. Branching Biology is being rebuilt as a hands-on mobile case, so for now the page is a short "under construction" note. It isn’t linked from the site or listed in the sitemap.

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

Shared files are referenced with a version query string, for example `js/lagoon.js?v=57`. After you change a shared CSS or JS file, bump its version everywhere it is referenced:

```bash
python3 tools/bump-version.py js/lagoon.js
```

## Keeping the repo clean

`python3 tools/check.py` runs the repo health checks, and GitHub runs the same script on every push and pull request (`.github/workflows/check.yml`). It confirms that:

- the shared header and footer are up to date
- every JavaScript file parses
- no page has duplicate ids or an em dash
- role titles are capitalized (Senior Learning Experience Designer, Project Manager, and so on)
- every local link, image, script, stylesheet and font points at a file that exists
- each `?v=` cache-buster has one version everywhere
- no asset is over its size limit (250KB for images) and no asset is left unreferenced

To run the checks automatically before each push, enable the included hook once per clone:

```bash
git config core.hooksPath .githooks
```

Working conventions: make changes on a short-lived branch, merge into `main` with a fast-forward, delete the branch afterward, and keep generated or scratch files out of the repo (they belong in `.gitignore`).

## Conventions

- Plus Jakarta Sans (self-hosted, with a size-matched fallback so text does not jump when it loads)
- Palette: navy (`#13263A`) header and hero bands, deep teal (`#0F2E33`) text, seafoam details, coral (`#FF8A6B`) actions, and sun-yellow (`#FFD84A`) highlights
- One exception to self-hosting: the two Claude Design prototypes, the Light the Beacon game (`assets/interactives/light-the-beacon.html`) and the Space Medicine story (`assets/interactives/space-medicine-story.html`), load React and ReactDOM from unpkg.com through `js/dc-runtime.js`. Their fonts are self-hosted like the rest of the site
- Text contrast meets WCAG AA, and body text is at least 13px
- Pages must not scroll horizontally at phone widths
- Images are WebP, carry descriptive `alt` text, and below-the-fold images use `loading="lazy"`. The share card stays PNG because link previews do not reliably support WebP
- Writing style: plain, warm language and no em dashes

## Deploying

Push to `main`. GitHub Pages publishes the site from the repository root within a minute or two.

## License and content

All site content, writing, images, and code are © Megan Lancaster, all rights reserved. This repository is public for viewing, not for reuse. See [LICENSE](LICENSE).
