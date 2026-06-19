# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# asliceoftom — Personal Website

Built with [Quartz v4](https://quartz.jzhao.xyz/).

## Commands

- `npx quartz build --serve` — Local dev server with hot reload
- `npx quartz build` — Production build (output in `public/`)

## Hosting

GitHub Pages via `.github/workflows/deploy.yml`. **Pushes to `v4` branch** trigger automatic builds (not `main`).

## Structure

- `content/` — All site content as markdown files
  - `projects/` — Project writeups
  - `writing/blog/`, `writing/poetry/`, `writing/reviews/` — Writing sections
  - `reading.md` — Reading list
- `quartz.config.ts` — Site config (title, analytics, theme, plugins)
- `quartz.layout.ts` — Page layout (sidebar, header, footer components)
- `quartz/` — Quartz framework source (avoid editing unless customizing components)

## Content Conventions

- Add `draft: true` to frontmatter to hide a page from the build (`RemoveDrafts` plugin filters these)
- Folders named `private/`, `templates/`, `.obsidian/`, or `drafts/` are ignored entirely — put unpublished essays in `content/drafts/`
- Never use emojis in content files
- Date shown on pages uses git last-modified time by default (override with `date:` in frontmatter)
- Obsidian-flavored markdown is supported: wikilinks `[[page]]`, callouts, etc.
- LaTeX renders via KaTeX: inline `$x^2$`, block `$$...$$`
- Folder `index.md` files provide section landing pages; Quartz auto-generates folder listing pages otherwise
