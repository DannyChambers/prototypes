
<template>
  <div>

    <PageHeader />

    <PrimaryNavigation />

    <PageBody>
      <Container>

        <div class="layout layout_medium-centred">
          <div class="column">

            <CopyBlock>

              <H2 text="Sign up for Soap Club" />

              <T1 text="Enter your details below and subscribe to product and promotional updates from our Soap Club!" />

            </CopyBlock>

            <Form variant="infield">
              <fieldset class="fieldset">
                <legend class="legend">Personal details</legend>
                <div class="grouped_fields">
                  <Label text="First name" data-valid="Complete.">
                    <TextInput value="Marla" />
                  </Label>
                  <Label text="Last name" data-invalid="This field is required">
                    <TextInput />
                  </Label>
                </div>
                <div class="grouped_fields">
                  <Label text="Email address">
                    <TextInput type="email" />
                  </Label>
                  <Label text="Confirm email address">
                    <TextInput type="email" />
                  </Label>
                </div>
                <Label text="Notes">
                  <Textarea />
                </Label>
              </fieldset>

              <fieldset class="fieldset">
                <legend class="legend">Marketing preferences</legend>
                <fieldset class="fieldgroup">
                      <RadioButton groupname="group_1"  text="Recieve offers from us" />
                      <RadioButton groupname="group_1" text="Recieve offers from us and third parties" />
                      <RadioButton groupname="group_1" text="Recieve no marketing" />
                </fieldset>
              </fieldset>

              <fieldset class="fieldset">
                <legend class="legend">Terms and Conditions</legend>
                <Checkbox groupname="group_1" text="I agree to the Terms and Conditions" />
              </fieldset>

              <ButtonGroup alignment="left">
                <Button type="submit" variant="primary" text="Submit" />
                <Button type="link" variant="secondary" text="Cancel" />
              </ButtonGroup>

            </Form>

          </div>
        </div>


      </Container>
    </PageBody>

    <PageFooter />

    <SiteFooter />

  </div>
</template>

<script>

  //Environment
  import Colours from               '../../../components/00-environment/00-colours/colours.vue'
  import Fonts from                 '../../../components/00-environment/01-fonts/fonts.vue'
  import Reset from                 '../../../components/00-environment/02-reset/reset.vue'
  import Layout from                '../../../components/00-environment/03-layout/layout.vue'
  import Typography from            '../../../components/00-environment/04-typography/typography.vue'
  import Utilities from             '../../../components/00-environment/05-utilities/utilities.vue'
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
      Button, Colours, Reset, Fonts, Typography, Layout, Utilities, H1, H2, H3, H4, H5, T1, T2, T3, Label, TextInput, Textarea, RadioButton, Checkbox, Container, ButtonGroup, CopyBlock, Logo, Form, PageHeader, PageBody, PageFooter, SiteFooter, Banner, PrimaryNavigation
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
  @import "./_styles.scss";
</style>
