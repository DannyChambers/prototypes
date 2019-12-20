<template>
  <div :class="classes" id="site_footer">
    <Container>

      <T3 text="© Copyright 2020" class="text-centre" />
      
    </Container>
  </div>
</template>

<script>

  //Atoms
  import T3 from   '../../01-atoms/02-typography/t3.vue'

  //Molecules
  import Container from   '../../02-molecules/00-container/container.vue'

  //Organisms

  //Templates

  export default {
    name: 'SiteFooter',
    components: {
      Container, T3
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
  @import "./_site_footer.scss";
</style>
