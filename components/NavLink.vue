<script setup lang="ts">
  defineProps(['to'])
</script>

<template>
  <NuxtLink :to="to" class="transition-colors hover:text-blue-500 active:text-blue-700">
    <slot />
  </NuxtLink>
</template>