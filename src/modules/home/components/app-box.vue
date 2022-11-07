<script setup lang="ts">
defineProps({
  backgroundImg: {
    type: String,
  },
});
</script>

<template lang="pug">
.relative
  .border-b.border-r.-right-1.-bottom-1.absolute(class='w-5 h-5 border-secondary-600')
  .border-b.border-l.-left-1.-bottom-1.absolute(class='w-5 h-5 border-secondary-600')
  .border-t.border-r.-right-1.-top-1.absolute(class='w-5 h-5 border-primary-600')
  .border-t.border-l.-left-1.-top-1.absolute(class='w-5 h-5 border-primary-600')
  .w-full.h-full.bg-gradient-to-b.p-4(class='from-primary-800/70 to bg-secondary-800/70')
    slot
  img.absolute.w-full.h-full.top-0.opacity-10(v-show="backgroundImg" :src="backgroundImg")
</template>
