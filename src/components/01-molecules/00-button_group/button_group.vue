<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ButtonGroup',
    props: {
      variant: String
    },
    computed: {
      classes() {
        return `button_group button_group--${this.variant}`;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_button_group.scss";
</style>
