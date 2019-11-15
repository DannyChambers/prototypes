
<template>
  <div>

    <H1 text="Home baby!" />

  </div>
</template>

<script>
  import H1 from '../../00-atoms/02-typography/h1.vue'
  export default {
    name: 'Home',
    components: {
      H1
    },
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
  @import "./_home.scss";
</style>
