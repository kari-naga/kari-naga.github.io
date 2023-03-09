<script setup lang="ts">
  const props = defineProps({ on: Boolean })
  defineEmits(['clicked'])
  const toggled = ref(props.on)
  onMounted(() => {
    toggled.value = props.on
  })
</script>

<template>
  <label class="switch">
    <input v-model="toggled" aria-label="Toggle Theme" type="checkbox" @click="$emit('clicked')" />
    <span class="slider round">
      <Icon name="bi:moon" class="absolute top-[8px] left-[8px]" />
      <Icon name="bi:sun" class="absolute top-[8px] right-[8px]" />
    </span>
  </label>
</template>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(203 213 225 / 1);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    z-index: 10;
  }

  input:checked + .slider {
    background-color: rgb(29 78 216 / 1);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px rgb(29 78 216 / 1);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
