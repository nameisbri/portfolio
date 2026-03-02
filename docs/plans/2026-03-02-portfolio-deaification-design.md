# Portfolio De-AI-ification Design

## Problem
The portfolio reads like an AI-generated freelance agency landing page. It's too salesy for a personal portfolio aimed at hiring managers. Phrases like "agency-grade results at startup speed", "100% Client Satisfaction", and "2x the speed and 100% of the quality" undermine credibility.

## Target audience
Hiring managers and employers evaluating a Product Designer & Developer candidate.

## Tone
Sharp and direct. No buzzwords, no marketing fluff. Let the work speak.

## Approach
Copy rewrite + light structural adjustments (Approach B). The visual design stays. The words change. Four sections get removed. Remaining sections get rewritten and minor layout fixes fill the gaps.

---

## Sections to REMOVE

### Services
Freelance service listings. Every description reads like a Fiverr template. Not relevant for job seekers.

### Process
"A Seamless Path to Launch" with a 3-step agency framework. Contains the worst offender: "2x the speed and 100% of the quality."

### FloatingCTA
Sticky "Start Your Project" button. Pure sales mechanism.

### SocialProof
Stats bar with "8+ Years Experience", "20+ Products Launched", "100% Client Satisfaction." The last one is unverifiable and damages credibility. Move useful stats (years, launches) into Experience section as context.

---

## Sections to REWRITE

### Hero
**Remove:**
- "From Idea to App Store in Weeks, Not Months"
- "agency-grade results at startup speed" subtitle
- Marketing labels ("Fast Delivery", "Client-Focused", "End-to-End")

**Replace with:**
- Title that states what you build (mobile apps, web products)
- One-sentence subtitle about your background (designer turned developer, full product lifecycle)
- Tech labels or no labels at all

### Projects
**Keep:** Project descriptions (most authentic section)
**Remove:** "Have a project in mind? Let's discuss how I can help bring it to life"
**Tone down:** Any remaining marketing language in impact sections

### Tech/Skills
**Remove:** "Why It's Efficient" subsection (reads like a pitch)
**Rewrite:** Intro paragraph to be factual, not promotional
**Keep:** Tech stack listing and categories

### Experience
**Remove:**
- Intro paragraph about "playing telephone"
- "Ready to bring your product idea to life?" CTA
**Keep:** Work history, education (both solid and specific)
**Add:** Stats from removed SocialProof as inline context (years, launches)

### Contact
**Rewrite:** "Let's Build Your Roadmap" to something simpler ("Get in touch")
**Remove:** "Strategy call" framing
**Keep:** Form functionality

### Footer
**Rewrite:** Bio to be brief and factual
**Remove:** "Ready to Start Your Project?" CTA, "bring your vision to life"
**Keep:** Social links, resume download

---

## Structural adjustments
- Remove imports/routes for Services, Process, FloatingCTA, SocialProof from App.tsx
- Adjust spacing/flow where removed sections leave gaps
- Ensure page still flows naturally: Hero > Projects > Tech > Experience > Contact > Footer
