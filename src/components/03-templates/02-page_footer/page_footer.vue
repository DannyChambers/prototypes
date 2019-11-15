<template>
  <div :class="classes" id="page_footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'PageFooter',
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
  @import "./_page_footer.scss";
</style>
