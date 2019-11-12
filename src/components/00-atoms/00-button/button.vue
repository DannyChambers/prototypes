<template>
  <button :class="['button', variant]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      variant: String
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss">
  @import "./_button.scss";
</style>
