<script setup lang="ts">
  useHead({
    titleTemplate: (title) => {
      return title ? `${title} - Kari Naga` : 'Kari Naga'
    },
    htmlAttrs: {
      lang: 'en',
    },
  })
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center font-montserrat">
    <Header class="shrink-0" />
    <NuxtPage class="flex-grow p-4" />
    <Footer class="shrink-0" />
  </div>
</template>
