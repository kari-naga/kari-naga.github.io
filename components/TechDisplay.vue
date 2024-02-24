<script setup lang="ts">
  defineProps({
    wrapperClass: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <div class="flex flex-col items-center gap-2 max-w-prose" :class="wrapperClass">
    <h3 class="font-medium">Technologies Used</h3>
    <div class="flex items-center gap-4 text-4xl">
      <slot />
    </div>
  </div>
</template>
