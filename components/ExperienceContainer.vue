<script setup lang="ts">
  defineProps(['title', 'position', 'to'])
</script>

<template>
  <Expander class="flex flex-col gap-1" header-class="flex flex-col gap-1" content-class="flex flex-col items-center gap-2 max-w-prose" dropdown-class="text-slate-500">
    <template v-slot:header>
      <Link :to="to" class="text-xl">
        {{ title }}
      </Link>
      <p class="text-lg font-light">
        {{ position }}
      </p>
    </template>
    <template v-slot:label>
      <p class="font-medium">Show More</p>
    </template>
    <template v-slot:content>
      <slot />
    </template>
  </Expander>
</template>