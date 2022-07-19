<script setup lang="ts">
  defineProps(['title'])
</script>

<template>
  <main class="p-4 flex flex-col items-center gap-4 text-center">
    <h1 class="text-3xl font-semibold tracking-wide">
      {{ title }}
    </h1>
    <slot />
  </main>
</template>