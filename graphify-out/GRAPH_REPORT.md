# Graph Report - .  (2026-07-24)

## Corpus Check
- Corpus is ~6,276 words - fits in a single context window. You may not need a graph.

## Summary
- 54 nodes · 38 edges · 23 communities detected
- Extraction: 82% EXTRACTED · 18% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Build & Design Stack|Build & Design Stack]]
- [[_COMMUNITY_App Entry & LLM Targets|App Entry & LLM Targets]]
- [[_COMMUNITY_Copy Toast State|Copy Toast State]]
- [[_COMMUNITY_Static Deploy Config|Static Deploy Config]]
- [[_COMMUNITY_Clipboard Utility|Clipboard Utility]]
- [[_COMMUNITY_App Root|App Root]]
- [[_COMMUNITY_Hero Section|Hero Section]]
- [[_COMMUNITY_Non-Negotiables Section|Non-Negotiables Section]]
- [[_COMMUNITY_Prompt Explorer|Prompt Explorer]]
- [[_COMMUNITY_Prompt Card|Prompt Card]]
- [[_COMMUNITY_Nav|Nav]]
- [[_COMMUNITY_Footer|Footer]]
- [[_COMMUNITY_Reveal Animation|Reveal Animation]]
- [[_COMMUNITY_Tailwind Config|Tailwind Config]]
- [[_COMMUNITY_Vite Config|Vite Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Main Entry|Main Entry]]
- [[_COMMUNITY_Types|Types]]
- [[_COMMUNITY_RACE Framework|RACE Framework]]
- [[_COMMUNITY_Universal Prompts|Universal Prompts]]
- [[_COMMUNITY_Section Shell|Section Shell]]
- [[_COMMUNITY_Frameworks Data|Frameworks Data]]
- [[_COMMUNITY_Prompts Data|Prompts Data]]

## God Nodes (most connected - your core abstractions)
1. `AI as Your Analyst — Prompt Toolkit` - 10 edges
2. `index.html (app entry)` - 7 edges
3. `GitHub Pages Deploy Workflow` - 3 edges
4. `src/main.tsx (module entry)` - 3 edges
5. `ChatGPT (LLM)` - 3 edges
6. `useToast()` - 2 edges
7. `useCopy()` - 2 edges
8. `copyText()` - 2 edges
9. `copyFallback()` - 2 edges
10. `React 19` - 2 edges

## Surprising Connections (you probably didn't know these)
- `index.html (app entry)` --conceptually_related_to--> `AI as Your Analyst — Prompt Toolkit`  [INFERRED]
  index.html → README.md
- `src/main.tsx (module entry)` --conceptually_related_to--> `React 19`  [INFERRED]
  index.html → README.md
- `useCopy()` --calls--> `useToast()`  [INFERRED]
  src/hooks/useCopy.ts → src/components/Toast.tsx

## Hyperedges (group relationships)
- **Target LLMs for prompt paste** —  [EXTRACTED 1.00]
- **Frontend build/runtime stack** —  [EXTRACTED 1.00]
- **Editable content data layer** —  [EXTRACTED 1.00]

## Communities

### Community 0 - "Build & Design Stack"
Cohesion: 0.22
Nodes (9): Framer Motion, frameworks.ts (frameworks/guardrails), lucide-react, AI as Your Analyst — Prompt Toolkit, prompts.ts (prompt content), tailwind.config.ts (editorial theme tokens), Tailwind CSS v3, TypeScript (+1 more)

### Community 1 - "App Entry & LLM Targets"
Cohesion: 0.36
Nodes (8): ChatGPT (LLM), Claude (LLM), Gemini (LLM), Google Fonts (Playfair Display, Epilogue, JetBrains Mono), index.html (app entry), src/main.tsx (module entry), #root mount node, React 19

### Community 2 - "Copy Toast State"
Cohesion: 0.5
Nodes (2): useToast(), useCopy()

### Community 3 - "Static Deploy Config"
Cohesion: 0.5
Nodes (4): Base path /prompt-toolkit/ rename note, GitHub Pages Deploy Workflow, Fully static, no backend, vite.config.ts (base path)

### Community 4 - "Clipboard Utility"
Cohesion: 1.0
Nodes (2): copyFallback(), copyText()

### Community 5 - "App Root"
Cohesion: 1.0
Nodes (0): 

### Community 6 - "Hero Section"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Non-Negotiables Section"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Prompt Explorer"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Prompt Card"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Nav"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Footer"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Reveal Animation"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Tailwind Config"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Vite Config"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Main Entry"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Types"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "RACE Framework"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Universal Prompts"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Section Shell"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Frameworks Data"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Prompts Data"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **10 isolated node(s):** `Vite`, `TypeScript`, `Framer Motion`, `lucide-react`, `prompts.ts (prompt content)` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `App Root`** (2 nodes): `App()`, `App.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Section`** (2 nodes): `Hero()`, `Hero.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Non-Negotiables Section`** (2 nodes): `NonNegotiables()`, `NonNegotiables.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Prompt Explorer`** (2 nodes): `onTabKeyDown()`, `PromptExplorer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Prompt Card`** (2 nodes): `clsx()`, `PromptCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Nav`** (2 nodes): `Nav()`, `Nav.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Footer`** (2 nodes): `Footer()`, `Footer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Reveal Animation`** (2 nodes): `Reveal()`, `Reveal.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config`** (1 nodes): `tailwind.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Config`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Entry`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Types`** (1 nodes): `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `RACE Framework`** (1 nodes): `RaceFramework.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Universal Prompts`** (1 nodes): `UniversalPrompts.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Section Shell`** (1 nodes): `Section.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Frameworks Data`** (1 nodes): `frameworks.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Prompts Data`** (1 nodes): `prompts.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AI as Your Analyst — Prompt Toolkit` connect `Build & Design Stack` to `App Entry & LLM Targets`, `Static Deploy Config`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Why does `index.html (app entry)` connect `App Entry & LLM Targets` to `Build & Design Stack`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Why does `GitHub Pages Deploy Workflow` connect `Static Deploy Config` to `Build & Design Stack`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `src/main.tsx (module entry)` (e.g. with `#root mount node` and `React 19`) actually correct?**
  _`src/main.tsx (module entry)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `ChatGPT (LLM)` (e.g. with `Claude (LLM)` and `Gemini (LLM)`) actually correct?**
  _`ChatGPT (LLM)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Vite`, `TypeScript`, `Framer Motion` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._