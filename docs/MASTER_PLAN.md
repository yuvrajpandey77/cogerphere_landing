# Cogerphere Landing — Master Plan

## Executive Summary

This plan addresses **market presence gaps**, **AI lab positioning**, **SEO**, and **page completeness** — aligned with Anthropic and OpenAI patterns. It prioritizes non-breaking improvements and phased execution.

---

## Part 1: Gap Analysis (Current vs. Frontier Labs)

### What Anthropic & OpenAI Have (That We Don't)

| Element | Anthropic | OpenAI | Cogerphere |
|---------|-----------|--------|------------|
| **Mission-led hero** | "AI to serve humanity's long-term well-being" | "AGI benefits all of humanity" | Mixed AI+Web3, no clear mission |
| **Featured / announcements** | Mars AI, latest releases | GPT-5.4, recent news | None |
| **Research page** | Teams + projects + publications | Focus areas + index | ❌ Missing (linked) |
| **Company / About** | Purpose, values, team, governance | Vision, structure, careers | ❌ Missing |
| **Safety** | Core views, RSP, constitution | Teach/Test/Share, system cards | Mentioned in cards only |
| **News / blog** | News section | Recent news, stories | ❌ Linked, missing |
| **Documentation** | — | API docs, guides | ❌ Linked, missing |
| **Careers** | Jobs CTA | Careers CTA | ❌ Linked, missing |
| **Product showcase** | Claude | ChatGPT, Sora, API | Clox (good) |
| **Stories / use cases** | — | Small business stories | None |

### Current Site Structure

**Existing pages:** `/`, `/contact`  
**Linked but missing:** `/research`, `/docs`, `/news`, `/learn`, `/about`, `/careers`, `/pricing`, `/enterprise`, `/security`, `/web3`, `/developers`, `/ai`, `/consulting`, `/tutorials`, `/community`, `/blog`, `/privacy`, `/terms`, `/accessibility`

**Risk:** Footer and header link to many non-existent pages → 404s, poor SEO, broken UX.

---

## Part 2: Home Page Revamp — More AI Lab, Less Web3

### Current Issues

1. **Hero:** "AI and Web3 Evolve Together" — Web3-first framing
2. **Subtext:** "next-generation Web3 applications" — overshadows AI research
3. **Floating dots:** AI Research, Security, **Web3**, Innovation — Web3 gets equal weight
4. **CTA:** "Ready to build the next generation of Web3?" — Web3-only
5. **Clox section:** Smart Contract Builder — valid product, but dominates the page
6. **Missing:** Mission statement, research teaser, announcements, safety narrative, "why we exist"

### Proposed Changes (Non-Breaking)

| Section | Current | Proposed |
|--------|---------|----------|
| **Hero headline** | "Building the Future Where AI and Web3 Evolve Together" | "Building Intelligent Systems That Scale" or "Advancing AI Research for Human-Aligned Innovation" |
| **Hero subtext** | Web3-heavy | Mission-first: "Cogerphere is an AI research lab building reliable, interpretable, and human-aligned intelligent systems. We conduct frontier research and translate it into practical tools." |
| **Floating dots** | AI Research, Security, Web3, Innovation | AI Research, Safety, Context Intelligence, Innovation (or: Research, Safety, Products, Impact) |
| **Product section** | Clox only, full-width | Keep Clox but add a **Research teaser** card (CIF) above or beside it — "Our Research: Context Intelligence Framework" with link to /research |
| **Core Principles** | 3 cards (Security, AI Research, Web3) | 3 cards: **Safety First**, **Research-Driven**, **Practical Impact** — Web3 as one application, not the lead |
| **CTA** | "Ready to build the next generation of Web3?" | "Ready to build with AI?" or "Explore our research and products" — dual CTA: Try Clox + View Research |
| **New section** | — | Optional: **Featured** or **Latest** — placeholder for announcements (e.g., "CIF SDK coming soon") |

### Content Reference (Anthropic / OpenAI)

- **Anthropic:** "At Anthropic, we build AI to serve humanity's long-term well-being."
- **OpenAI:** "Our mission is to ensure that artificial general intelligence benefits all of humanity."
- **Cogerphere (draft):** "Cogerphere is an AI research lab dedicated to building intelligent systems that are reliable, transparent, and human-aligned. We advance frontier research and turn it into tools that matter."

