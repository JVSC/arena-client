<script setup lang="ts">
import Avatar from "@/modules/home/components/avatar.vue";
import AppBox from "@/modules/home/components/app-box.vue";

const images = [
  "https://i.imgur.com/khKivzQ.jpg",
  "https://i.imgur.com/XmAQf8f.jpg",
  "https://i.imgur.com/cAbJWR2.jpg",
  "https://i.imgur.com/ls0ZfKt.jpg",
  "https://i.imgur.com/RBMjBIq.jpg",
  "https://i.imgur.com/W6f2JZe.jpg",
];
</script>

<template lang="pug">
.h-14.w-full
.h-full.w-full.bg-opacity-50.flex.justify-evenly.items-center.flex-col
  .w-full.flex.justify-between.items-center

    .flex.flex-col
      .py-4.px-4.h-10.bg-gradient-to-r.from-neutral-900.to-transparent.flex.justify-start.items-center.text-white.text-xs.mb-2.cursor-pointer
        p profile
      .py-4.px-4.h-10.bg-gradient-to-r.from-neutral-900.to-transparent.flex.justify-start.items-center.text-white.text-xs.mb-2.cursor-pointer
        p settings
      .py-4.px-4.h-10.bg-gradient-to-r.from-neutral-900.to-transparent.flex.justify-start.items-center.text-white.text-xs.mb-2.cursor-pointer
        p ladder

    app-box.w-96.h-52.relative(backgroundImg='https://sportshub.cbsistatic.com/i/2021/03/18/1a5f5bbc-d2fd-49dd-b320-d617f6b8e332/jujutsu-kaisen-yuji-anime-1253654.jpg')
      p.mb-2.text-sm.text-white Yuji Itadori
      p.text-xs.text-white Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    .flex.flex-col
      .py-4.px-4.h-10.bg-gradient-to-l.from-neutral-900.to-transparent.flex.justify-end.items-center.text-white.text-xs.mb-2.cursor-pointer
        p ladder game
      .py-4.px-4.h-10.bg-gradient-to-l.from-neutral-900.to-transparent.flex.justify-end.items-center.text-white.text-xs.mb-2.cursor-pointer
        p quick game
      .py-4.px-4.h-10.bg-gradient-to-l.from-neutral-900.to-transparent.flex.justify-end.items-center.text-white.text-xs.mb-2.cursor-pointer
        p private game

  .w-full.flex.justify-center
    avatar.mx-2(v-for="avatar in images" :key="avatar" :src='avatar')
.h-14.w-full
</template>
