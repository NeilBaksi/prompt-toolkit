# Graph Report - .  (2026-07-25)

## Corpus Check
- 74 files · ~99,999 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 74 nodes · 59 edges · 29 communities detected
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]

## God Nodes (most connected - your core abstractions)
1. `AI as Your Analyst - Prompt Toolkit` - 21 edges
2. `Context Primers & Prompts` - 9 edges
3. `index.html (app entry)` - 6 edges
4. `ChatGPT (LLM)` - 3 edges
5. `Fully Static Site` - 3 edges
6. `copyText()` - 2 edges
7. `copyFallback()` - 2 edges
8. `src/main.tsx (module entry)` - 2 edges
9. `#root mount node` - 2 edges
10. `Claude (LLM)` - 2 edges

## Surprising Connections (you probably didn't know these)
- `useToast()` --calls--> `useCopy()`  [INFERRED]
  src/components/Toast.tsx → src/hooks/useCopy.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (13): ChatGPT, Claude, One-Click Copy Button, Gemini, lucide-react, The Non-Negotiables (Guardrails), AI as Your Analyst - Prompt Toolkit, RACE Framework (Role, Action, Context, Example) (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (9): Australian-Market Framing, Context Primers & Prompts, Consulting Track, CPG/Marketing Track, Finance/IB Track, General Track, Healthcare Track, Tech/PM Track (+1 more)

### Community 2 - "Community 2"
Cohesion: 0.43
Nodes (7): ChatGPT (LLM), Claude (LLM), Gemini (LLM), Google Fonts (Playfair Display, Epilogue, JetBrains Mono), index.html (app entry), src/main.tsx (module entry), #root mount node

### Community 3 - "Community 3"
Cohesion: 0.5
Nodes (2): useToast(), useCopy()

### Community 4 - "Community 4"
Cohesion: 1.0
Nodes (2): copyFallback(), copyText()

### Community 5 - "Community 5"
Cohesion: 0.67
Nodes (3): Live Demo (GitHub Pages), No Login/Backend/Tracking, Fully Static Site

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (0): 

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Community 13"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Community 14"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (2): MIT License, Neil Baksi

### Community 16 - "Community 16"
Cohesion: 1.0
Nodes (2): prefers-reduced-motion / Keyboard-Accessible UI, Framer Motion

### Community 17 - "Community 17"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Community 25"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "Community 26"
Cohesion: 1.0
Nodes (0): 

### Community 27 - "Community 27"
Cohesion: 1.0
Nodes (0): 

### Community 28 - "Community 28"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **18 isolated node(s):** `Google Fonts (Playfair Display, Epilogue, JetBrains Mono)`, `Analysts, Consultants, MBAs`, `Claude`, `ChatGPT`, `Gemini` (+13 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 7`** (2 nodes): `Footer()`, `Footer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (2 nodes): `Reveal()`, `Reveal.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (2 nodes): `App()`, `App.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `Hero()`, `Hero.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (2 nodes): `NonNegotiables()`, `NonNegotiables.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (2 nodes): `onTabKeyDown()`, `PromptExplorer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (2 nodes): `clsx()`, `PromptCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (2 nodes): `Nav()`, `Nav.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (2 nodes): `MIT License`, `Neil Baksi`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (2 nodes): `prefers-reduced-motion / Keyboard-Accessible UI`, `Framer Motion`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (1 nodes): `tailwind.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `RaceFramework.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (1 nodes): `UniversalPrompts.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `frameworks.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (1 nodes): `prompts.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (1 nodes): `Section.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (1 nodes): `Tools.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (1 nodes): `tools.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AI as Your Analyst - Prompt Toolkit` connect `Community 0` to `Community 16`, `Community 1`, `Community 5`, `Community 15`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **Why does `Context Primers & Prompts` connect `Community 1` to `Community 0`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `ChatGPT (LLM)` (e.g. with `Claude (LLM)` and `Gemini (LLM)`) actually correct?**
  _`ChatGPT (LLM)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Fully Static Site` (e.g. with `Live Demo (GitHub Pages)` and `No Login/Backend/Tracking`) actually correct?**
  _`Fully Static Site` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Google Fonts (Playfair Display, Epilogue, JetBrains Mono)`, `Analysts, Consultants, MBAs`, `Claude` to the rest of the system?**
  _18 weakly-connected nodes found - possible documentation gaps or missing edges._