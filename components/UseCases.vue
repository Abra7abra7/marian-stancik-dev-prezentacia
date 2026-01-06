<script setup lang="ts">
const props = defineProps({
  mainTitle: { default: 'Use Cases' },
  mainSubtitle: { default: 'Real World Applications' },
  
  case1Title: { default: 'Logistika' },
  case1Problem: { default: 'Tovar stojí, kamióny meškajú.' },
  case1Solution: { default: 'Autonómny Dispečer' },
  case1Result: { default: '-20% náklady na palivo' },

  case2Title: { default: 'Administratíva' },
  case2Problem: { default: 'Manuálne prepisovanie faktúr.' },
  case2Solution: { default: 'Dokumentový Analytik' },
  case2Result: { default: '0 chýb / 40h ušetrených' },

  case3Title: { default: 'Výroba' },
  case3Problem: { default: 'Nečakané odstávky strojov.' },
  case3Solution: { default: 'Prediktívna Údržba' },
  case3Result: { default: '99.9% dostupnosť' }
})
</script>

<template>
  <div class="relative w-full h-full bg-slate-950">
    <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>

    <div class="relative z-10 h-full flex flex-col justify-center px-12">
      
      <div class="text-center mb-16">
        <h2 class="text-5xl font-display font-bold mb-4">{{ mainTitle }}</h2>
        <p class="text-xl text-brand-muted">{{ mainSubtitle }}</p>
      </div>

      <div class="grid grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        
        <!-- Case 1: Logistics -->
        <div class="glass-card p-8 rounded-2xl hover:bg-white/5 transition duration-300 border border-white/10 group">
          <div class="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition duration-300">
            <div class="i-carbon-delivery-truck text-3xl"></div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-white">{{ case1Title }}</h3>
          
          <div class="space-y-4">
            <div>
              <div class="text-xs text-brand-muted uppercase font-bold mb-1">Problem</div>
              <div class="text-sm text-slate-400">{{ case1Problem }}</div>
            </div>
            <div>
              <div class="text-xs text-brand-muted uppercase font-bold mb-1">AI Agent</div>
              <div class="text-sm text-white font-mono">{{ case1Solution }}</div>
            </div>
            <div class="pt-4 border-t border-white/10">
              <div class="text-lg font-bold text-blue-400">{{ case1Result }}</div>
            </div>
          </div>
        </div>

        <!-- Case 2: Admin -->
        <div class="glass-card p-8 rounded-2xl hover:bg-white/5 transition duration-300 border border-white/10 group">
          <div class="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition duration-300">
            <div class="i-carbon-document-tasks text-3xl"></div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-white">{{ case2Title }}</h3>
          
          <div class="space-y-4">
            <div>
              <div class="text-xs text-brand-muted uppercase font-bold mb-1">Problem</div>
              <div class="text-sm text-slate-400">{{ case2Problem }}</div>
            </div>
            <div>
              <div class="text-xs text-brand-muted uppercase font-bold mb-1">AI Agent</div>
              <div class="text-sm text-white font-mono">{{ case2Solution }}</div>
            </div>
            <div class="pt-4 border-t border-white/10">
              <div class="text-lg font-bold text-purple-400">{{ case2Result }}</div>
            </div>
          </div>
        </div>

        <!-- Case 3: Manufacturing -->
        <div class="glass-card p-8 rounded-2xl hover:bg-white/5 transition duration-300 border border-white/10 group">
          <div class="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition duration-300">
             <div class="i-carbon-assembly-cluster text-3xl"></div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-white">{{ case3Title }}</h3>
          
          <div class="space-y-4">
            <div>
              <div class="text-xs text-brand-muted uppercase font-bold mb-1">Problem</div>
              <div class="text-sm text-slate-400">{{ case3Problem }}</div>
            </div>
            <div>
              <div class="text-xs text-brand-muted uppercase font-bold mb-1">AI Agent</div>
              <div class="text-sm text-white font-mono">{{ case3Solution }}</div>
            </div>
            <div class="pt-4 border-t border-white/10">
              <div class="text-lg font-bold text-emerald-400">{{ case3Result }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
