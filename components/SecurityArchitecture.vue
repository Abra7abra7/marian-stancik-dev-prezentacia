<script setup lang="ts">
const props = defineProps({
  title: { default: 'Security by Design' },
  subtitle: { default: 'Row Level Security (RLS) Architecture' },
  agentLabel: { default: 'Agent' },
  shieldLabel: { default: 'RLS Shield' },
  dbLabel: { default: 'Secure DB' },
  footerText: { default: 'Agent nemá priamy prístup k dátam. Vidí len to, čo mu databáza dovolí. <br/>Bezpečnosť je garantovaná na úrovni infraštruktúry, nie promptu.' }
})
</script>

<template>
  <div class="relative w-full h-full">
    <div class="absolute top-0 left-0 w-full h-full bg-slate-950/95 z-0"></div>

    <div class="relative z-10 h-full flex flex-col justify-center items-center px-12">
      <h2 class="text-4xl font-display font-bold mb-12 text-center">
        {{ title }} <br/><span class="text-brand-muted text-2xl font-sans font-normal">{{ subtitle }}</span>
      </h2>

      <!-- Interactive Security Diagram Simulation -->
      <div class="relative w-full max-w-4xl h-[300px] flex items-center justify-between px-8 bg-white/5 rounded-2xl border border-white/10">
        
        <!-- User/Agent Node -->
        <div class="flex flex-col items-center z-20">
          <div class="w-16 h-16 rounded-full bg-slate-800 border-2 border-brand-primary flex items-center justify-center">
            <div class="i-carbon-bot text-3xl text-white"></div>
          </div>
          <div class="mt-2 text-sm font-bold">{{ agentLabel }}</div>
        </div>

        <!-- Connection Line -->
        <div class="flex-1 h-[2px] bg-slate-700 relative mx-4 overflow-hidden">
           <!-- Packet -->
           <div class="absolute top-1/2 left-0 w-4 h-4 bg-brand-primary rounded-full transform -translate-y-1/2 animate-[packet_2s_linear_infinite]"></div>
        </div>

        <!-- The Shield -->
        <div class="flex flex-col items-center z-20 mx-4">
          <div class="w-24 h-24 relative flex items-center justify-center">
             <div class="absolute inset-0 bg-brand-secondary/20 rounded-full animate-pulse"></div>
             <div class="i-carbon-security text-6xl text-brand-secondary z-10"></div>
          </div>
          <div class="mt-2 text-sm font-bold text-brand-secondary">{{ shieldLabel }}</div>
        </div>

        <!-- Connection Line -->
        <div class="flex-1 h-[2px] bg-slate-700 relative mx-4"></div>

        <!-- Database Node -->
        <div class="flex flex-col items-center z-20">
          <div class="w-16 h-16 rounded-full bg-slate-800 border-2 border-white/30 flex items-center justify-center">
            <div class="i-carbon-data-base-alt text-3xl text-white"></div>
          </div>
          <div class="mt-2 text-sm font-bold">{{ dbLabel }}</div>
        </div>

      </div>

      <div class="mt-12 text-center max-w-2xl text-slate-400" v-html="footerText"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes packet {
  0% { left: 0%; opacity: 0; }
  10% { opacity: 1; }
  45% { opacity: 1; }
  50% { left: 45%; opacity: 0; } /* Hits shield */
  100% { left: 45%; opacity: 0; }
}
</style>
