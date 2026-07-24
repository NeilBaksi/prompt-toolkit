# AI as Your Analyst — Prompt Toolkit

A live, shareable prompt toolkit for analysts, consultants, and MBAs. Copy a
prompt, paste it into **Claude, ChatGPT, or Gemini**, swap the `[brackets]` for
your real context, and get client-ready output. Built by Neil Baksi.

**Live:** `https://<your-username>.github.io/prompt-toolkit/`

## What's inside

- **The RACE Framework** — the four ingredients (Role, Action, Context,
  Example) behind every good prompt.
- **Context Primers & Prompts** — persona primers + task/polish prompts across
  six tracks: General, Consulting, Finance/IB, Tech/PM, CPG/Marketing,
  Healthcare. Australian-market framing throughout.
- **Universal Prompts** — email, meeting prep, research synthesis, networking
  follow-ups that work on any track.
- **The Non-Negotiables** — the guardrails that make AI fluency safe (confidential
  data, verifying numbers, ownership, iteration).

Every prompt has a one-click **Copy** button. No login, no backend, no tracking.

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v3 · Framer Motion · lucide-react.
Fully static — editorial design, fluid type, scroll-reveal motion, and a
`prefers-reduced-motion`-aware, keyboard-accessible UI.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/prompt-toolkit/
npm run build    # tsc -b + vite build → dist/
npm run preview  # serve the production build
```

## Edit the content

All copy is data, not JSX — no component edits needed:

- **Prompts & categories** → [`src/data/prompts.ts`](src/data/prompts.ts)
- **RACE framework & guardrails** → [`src/data/frameworks.ts`](src/data/frameworks.ts)

`PromptCard` renders any prompt with a `kind` of `primer | task | polish`.

## Deploy (GitHub Pages)

1. Push to `main`. The workflow in
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs `npm ci`,
   builds, and publishes to GitHub Pages via GitHub Actions.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.

The site serves from `/prompt-toolkit/`, set by `base` in
[`vite.config.ts`](vite.config.ts). If you name the repo something else, update
`base` to `/<repo-name>/` to match.

## License

MIT © Neil Baksi
