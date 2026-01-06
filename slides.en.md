---
theme: default
background: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Industrial AI 2026
  Future of Agentic Automation
drawings:
  persist: false
css: unocss
transition: slide-left
---

<!-- Slide 1: Hero Section -->

<LanguageSwitcher current="en" />
<HeroSection title="INDUSTRIAL AI" subtitle="2026" keyword1="AUTONOMY" keyword2="EFFICIENCY" keyword3="SCALE" />

---
layout: default
background: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop
---

<!-- Slide 2: Agentic-as-a-Service -->

<AgentMesh subtitle="Evolution" titleStart="From Chatbots to" titleEnd="Agentic Mesh" description="Old AI waited for prompts. New AI <strong>acts</strong>. Agents never sleep, never wait, and make autonomous decisions in real-time." legacyLabel="Legacy: Reactive" futureLabel="Future: Proactive" />

---
layout: default
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop
---

<!-- Slide 3: Use Cases -->

<UseCases mainTitle="3 Practical Use Cases" mainSubtitle="Immediate Business Value" case1Title="Logistics" case1Problem="Delayed shipments & inventory." case1Solution="Autonomous Dispatcher" case1Result="-20% fuel costs" case2Title="Admin" case2Problem="Manual invoice data entry." case2Solution="Document Analyst" case2Result="0 errors / 40h saved" case3Title="Manufacturing" case3Problem="Unexpected machine downtime." case3Solution="Predictive Maintenance" case3Result="99.9% uptime" />

---
layout: default
background: https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop
---

<!-- Slide 3: Vibe Coding -->

<div class="absolute top-0 left-0 w-full h-full bg-slate-950/95 z-0"></div>

<div class="relative z-10 h-full flex flex-col justify-center px-12">
  <div class="text-center mb-12">
    <h2 class="text-5xl font-display font-bold mb-4">Vibe Coding & Architecture</h2>
    <p class="text-slate-400 font-light">Startup Speed. Enterprise Security.</p>
  </div>

  <IdeWindow 
    fileName="agent_core.ts"
    typeSafeLabel="Type Safe"
    comment="// Validating architecture patterns..."
  />
</div>

---
layout: default
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop
---

<!-- Slide 4: Validation -->

<div class="absolute top-0 left-0 w-full h-full bg-slate-950/90 z-0"></div>

<div class="relative z-10 h-full flex flex-col justify-center px-12">
  <div class="mb-12">
    <h2 class="text-5xl font-display font-bold mb-4">Proven Value</h2>
    <p class="text-slate-400">Real agents deployed in production environments.</p>
  </div>

  <AgentCards 
    card1Title="Market Researcher"
    card1Desc="Analyzes competition 24/7 and reports changes."
    card1Impact="-40h / month"
    card2Title="Supply Chain"
    card2Desc="Autonomous price negotiation with suppliers."
    card2Impact="-15% Costs"
    card3Title="FinOps Agent"
    card3Desc="Cloud infrastructure optimization."
    card3Impact="$12k Saved"
  />
</div>

---
layout: default
background: https://images.unsplash.com/photo-1563206767-5b1d972b9fb6?q=80&w=1974&auto=format&fit=crop
---

<!-- Slide 5: Security -->

<SecurityArchitecture 
  title="Security by Design"
  subtitle="Row Level Security (RLS) Architecture"
  agentLabel="Agent"
  shieldLabel="RLS Shield"
  dbLabel="Secure DB"
  footerText="The Agent has no direct access to data. It sees only what the database allows. <br/>Security is guaranteed at the infrastructure level, not the prompt."
/>

---
layout: default
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop
class: text-center
---

<!-- Slide 6: Roadmap & CTA -->

<Roadmap 
  title="Start Small. Scale Fast."
  subtitle="From Audit to Autonomous Enterprise."
  step1Time="Week 1"
  step1Title="Audit Process"
  step1Desc="Process analysis and bottleneck identification."
  step2Time="Week 4"
  step2Title="Pilot / PoC"
  step2Desc="Deploying first agent and measuring results."
  step3Time="2026"
  step3Title="Production"
  step3Desc="Full integration and infrastructure scaling."
  ctaButton="Build Infrastructure"
  ctaSubtext="Fractional AI Architect Available"
/>
