# jaskiratoberoi.com, v5 "Zero handoff"

The portfolio is built as its own design file. Every section is a frame on a
canvas, and the page can be inspected, measured and re-themed from inside itself.

- **The seam (hero).** One headline, two layers. Left of the seam is the
  rendered design; right of it is the same type as its spec, with baseline,
  cap-height, glyph boxes and CSS values measured live from the real glyphs.
  Follows the mouse, drags on touch, and works with arrow keys.
- **Inspect mode.** Press `I` (or the Inspect button) and hover anything:
  real box size, spacing to its parent, font, and colour tokens, read from
  the live DOM. `Esc` exits.
- **Rulers.** Design-tool rulers track the pointer and highlight the
  inspected element (desktop, fine pointer only).
- **Page tokens.** The Expertise section has a panel that edits the page's
  actual tokens (accent, radius, display width, spacing) and exports the CSS.
- **Version history.** Career as a Gantt chart with a scrubbable playhead.
- **Comments.** Recommendations pinned like design-review comments.

## Stack

Plain HTML, CSS and ES modules, bundled by Vite. No framework and no runtime
dependencies. About 12 KB of JS and 9 KB of CSS (gzipped), plus images and
two self-hosted variable fonts.

```
index.html              all content (static, indexable)
src/main.js             entry, wires up the modules
src/styles/tokens.css   design tokens + @font-face  <- start here
src/styles/main.css     layout and components
src/js/*.js             one module per interaction
src/assets/work/        optimised WebP project images
src/assets/fonts/       Archivo + Martian Mono (SIL OFL), latin subset
```

## Run it

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # outputs dist/
npm run preview   # serves dist/ on http://localhost:4173
```

## Adjusting tokens

Everything visual derives from custom properties in `src/styles/tokens.css`.

| Token | What it controls |
| --- | --- |
| `--canvas`, `--paper`, `--tint` | page ground, frame surfaces, quiet fills |
| `--ink`, `--graphite` | primary and secondary text |
| `--line`, `--line-strong` | hairlines and borders |
| `--accent-light`, `--accent-dark` | the one accent ("redline"), per theme |
| `--danger` | form errors (kept separate from the accent) |
| `--radius` | corners of controls, cards and inputs. Frames stay square |
| `--display-wdth` | Archivo width axis for headlines, 62 (condensed) to 125 (expanded) |
| `--density` | multiplies the `--s1` to `--s9` spacing scale |

- The light palette lives on `:root`. The dark palette is defined twice with
  the same values: once for `prefers-color-scheme: dark` and once for
  `[data-theme="dark"]`, so the theme toggle wins in both directions. Change
  both blocks together.
- Accent presets are the `[data-accent="…"]` rules. To add one, add a rule
  there and a matching entry in `ACCENTS` in `src/js/tuner.js`.
- The fastest way to explore is the Page tokens panel on the live page. Tune
  it, press **Copy CSS**, and paste the values into `tokens.css`.
- If you change the headline font or weight, update the width formula in
  `.seam-stage` (`main.css`). It estimates the headline size before fonts
  load so the hero never shifts. The script corrects it if it's off by more
  than 1.5%.

## Content

All copy lives in `index.html`. The career timeline data is in
`src/js/timeline.js` and the recommendation quotes are in `src/js/comments.js`.
New project images: export a WebP at 560, 800 and 1400 px wide (for example
with `cwebp -q 78 -resize 800 0 in.png -o out-800.webp`) and add them to the
card's `srcset`.

## Deploy

jaskiratoberoi.com is hosted on Hostinger, which serves the static files on
the `hostinger-deploy` branch through hPanel's Git integration.

Deploys are automatic. `.github/workflows/publish.yml` runs on every push to
`master` or `redesign-v5` (or manually from the Actions tab). It:

1. installs dependencies and runs `npm run build`,
2. publishes `dist/` to the `hostinger-deploy` branch,
3. checks that jaskiratoberoi.com is serving the new build.

If step 3 warns, Hostinger's auto-deploy is probably off. Open hPanel, go to
Advanced > Git, and press Deploy for the `hostinger-deploy` branch.

`dist/` uses relative asset paths, so the same build also works on any other
static host (Netlify, Vercel, Cloudflare Pages, S3).

## Quality checks

Lighthouse on the production build (local preview):

| Profile | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Mobile | 98 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Motion respects `prefers-reduced-motion`. Add `?static` to the URL to render
everything at its final state (handy for screenshots).
