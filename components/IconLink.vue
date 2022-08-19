<script setup lang="ts">
  defineProps(['to', 'title'])
</script>

<template>
  <NuxtLink :to="to" class="w-5 h-5">
    <IconButton :title="title">
      <slot />
    </IconButton>
  </NuxtLink>
</template>