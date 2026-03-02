# Portfolio De-AI-ification Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Strip all AI-generated, salesy copy from the portfolio and rewrite it for hiring managers. Remove 4 freelance-oriented sections, rewrite 6 remaining sections with sharp, direct tone.

**Architecture:** Copy-only changes + light structural adjustments. No new components. Remove 4 section components from App.tsx, rewrite copy in 6 remaining sections, simplify the contact form fields, update navbar links.

**Tech Stack:** React, TypeScript, SCSS (existing stack, no changes)

---

### Task 1: Remove sections from App.tsx

**Files:**
- Modify: `src/App.tsx:1-56`

**Step 1: Remove imports and component usage for Services, Process, FloatingCTA, SocialProof**

Remove these import lines:
```tsx
import SocialProof from "./components/sections/SocialProof";
import Process from "./components/sections/Process";
import Services from "./components/sections/Services";
import FloatingCTA from "./components/sections/FloatingCTA";
```

Remove these JSX lines from the `<main>` block:
```tsx
<SocialProof />
<Process />
<Services />
```

Remove this line from after `</footer>`:
```tsx
<FloatingCTA />
```

Reorder remaining sections in `<main>` to: `Hero > Projects > Tech > Experience > ContactForm`

**Step 2: Verify the app compiles**

Run: `cd /Users/gabriela-personal/brainstation/learning/portfolio && npm run build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "chore: remove Services, Process, FloatingCTA, SocialProof sections"
```

---

### Task 2: Rewrite Hero section copy

**Files:**
- Modify: `src/components/sections/Hero.tsx:200-226`

**Step 1: Replace Hero copy**

Replace the title (line 201-204):
```tsx
<h1 className="hero__title">
  From Idea to App Store in{" "}
  <span className="text-gradient">Weeks, Not Months</span>
</h1>
```
With:
```tsx
<h1 className="hero__title">
  I design and build{" "}
  <span className="text-gradient">mobile apps & web products</span>
</h1>
```

Replace the subtitle (line 206-208):
```tsx
<p className="hero__subtitle">
  I build high-performance mobile apps and conversion-driven websites for founders who need to move fast. By combining Product Design with AI-Accelerated Development, I deliver agency-grade results at startup speed.
</p>
```
With:
```tsx
<p className="hero__subtitle">
  Product designer turned developer with 8+ years in digital products. I work across the full stack — from Figma to React Native to deployment.
</p>
```

Replace the CTA buttons (lines 210-225):
```tsx
<div className="hero__buttons">
  <a
    href="#contact"
    className="button button--primary hero__cta-btn"
  >
    <span>Start Your Project</span>
    <ArrowRight weight="bold" />
  </a>
  <a
    href="#projects"
    className="button button--secondary hero__view-work-btn"
  >
    <span>View My Work</span>
    <ArrowRight weight="bold" />
  </a>
</div>
```
With:
```tsx
<div className="hero__buttons">
  <a
    href="#projects"
    className="button button--primary hero__cta-btn"
  >
    <span>See My Work</span>
    <ArrowRight weight="bold" />
  </a>
  <a
    href="/Resume_Gabriela_Barreira.pdf"
    download="Resume_Gabriela_Barreira.pdf"
    target="_blank"
    className="button button--secondary hero__view-work-btn"
  >
    <span>Download Resume</span>
    <ArrowRight weight="bold" />
  </a>
</div>
```

**Step 2: Replace marketing skill labels in the skill cloud**

Replace these skill cloud labels with tech-focused ones:
- "End-to-End" (line 518) → "Node.js"
- "Modern Design" (line 540) → "SCSS"
- "Fast Delivery" (line 562) → "Express"
- "Client-Focused" (line 583) → "MySQL"
- "Business Sites" (line 496) → "Git"
- "Landing Pages" (line 474) → "JavaScript"

Also update the corresponding CSS class names to match:
- `hero__skill--endtoend` → `hero__skill--nodejs`
- `hero__skill--modern` → `hero__skill--scss`
- `hero__skill--fast` → `hero__skill--express`
- `hero__skill--client` → `hero__skill--mysql`
- `hero__skill--business` → `hero__skill--git`
- `hero__skill--landing` → `hero__skill--javascript`

