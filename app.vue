<script setup lang="ts">
  useHead({
    titleTemplate: (title) => {
      return title ? `${title} - Kari Naga` : 'Kari Naga'
    },
    htmlAttrs: {
      lang: 'en',
    },
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
    <Header @set-height="height => pageStyle.marginTop = height + 'px'" />
    <NuxtPage v-if="ready" :style="pageStyle" />
    <Footer @set-height="height => pageStyle.marginBottom = height + 'px'" />
  </div>
</template>
