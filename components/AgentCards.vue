<script setup lang="ts">
const props = defineProps({
  card1Title: { default: 'Market Researcher' },
  card1Desc: { default: 'Analyzuje konkurenciu 24/7 a reportuje zmeny.' },
  card1Impact: { default: '-40h / month' },
  
  card2Title: { default: 'Supply Chain' },
  card2Desc: { default: 'Autonómne vyjednávanie cien s dodávateľmi.' },
  card2Impact: { default: '-15% Costs' },

  card3Title: { default: 'FinOps Agent' },
  card3Desc: { default: 'Optimalizácia cloudovej infraštruktúry.' },
  card3Impact: { default: '$12k Saved' }
})
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <!-- Card 1 -->
    <div class="glass-card group hover:bg-slate-800 transition duration-300 cursor-default relative overflow-hidden">
      <div class="absolute inset-0 bg-brand-primary/10 translate-y-full group-hover:translate-y-0 transition duration-500"></div>
      <div class="relative z-10">
        <div class="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center mb-4 text-brand-primary">
           <div class="i-carbon-chart-radar text-2xl"></div>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">{{ card1Title }}</h3>
        <p class="text-sm text-slate-400 mb-6">{{ card1Desc }}</p>
        
        <div class="border-t border-white/10 pt-4">
          <div class="text-xs text-brand-muted uppercase">Impact</div>
          <div class="text-2xl font-mono font-bold text-brand-primary">{{ card1Impact }}</div>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="glass-card group hover:bg-slate-800 transition duration-300 cursor-default relative overflow-hidden">
      <div class="absolute inset-0 bg-brand-secondary/10 translate-y-full group-hover:translate-y-0 transition duration-500"></div>
      <div class="relative z-10">
        <div class="w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center mb-4 text-brand-secondary">
           <div class="i-carbon-delivery text-2xl"></div>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">{{ card2Title }}</h3>
        <p class="text-sm text-slate-400 mb-6">{{ card2Desc }}</p>
        
        <div class="border-t border-white/10 pt-4">
          <div class="text-xs text-brand-muted uppercase">Impact</div>
          <div class="text-2xl font-mono font-bold text-brand-secondary">{{ card2Impact }}</div>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="glass-card group hover:bg-slate-800 transition duration-300 cursor-default relative overflow-hidden">
      <div class="absolute inset-0 bg-brand-indigo/10 translate-y-full group-hover:translate-y-0 transition duration-500"></div>
      <div class="relative z-10">
        <div class="w-12 h-12 rounded-lg bg-brand-indigo/20 flex items-center justify-center mb-4 text-brand-indigo">
           <div class="i-carbon-cloud-monitoring text-2xl"></div>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">{{ card3Title }}</h3>
        <p class="text-sm text-slate-400 mb-6">{{ card3Desc }}</p>
        
        <div class="border-t border-white/10 pt-4">
          <div class="text-xs text-brand-muted uppercase">Impact</div>
          <div class="text-2xl font-mono font-bold text-brand-indigo">{{ card3Impact }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
