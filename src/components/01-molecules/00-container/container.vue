<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Container',
    props: {
      variant: String
    },
    computed: {
      classes() {
        return `container`;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_container.scss";
</style>
