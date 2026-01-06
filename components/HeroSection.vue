<script setup lang="ts">
const props = defineProps({
  title: { default: 'INDUSTRIAL AI' },
  subtitle: { default: '2026' },
  keyword1: { default: 'AUTONOMY' },
  keyword2: { default: 'EFFICIENCY' },
  keyword3: { default: 'SCALE' }
})
</script>

<template>
  <div class="relative w-full h-full overflow-hidden bg-slate-950">
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
    </div>

    <!-- Central Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full">
      
      <!-- Glitch Title -->
      <div class="relative mb-2" v-motion :initial="{ opacity: 0, scale: 0.9 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 1000 } }">
        <h1 class="text-9xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 relative z-20">
          {{ title }}
        </h1>
        <!-- Glitch Layers -->
        <h1 class="text-9xl font-display font-black tracking-tighter text-brand-primary absolute top-0 left-0 -translate-x-[2px] opacity-50 mix-blend-screen animate-[glitch_2s_infinite]">
          {{ title }}
        </h1>
        <h1 class="text-9xl font-display font-black tracking-tighter text-brand-secondary absolute top-0 left-0 translate-x-[2px] opacity-50 mix-blend-screen animate-[glitch_2s_infinite_reverse]">
          {{ title }}
        </h1>
      </div>

      <div class="text-6xl font-display font-bold text-brand-primary tracking-[0.2em] mb-16"
           v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }">
        {{ subtitle }}
      </div>

      <!-- 3 Key Words -->
      <div class="flex gap-16 items-center" 
           v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 800, duration: 800 } }">
        
        <div class="flex flex-col items-center group cursor-default">
          <div class="w-12 h-1 bg-brand-primary mb-4 group-hover:w-full transition-all duration-500"></div>
          <span class="text-xl font-mono text-slate-300 tracking-widest group-hover:text-white transition-colors">{{ keyword1 }}</span>
        </div>

        <div class="w-2 h-2 rounded-full bg-slate-700"></div>

        <div class="flex flex-col items-center group cursor-default">
          <div class="w-12 h-1 bg-brand-secondary mb-4 group-hover:w-full transition-all duration-500"></div>
          <span class="text-xl font-mono text-slate-300 tracking-widest group-hover:text-white transition-colors">{{ keyword2 }}</span>
        </div>

        <div class="w-2 h-2 rounded-full bg-slate-700"></div>

        <div class="flex flex-col items-center group cursor-default">
          <div class="w-12 h-1 bg-brand-indigo mb-4 group-hover:w-full transition-all duration-500"></div>
          <span class="text-xl font-mono text-slate-300 tracking-widest group-hover:text-white transition-colors">{{ keyword3 }}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
@keyframes glitch {
  0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 0); }
  20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, 0); }
  40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 0); }
  60% { clip-path: inset(25% 0 58% 0); transform: translate(2px, 0); }
  80% { clip-path: inset(54% 0 7% 0); transform: translate(-2px, 0); }
  100% { clip-path: inset(58% 0 43% 0); transform: translate(1px, 0); }
}
</style>
