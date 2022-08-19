<script setup lang="ts">
  const props = defineProps({
    'buttonStyle': {
      type: String,
      default: '180',
    },
    'headerClass': String,
    'contentClass': String,
    'dropdownClass': String,
    'heightMod': {
      type: Number,
      default: 0,
    },
  })
  const emit = defineEmits(['open', 'close'])
  const buttonClass = computed(() => {
    if (props.buttonStyle === '90') {
      return { '-rotate-90': !show.value, }
    } else {
      return { 'rotate-180': show.value, }
    }
  })
  const show = ref(false)
  const content = ref(null)
  const height = ref(0)
  onMounted(() => setTimeout(() => {
    height.value = content.value.clientHeight
  }, 210))
  function toggleShow() {
    show.value = !show.value
    if (show.value) {
      emit('open', height.value)
    } else {
      emit('close', height.value)
    }
  }
  const style = computed(() => {
    if (show.value) {
      return { height: `${height.value + props.heightMod}px`, }
    }
    return { height: '0px', }
  })
</script>

<template>
  <div>
    <div :class="headerClass">
      <slot name="header" />
      <IconButton title="Toggle Details" class="flex justify-center items-center gap-1" :class="dropdownClass" @click="toggleShow">
        <slot name="label" />
        <i-bi-caret-down class="transition-transform duration-300" :class="buttonClass" />
      </IconButton>
    </div>
    <div class="transition-all duration-300 overflow-hidden" :class="{ 'opacity-0': !show }" :style="style">
      <div :class="contentClass" ref="content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>