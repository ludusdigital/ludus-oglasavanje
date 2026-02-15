# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VitePress documentation site for SaaS advertising education (SEO, Google Ads, Meta Ads). Written in Serbian (Latin script). Deployed to GitHub Pages at `oglasavanje.ludusdigital.com`.

## Commands

- **Dev server:** `npm run docs:dev`
- **Build:** `npm run docs:build`
- **Preview build:** `npm run docs:preview`

No test suite or linter is configured.

## Architecture

- **VitePress 1.6+** static site generator with all content in Markdown
- **Content lives in `docs/`** — each page is a numbered `.md` file (e.g., `docs/01-osnove.md` through `docs/14-alati-resursi.md`)
- **Root-level `XX-*.md` files** are source/draft versions of the same content (not used by VitePress)
- **Config:** `docs/.vitepress/config.mts` — defines nav, sidebar, search (local), Serbian UI translations, and meta tags
- **Custom theme:** `docs/.vitepress/theme/index.ts` extends DefaultTheme with `custom.css` (brand colors, table/checkbox styling, typography)
- **Brand color:** `#2563eb` (blue), with purple gradient on hero
- **Deployment:** GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. CNAME file is copied to dist for custom domain.

## Content Structure

Pages follow a numbered sequence: Osnove (01) → SEO (02-03) → Google Ads (04-05) → Meta Ads (06-07) → Strategy (08) → Analytics (09) → Legal (10) → Action plans (11-14). Sidebar groups mirror this structure.

## When Adding/Modifying Content

- New pages must be added to both `sidebar` and `nav` in `docs/.vitepress/config.mts`
- Keep the numbered prefix convention for ordering
- The site language is `sr-Latn` — all UI strings are translated to Serbian in the config


# Kada korisnik traži da sastavljaš edukaciju i da proširuješ md fajlove u docs ovo je bitno da znaš

- Potrebno je da se uvek pozoveš i pročitaš fajl Profil-eksperta-SaaS-komunikacija-oglasavanje-optimizacija.md
