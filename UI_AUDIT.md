# Portfolio UI/UX Audit

> Reviewed as: ruthless conversion-obsessed startup founder + first-time visitor walkthrough.

---

## CRITICAL — Fix immediately, these are breaking the experience

### 1. Project detail pages are a completely different website
**Pages:** `projects/canvas-redesign.html`, `projects/fridge-genie.html`
**Problem:** These still use the OLD Tailwind design (#1a1a1a flat dark, Inter font, fixed sidebar). User clicks a beautiful glass-morphism card on the listing page and lands on what looks like a different site. Instant trust destruction.
**Fix:** Rewrite project detail pages to match the ocean/glass design system.

### 2. "← Home" back button feels broken and redundant
**Pages:** `design.html`, `coding.html`
**Problem:** The topbar already has nav links that go to `index.html#design`, `index.html#coding` — these ARE home links. Adding a separate "← Home" text link creates confusion: "Wait, aren't the nav links also going home?" It's also visually awkward — a plain text link sitting next to a glass-morphism theme toggle button.
**Fix:** Remove the "← Home" text link. Replace with the site name/logo as the home link (like every professional site). The hamburger sidebar already has "About" linking home.

### 3. Topbar nav on listing pages points to HOME page anchors, not sibling pages
**Pages:** `design.html`, `coding.html`
**Problem:** On design.html, clicking "Coding Projects" in the topbar goes to `index.html#coding` — it navigates you AWAY to the home page's section, not to `coding.html`. User expects to go to the coding listing page. This is disorienting.
**Fix:** On listing pages, topbar nav should link to sibling listing pages directly (`design.html`, `coding.html`), not to index.html anchors.

### 4. Theme doesn't persist across pages
**Problem:** index.html uses `data-theme` attribute + localStorage key `'theme'`. Project detail pages use Tailwind `class="dark"` + localStorage key `'color-theme'`. User toggles to light mode on home, clicks into a project — back to dark. Feels buggy.
**Fix:** Unify theme storage. All pages should read/write the same localStorage key.

---

## HIGH IMPACT — Noticeably hurting the experience

### 5. Home page project cards are NOT clickable
**Page:** `index.html`
**Problem:** The cards in "Design Projects" and "Coding Projects" sections are `<div>` elements, not `<a>` links. User sees a beautiful hover animation, tries to click "Canvas Redesign" — nothing happens. The ONLY way to reach projects is via the tiny "View all ↗" link. Most visitors will never find it.
**Fix:** Wrap each card in an `<a>` tag linking to the project detail page (or listing page).

### 6. Dead links everywhere — user clicks, nothing happens
**Locations:**
- Home: Resume/CV sidebar link → `#`
- Home: Google Scholar, LinkedIn, Instagram, Discord social links → `#`
- Home: Experiments "View all ↗" → `#`
- Listing pages: "New Design Project" card → `#`
- Listing pages: "New Coding Project" card → `#`
- Listing pages: Social links → `#`
**Problem:** A `#` href scrolls to top, which feels broken. Every dead click erodes trust.
**Fix:** Either add real URLs or remove the links entirely. For "Coming Soon" cards, remove the `<a>` wrapper and style as non-interactive.

### 7. Two project cards on home are fake/placeholder
**Page:** `index.html`
**Problem:** "ML Project" and "CV Project" in the Coding section are placeholders with generic descriptions. "More Projects — Coming soon" takes up prime real estate. A hiring manager sees these and thinks "this person has nothing to show."
**Fix:** Either populate with real content or remove them. Show only what's real. Less is more.

### 8. No clear "you are here" indicator on listing pages
**Pages:** `design.html`, `coding.html`
**Problem:** The page header says "01. Design Projects" but there's no breadcrumb, no highlighted state in the topbar (the active highlight is on `index.html#design` which is a different URL). User doesn't know where they are in the site hierarchy.
**Fix:** Highlight the current section in the topbar nav. Add a subtle breadcrumb or site name link.

---

## NICE TO HAVE — Polish that separates good from great

### 9. No page transition — hard cuts between pages
**Problem:** Home page has beautiful fade-in animations, but navigating to design.html is a hard browser reload with white flash. Breaks the immersive ocean feel.
**Fix:** Add a simple fade-out/fade-in transition between pages, or consider a SPA approach.

### 10. Mobile: hamburger menu but no quick way home
**Problem:** On mobile (< 700px), topbar nav is hidden. Only the hamburger menu gives navigation. But opening the sidebar to click "About" just to go home is 2 taps instead of 1.
**Fix:** Add the site name as a home link in the topbar, visible on mobile.

### 11. Experiments section is empty weight
**Page:** `index.html`
**Problem:** Three gradient boxes with "01", "02", "More..." labels and zero content. It's decorative filler that a sharp visitor will notice immediately. If you have nothing to show, don't show the section.
**Fix:** Hide until real content exists, or add actual experiment previews.

### 12. Hero statement is academic, not compelling
**Page:** `index.html`
**Problem:** "I build human-centered technologies that honor learner complexity through multimodal interaction and reflective inquiry" — this reads like an abstract, not a portfolio hook. A recruiter gives you 5 seconds. This sentence takes 10 to parse.
**Fix:** Lead with what you DO and what IMPACT it has. Save the academic framing for the about section.

### 13. "Portfolio 2024-2025" is stale
**Problem:** Old listing pages had "Portfolio 2024-2025" in the footer. It's April 2026 now.
**Fix:** Already removed in the redesign, but verify no remnants.

---

## First-time user walkthrough notes

1. **Land on home** — Beautiful. Ocean vibes, 3D geometry, glass effects. Impressed. Scroll down.
2. **See Tech Stack** — Nice, I know what this person works with.
3. **See Design Projects** — Cards look clickable... click... nothing. Confused. Find tiny "View all ↗". Click it.
4. **Land on design.html** — Oh nice, same visual style now. See "← Home" and also see "Design Projects" highlighted in topbar. Two ways home? Weird. Click "Coding Projects" in topbar expecting coding.html... lands on home page scrolled to coding section. Disorienting.
5. **Navigate back to design.html** — Click "Canvas Redesign" card. Land on project page — **completely different design**. Gray flat background, different font, different nav. Did I leave the site?
6. **Try to go back** — "← Back to Portfolio" goes to index.html. But I came from design.html. The back link doesn't respect my navigation path.
7. **Toggle light mode** — Switch to light on project page. Go back to home. Dark mode again. Theme didn't stick.

**Verdict:** The visual craft is exceptional but the navigation is actively confusing. Fix the flow and this portfolio will be elite.
