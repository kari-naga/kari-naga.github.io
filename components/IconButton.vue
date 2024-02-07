<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <button type="button" :title="title" class="transition-colors hover:text-blue-500 active:text-blue-700">
    <slot />
  </button>
</template>