Update icons for the replaced labels:
- "Node.js" → `<TreeStructure size={20} weight="duotone" />` (add TreeStructure import)
- "Express" → `<BracketsCurly size={20} weight="duotone" />`
- "MySQL" → `<TreeStructure size={20} weight="duotone" />`
- "SCSS" → `<PaintBucket size={20} weight="duotone" />`
- "Git" → `<Stack size={20} weight="duotone" />`
- "JavaScript" → `<BracketsSquare size={20} weight="duotone" />`

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "copy: rewrite Hero section for hiring managers"
```

---

### Task 3: Rewrite Projects section copy

**Files:**
- Modify: `src/components/sections/Projects.tsx:33-253`

**Step 1: Rewrite project descriptions to remove marketing language**

Replace the section subtitle (lines 142-146):
```tsx
<p className="projects__subtitle">
  A collection of freelance projects, side projects, and product work
  showcasing my expertise in React Native mobile apps, web development,
  product design, and AI-enhanced development workflows. Each project
  demonstrates end-to-end product thinking—from design to implementation.
</p>
```
With:
```tsx
<p className="projects__subtitle">
  Selected work across mobile apps, web development, and product design.
</p>
```

Replace Discloser app description (line 37-38):
```
"A secure health-tech app built for rapid scaling. A native iOS app built with React Native that allows users to manage and share sensitive health information privately. Features OCR extraction from documents, automated reminders, and secure sharing capabilities."
```
With:
```
"A React Native iOS app for managing and sharing sensitive health information. Features OCR document extraction, automated reminders, and secure sharing. Designed and built end-to-end from concept to App Store beta."
```

Replace Discloser landing description (line 68-69):
```
"A modern, conversion-focused landing page designed and developed for the Discloser mobile app. Features responsive design, clear value proposition, and seamless user experience to drive app downloads. Built with attention to UX principles and conversion optimization."
```
With:
```
"Marketing site for the Discloser mobile app. Responsive design, clear information architecture, and optimized for mobile. Built with React and TypeScript."
```

Replace Yellow Brolly description (line 93-94):
```
"A high-conversion landing page for a premium consultancy. A professional consulting business website designed and developed for Yellow Brolly Co. Features clean, modern design, clear service offerings, and optimized user experience to showcase consulting expertise and attract clients."
```
With:
```
"Professional consulting website for Yellow Brolly Co. Clean, modern design with clear service presentation and responsive layout. Freelance project handling design and development."
```

Replace Discloser landing outcome (line 88):
```
"Live at discloser.app • Optimized for conversions and mobile experience"
```
With:
```
"Live at discloser.app"
```

Replace Yellow Brolly outcome (line 115):
```
"Delivered on time • Professional brand presence • Ready for client acquisition"
```
With:
```
"Delivered and live"
```

Replace highlightedSkills for Discloser landing (line 71-72):
```
"Web design, UX/UI design, responsive development, conversion optimization, product marketing, AI-assisted development"
```
With:
```
"Web design, UX/UI design, responsive development, React, TypeScript"
```

Replace highlightedSkills for Yellow Brolly (line 95-96):
```
"Business website design, UX/UI design, brand identity, responsive development, conversion optimization, freelance project management"
```
With:
```
"Business website design, UX/UI design, brand identity, responsive development"
```

Replace highlightedSkills for Discloser iOS (line 40-41):
```
"React Native iOS development, product design, UX/UI design, OCR integration, native mobile development, AI-assisted workflows"
```
With:
```
"React Native, iOS development, product design, UX/UI, OCR integration"
```

**Step 2: Remove the sales CTA at the bottom**

Remove the entire CTA div (lines 246-253):
```tsx
<div className="projects__cta">
  <p className="projects__cta-text">
    Have a project in mind? Let's discuss how I can help bring it to life.
  </p>
  <a href="#contact" className="button button--primary">
    Start Your Project
  </a>
