<script setup lang="ts">
  useHead({
    titleTemplate: (title) => {
      return title ? `${title} - Kari Naga` : 'Kari Naga'
    },
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        name: 'description',
        content: 'Kari Naga\'s Portfolio',
      },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-HDM3HDL28B',
        async: true,
      },
      {
        children: 'window.dataLayer = window.dataLayer || [];\n' +
                  'function gtag(){dataLayer.push(arguments);}\n' +
                  'gtag(\'js\', new Date());\n' +
                  'gtag(\'config\', \'G-HDM3HDL28B\');',
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
  <div class="font-montserrat">
    <NuxtLoadingIndicator />
    <Header @set-height="height => pageStyle.marginTop = height + 'px'" />
    <NuxtPage v-if="ready" :style="pageStyle" />
    <Footer @set-height="height => pageStyle.marginBottom = height + 'px'" />
  </div>
</template>
