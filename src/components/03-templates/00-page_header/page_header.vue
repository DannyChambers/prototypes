<template>
  <div :class="classes" id="page_header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'PageHeader',
    props: {
      variant: String
    },
    computed: {
      classes() {
        return ``;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_page_header.scss";
</style>
