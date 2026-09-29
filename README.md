# Nissan Dutta — personal site

About, news, projects, publications and CV. Jekyll, built by GitHub Pages on
every push. No theme gem, no Node, no Actions.

## Updating it

All content is in data files. You never need to touch the templates.

| To change… | Edit |
| --- | --- |
| Bio, tagline, links, email | `_data/profile.yml` |
| News / activities | `_data/news.yml` — add to the top |
| Projects | `_projects/<name>.md` — one file per project |
| CV | `_data/cv.yml` — drop a PDF at `assets/cv.pdf` for a download button |
| Publications | `_data/publications.yml` — the page appears once it has entries |
| Photo | `assets/img/portrait.jpg` (square). Initials show until it exists. |

Empty lists hide their section entirely, so nothing half-finished shows up live.

With Claude Code: just say *"add news: …"* or *"add project: <repo url>"*.
`CLAUDE.md` and `.claude/skills/site-update/` hold the conventions.

## Preview locally

```sh
bundle install
bundle exec jekyll serve
```
Open http://localhost:4000.

## Going live at https://nissan-dutta.github.io

GitHub only serves a site at the root of `<username>.github.io`, and the
username here is `Nissan-Dutta` (`nissan.github.io` belongs to someone else).

1. Rename this repo to `nissan-dutta.github.io` (Settings → General → Repository name).
2. Merge into `main`.
3. Settings → Pages → *Deploy from a branch* → `main` / `(root)` → Save.
4. Wait ~1 minute, then open https://nissan-dutta.github.io.

If the account is ever renamed, repeat step 1 with the new name and update
`url:` in `_config.yml`.
