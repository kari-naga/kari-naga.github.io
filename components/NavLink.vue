<script setup lang="ts">
  defineProps({
    to: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <NuxtLink :to="to" class="transition-colors hover:text-blue-500 active:text-blue-700">
    <slot />
  </NuxtLink>
</template>
