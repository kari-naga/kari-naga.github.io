<script setup lang="ts">
  const emit = defineEmits(['setHeight'])
  const header = ref(null)
  onMounted(() => {
    emit('setHeight', header.value.clientHeight)
  })
</script>

<template>
  <nav class="fixed top-0 w-full p-3 flex justify-center items-center gap-4 bg-slate-100" ref="header">
    <NavButton to="/">Home</NavButton>
    <NavButton to="/experience">Experience</NavButton>
    <NavButton to="/projects">Projects</NavButton>
  </nav>
</template>
