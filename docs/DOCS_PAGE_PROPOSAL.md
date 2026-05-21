# Docs Page Proposal

**Context:** Cogerphere needs a `/docs` page to avoid 404s, support developer onboarding for Clox, and improve SEO. See `MASTER_EXECUTION_PLAN.md` for full context.

---

## Purpose

- Developer funnel for Clox (smart contract builder)
- Future: CIF SDK, API references
- SEO for "smart contract builder", "AI contract generation", "Clox documentation"
- Single entry point for technical documentation

---

## Option A: Minimal Docs Hub )

**Concept:** Single landing page with clear navigation to resources.

**Structure:**

1. **Hero** "Documentation — Build with Cogerphere"
2. **Quick Start** — 3-step: Sign up → Try Clox → Integrate
3. **Product Cards:**
  - **Clox** — Smart contract builder. Link to cogy01.vercel.app + "API" / "CLI" placeholders
  - **CIF SDK** — (Coming soon) Context Intelligence Framework
4. **Resources** — Tutorials, Support, Contact
5. **CTA** — Try Clox, Contact for enterprise

**Pros:** Fast to ship, no external dependencies, fixes 404  
**Cons:** Limited depth; may need migration when docs grow

**Best for:** Immediate launch, establishing structure

---

## Option B: Embedded External Docs

**Concept:** `/docs` redirects or embeds external doc system (GitBook, Docusaurus, ReadMe).

**Structure:**

- `/docs` → Redirect to `docs.cogerphere.com` or subdomain
- Or: `/docs` landing with iframe/embed to external docs

**Pros:** Full doc system, search, versioning  
**Cons:** Requires external setup, subdomain, CORS/embed config

**Best for:** When you have substantial doc content and a doc team

---

## Option C: Next.js MDX Docs

**Concept:** Docs as MDX files in repo, rendered by Next.js.

**Structure:**

- `/docs` — Landing
- `/docs/getting-started`
- `/docs/clox/overview`
- `/docs/clox/api`
- `/docs/clox/cli`
- `/docs/cif` (when ready)

**Pros:** Full control, SEO, versioned, no external deps  
**Cons:** More build time, content maintenance

**Best for:** When you're ready to invest in doc content and structure

---

## Content for Option A (Minimal Hub)

### Hero

> **Documentation**  
> Build intelligent systems with Cogerphere. From AI-powered smart contracts to context-aware LLMs.

### Clox Card

- **Title:** Clox — Smart Contract Builder
- **Description:** Generate production-ready smart contracts with AI. Secure by default, multi-chain support.
- **Links:** [Try Clox](cogy01.vercel.app), API Reference (placeholder), CLI (placeholder)

### CIF Card (Optional)

- **Title:** CIF SDK — Context Intelligence Framework
- **Description:** Adaptive compression and drift detection for LLM context windows. Coming soon.
- **Link:** [Research](/research)

### Resources

- Getting Started
- Tutorials (link to /learn)
- Support (link to /contact)
- Enterprise (link to /contact)

---

## Recommendation

**Phase 1:** Implement **Option A** — Minimal Docs Hub.  
**Phase 2+:** Migrate to **Option C** when doc content and structure mature.

---

## SEO Notes

- Title: "Documentation | Cogerphere – AI Research Lab"
- Description: "Cogerphere documentation. Build with Clox smart contract builder, CIF SDK, and intelligent systems. Get started, API reference, tutorials."
- Keywords: documentation, Clox, smart contract, API, developer, CIF

