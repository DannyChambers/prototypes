<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ButtonGroup',
    props: {
      alignment: String
    },
    computed: {
      classes() {
        return `button_group button_group--${this.alignment}`;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_button_group.scss";
</style>
