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

<LanguageSwitcher current="sk" />
<HeroSection title="INDUSTRIAL AI" subtitle="2026" keyword1="AUTONÓMIA" keyword2="EFEKTIVITA" keyword3="ŠKÁLOVANIE" />

---
layout: default
background: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop
---

<!-- Slide 2: Agentic-as-a-Service -->

<AgentMesh subtitle="Evolúcia" titleStart="Od Chatbotov k" titleEnd="Agentovým Sieťam" description="Stará AI čakala na pokyn. Nová AI <strong>koná</strong>. Agenti nespia, nečakajú a autonómne sa rozhodujú v reálnom čase." legacyLabel="Minulosť: Reaktívna" futureLabel="Budúcnosť: Proaktívna" />

---
layout: default
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop
---

<!-- Slide 3: Use Cases -->

<UseCases mainTitle="3 Praktické Príklady" mainSubtitle="Kde AI prináša okamžitú hodnotu" case1Title="Logistika" case1Problem="Tovar stojí, kamióny meškajú." case1Solution="Autonómny Dispečer" case1Result="-20% náklady na palivo" case2Title="Administratíva" case2Problem="Manuálne prepisovanie faktúr." case2Solution="Dokumentový Analytik" case2Result="0 chýb / 40h ušetrených" case3Title="Výroba" case3Problem="Nečakané odstávky strojov." case3Solution="Prediktívna Údržba" case3Result="99.9% dostupnosť" />

---
layout: default
background: https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop
---

<!-- Slide 3: Vibe Coding -->

<div class="absolute top-0 left-0 w-full h-full bg-slate-950/95 z-0"></div>

<div class="relative z-10 h-full flex flex-col justify-center px-12">
  <div class="text-center mb-12">
    <h2 class="text-5xl font-display font-bold mb-4">Vibe Coding & Architektúra</h2>
    <p class="text-slate-400 font-light">Rýchlosť startupu. Bezpečnosť korporátu.</p>
  </div>

  <IdeWindow 
    fileName="jadro_agenta.ts"
    typeSafeLabel="Typovo Bezpečné"
    comment="// Validácia architektúry..."
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
    <h2 class="text-5xl font-display font-bold mb-4">Overená Hodnota</h2>
    <p class="text-slate-400">Reálni agenti nasadení v produkčnom prostredí.</p>
  </div>

  <AgentCards 
    card1Title="Prieskum Trhu"
    card1Desc="Analyzuje konkurenciu 24/7 a reportuje zmeny."
    card1Impact="-40h / mesiac"
    card2Title="Dodávateľský Reťazec"
    card2Desc="Autonómne vyjednávanie cien s dodávateľmi."
    card2Impact="-15% Nákladov"
    card3Title="FinOps Agent"
    card3Desc="Optimalizácia cloudovej infraštruktúry."
    card3Impact="$12k Ušetrených"
  />
</div>

---
layout: default
background: https://images.unsplash.com/photo-1563206767-5b1d972b9fb6?q=80&w=1974&auto=format&fit=crop
---

<!-- Slide 5: Security -->

<SecurityArchitecture 
  title="Bezpečnosť od Návrhu"
  subtitle="Row Level Security (RLS) Architektúra"
  agentLabel="Agent"
  shieldLabel="RLS Štít"
  dbLabel="Bezpečná DB"
  footerText="Agent nemá priamy prístup k dátam. Vidí len to, čo mu databáza dovolí. <br/>Bezpečnosť je garantovaná na úrovni infraštruktúry, nie promptu."
/>

---
layout: default
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop
class: text-center
---

<!-- Slide 6: Roadmap & CTA -->

<Roadmap 
  title="Začnite v malom. Škáľujte rýchlo."
  subtitle="Od auditu po autonómnu firmu."
  step1Time="Týždeň 1"
  step1Title="Procesný Audit"
  step1Desc="Analýza procesov a identifikácia úzkych hrdiel."
  step2Time="Týždeň 4"
  step2Title="Pilot / PoC"
  step2Desc="Nasadenie prvého agenta a meranie výsledkov."
  step3Time="2026"
  step3Title="Produkcia"
  step3Desc="Plná integrácia a škálovanie infraštruktúry."
  ctaButton="Postaviť Infraštruktúru"
  ctaSubtext="Dostupný Fractional AI Architekt"
/>
