
<template>
  <div>

    <PageHeader />

    <Banner url="https://via.placeholder.com/1600x1000/666/999">

      <H2 class="banner_title" text="Flash Sale!" />

      <T1  class="banner_text" text="For a limited time this Staurday we are discounting EVERY ONE OF OUR PRODUCTs by 50% !" />

      <ButtonGroup alignment="left" text="Shop now">
        <Button variant="primary" text="Shop now" />
      </ButtonGroup>

    </Banner>

    <PageBody>
      <Container>


      </Container>
    </PageBody>

    <PageFooter />

    <SiteFooter />

  </div>
</template>

<script>

  //Atoms
  //import H1 from          '../../00-atoms/02-typography/h1.vue'
  import H2 from          '../../00-atoms/02-typography/h2.vue'
  import T1 from          '../../00-atoms/02-typography/t1.vue'
  import Button from      '../../00-atoms/00-button/button.vue'

  //Molecules
  import Container from   '../../01-molecules/00-container/container.vue'
  import ButtonGroup from '../../01-molecules/01-button_group/button_group.vue'
  //import CopyBlock from   '../../01-molecules/03-copy_block/copy_block.vue'

  //Organisms

  //Templates
  import PageHeader from  '../../03-templates/00-page_header/page_header.vue'
  import PageBody from    '../../03-templates/01-page_body/page_body.vue'
  import PageFooter from  '../../03-templates/02-page_footer/page_footer.vue'
  import SiteFooter from  '../../03-templates/03-site_footer/site_footer.vue'
  import Banner from  '../../03-templates/04-banner/banner.vue'

  export default {
    name: 'Home',
    components: {
      H2, T1, Button, Container, ButtonGroup, PageHeader, PageBody, PageFooter, SiteFooter, Banner
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
