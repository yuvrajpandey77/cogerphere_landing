# Cogerphere Uniqueness & Premium Redesign Plan

**Goal:** Establish a distinct, research-driven, premium identity across the site — from hero to all pages. Fix alignment, add depth, and create a cohesive UX/UI system.

---

## 1. Hero Text Revision

### Current (too generic, mirrors Anthropic)
- **H1:** "AI research and products that put safety at the frontier"
- **Sub:** "AI will have a vast impact on the world. Cogerphere is dedicated to expanding what systems can understand and uphold..."

### Proposed (unique Cogerphere voice)

**Option A — Sphere-centric**
- **H1:** "Where intelligence moves and knowledge gathers"
- **Sub:** "We expand the sphere of what systems can understand and uphold. From context-aware LLMs to secure smart contracts — we build systems that stay coherent, transparent, and human-aligned."

**Option B — Research-first**
- **H1:** "Research that ships. Systems that stay coherent."
- **Sub:** "Cogerphere builds intelligent systems at the frontier — where context matters, safety is default, and the sphere of knowledge keeps expanding."

**Option C — Mission-led**
- **H1:** "Expanding the sphere of what AI can understand"
- **Sub:** "We build context-aware systems that retain coherence, ship failproof tools, and keep innovation human-aligned. Intelligence in motion. Knowledge in a sphere."

**Recommendation:** Option A — leans into the brand tagline and feels distinct from Anthropic/OpenAI.

---

## 2. Color Scheme

### Current
- Black/white/gray with blue, amber, violet gradient orbs
- Slate-100 for product card
- No defined accent or secondary palette

### Proposed: Warm, Premium, Research-Driven

| Role | Current | Proposed | Use |
|------|---------|----------|-----|
| **Background** | Pure white | Warm white `#FAFAF9` / `stone-50` | Softer, less clinical |
| **Foreground** | Black | Near-black `#0C0C0C` / `stone-950` | Slightly warmer |
| **Muted text** | Gray-600/700 | `stone-600` | Warmer gray |
| **Accent** | Black | Deep teal `#0D9488` / `teal-600` | Links, highlights, CTAs |
| **Accent light** | Blue-100 | `teal-50` | Badges, backgrounds |
| **Featured block** | Black | `stone-900` | Slightly warmer than pure black |
| **Orbs/gradients** | Blue, amber, violet | `amber-100`, `teal-100`, `stone-200` | Cohesive, warm |

**Alternative: Cool, Technical**
- Accent: Indigo/slate
- Feels more "tech" than "research lab"

**Recommendation:** Warm palette — differentiates from OpenAI (cool) and Anthropic (neutral), feels premium and approachable.

---

## 3. Typography & Font

### Current
- **Body:** Plus Jakarta Sans
- **Fallback:** Sora, JetBrains Mono
- Headlines: Same as body, bold

### Proposed: Premium, Research-Driven

