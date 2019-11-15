<template>
  <div :class="classes" id="site_footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SiteFooter',
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
  @import "./_site_footer.scss";
</style>