</div>
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/sections/Projects.tsx
git commit -m "copy: rewrite Projects section, remove marketing language"
```

---

### Task 4: Rewrite Tech/Skills section

**Files:**
- Modify: `src/components/sections/Tech.tsx:124-181`

**Step 1: Rewrite the intro paragraph**

Replace (line 129-131):
```tsx
<p>
  I bring together product design, development, and modern AI-enhanced workflows to deliver complete digital solutions. Whether you need a mobile app, a website, or a full product from concept to launch, I have the expertise to make it happen efficiently and beautifully.
</p>
```
With:
```tsx
<p>
  Design and development across mobile, web, and full-stack. I use AI-assisted tools in my workflow and handle projects from concept through deployment.
</p>
```

**Step 2: Rewrite "What I Build" and "How I Work", remove "Why It's Efficient"**

Replace the entire `tech__categories` div (lines 159-180):
```tsx
<div className="tech__categories">
  <div className="tech__category-group">
    <h3 className="tech__category-title">What I Build</h3>
    <p>
      Mobile apps (iOS & Android), responsive websites, and full-stack web applications. I handle everything from the initial design to final deployment, ensuring your product works beautifully across all devices.
    </p>
  </div>

  <div className="tech__category-group">
    <h3 className="tech__category-title">How I Work</h3>
    <p>
      I combine design thinking with technical expertise to create products that look great and work seamlessly. Every project includes thoughtful UX/UI design, clean code, and attention to detail.
    </p>
  </div>

  <div className="tech__category-group">
    <h3 className="tech__category-title">Why It's Efficient</h3>
    <p>
      I leverage modern AI-assisted development tools and workflows to deliver high-quality results faster. This means you get your product sooner without compromising on quality or design.
    </p>
  </div>
</div>
```
With:
```tsx
<div className="tech__categories">
  <div className="tech__category-group">
    <h3 className="tech__category-title">What I Build</h3>
    <p>
      Mobile apps (iOS & Android) with React Native, responsive websites, and full-stack web applications. From initial design in Figma through deployment.
    </p>
  </div>

  <div className="tech__category-group">
    <h3 className="tech__category-title">How I Work</h3>
    <p>
      Design and code under one roof. I start in Figma, build in React/React Native, and use AI-assisted tools (Claude, Cursor) to move faster without cutting corners.
    </p>
  </div>
</div>
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/sections/Tech.tsx
git commit -m "copy: rewrite Tech section, remove 'Why It's Efficient' pitch"
```

---

### Task 5: Rewrite Experience section

**Files:**
- Modify: `src/components/sections/Experience.tsx:1-219`

**Step 1: Replace the section heading and intro**

Replace heading (line 86):
```tsx
<h2 className="section__heading">The Full-Stack Edge</h2>
```
With:
```tsx
<h2 className="section__heading">Experience</h2>
```

Replace intro paragraph (lines 88-89):
```tsx
<p className="experience__intro">
  Most founders get stuck playing 'telephone' between a designer and a developer. I bridge that gap. With 8+ years of experience and 20+ successful launches, I handle the entire lifecycle. You get the expertise of a full agency with the agility and direct communication of a single dedicated partner.
</p>
```
With:
```tsx
<p className="experience__intro">
  8+ years across product design and development. 20+ products shipped. I work across the full lifecycle — research, design, build, deploy.
