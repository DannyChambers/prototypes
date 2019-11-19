<template>
  <div :class="classes" id="page_footer">
    <Container>

      <div class="layout layout_33-33-33">

        <div class="column">

          <H2 class="h5" text="Footer Header" />

          <T2 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

        </div>

        <div class="column">

          <H2 class="h5" text="Footer Header" />

          <T2 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

        </div>

        <div class="column">

          <H2 class="h5" text="Footer Header" />

          <T2 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

        </div>

      </div>
      
    </Container>
  </div>
</template>

<script>

  //Atoms
  import H2 from          '../../00-atoms/02-typography/h2.vue'
  import T2 from          '../../00-atoms/02-typography/t2.vue'

  //Molecules
  import Container from   '../../01-molecules/00-container/container.vue'

  //Organisms

  //Templates

  export default {
    name: 'PageFooter',
    components: {
      H2, T2, Container
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
  @import "./_page_footer.scss";
</style>
