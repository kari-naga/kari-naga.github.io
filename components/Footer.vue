<script setup lang="ts">
  const emit = defineEmits(['setHeight'])
  const footer = ref(null)
  onMounted(() => {
    emit('setHeight', footer.value.clientHeight)
  })
</script>

<template>
  <footer class="fixed bottom-0 w-full p-3 flex justify-center gap-4 bg-slate-100" ref="footer">
    <IconButton to="https://github.com/kari-naga" title="Github">
      <i-bi-github />
    </IconButton>
    <IconButton to="https://www.linkedin.com/in/kari-naga/" title="LinkedIn">
      <i-bi-linkedin />
    </IconButton>
  </footer>
</template>
