
<template>
  <div>

    <PageHeader />
    
    <PrimaryNavigation />

    <Banner url="@images/site/soap_banner.jpg">

      <H1 class="banner_title" text="Flash Sale!" />

      <T1  class="banner_text" text="For a limited time this Staurday we are discounting EVERY ONE OF OUR PRODUCTs by 50% !" />

      <ButtonGroup alignment="left" text="Shop now">
        <Button variant="primary" text="Shop now" />
      </ButtonGroup>

    </Banner>

    <PageBody>
      <Container>

        <section>

          <CopyBlock>

            <H1 class="h2" text="Heading one" />

            <T1 text="Enter your details below and subscribe to product and promotional updates from our Soap Club!" />

          </CopyBlock>

        </section>

      </Container>
    </PageBody>

    <PageFooter />

    <SiteFooter />

  </div>
</template>

<script>

  //Atoms
  import Button from                '../../../components/01-atoms/00-button/button.vue'
  import H1 from                    '../../../components/01-atoms/02-typography/h1.vue'
  import H2 from                    '../../../components/01-atoms/02-typography/h2.vue'
  import H3 from                    '../../../components/01-atoms/02-typography/h3.vue'
  import H4 from                    '../../../components/01-atoms/02-typography/h4.vue'
  import H5 from                    '../../../components/01-atoms/02-typography/h5.vue'
  import T1 from                    '../../../components/01-atoms/02-typography/t1.vue'
  import T2 from                    '../../../components/01-atoms/02-typography/t2.vue'  
  import T3 from                    '../../../components/01-atoms/02-typography/t3.vue'
  import Label from                 '../../../components/01-atoms/03-label/label.vue'
  import TextInput from             '../../../components/01-atoms/04-text_input/text_input.vue'
  import Textarea from              '../../../components/01-atoms/05-textarea/textarea.vue'
  import RadioButton from           '../../../components/01-atoms/06-radio_button/radio_button.vue'
  import Checkbox from              '../../../components/01-atoms/07-checkbox/checkbox.vue'
  //Molecules
  import Container from             '../../../components/02-molecules/00-container/container.vue'
  import ButtonGroup from           '../../../components/02-molecules/01-button_group/button_group.vue'
  import CopyBlock from             '../../../components/02-molecules/03-copy_block/copy_block.vue'
  //Organisms
  import Logo from                  '../../../components/03-organisms/00-logo/logo.vue'
  import Form from                  '../../../components/03-organisms/01-form/form.vue'
  //Templates
  import PageHeader from            '../../../components/04-templates/00-page_header/page_header.vue'
  import PageBody from              '../../../components/04-templates/01-page_body/page_body.vue'
  import PageFooter from            '../../../components/04-templates/02-page_footer/page_footer.vue'
  import SiteFooter from            '../../../components/04-templates/03-site_footer/site_footer.vue'
  import Banner from                '../../../components/04-templates/04-banner/banner.vue'
  import PrimaryNavigation from     '../../../components/04-templates/05-primary_navigation/primary_navigation.vue'

  export default {
    name: 'Home',
    components: {
      Button, H1, H2, H3, H4, H5, T1, T2, T3, Label, TextInput, Textarea, RadioButton, Checkbox, Container, ButtonGroup, CopyBlock, Logo, Form, PageHeader, PageBody, PageFooter, SiteFooter, Banner, PrimaryNavigation
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
