<script setup lang="ts">
  defineProps(['to'])
</script>

<template>
  <NuxtLink :to="to">
    <button type="button" class="transition-colors py-2 px-4 rounded-2xl font-medium bg-gray-300 hover:bg-gray-400 active:bg-gray-500 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-500">
      <slot />
    </button>
  </NuxtLink>
</template>