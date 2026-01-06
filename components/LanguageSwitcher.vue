<script setup lang="ts">
const props = defineProps({
  current: {
    type: String,
    default: 'sk'
  }
})
</script>

<template>
  <div class="fixed top-4 right-4 z-50 flex gap-2 items-center bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 no-print">
    <a href="/" class="text-xs transition uppercase font-bold tracking-wider no-underline" :class="current === 'sk' ? 'text-brand-primary' : 'text-white/50 hover:text-white'">SK</a>
    <span class="text-white/20">|</span>
    <a href="/en/index.html" class="text-xs transition uppercase font-bold tracking-wider no-underline" :class="current === 'en' ? 'text-brand-primary' : 'text-white/50 hover:text-white'">EN</a>
  </div>
</template>

<style scoped>
.no-print {
  @media print {
    display: none;
  }
}
</style>
