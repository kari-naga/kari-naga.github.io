<script setup>
  const route = useRoute()
</script>

<template>
  <div>
    You are at {{ route.path }}
  </div>
</template>
