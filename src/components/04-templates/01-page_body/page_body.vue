<template>
  <div :class="classes" id="page_body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'PageBody',
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
  @import "./_page_body.scss";
</style>
