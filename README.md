# iamjfabian.com

Personal blog and portfolio for Josias Fabián — penetration testing write-ups, experience, and projects.

Built on the same visual system ("SE BUSCA" — wanted-poster / western theme) as
[hub.iamjfabian.com](https://github.com/j05145/iamjfabian-hub): dark leather/paper surfaces, a green
(`rust`) + orange (`mustard`) accent pair, Rye display type over Inter body text. Tokens live in
`app/globals.css`.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — config lives in `app/globals.css` via `@theme`, no `tailwind.config.js`
- **next-mdx-remote** for blog posts (`content/posts/*.mdx`), rendered server-side with `MDXRemote`
- Deployed on **Vercel**

## Structure

```
app/                 routes (App Router)
  blog/[slug]/        post detail — renders MDX via next-mdx-remote
components/
  ui/                 button, badge, card — token-driven, no hub dependency
  diagrams/            FlowChart — data-driven attack-chain diagrams for posts
content/posts/*.mdx    blog post source (front matter: title, date, dateLabel, description, tags)
lib/posts.ts           reads content/posts, no CMS/DB
```

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Adding a post

Add `content/posts/<slug>.mdx` with front matter:

```yaml
---
title: "..."
date: "2025-01-01"      # ISO, used for sort order
dateLabel: "2025"        # what's actually displayed — use this when the real date is imprecise
description: "..."
tags: ["Web", "..."]
---
```

`<Concept>` and `<FlowChart>` are available inside post MDX without importing them.
