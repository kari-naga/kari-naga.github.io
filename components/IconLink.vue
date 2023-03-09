<script setup lang="ts">
  defineProps({
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <NuxtLink :to="to" class="w-5 h-5">
    <IconButton :title="title">
      <slot />
    </IconButton>
  </NuxtLink>
</template>
