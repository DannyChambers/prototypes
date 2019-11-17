/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Banner 			from './banner.vue'
import H1 				from '../../00-atoms/02-typography/h1.vue'
import T1 				from '../../00-atoms/02-typography/t1.vue'
import ButtonGroup 		from '../../01-molecules/01-button_group/button_group.vue'
import Button 			from '../../00-atoms/00-button/button.vue'

storiesOf('Components/templates/Banner', module)
  .add('Default', () => ({
    components: { Banner, H1, T1, ButtonGroup, Button },
    template: `    <Banner url="https://via.placeholder.com/1600x1000/666/999">

				      <H1 class="h2 banner_title" text="Flash Sale!" />

				      <T1  class="banner_text" text="For a limited time this Staurday we are discounting EVERY ONE OF OUR PRODUCTs by 50% !" />

				      <ButtonGroup alignment="left" text="Shop now">
				        <Button variant="primary" text="Shop now" />
				      </ButtonGroup>

				    </Banner>
    `
  }));