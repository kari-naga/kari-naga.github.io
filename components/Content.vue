<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },
    gap: {
      type: Boolean,
      default: true,
    },
    titleClass: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <main class="py-4 px-7 flex flex-col items-center text-center" :class="{ 'gap-4': gap, 'gap-2': !gap }">
    <h1 class="text-3xl font-semibold tracking-wide" :class="titleClass">
      {{ title }}
    </h1>
    <slot />
  </main>
</template>
