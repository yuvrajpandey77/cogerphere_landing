# Cogerphere Master Execution Plan

**Goal:** Maximize market presence, improve SEO, and establish Cogerphere as a credible AI research lab — without breaking existing functionality.

**References:** [Anthropic](https://www.anthropic.com/), [OpenAI](https://openai.com/), their sitemaps, and frontier AI lab patterns.

---

## Quick Links

| Document | Purpose |
|----------|---------|
| [RESEARCH_PAGE_PROPOSAL.md](./RESEARCH_PAGE_PROPOSAL.md) | Research page options (CIF content) |
| [DOCS_PAGE_PROPOSAL.md](./DOCS_PAGE_PROPOSAL.md) | Docs page options |

---

## Part 1: Sitemap Gap Analysis

### OpenAI Sitemap Structure (Key Sections)

| Section | Purpose | Example URLs |
|---------|---------|--------------|
| **page** | Core pages | /, /about, /charter, /research, /safety, /careers |
| **api** | Developer docs | /api, /api/pricing |
| **research** | Research index + papers | /research, /research/index |
| **product** | Product pages | /chatgpt/*, /gpt-5 |
| **release** | Announcements | /index/* |
| **learn-guides** | Educational content | /business/guides-and-resources/* |
| **company** | About, structure | /about, /our-structure |
| **safety** | Trust & safety | /safety, /trust-and-transparency |
| **security** | Security & privacy | /security-and-privacy, /consumer-privacy |

### Anthropic Sitemap Structure (Key Sections)

| Section | Purpose | Example URLs |
|---------|---------|--------------|
| **Core** | Home, company | /, /company |
| **research** | Research + teams + papers | /research, /research/team/*, /research/* |
| **news** | Announcements | /news, /news/* |
| **learn** | Education | /learn, /learn/* |
| **engineering** | Technical blog | /engineering, /engineering/* |
| **careers** | Hiring | /careers |
| **claude** | Product/models | /claude/opus, /claude/sonnet |
| **legal** | Terms, privacy | /legal/* |
| **events** | Events | /events, /events/* |
| **transparency** | Trust | /transparency, /constitution |

### Current Cogerphere State

| Page | Status | Notes |
|------|--------|-------|
| `/` | ✅ Exists | Home |
| `/contact` | ✅ Exists | Contact form |
| `/research` | ❌ 404 | Linked in nav, footer |
| `/docs` | ❌ 404 | Linked in CTA, footer |
| `/news` | ❌ 404 | Linked in nav |
| `/learn` | ❌ 404 | Linked in nav |
| `/about` | ❌ 404 | Footer |
| `/careers` | ❌ 404 | Footer |
| `/pricing` | ❌ 404 | Footer |
| `/enterprise` | ❌ 404 | Footer |
| `/security` | ❌ 404 | Footer |
| `/privacy` | ❌ 404 | Footer |
| `/terms` | ❌ 404 | Footer |

### Gap Summary: Critical vs. Nice-to-Have

| Priority | Page | Rationale |
|----------|------|-----------|
| **P0** | `/research` | Core differentiator; nav + footer; CIF content ready |
| **P0** | `/docs` | Developer funnel; CTA on home; Clox integration |
| **P0** | Home page refresh | AI lab essence; less Web3; more depth |
| **P1** | `/about` | Company identity; trust; SEO |
| **P1** | `/news` | Announcements; SEO; credibility |
| **P1** | `/learn` | Education; SEO; developer adoption |
| **P2** | `/careers` | Hiring; can be placeholder |
| **P2** | `/privacy`, `/terms` | Legal; required for trust |
| **P2** | `/security` | Trust; can link to Clox or placeholder |
| **P3** | `/pricing`, `/enterprise` | Product expansion; can redirect to Clox |

---

## Part 2: Home Page Improvements

### Current Issues

1. **Hero:** "Building the Future Where AI and Web3 Evolve Together" — Web3-heavy; AI lab essence diluted.
2. **Subhero:** "next-generation Web3 applications" — same.
3. **Floating dots:** "Web3" as one of four pillars — over-indexed.
4. **Core Principles:** "Web3 & Blockchain Integration" card — prominent.
5. **CTA:** "Ready to build the next generation of Web3?" — Web3-only.
6. **Overall:** Feels like a short Web3 + AI hybrid, not an AI research lab.

### Anthropic/OpenAI Pattern

- **Anthropic:** "AI research and products that put safety at the frontier" / "At Anthropic, we build AI to serve humanity's long-term well-being."
- **OpenAI:** "Pioneering research on the path to AGI" / mission-first, products second.

### Proposed Home Page Changes (Non-Breaking)

| Section | Current | Proposed |
|---------|---------|----------|
| **Hero H1** | Building the Future Where AI and Web3 Evolve Together | **AI research and intelligent systems that put safety at the frontier** (or similar) |
| **Hero sub** | research-driven company crafting intelligent systems and next-generation Web3 applications | **research-driven AI lab building intelligent systems** — from context-aware LLMs to secure smart contracts. Innovation that is transparent, secure, and human-aligned. |
| **Floating dots** | AI Research, Security, Web3, Innovation | **AI Research**, **Safety**, **Intelligent Systems**, **Innovation** (or: Context Intelligence, Security, Agents, Open Source) |
| **Core Principles** | Keep 3 cards; reorder: Security, AI Research, Web3 | **Security First**, **AI Research & Innovation**, **Intelligent Systems** (replace Web3 card with broader "Intelligent Systems" — can mention Web3 as one application) |
| **CTA** | Ready to build the next generation of Web3? | **Ready to build with intelligent AI?** or **Ready to build the future of AI?** |
| **Add** | — | Optional: "Featured" or "Latest" strip (e.g., CIF research, Clox) — like Anthropic's "Four Hundred Meters on Mars" |

### Content Additions (More Depth)

- **Mission block:** 1–2 sentences on "why we exist" (Anthropic-style).
- **Featured work:** CIF research teaser or Clox highlight.
- **Trust signals:** Safety, transparency, open-source (if applicable).

---

## Part 3: Docs Page Proposal

### Purpose

- Developer onboarding for Clox (and future products).
- SEO for "smart contract builder", "AI contract generation", etc.
- Single source of truth for API, CLI, integration.

### Option A: Minimal Docs Hub

**Structure:**
1. **Hero** — "Documentation — Build with Cogerphere"
2. **Quick links** — Get Started, Clox API, CLI, Examples
3. **Cards** — Clox, CIF SDK (when ready), Integration guides
4. **CTA** — Try Clox, Contact for enterprise

**Pros:** Fast to ship, no external doc system.  
**Cons:** Limited depth; may need migration later.

### Option B: Embedded External Docs

**Structure:**
- `/docs` → Redirect or iframe to external docs (e.g., GitBook, Docusaurus on subdomain).
- `/docs` landing page with navigation to sections.

**Pros:** Full doc system.  
**Cons:** Requires external setup.

### Option C: Next.js Docs (MDX)

**Structure:**
- `/docs` — Landing + `/docs/getting-started`, `/docs/clox/*`, etc.
- MDX files in `/content/docs/`.

**Pros:** Full control, SEO, versioned.  
**Cons:** More build time.

### Recommendation for Phase 1

**Option A** — Minimal Docs Hub:
- Single `/docs` page with sections: Overview, Clox (link to cogy01.vercel.app), Quick Start, API Reference (link or placeholder), Support.
- Prevents 404, improves SEO, establishes structure.
- Migrate to Option C when content grows.

---

## Part 4: Research Page (Recap)

See `docs/RESEARCH_PAGE_PROPOSAL.md`. **Recommended:** Option A (Single-Project Deep Dive) for CIF as flagship.

---

## Part 5: Other Crucial Pages

### 4.1 About / Company (`/about`)

**Purpose:** Identity, trust, SEO.

**Structure:**
1. Hero — "We're Cogerphere"
2. Mission — Why we exist, what we build
3. Approach — Research-first, safety, transparency
4. Team (optional) — Placeholder or photos
5. CTA — Careers, Contact

**Content:** Repurpose home page "Intelligence in Motion. Knowledge in a Sphere." and expand.

### 4.2 News (`/news`)

**Purpose:** Announcements, SEO, credibility.

**Structure:**
1. Hero — "News & Updates"
2. List — Cards for posts (title, date, excerpt, link)
3. Placeholder — "More coming soon" if empty

**Phase 1:** Static page with 0–3 placeholder or real posts. Add CMS later.

### 4.3 Learn (`/learn`)

**Purpose:** Education, SEO, developer adoption.

**Structure:**
1. Hero — "Learn with Cogerphere"
2. Cards — Tutorials, Guides, Use Cases (like Anthropic Learn)
3. Links — Clox tutorials, CIF (when ready), Blog

**Phase 1:** Hub page linking to docs, blog, external resources.

### 4.4 Legal Placeholders (`/privacy`, `/terms`)

**Purpose:** Trust, compliance.

**Structure:** Simple page with placeholder text + "Contact us for questions." Can use templates.

### 4.5 Careers (`/careers`)

**Purpose:** Hiring.

**Phase 1:** Single page — "We're hiring. Check back soon or contact us." + link to Contact.

---

## Part 6: SEO Improvements

### 6.1 Metadata (Layout + Per-Page)

| Item | Current | Improvement |
|------|---------|-------------|
| **Default title** | "Cogerphere | AI Research Lab & Intelligent Systems – Web3 & AI" | "Cogerphere | AI Research Lab & Intelligent Systems" (de-emphasize Web3) |
| **Description** | Web3-heavy | Lead with AI research, safety, intelligent systems |
| **Keywords** | Include Web3, blockchain | Reorder: AI research, AI lab, intelligent systems, AI safety first |
| **Per-page metadata** | Only contact has layout | Add for /research, /docs, /about, /news, /learn |

### 6.2 Sitemap

**Current:** `/`, `/contact` only.

**Add:** `/research`, `/docs`, `/about`, `/news`, `/learn` (and any new pages).

### 6.3 JSON-LD

- Add `WebPage` schema for key pages.
- Add `BreadcrumbList` for docs/research if multi-level.
- Ensure `Organization` description aligns with new positioning.

### 6.4 Internal Linking

- Home → Research, Docs, About, News, Learn.
- Footer → Only link to pages that exist (or remove 404s).

---

## Part 7: Footer & Nav Cleanup

### Broken Links to Fix

| Link | Action |
|------|--------|
| `/research` | Create page |
| `/docs` | Create page |
| `/news` | Create page or remove |
| `/learn` | Create page or remove |
| `/about` | Create page |
| `/careers` | Create placeholder or remove |
| `/pricing` | Redirect to Clox or remove |
| `/enterprise` | Redirect to Clox or remove |
| `/security` | Create placeholder or remove |
| `/web3`, `/developers`, `/ai`, `/consulting` | Remove or create placeholders |
| `/tutorials`, `/community`, `/blog` | Remove or consolidate under /learn |
| `/privacy`, `/terms` | Create placeholder pages |

**Rule:** No nav/footer links to 404. Either create page or remove link.

---

## Part 8: Execution Order (Non-Breaking)

### Phase 1 — Foundation (Week 1)

1. **Home page refresh** — Copy changes only; no structural break.
2. **Create `/research`** — Option A from Research proposal.
3. **Create `/docs`** — Minimal hub (Option A).
4. **Update sitemap** — Add new URLs.
5. **Fix footer** — Remove or replace broken links; keep only working URLs.

### Phase 2 — Depth (Week 2)

6. **Create `/about`** — Company page.
7. **Create `/news`** — Placeholder or 1–2 posts.
8. **Create `/learn`** — Hub with links.
9. **Create `/privacy`, `/terms`** — Placeholder legal pages.
10. **Per-page metadata** — For all new pages.

### Phase 3 — Polish (Week 3+)

11. **Create `/careers`** — Placeholder.
12. **SEO audit** — Titles, descriptions, JSON-LD.
13. **Optional:** `/security` placeholder, redirects for `/pricing`, `/enterprise`.

---

## Part 9: Final Page Inventory

| Page | Phase | Purpose |
|------|-------|---------|
| `/` | 1 | Home — refreshed copy |
| `/research` | 1 | CIF + research hub |
| `/docs` | 1 | Developer docs hub |
| `/contact` | — | Existing |
| `/about` | 2 | Company identity |
| `/news` | 2 | Announcements |
| `/learn` | 2 | Education hub |
| `/privacy` | 2 | Legal |
| `/terms` | 2 | Legal |
| `/careers` | 3 | Hiring placeholder |

---

## Part 10: Content Reference (Anthropic/OpenAI)

### Anthropic Home Essence

- "AI research and products that put safety at the frontier"
- "At Anthropic, we build AI to serve humanity's long-term well-being"
- Featured: breakthrough story (Mars), latest releases, core views
- Clean, minimal, trust-focused

### OpenAI Home Essence

- Mission-first (AGI, benefit humanity)
- Products (ChatGPT, API) as proof points
- Research, safety, careers as pillars

### Cogerphere Positioning (Proposed)

- **Primary:** AI research lab building intelligent systems.
- **Secondary:** Applications in smart contracts (Clox), context intelligence (CIF).
- **Tone:** Research-driven, safety-aware, transparent, human-aligned.

---

## Summary: What to Execute First

1. **Home page** — Less Web3, more AI lab; deeper content.
2. **Research page** — CIF deep dive (Option A).
3. **Docs page** — Minimal hub.
4. **Sitemap** — Include all live pages.
5. **Footer/nav** — No 404s.
6. **About, News, Learn** — Phase 2.
7. **Legal, Careers** — Phase 2–3.

All changes are additive or copy-only; no removal of working features.
