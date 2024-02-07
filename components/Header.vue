<script setup lang="ts">
  const emit = defineEmits(['setHeight'])
  const header = ref<HTMLElement | null>(null)
  onMounted(() => {
    emit('setHeight', header.value?.clientHeight)
  })
  const route = useRoute()
</script>

<template>
  <nav
    ref="header"
    :class="`fixed z-40 top-0 w-full p-3 flex justify-center items-center gap-4 bg-slate-100 dark:bg-zinc-900 ${
      route.path === '/secret' ? 'hidden' : ''
    }`"
  >
    <NavButton to="/">Home</NavButton>
    <NavButton to="/experience/">Experience</NavButton>
    <NavButton to="/projects/">Projects</NavButton>
  </nav>
</template>