</p>
```

**Step 2: Rewrite the work experience descriptions**

Replace freelance description (lines 14-18):
```tsx
description: [
  "Design and develop mobile apps, websites, and digital products for clients across various industries",
  "Deliver end-to-end solutions from initial concept through design, development, and launch",
  "Leverage AI-enhanced workflows to provide efficient, high-quality results for freelance clients",
],
```
With:
```tsx
description: [
  "Design and develop mobile apps, websites, and digital products for clients across industries",
  "Handle full product lifecycle from concept through design, development, and deployment",
  "Use AI-assisted tools (Claude, Cursor) to streamline development workflows",
],
```

Replace Precision Nutrition description (lines 26-28):
```tsx
description: [
  "Full-stack development including React application rebuilds and modern web development",
  "Focus on user experience, responsive design, and delivering quality technical solutions",
],
```
With:
```tsx
description: [
  "Full-stack development including React application rebuilds and feature work",
  "Focused on user experience, responsive design, and code quality",
],
```

**Step 3: Rewrite the skills tab content**

Replace `skillsExperience` array (lines 51-79):
```tsx
const skillsExperience = [
  {
    category: "What I Deliver",
    skills: [
      "Complete mobile apps built with React Native, from design to App Store and Play Store deployment",
      "Modern, responsive websites that work beautifully on all devices",
      "Full product development from initial concept through launch",
      "Professional design that reflects your brand and engages your users",
    ],
  },
  {
    category: "How I Work",
    skills: [
      "Clear communication and regular updates throughout the project",
      "Efficient workflows using modern AI-assisted development tools",
      "Focus on quality and attention to detail in every deliverable",
      "Flexible collaboration that fits your timeline and needs",
    ],
  },
  {
    category: "Why Choose Me",
    skills: [
      "End-to-end capability: I handle both design and development, so you work with one person",
      "Modern approach: AI-enhanced workflows mean faster delivery without sacrificing quality",
      "Proven results: See my work in the projects above—real products, real clients",
      "Client-focused: Your success is my success, and I'm committed to delivering value",
    ],
  },
];
```
With:
```tsx
const skillsExperience = [
  {
    category: "Development",
    skills: [
      "React Native mobile apps (iOS & Android) from prototype to App Store",
      "React, TypeScript, Node.js, Express, MySQL full-stack development",
      "Responsive web applications with modern tooling",
      "AI-assisted development workflows with Claude and Cursor",
    ],
  },
  {
    category: "Design",
    skills: [
      "Product design from user research through high-fidelity prototypes",
      "UX/UI design in Figma with a focus on usability",
      "Design systems and component libraries",
      "Responsive design across mobile, tablet, and desktop",
    ],
  },
  {
    category: "Process",
    skills: [
      "Full product lifecycle: research, design, build, test, deploy",
      "Cross-functional collaboration with designers, developers, and stakeholders",
      "Agile methodologies and iterative development",
      "Version control with Git, CI/CD pipelines",
    ],
  },
];
```

**Step 4: Remove the sales CTA in the skills tab**

Remove (lines 202-211):
```tsx
<motion.div
  className="experience__skills-note"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <p>
    Ready to bring your product idea to life? I work with businesses, entrepreneurs, and organizations to create mobile apps, websites, and digital products that make an impact. Let's discuss your project and see how I can help you achieve your goals.
  </p>
</motion.div>
```

**Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 6: Commit**

```bash
git add src/components/sections/Experience.tsx
git commit -m "copy: rewrite Experience section, remove sales language"
```

---

### Task 6: Rewrite Contact form

**Files:**
- Modify: `src/components/sections/ContactForm.tsx:1-277`

**Step 1: Rewrite heading and subtitle**

Replace (line 96):
```tsx
<h2 className="section__heading">Let's Build Your Roadmap</h2>
```
With:
```tsx
<h2 className="section__heading">Get in Touch</h2>
```

Replace (lines 97-99):
```tsx
<p className="contact-form__subtitle">
  Fill out the form below to request a strategy call. I'll review your project details and get back to you within 24 hours.
</p>
```
With:
```tsx
<p className="contact-form__subtitle">
  Interested in working together? Send me a message and I'll get back to you within 24 hours.
</p>
```

**Step 2: Simplify form fields**

Remove the "budget" and "launchDate" fields from state (lines 9-19). Replace with:
```tsx
const [formData, setFormData] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
});
```

Remove the "primaryGoal" select field row (lines 171-188, the row containing primaryGoal).

Remove the "budget" and "launchDate" row (lines 190-217).

Update the "What are we building?" label to "What are you looking for?" and update options:
```tsx
<label htmlFor="projectType">What are you looking for?</label>
<select
  id="projectType"
  name="projectType"
  value={formData.projectType}
  onChange={handleChange}
