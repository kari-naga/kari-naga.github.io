<script setup lang="ts">
  const props = defineProps({
    buttonStyle: {
      type: String,
      default: '180',
    },
    headerClass: {
      type: String,
      default: '',
    },
    contentClass: {
      type: String,
      default: '',
    },
    dropdownClass: {
      type: String,
      default: '',
    },
    heightMod: {
      type: Number,
      default: 0,
    },
    bg: {
      type: String,
      default: '',
    },
  })
  const emit = defineEmits(['open', 'close'])
  const buttonClass = computed(() => {
    if (props.buttonStyle === '90') {
      return { '-rotate-90': !show.value }
    } else {
      return { 'rotate-180': show.value }
    }
  })
  const show = ref(false)
  const content = ref<HTMLElement | null>(null)
  const height = ref(0)
  function resizeHandler() {
    const newHeight = content.value!.clientHeight ?? 0
    if (show.value) {
      emit('close', height.value)
      emit('open', newHeight)
    }
    height.value = newHeight - props.heightMod
  }
  onMounted(() => {
    setTimeout(() => {
      height.value = content.value!.clientHeight ?? 0
    }, 300)
    window.addEventListener('resize', resizeHandler)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler)
  })
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
      return { height: `${height.value + props.heightMod}px` }
    }
    return { height: '0px' }
  })
</script>

<template>
  <div :class="`py-2 px-4 rounded-2xl transition-colors duration-300 ${show ? bg : ''}`">
    <div :class="headerClass">
      <slot name="header" />
      <IconButton
        title="Toggle Details"
        class="flex justify-center items-center gap-1"
        :class="dropdownClass"
        @click="toggleShow"
      >
        <slot name="label" />
        <Icon name="bi:caret-down" class="transition-transform duration-300" :class="buttonClass" />
      </IconButton>
      <slot name="description" />
    </div>
    <div class="transition-all duration-300 overflow-hidden" :class="{ 'opacity-0': !show }" :style="style">
      <div ref="content" :class="contentClass">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
