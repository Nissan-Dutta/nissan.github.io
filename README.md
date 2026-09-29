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

## Going live at `<username>.github.io`

1. GitHub → Settings → Account → **Change username** (e.g. `nissandutta`).
2. Rename this repo to `<username>.github.io`.
3. Repo → Settings → Pages → *Deploy from a branch* → `main` / `(root)`.
4. Set `url:` in `_config.yml` to `https://<username>.github.io`.
