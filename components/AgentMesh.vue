<script setup lang="ts">
const props = defineProps({
  subtitle: { default: 'Evolution' },
  titleStart: { default: 'From Chatbots to' },
  titleEnd: { default: 'Agentic Mesh' },
  description: { default: 'Stará AI čakala na pokyn. Nová AI <strong>koná</strong>. Agenti nespia, nečakajú a autonómne sa rozhodujú v reálnom čase.' },
  legacyLabel: { default: 'Legacy: Reactive' },
  futureLabel: { default: 'Future: Proactive' }
})
</script>

<template>
  <div class="relative w-full h-full">
    <div class="absolute top-0 left-0 w-full h-full bg-slate-950/90 z-0"></div>

    <div class="relative z-10 grid grid-cols-2 gap-12 items-center h-full px-12">
      
      <div v-motion
      :initial="{ opacity: 0, x: -50 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }">
        <h2 class="text-5xl font-display font-bold mb-6 leading-tight">
          <span class="text-brand-muted text-2xl block mb-2 font-normal">{{ subtitle }}</span>
           {{ titleStart }} <br/><span class="text-gradient">{{ titleEnd }}</span>
        </h2>
        <p class="text-lg text-slate-300 leading-relaxed font-light mb-8 max-w-md" v-html="description"></p>

        <div class="flex gap-4">
          <div class="px-4 py-2 rounded border border-white/10 bg-white/5 text-xs font-mono text-brand-muted">
            <div class="w-2 h-2 rounded-full bg-red-500 inline-block mr-2"></div>{{ legacyLabel }}
          </div>
          <div class="px-4 py-2 rounded border border-brand-primary/30 bg-brand-primary/10 text-xs font-mono text-brand-primary">
            <div class="w-2 h-2 rounded-full bg-brand-primary inline-block mr-2 animate-pulse"></div>{{ futureLabel }}
          </div>
        </div>
      </div>

      <div class="relative h-[400px] w-full border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden" v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }">
        <!-- Center Brain -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div class="w-24 h-24 rounded-full bg-brand-primary blur-2xl opacity-40 absolute animate-pulse"></div>
          <div class="w-16 h-16 rounded-full bg-slate-900 border border-brand-primary flex items-center justify-center relative z-10">
            <div class="i-carbon-ibm-watson-discovery text-3xl text-brand-primary"></div>
          </div>
        </div>

        <!-- Orbiting Satellites -->
        <div class="absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite]">
           <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-2 rounded-lg border border-brand-secondary/50">
              <div class="i-carbon-data-base text-brand-secondary"></div>
           </div>
        </div>
        
        <div class="absolute top-1/2 left-1/2 w-[200px] h-[200px] border border-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-[spin_7s_linear_infinite_reverse]">
           <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-800 p-2 rounded-lg border border-brand-indigo/50">
              <div class="i-carbon-email text-brand-indigo"></div>
           </div>
        </div>

        <div class="absolute bottom-4 left-4 text-xs font-mono text-brand-muted">
          > Agent_Status: <span class="text-brand-secondary">ACTIVE</span><br/>
          > Tasks_Pending: 0<br/>
          > ROI_Generated: $4,230
        </div>
      </div>
    </div>
  </div>
</template>