---

## Part 3: Crucial Pages (Priority Order)

### Tier 1 — Must Have (Market Presence)

| Page | Purpose | Status |
|------|---------|--------|
| **Research** | Showcase CIF, establish credibility | Implement (Option A from proposal) |
| **About / Company** | Mission, values, team, governance | Implement (minimal viable) |
| **News** | Announcements, releases | Implement (placeholder + structure) |
| **Docs** | Developer onboarding, API, guides | Implement (structure + placeholder) |

### Tier 2 — Should Have (Trust & SEO)

| Page | Purpose | Status |
|------|---------|--------|
| **Safety** | AI safety stance, practices | Implement (single page) |
| **Careers** | Jobs CTA, culture | Implement (placeholder or external link) |
| **Blog** | Thought leadership, SEO | Placeholder or redirect |

### Tier 3 — Nice to Have (Later)

| Page | Purpose | Status |
|------|---------|--------|
| **Pricing** | If Clox has pricing | Placeholder or external |
| **Enterprise** | Enterprise offering | Placeholder |
| **Privacy / Terms / Accessibility** | Legal, compliance | Implement (minimal) |

### Footer Link Strategy

**Option A (Conservative):** Remove links to non-existent pages; keep only `/`, `/contact`, `/research`, `/docs`, Clox, and external links that work.

**Option B (Progressive):** Create minimal placeholder pages for all footer links — "Coming soon" or redirect to contact.

**Recommendation:** Option A for Tier 1 pages; Option B only for Privacy, Terms, Accessibility (legal requirement).

---

## Part 4: Docs Page Proposal

### Purpose

- Developer onboarding for Clox (and future CIF SDK)
- API reference, quickstart, tutorials
- SEO for "Clox documentation", "CIF SDK", "smart contract AI"

### Architecture Options

| Option | Structure | Best for |
|--------|-----------|----------|
| **A: Single-page docs** | One scrollable page: Quickstart → API → Examples → FAQ | Minimal scope, fast to ship |
| **B: Multi-route docs** | `/docs`, `/docs/quickstart`, `/docs/api`, `/docs/tutorials` | Scalable, better SEO |
| **C: External docs** | Link to external docs (e.g., docs.cogerphere.com, Notion, GitBook) | Zero build, but less control |

### Proposed Structure (Option B — Scalable)

```
/docs                    → Docs landing (overview, quick links)
/docs/quickstart         → Get started with Clox in 5 min
/docs/api                → API reference (placeholder)
/docs/tutorials          → Tutorials index (placeholder)
/docs/cif                → CIF SDK (when ready)
```

### Content for `/docs` Landing

- Hero: "Documentation — Build with Clox and CIF"
- Cards: Quickstart, API Reference, Tutorials, CIF SDK (coming soon)
- CTA: Try Clox, Join community, Contact

### Implementation Note

- Use Next.js App Router: `app/docs/layout.tsx`, `app/docs/page.tsx`, `app/docs/quickstart/page.tsx`
- Sidebar nav in layout for doc sections
- MDX optional for future blog/docs content

---

## Part 5: SEO & Technical Improvements

### Current SEO State

- ✅ Metadata in layout (title, description, OG, Twitter)
- ✅ JsonLd (Organization, WebSite)
- ✅ Sitemap (home, contact)
- ✅ robots.ts
- ⚠️ Canonical URLs only on root
- ⚠️ No page-specific metadata for contact
- ❌ Sitemap missing new pages
- ❌ No BreadcrumbList, no Article schema for blog/research

### Proposed Improvements

| Item | Action |
|------|--------|
| **Sitemap** | Add `/research`, `/about`, `/news`, `/docs` and sub-routes |
| **Page metadata** | Add layout.tsx + metadata for each new page |
| **JsonLd** | Add ResearchProject schema for /research; BreadcrumbList for docs |
| **Keywords** | Shift from "Web3" to "AI research", "context intelligence", "LLM", "intelligent systems" |
| **Internal linking** | Research → Docs, Home → Research, About → Careers |

### Metadata Template (New Pages)

