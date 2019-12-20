<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CopyBlock',
    props: {
      variant: String
    },
    computed: {
      classes() {
        return `copy_block`;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./copy_block.scss";
</style>
