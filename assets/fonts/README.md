# Fonts

Every font on the site is served from this repo instead of Google Fonts, so pages make no third-party requests for text. Each file holds the Latin character set as a WOFF2 file.

| File | Font | Used by |
| --- | --- | --- |
| `plus-jakarta-sans-latin.woff2`, `plus-jakarta-sans-latin-ext.woff2` | Plus Jakarta Sans (variable, 200 to 800) | Every page and the 404 page. The `-ext` file loads only if a page uses Latin extended characters |
| `young-serif-latin.woff2` | Young Serif (400) | Light the Beacon game |
| `unbounded-latin.woff2` | Unbounded (variable, 500 to 700) | Space Medicine story headings |
| `figtree-latin.woff2` | Figtree (variable, 400 to 700) | Space Medicine story text |
| `space-grotesk-latin.woff2` | Space Grotesk (variable, 400 to 700) | Space Medicine story base text |
| `newsreader-italic-latin.woff2` | Newsreader Italic (400) | Logbook quotes in the Space Medicine story |
| `source-serif-4-latin.woff2` | Source Serif 4 (variable, 400 to 600) | AI for Nurses interactive examples |
| `source-sans-3-latin.woff2` | Source Sans 3 (variable, 400 to 700) | AI for Nurses interactive examples |

The `@font-face` rules for Plus Jakarta Sans are in `css/lagoon.css`. The interactives in `assets/interactives/` and `404.html` declare their own.

All of these fonts are licensed under the SIL Open Font License, Version 1.1 (https://openfontlicense.org), and are © their respective authors:

- Plus Jakarta Sans: The Plus Jakarta Sans Project Authors (https://github.com/tokotype/PlusJakartaSans)
- Young Serif: The Young Serif Project Authors (https://github.com/noirblancrouge/YoungSerif)
- Unbounded: The Unbounded Project Authors (https://github.com/googlefonts/unbounded)
- Figtree: The Figtree Project Authors (https://github.com/erikdkennedy/figtree)
- Space Grotesk: The Space Grotesk Project Authors (https://github.com/floriankarsten/space-grotesk)
- Newsreader: The Newsreader Project Authors (https://github.com/productiontype/Newsreader)
- Source Serif 4 and Source Sans 3: Adobe (http://www.adobe.com/), with Reserved Font Name "Source"