```ts
export const metadata = {
  title: "Page Name",
  description: "...",
  openGraph: { title, description, url: `${BASE_URL}/path` },
  twitter: { card, title, description },
  alternates: { canonical: `${BASE_URL}/path` },
};
```

---

## Part 6: Execution Plan (Phased, Non-Breaking)

### Phase 1: Core Pages (No Breaking Changes)

1. **Create `/research`** — CIF-focused page (Option A from Research proposal)
2. **Create `/about`** — Mission, values, team placeholder
3. **Create `/news`** — News landing + placeholder for "Coming soon" or 1–2 stub posts
4. **Update sitemap** — Add new URLs
5. **Update footer** — Ensure Research, About, News link correctly

**Risk:** None. Only adds pages.

---

### Phase 2: Home Page Revamp

1. **Revise hero** — New headline, subtext (AI lab-first)
2. **Revise floating dots** — Replace Web3 with Safety or Context Intelligence
3. **Add Research teaser** — Card linking to /research (CIF)
4. **Revise Core Principles** — Safety, Research, Impact (de-emphasize Web3)
5. **Revise CTA** — Dual CTA: Try Clox + View Research

**Risk:** Low. Content-only changes. Test on staging.

---

### Phase 3: Docs Page

1. **Create `/docs` layout** — Sidebar, metadata
2. **Create `/docs` landing** — Overview, quick links
3. **Create `/docs/quickstart`** — Clox quickstart (or placeholder)
4. **Create `/docs/api`** — Placeholder
5. **Update sitemap and footer**

**Risk:** Low. New routes only.

---

### Phase 4: Safety, Careers, Footer Cleanup

1. **Create `/safety`** — AI safety stance, practices
2. **Careers** — Placeholder or link to external jobs board
3. **Footer cleanup** — Remove or replace dead links:
   - Keep: Products (Clox), Docs, Research, About, Contact, Privacy, Terms
   - Remove or placeholder: Pricing, Enterprise, Web3, Developers, AI, Consulting, Tutorials, Community, Blog (until pages exist)

**Risk:** Low. Improves UX, avoids 404s.

---

### Phase 5: SEO & Polish

1. **JsonLd** — ResearchProject, BreadcrumbList
2. **Keywords** — Update layout metadata
3. **Privacy, Terms, Accessibility** — Minimal pages if not present
4. **Analytics** — Verify Vercel Analytics

**Risk:** None.

---

## Part 7: Final Page Inventory (Post-Execution)

| Route | Purpose |
|-------|---------|
| `/` | Home — AI lab mission, research teaser, Clox, principles, CTA |
| `/research` | CIF and research projects |
| `/about` | Company, mission, values, team |
| `/news` | Announcements, releases |
| `/docs` | Documentation landing |
| `/docs/quickstart` | Clox quickstart |
| `/docs/api` | API reference |
| `/safety` | AI safety |
| `/contact` | Contact form |
| `/careers` | Jobs (placeholder or external) |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/accessibility` | Accessibility |

**External:** Clox (cogy01.vercel.app)

---

## Part 8: Content Copy Snippets (Ready to Use)

### Home Hero (AI Lab-First)

**Headline:** "Building Intelligent Systems That Scale"  
**Subtext:** "Cogerphere is an AI research lab dedicated to reliable, interpretable, and human-aligned intelligent systems. We conduct frontier research and translate it into practical tools — from context intelligence to secure smart contract generation."

### About Mission

"Cogerphere exists to advance AI research that benefits humanity. We build systems that are transparent, safe, and built for real-world impact. Our work spans context intelligence for LLMs, AI safety, and practical applications in Web3 and beyond."

### Research Teaser (Home)

**Title:** "Context Intelligence Framework"  
**Subtitle:** "Adaptive compression and drift detection for LLM context windows."  
**CTA:** "Explore our research →"

---

## Summary: What to Execute

1. **Research page** — Implement (Option A)
2. **About page** — Implement (minimal)
3. **News page** — Implement (placeholder)
4. **Docs page** — Implement (landing + quickstart placeholder)
5. **Home revamp** — AI lab-first, less Web3
6. **Footer cleanup** — Remove dead links, add new pages
7. **Sitemap + SEO** — Update metadata, sitemap, JsonLd

**Estimated scope:** 4 new pages + 1 major revamp + SEO. No breaking changes if phased correctly.