**Option A — Serif headlines**
- **Headlines (H1–H3):** [**Instrument Serif**](https://fonts.google.com/specimen/Instrument+Serif) or **Source Serif 4** — editorial, research, premium
- **Body:** Plus Jakarta Sans or **DM Sans** — clean, readable
- **Mono (code):** JetBrains Mono

**Option B — Distinctive sans**
- **Headlines:** **Outfit** or **Satoshi** — geometric, modern, premium
- **Body:** **DM Sans** or **Inter** — neutral, readable

**Option C — Keep Plus Jakarta, scale up**
- **Headlines:** Plus Jakarta, heavier weights (700–800), larger sizes
- **Body:** Plus Jakarta 400–500
- Add `tracking-tight` on H1, `leading-relaxed` on body

**Recommendation:** Option A — Instrument Serif or Source Serif for headlines gives a clear "research lab / publication" feel. Plus Jakarta for body stays readable.

### Typography Scale (increase sizes)

| Element | Current | Proposed |
|---------|---------|----------|
| H1 | text-4xl–6xl | text-5xl–7xl |
| H2 | text-3xl–5xl | text-4xl–6xl |
| H3 | text-xl–2xl | text-2xl–3xl |
| Body | text-lg | text-lg–xl |
| Small | text-sm | text-base where appropriate |

---

## 4. Alignment & Layout Consistency

### Issues
- About, Research, Docs: `max-w-4xl` for hero vs `max-w-7xl` for sections — inconsistent
- Some pages center hero, others left-align
- Padding varies: `px-6 sm:px-8 lg:px-12` vs `px-4 sm:px-6 lg:px-8`

### Fix: Single Layout System

**Content wrapper (all pages):**
```
max-w-7xl mx-auto px-6 sm:px-8 lg:px-12
```

**Hero pattern:**
- Same wrapper
- Left-aligned text
- Consistent pt/pb (e.g. pt-20 pb-16 md:pt-28 md:pb-20)

**Section pattern:**
- Same wrapper
- py-16 md:py-20 or py-20 md:py-24

**Pages to update:**
- About: Hero max-w-4xl → max-w-7xl, add wrapper
- Research: Hero max-w-4xl → max-w-7xl, add wrapper
- Docs: Center hero → consider left-align for consistency
- Learn, News, Careers, etc.: Apply same wrapper

---

## 5. New Sections for Landing Page

### Current structure
1. Hero
2. Featured (CIF)
3. Product (Clox)
4. CTA

### Gaps (vs Anthropic, OpenAI)
- No "Latest" or "Recent" content
- No "How we work" / principles strip
- No social proof / logos
- No secondary product or research teaser
- Feels short

### Proposed new sections

| Section | Purpose | Reference |
|---------|---------|-----------|
| **Latest** | 2–3 cards: "Latest from Cogerphere" — CIF research, Clox update, News post | Anthropic "Latest releases" |
| **How we work** | 3–4 pill cards: Research-first, Safety by default, Transparent, Human-aligned | Anthropic "Core views" |
| **From the lab** | 1–2 research/product teasers with "Coming soon" or links | DeepMind "From the lab" |
| **Trust / Logos** | "Building with" or "Trusted by" — placeholder or real logos | Common B2B pattern |
| **Secondary CTA** | "Explore research" / "Read the docs" strip before final CTA | OpenAI "Get started" |

### Recommended order
1. Hero
2. Featured (CIF)
3. **Latest** (new) — 2–3 cards
4. **How we work** (new) — 4 pill cards
5. Product (Clox)
6. **From the lab** (optional) — CIF SDK, future research
7. CTA

---

## 6. UX/UI Design Principles

### Principles to apply site-wide

1. **Single content column** — max-w-7xl, same padding, left-aligned primary content
2. **Generous whitespace** — sections py-16–24, avoid cramped blocks
3. **Consistent hierarchy** — H1 > H2 > H3, same scale across pages
4. **Warm, not cold** — stone/amber accents over pure gray/blue
5. **One accent color** — teal or indigo for links, buttons, highlights
6. **Subtle backgrounds** — stone-50, slate-50 for section alternation
7. **Rounded corners** — rounded-2xl for cards, rounded-xl for buttons
8. **No orphan sections** — each section has clear relationship to next

### Component patterns
- **Cards:** rounded-2xl, border or subtle shadow, padding p-6–8
- **Buttons:** rounded-lg/xl, bold, clear hover state
- **Links:** underline on hover, or arrow icon
- **Badges:** rounded-full, small, uppercase or sentence case

---

## 7. Implementation Order

| Phase | Tasks |
|-------|-------|
| **1. Foundation** | Color scheme (globals.css), font (layout), typography scale |
| **2. Home** | Hero text revision, new sections (Latest, How we work), apply new colors/fonts |
| **3. Alignment** | Apply CONTENT_CLASS wrapper to About, Research, Docs, Learn, News, etc. |
| **4. Polish** | Text size bumps, spacing tweaks, final pass |

---

## 8. Quick Wins (Low Effort)

- [ ] Hero subtext: Swap to Option A
- [ ] Background: `bg-stone-50` or `bg-[#FAFAF9]` on body
- [ ] Featured block: `bg-stone-900` instead of pure black
- [ ] Add "How we work" 4-card strip to home
- [ ] Add "Latest" section with 2 placeholder cards
- [ ] Increase H1 to `text-5xl md:text-6xl lg:text-7xl` on home

---

## 9. Font Implementation (Next.js)

```ts
// layout.tsx
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Usage: font-serif for H1-H3, font-sans for body
```

---

## Summary

| Area | Change |
|------|--------|
| **Hero text** | Unique Cogerphere voice (Option A) |
| **Colors** | Warm palette: stone, teal accent |
| **Font** | Instrument Serif (headlines) + Plus Jakarta (body) |
| **Typography** | Larger H1–H3, consistent scale |
| **Alignment** | max-w-7xl + same padding on all pages |
| **Landing** | Add Latest, How we work, optional From the lab |
| **Principles** | Single column, generous space, warm accent |
