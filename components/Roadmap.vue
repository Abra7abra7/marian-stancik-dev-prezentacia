<script setup lang="ts">
const props = defineProps({
  title: { default: 'Start Small. Scale Fast.' },
  subtitle: { default: 'Od auditu po autonómnu firmu.' },
  
  step1Time: { default: 'Týždeň 1' },
  step1Title: { default: 'Audit Process' },
  step1Desc: { default: 'Analýza procesov a identifikácia úzkych hrdiel.' },

  step2Time: { default: 'Týždeň 4' },
  step2Title: { default: 'Pilot / PoC' },
  step2Desc: { default: 'Nasadenie prvého agenta a meranie výsledkov.' },

  step3Time: { default: '2026' },
  step3Title: { default: 'Production' },
  step3Desc: { default: 'Plná integrácia a škálovanie infraštruktúry.' },

  ctaButton: { default: 'Postaviť Infraštruktúru' },
  ctaSubtext: { default: 'Fractional AI Architect Available' }
})
</script>

<template>
  <div class="relative w-full h-full">
    <div class="absolute top-0 left-0 w-full h-full bg-slate-950/90 z-0"></div>

    <div class="relative z-10 h-full flex flex-col justify-center items-center">
      
      <div class="mb-12">
        <h2 class="text-6xl font-display font-bold mb-4">{{ title }}</h2>
        <p class="text-xl text-brand-muted">{{ subtitle }}</p>
      </div>

      <div class="flex items-center gap-4 mb-16 relative">
        <!-- Timeline Line -->
        <div class="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 z-0"></div>

        <!-- Step 1 -->
        <div class="relative z-10 bg-slate-900 border border-brand-primary p-6 rounded-xl w-64 transform hover:-translate-y-2 transition duration-300">
          <div class="text-xs text-brand-primary font-bold uppercase mb-2">{{ step1Time }}</div>
          <h3 class="text-xl font-bold mb-2">{{ step1Title }}</h3>
          <p class="text-sm text-slate-400">{{ step1Desc }}</p>
        </div>

        <div class="i-carbon-arrow-right text-2xl text-white/30 z-10"></div>

        <!-- Step 2 -->
        <div class="relative z-10 bg-slate-900 border border-brand-secondary p-6 rounded-xl w-64 transform hover:-translate-y-2 transition duration-300">
          <div class="text-xs text-brand-secondary font-bold uppercase mb-2">{{ step2Time }}</div>
          <h3 class="text-xl font-bold mb-2">{{ step2Title }}</h3>
          <p class="text-sm text-slate-400">{{ step2Desc }}</p>
        </div>

        <div class="i-carbon-arrow-right text-2xl text-white/30 z-10"></div>

        <!-- Step 3 -->
        <div class="relative z-10 bg-slate-900 border border-brand-indigo p-6 rounded-xl w-64 transform hover:-translate-y-2 transition duration-300 accent-glow">
          <div class="text-xs text-brand-indigo font-bold uppercase mb-2">{{ step3Time }}</div>
          <h3 class="text-xl font-bold mb-2">{{ step3Title }}</h3>
          <p class="text-sm text-slate-400">{{ step3Desc }}</p>
        </div>
      </div>

      <div class="flex flex-col items-center gap-6" v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }">
        
        <div class="flex items-center gap-8">
            <button class="px-12 py-5 rounded-full bg-gradient-to-r from-brand-primary to-brand-indigo text-white font-bold text-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition duration-300">
            {{ ctaButton }}
            </button>

            <!-- QR Code -->
            <div class="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://marianstancik.dev&color=ffffff&bgcolor=1e293b" alt="QR Code" class="w-20 h-20 rounded-lg opacity-90 hover:opacity-100 transition" />
            </div>
        </div>

        <div class="mt-2 text-sm text-slate-500 font-mono">
          {{ ctaSubtext }}
        </div>
      </div>

    </div>
  </div>
</template>
