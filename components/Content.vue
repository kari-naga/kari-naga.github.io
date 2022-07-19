<script setup lang="ts">
  defineProps(['title'])
</script>

<template>
  <div class="flex flex-col items-center gap-4 text-center">
    <h1 class="text-3xl font-semibold tracking-wide">
      {{ title }}
    </h1>
    <slot />
  </div>
</template>