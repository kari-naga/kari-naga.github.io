<script setup lang="ts">
  defineProps(['title', 'position', 'to'])
  const message = ref("Show More")
</script>

<template>
  <Expander
    class="flex flex-col gap-1"
    header-class="flex flex-col gap-1"
    content-class="flex flex-col items-center gap-2 max-w-prose"
    dropdown-class="text-slate-500"
    @open="message = 'Show Less'"
    @close="message = 'Show More'"
  >
    <template v-slot:header>
      <Link :to="to" class="text-xl">
        {{ title }}
      </Link>
      <p class="text-lg font-light">
        {{ position }}
      </p>
    </template>
    <template v-slot:label>
      <p class="font-medium">{{ message }}</p>
    </template>
    <template v-slot:content>
      <slot />
    </template>
  </Expander>
</template>