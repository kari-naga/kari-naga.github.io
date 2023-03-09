<script setup lang="ts">
  useHead({
    titleTemplate: (title) => {
      return title ? `${title} - Kari Naga` : 'Kari Naga'
    },
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'font-montserrat dark:bg-black dark:text-white',
    },
    meta: [
      {
        name: 'description',
        content: "Kari Naga's Portfolio",
      },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-HDM3HDL28B',
        async: true,
      },
      {
        children:
          'window.dataLayer = window.dataLayer || [];\n' +
          'function gtag(){dataLayer.push(arguments);}\n' +
          "gtag('js', new Date());\n" +
          "gtag('config', 'G-HDM3HDL28B');",
      },
    ],
  })
  const pageStyle = reactive({
    marginTop: '0px',
    marginBottom: '0px',
  })
  const ready = ref(false)
  onMounted(() => {
    ready.value = true
  })
</script>

<template>
  <NuxtLoadingIndicator :throttle="0" color="repeating-linear-gradient(to right,#5433FF 0%,#20BDFF 50%,#A5FECB 100%)" />
  <Header @set-height="(height: number) => pageStyle.marginTop = height + 'px'" />
  <NuxtPage v-if="ready" :style="pageStyle" />
  <Footer @set-height="(height: number) => pageStyle.marginBottom = height + 'px'" />
</template>
