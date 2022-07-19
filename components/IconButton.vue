<script setup lang="ts">
  defineProps(['to', 'title'])
</script>

<template>
  <NuxtLink :to="to" class="w-5 h-5">
    <button type="button" :title="title" class="transition-colors hover:text-blue-700 active:text-blue-800">
      <slot />
    </button>
  </NuxtLink>
</template>