<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      default: '',
    },
  })
  const message = ref('Show More')
</script>

<template>
  <Expander
    class="flex flex-col gap-1"
    header-class="flex flex-col items-center gap-1"
    content-class="flex flex-col items-center gap-2 max-w-prose"
    dropdown-class="text-slate-500"
    :bg="bg"
    @open="message = 'Show Less'"
    @close="message = 'Show More'"
  >
    <template #header>
      <Link :to="to" class="text-xl">
        {{ title }}
      </Link>
      <div class="my-1 w-48 [&>img]:w-full [&>img]:h-auto">
        <slot name="image" />
      </div>
      <p class="text-lg font-light">
        {{ position }}
      </p>
    </template>
    <template #label>
      <p class="font-medium">{{ message }}</p>
    </template>
    <template #content>
      <slot />
    </template>
  </Expander>
</template>
