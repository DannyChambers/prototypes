
<template>
  <div class="variant_a">

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

            <Form variant="linear">
              <fieldset class="fieldset">
                <legend class="legend">Personal details</legend>
                <Label text="First name" data-valid="Complete.">
                  <TextInput value="Marla" />
                </Label>
                <Label text="Last name" data-invalid="This field is required">
                  <TextInput />
                </Label>
                <Label text="Email address">
                  <TextInput type="email" />
                </Label>
                <Label text="Confirm email address">
                  <TextInput type="email" />
                </Label>
                <Label text="Notes">
                  <Textarea />
                </Label>
              </fieldset>

              <fieldset class="fieldset">
                <legend class="legend">Marketing preferences</legend>
                <fieldset class="fieldgroup">
                    <Label text="Recieve offers from us" class="label--radio">
                      <RadioButton groupname="group_1" />
                    </Label>
                    <Label text="Recieve offers from us and third parties" class="label--radio">
                      <RadioButton groupname="group_1" />
                    </Label>
                    <Label text="Recieve no marketing" class="label--radio">
                      <RadioButton groupname="group_1" />
                    </Label>
                </fieldset>
              </fieldset>

              <fieldset class="fieldset">
                <legend class="legend">Terms and Conditions</legend>
                <Label text="I agree to the Terms and Conditions" class="label--checkbox">
                  <Checkbox groupname="group_1" />
                </Label>
              </fieldset>

              <ButtonGroup alignment="centre">
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

  //Atoms
  import Button from                '../../../components/00-atoms/00-button/button.vue'
  import H1 from                    '../../../components/00-atoms/02-typography/h1.vue'
  import H2 from                    '../../../components/00-atoms/02-typography/h2.vue'
  import H3 from                    '../../../components/00-atoms/02-typography/h3.vue'
  import H4 from                    '../../../components/00-atoms/02-typography/h4.vue'
  import H5 from                    '../../../components/00-atoms/02-typography/h5.vue'
  import T1 from                    '../../../components/00-atoms/02-typography/t1.vue'
  import T2 from                    '../../../components/00-atoms/02-typography/t2.vue'  
  import T3 from                    '../../../components/00-atoms/02-typography/t3.vue'
  import Label from                 '../../../components/00-atoms/03-label/label.vue'
  import TextInput from             '../../../components/00-atoms/04-text_input/text_input.vue'
  import Textarea from              '../../../components/00-atoms/05-textarea/textarea.vue'
  import RadioButton from           '../../../components/00-atoms/06-radio_button/radio_button.vue'
  import Checkbox from              '../../../components/00-atoms/07-checkbox/checkbox.vue'
  //Molecules
  import Container from             '../../../components/01-molecules/00-container/container.vue'
  import ButtonGroup from           '../../../components/01-molecules/01-button_group/button_group.vue'
  import CopyBlock from             '../../../components/01-molecules/03-copy_block/copy_block.vue'
  //Organisms
  import Logo from                  '../../../components/02-organisms/00-logo/logo.vue'
  import Form from                  '../../../components/02-organisms/01-form/form.vue'
  //Templates
  import PageHeader from            '../../../components/03-templates/00-page_header/page_header.vue'
  import PageBody from              '../../../components/03-templates/01-page_body/page_body.vue'
  import PageFooter from            '../../../components/03-templates/02-page_footer/page_footer.vue'
  import SiteFooter from            '../../../components/03-templates/03-site_footer/site_footer.vue'
  import Banner from                '../../../components/03-templates/04-banner/banner.vue'
  import PrimaryNavigation from     '../../../components/03-templates/05-primary_navigation/primary_navigation.vue'

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
  @import "./_styles.scss";
</style>
