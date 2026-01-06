<script setup lang="ts">
const props = defineProps({
  fileName: { default: 'agent_core.ts' },
  typeSafeLabel: { default: 'Type Safe' },
  comment: { default: '// Validating architecture patterns...' }
})
</script>

<template>
  <div class="grid grid-cols-[1.5fr_1fr] gap-8 items-center max-w-6xl mx-auto w-full">
    <!-- IDE Simulation -->
    <div 
      class="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
    >
      <!-- Window Controls -->
      <div class="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <div class="ml-4 text-xs text-gray-400 font-mono">{{ fileName }}</div>
      </div>

      <!-- Code Content -->
      <div class="p-6 font-mono text-sm leading-relaxed text-gray-300 relative">
        <div><span class="text-purple-400">import</span> { <span class="text-yellow-300">Agent</span> } <span class="text-purple-400">from</span> <span class="text-green-300">'@industrial/ai'</span>;</div>
        <br/>
        <div><span class="text-purple-400">const</span> <span class="text-blue-400">worker</span> = <span class="text-purple-400">new</span> <span class="text-yellow-300">Agent</span>({</div>
        <div class="pl-4">role: <span class="text-green-300">'Supply_Chain_Manager'</span>,</div>
        <div class="pl-4">permissions: [<span class="text-green-300">'READ_INVENTORY'</span>, <span class="text-green-300">'CREATE_ORDER'</span>],</div>
        <div class="pl-4">safety: <span class="text-purple-400">true</span></div>
        <div>});</div>
        <br/>
        <div class="opacity-50">{{ comment }}</div>
      </div>

      <!-- Scanning Beam -->
      <div class="absolute top-0 left-0 w-full h-[2px] bg-brand-secondary shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-[scan_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div class="absolute bottom-4 right-4 bg-brand-secondary/20 border border-brand-secondary text-brand-secondary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 delay-500">
        {{ typeSafeLabel }}
      </div>
    </div>

    <!-- Stats -->
    <div class="space-y-6">
       <div class="glass-card border-brand-primary/20">
         <div class="text-3xl font-display font-bold text-white mb-1">50%</div>
         <div class="text-xs text-brand-muted uppercase tracking-wider">Productivity Boost</div>
       </div>
       <div class="glass-card border-brand-secondary/20">
         <div class="text-3xl font-display font-bold text-white mb-1">100%</div>
         <div class="text-xs text-brand-muted uppercase tracking-wider">Type Safety</div>
       </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scan {
  0% { top: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
</style>
