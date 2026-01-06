<script setup lang="ts">
const props = defineProps({
  title: { default: 'AGENTOVÁ ÉRA' },
  subtitle: { default: 'Vytváranie a Riadenie Autonómnych Systémov' },
  keyword1: { default: 'AUTONOMY' },
  keyword2: { default: 'EFFICIENCY' },
  keyword3: { default: 'SCALE' }
})
</script>

<template>
  <div class="relative w-full h-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center text-center">
    
    <!-- Clean Tech Background -->
    <div class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,#020617_100%)]"></div>
    
    <!-- Subtle Animated Grid (Optional/Minimal) -->
    <div class="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-5xl px-8">
      
      <!-- Main Title with Reveal -->
      <h1 
        class="text-8xl font-display font-black tracking-tight text-white mb-6 leading-tight"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut' } }"
      >
        {{ title }}
      </h1>

      <!-- Subtitle -->
      <p 
        class="text-3xl text-slate-300 font-light tracking-wide mb-20"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }"
      >
        {{ subtitle }}
      </p>

      <!-- Keywords / Divider -->
      <div 
        class="flex justify-center items-center gap-12"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }"
      >
        <span class="text-sm font-mono text-brand-primary tracking-[0.2em] uppercase">{{ keyword1 }}</span>
        <div class="w-1 h-1 bg-slate-600 rounded-full"></div>
        <span class="text-sm font-mono text-brand-secondary tracking-[0.2em] uppercase">{{ keyword2 }}</span>
        <div class="w-1 h-1 bg-slate-600 rounded-full"></div>
        <span class="text-sm font-mono text-brand-indigo tracking-[0.2em] uppercase">{{ keyword3 }}</span>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* No more glitch effects, keeping it clean */
</style>
