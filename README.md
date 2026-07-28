# Ask AR Tariq — Software Health Scorecard

> A conversion funnel disguised as a free audit tool. Non-technical founders answer 8 questions, get a scored report on their software platform — and I get a warm lead with their actual problems laid out.

**Live:** [ask.artariq.dev](https://ask.artariq.dev)

---

## The Problem

Consultants sell audits for £500–£2,000. Founders don't buy audits — they buy peace of mind. The gap between "I think something's wrong" and "I'll pay someone to tell me what" is where most consulting relationships never start.

Meanwhile, cold outreach from an engineer you've never met lands in the trash. You need trust before you can sell.

---

## The Solution

Flip the funnel. Instead of asking founders to pay for an assessment, give them a free one that's valuable enough on its own — and structure the questions so their answers become your qualification criteria.

The site has three entry paths:

### 1. Audit (assess → calculator → scored report)

The primary funnel. A landing page with two cards:

- **Assess** — Pick a category (Cloud, Fullstack, Frontend, Backend, CRM, Pipeline, Growth), answer 8 pain-driven questions, get an instant letter-grade scorecard across 4 sub-categories
- **Diagnose** — A pain point grid with 30+ specific issues grouped by category. Select what hurts, hit the button, get a pre-written email to send me

Both paths converge on the same CTA: **send me an email with your results**. The email includes:
- Their name (optional but encouraged — you're warmer if you give it)
- Their scored report or pain points
- 3 specific questions I'll answer within 24 hours

I respond with ranked fixes. If they want me to implement them, we talk.

### 2. Build (build → recommendation)

For founders who want to build something new instead of fix something broken. Same 8-question format, but the output is a build recommendation path — no-code, freelancer, or full build — with budget and timeline alignment.

### 3. Direct Email (pain point grid → analyze → email)

For founders who don't want a scored report — they just know things are wrong and want to describe it. Select problems from the grid, edit the pre-written message, send it over.

### The Conversion Architecture

```
Landing (hook + value prop)
  ├─ Assess → Category picker → Calculator (8 questions) → Scored report
  │    └─ Name field → Editable email → mailto: link → My inbox
  │         └─ I reply within 24h with 3 ranked fixes
  │              └─ They decide if they want help implementing
  ├─ Diagnose → Pain point grid → Analyze → mailto: link
  └─ Build → Type picker → Calculator (8 questions) → Recommendation
```

**No sign-up, no user database, no backend.** Every report is computed client-side. The "conversion" is a `mailto:` link with the results in the body. There's nothing to maintain — no sessions, no state, no auth.

---

## What Makes It Interesting

- **No backend, no database, no user accounts.** The entire funnel runs on static Next.js. Reports are computed in the browser. The "lead capture" is a `mailto:` link. Zero infrastructure, zero data storage liability, zero GDPR surface area.
- **Pain-driven questions, not maturity questions.** Instead of "how mature is your DevOps practice?", the questions are "Are you paying for cloud services you stopped using months ago?" and "If your systems went down today, how long before you'd lose a customer?". These surface concrete problems — which is exactly what I need to sell my services.
- **"I don't know" is the strongest signal.** Every question has an "I don't know" option worth -1 point. A founder scoring low isn't a bad outcome — they're the most qualified lead. They know enough to know they have a problem, and they just got proof.
- **The email is the CRM.** There's no stored leads, no pipeline tracking, no analytics beyond Vercel's built-in. Every qualified lead lands in my inbox with their full context in the email body. I reply with 3 specific fixes. That's the entire sales process.
- **Build path calculator is a qualification gate.** Before someone asks me to build their product, the build calculator surfaces their budget, timeline, clarity level, and team situation. I can pre-qualify before the first conversation.
- **One-page pain diagnosis for non-buyers.** Some founders won't run a calculator — they just want to describe their problems and see if I can help. The pain grid covers 30+ issues across 11 categories. Select, edit, send.

---

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **React 19** — client components for interactive calculators
- **Tailwind CSS 4** — utility-first styling, dark mode
- **Framer Motion** — page transitions and micro-interactions
- **`mailto:` links** — the entire conversion mechanism (no backend)

**Deployed on Vercel.** Zero servers, zero databases, zero API routes.

---

## Scoring Engine

| Score | Grade | Meaning |
|-------|-------|---------|
| 95%+ | A | Healthy — minor improvements |
| 75–94% | B | Good — some gaps worth addressing |
| 55–74% | C | Moderate — real issues to fix |
| 35–54% | D | Weak — significant problems |
| <35% | F | Critical — needs urgent attention |

Each answer scores 5, 3, 0, or -1. Category scores are averaged to a percentage (clamped at 0 minimum). The overall grade is the average of all categories.

---

## Project Structure

```
src/
├── app/
│   ├── (landing)/page.tsx       # Landing page with 3 entry paths
│   ├── assess/page.tsx          # Category picker for audit
│   ├── assess/[calculator]/     # 8-question calculator form
│   ├── report/[id]/page.tsx     # Scored report page
│   ├── analyze/page.tsx         # Pain point email composer
│   ├── build/page.tsx           # Build path picker
│   ├── build/[type]/page.tsx    # Build calculator form
│   └── build/report/[type]/     # Build recommendation
├── lib/
│   ├── calculators/
│   │   ├── config.ts            # 7 calculator definitions with questions
│   │   └── engine.ts            # Scoring engine (5/3/0/-1 spread)
│   ├── build/
│   │   └── config.ts            # 6 build path calculators
│   ├── pain-points.ts           # 30+ issue definitions across 11 categories
│   ├── email-templates.ts       # Report + pain point email builders
│   └── steps.tsx                # Post-email expectations
└── components/
    ├── PainPointGrid.tsx        # Selectable problem grid
    ├── calculators/
    │   ├── CalculatorForm.tsx   # Shared 8-question form component
    │   └── ReportCard.tsx       # Scored category breakdown
    └── GridBg.tsx               # Background decoration
```

---

## Development

```bash
npm install
npm run dev        # localhost:3000
npm run build      # static export
```

---

## Contact

- **Email:** artariq.dev.1@gmail.com
- **Portfolio:** [artariq.dev](https://artariq.dev)
- **LinkedIn:** [linkedin.com/in/artariq-dev](https://linkedin.com/in/artariq-dev)