>
  <option value="">Select a type (optional)</option>
  <option value="Full-time Role">Full-time Role</option>
  <option value="Contract Work">Contract Work</option>
  <option value="Freelance Project">Freelance Project</option>
  <option value="Collaboration">Collaboration</option>
  <option value="Other">Other</option>
</select>
```

Remove `required` from the projectType select since it's now optional.

**Step 3: Update the email template params**

Replace the emailjs.send params object (lines 52-63):
```tsx
{
  from_name: formData.name,
  from_email: formData.email,
  company: formData.company || "N/A",
  phone: formData.phone || "N/A",
  project_type: formData.projectType,
  primary_goal: formData.primaryGoal,
  budget: formData.budget,
  launch_date: formattedLaunchDate,
  message: formData.message,
  subject: `Strategy Call Request: ${formData.projectType}`,
}
```
With:
```tsx
{
  from_name: formData.name,
  from_email: formData.email,
  company: formData.company || "N/A",
  phone: formData.phone || "N/A",
  project_type: formData.projectType || "Not specified",
  message: formData.message,
  subject: `Portfolio Contact: ${formData.projectType || "General"}`,
}
```

Remove the `formattedLaunchDate` variable and its logic (lines 40-46) since launchDate is gone.

Update the form reset to match new state shape (lines 69-79):
```tsx
setFormData({
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
});
```

**Step 4: Rename the submit button**

Replace (line 245):
```tsx
<span>Request My Strategy Call</span>
```
With:
```tsx
<span>Send Message</span>
```

Replace success message (line 257):
```tsx
✓ Message sent successfully! I'll review your project details and get back to you within 24 hours.
```
With:
```tsx
✓ Message sent! I'll get back to you within 24 hours.
```

Update textarea placeholder (line 228):
```
"What are you looking to build? What challenges are you facing? Any specific requirements or questions?"
```
With:
```
"Tell me a bit about what you're looking for, or just say hello."
```

**Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 6: Commit**

```bash
git add src/components/sections/ContactForm.tsx
git commit -m "copy: rewrite Contact form for hiring managers, simplify fields"
```

---

### Task 7: Rewrite Footer

**Files:**
- Modify: `src/components/sections/Footer.tsx:1-103`

**Step 1: Replace the footer contact section copy**

Replace heading (line 21):
```tsx
<h2 className="footer__contact-title">Ready to Start Your Project?</h2>
```
With:
```tsx
<h2 className="footer__contact-title">Let's Connect</h2>
```

Replace bio text (lines 22-23):
```tsx
<p className="footer__contact-text">
  I'm a Product Designer & Developer specializing in React Native mobile apps, modern web applications, product design, and UX/UI. I leverage AI-assisted development workflows (Cursor, Claude, agent systems) to deliver efficient, high-quality solutions throughout the entire product lifecycle. Available for freelance projects, product design work, and development opportunities—let's bring your vision to life.
</p>
```
With:
```tsx
<p className="footer__contact-text">
  Product Designer & Developer based in Hamilton, Ontario. I build mobile apps and web products with React Native, React, and TypeScript. Open to full-time roles, contract work, and interesting projects.
</p>
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/sections/Footer.tsx
git commit -m "copy: rewrite Footer bio, remove sales CTA"
```

---

### Task 8: Update Navbar links

**Files:**
- Modify: `src/components/sections/Navbar.tsx:114-122`

**Step 1: Remove the "Services" nav link**

Remove this nav item (lines 114-122):
```tsx
<li className="navbar__item" role="menuitem">
  <a
    href="#services"
    onClick={handleNavClick}
    tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
  >
    Services
  </a>
</li>
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/sections/Navbar.tsx
git commit -m "chore: remove Services link from navbar"
```

---

### Task 9: Final verification

**Step 1: Run full build**

Run: `npm run build`
Expected: Build succeeds with no errors or warnings

**Step 2: Run dev server and visually check**

Run: `npm run dev`
Expected: All sections render correctly, page flows naturally (Hero > Projects > Tech > Experience > Contact > Footer), no broken references to removed sections

**Step 3: Commit any remaining fixes**

If anything needs adjustment, fix and commit.
