# CLAUDE.md — memory for this repo

Nissan Dutta's personal/professional site. Jekyll, built natively by GitHub Pages
(no Actions, no Node, no theme gem). Structure modelled on al-folio academic sites
(about + news + projects + publications + CV), design hand-built.

## Where content lives (edit these, not the templates)

| What | File |
| --- | --- |
| Name, tagline, bio, email, social links, portrait path | `_data/profile.yml` |
| News / activity feed (newest first) | `_data/news.yml` |
| Experience, education, awards, skills | `_data/cv.yml` |
| Publications | `_data/publications.yml` |
| Projects (one file each) | `_projects/<slug>.md` |
| Site URL, nav order, # of news on home | `_config.yml` |
| Portrait | `assets/img/portrait.jpg` (square, ≤300 KB) |
| CV PDF (download button appears automatically) | `assets/cv.pdf` |

## Rules that keep the site tasteful

- **Empty list → no section, no heading, no nav link.** Never leave placeholder
  headings on the live site. Nav entries with `requires:` hide themselves.
- Content in plain, specific language. No job-title soup, no "passionate about".
- News entries: one or two sentences, past tense, a bold linked noun
  (`[**Thing**](url)`), exact date. Newest first.
- Projects: `summary` is one sentence; body says the problem, what was built,
  the result. Set `order` (1 = top) and `featured: true` for the home page.
- Only whitelisted GitHub Pages plugins (`jekyll-seo-tag`, `jekyll-sitemap`).
  Anything else silently breaks the live build.
- Pages are `.html` with Liquid (not `.md`) so kramdown never mangles layout HTML.
- CSS tokens live on `:root` in `assets/css/main.css`; dark mode is defined twice
  (media query + `[data-theme="dark"]`) — change both.
- Don't hard-code the email in HTML; it's assembled in `assets/js/site.js`.

## Preview / verify

```
bundle install
bundle exec jekyll serve   # http://localhost:4000
```
Check `/`, `/news/`, `/projects/`, a project page, `/cv/` at desktop and ~390px
width in light and dark mode. No horizontal scroll on mobile.

## Deploy

Push to `main`. Pages settings: *Deploy from a branch*, `main`, `/ (root)`.
The repo must be named `<username>.github.io` to serve at the root, and `url:` in
`_config.yml` must match.

## Open TODOs (update as they close)

- [ ] GitHub username rename → repo rename → set `url` in `_config.yml`.
- [ ] Add `assets/img/portrait.jpg`.
- [ ] Rewrite `bio` in `_data/profile.yml` in Nissan's own voice.
- [ ] Set exact dates on the three seeded entries in `_data/news.yml`.
- [ ] Fill `experience` / `education` in `_data/cv.yml`; add `assets/cv.pdf`.
- [ ] Add LinkedIn / X / Scholar links in `_data/profile.yml` if wanted.

## Log

- 2026-09-29 — Migrated from single-page `content.js` site to Jekyll
  (about/news/projects/publications/cv). Removed `.nojekyll` and a stray
  npm-publish workflow.
