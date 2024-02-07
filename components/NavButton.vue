<script setup lang="ts">
  defineProps({
    to: {
      type: String,
      required: true,
    },
  })
  const route = useRoute()
</script>

<template>
  <NuxtLink :to="to">
    <button
      type="button"
      class="transition-colors py-2 px-4 rounded-2xl font-medium"
      :class="{
        'bg-blue-200 hover:bg-blue-300 active:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600 dark:active:bg-blue-500':
          to === route.path,
        'bg-slate-200 hover:bg-slate-300 active:bg-slate-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-500':
          to !== route.path,
      }"
    >
      <slot />
    </button>
  </NuxtLink>
</template>
