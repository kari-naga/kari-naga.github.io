<script setup lang="ts">
  const emit = defineEmits(['setHeight'])
  const footer = ref<HTMLElement | null>(null)
  onMounted(() => {
    emit('setHeight', footer.value?.clientHeight)
  })
  const colorMode = useColorMode()
  const darkMode = computed(
    () => colorMode.preference === 'dark' || (colorMode.preference === 'system' && colorMode.value === 'dark')
  )
  const route = useRoute()
</script>

<template>
  <footer
    ref="footer"
    :class="`fixed z-40 bottom-0 w-full h-14 p-3 flex justify-center items-center gap-4 bg-slate-100 dark:bg-zinc-900 ${
      route.path === '/secret' ? 'hidden' : ''
    }`"
  >
    <IconLink to="https://github.com/kari-naga" title="Github">
      <Icon name="bi:github" />
    </IconLink>
    <IconLink to="https://www.linkedin.com/in/kari-naga/" title="LinkedIn">
      <Icon name="bi:linkedin" />
    </IconLink>
    <div class="absolute right-3">
      <Toggle :on="darkMode" @clicked="() => ($colorMode.preference = darkMode ? 'light' : 'dark')" />
    </div>
  </footer>
</template>
