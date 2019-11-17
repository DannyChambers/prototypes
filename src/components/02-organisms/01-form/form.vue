<template>
  <form :class="classes">
    <slot></slot>
  </form>
</template>

<script>

  //Atoms

  //Molecules

  //Organisms

  //Templates

  export default {
    name: 'Form',
    components: {
    },
    props: {
      variant: String,
    },
    computed: {
      classes() {
        return `form form--${this.variant}`;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_form.scss";
</style>

form--infield