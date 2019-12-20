<template>
  <div :class="classes" id="page_header">
    <Container>

      <Logo />

    </Container>
  </div>
</template>

<script>

  //Atoms

  //Molecules
  import Container from   '../../02-molecules/00-container/container.vue'

  //Organisms
  import Logo from        '../../03-organisms/00-logo/logo.vue'

  //Templates

  export default {
    name: 'Home',
    components: {
      Container, Logo
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
  @import "./_page_header.scss";
</style>

