<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { useMidoriStore } from "@/modules/common/stores/midori-bg";
import image from "@/modules/home/assets/background-image.jpg";

const canvas = ref<HTMLCanvasElement | null>(null);
const midoriStore = useMidoriStore();

onMounted(() => {
  if (canvas.value !== null) midoriStore.initRenderer(canvas.value);
  midoriStore.setImage(image);
});
</script>

<template lang="pug">
router-view
canvas.absolute.-z-10.w-full.h-full.bg-slate-500(ref="canvas")
</template>
