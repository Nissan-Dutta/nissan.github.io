---
name: site-update
description: Add or change content on Nissan's personal site — news items, projects, publications, CV entries, bio, links. Use when the user says things like "add news", "I just shipped X", "add a project", "add my paper", "update my CV", or pastes an achievement they want on the site.
---

# Updating the site

Read `CLAUDE.md` first — it maps every kind of content to its file and lists the
style rules. Then pick the recipe below. Touch only data files unless the user
asks for a design change.

## Add a news item
1. Prepend to `_data/news.yml` (newest first):
   ```yaml
   - date: YYYY-MM-DD
     text: >-
       Past-tense sentence with a [**bold linked noun**](url). Optional second sentence.
   ```
2. If the date is unknown, ask — never guess a date that goes live.
3. If the item is about a project that has no page yet, offer to add one too.

## Add a project
1. Create `_projects/<kebab-slug>.md`:
   ```yaml
   ---
   title: Name
   year: YYYY
   summary: One sentence, what it is and why it matters.
   repo: https://github.com/...     # optional; also demo:, paper:
   tags: [Up to, four tags]
   featured: true                   # shows on the home page
   order: 1                         # 1 = top; renumber the others
   ---
   Problem → what was built → result. Short paragraphs.
   ```
2. Pull facts from the repo's README when a GitHub URL is given; don't invent numbers.
3. Usually also add a news item announcing it.

## Add a publication
Append to `_data/publications.yml` (the page and nav link appear automatically
once the list is non-empty). Author list must use the exact `name` from
`_data/profile.yml` so it's bolded.

## Update CV
Add entries to `experience` / `education` / `awards` in `_data/cv.yml`
(`when`, `title`, optional `where`, `note`). Newest first.

## Finish
- Build if Ruby is available: `bundle exec jekyll build` — must be warning-free.
- Tick any closed TODO in `CLAUDE.md` and add a one-line entry under **Log**.
- Commit with a message like `Add news: <thing>`.
