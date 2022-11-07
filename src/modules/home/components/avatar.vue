<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: "https://i.imgur.com/cAbJWR2.jpg",
  },
});
</script>

<template lang="pug">
.flex.justify-center.items-center.h-16.w-16.bg-gradient-to-b.from-primary.to-secondary.rounded-lg.cursor-pointer
  .bg-gradient-to-t.from-primary-800.to-secondary-800.rounded.flex.overflow-hidden(class="w-[95%] h-[95%]")
    img.w-full.h-full(:src="src" referrerpolicy="no-referrer")
</template>
