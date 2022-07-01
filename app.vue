<script setup>
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
  <div class="flex flex-col justify-center items-center">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
