/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import SiteFooter from './site_footer.vue'
import Container from '../../01-molecules/00-container/container.vue'

storiesOf('Components/Templates/Site Footer', module)
  .add('Default', () => ({
    components: { SiteFooter, Container },
    template: '<SiteFooter><Container><h2 class="h2">Some content in the Site Footer component (And utilizing Container component)</h2></Container></SiteFooter>'
  }));