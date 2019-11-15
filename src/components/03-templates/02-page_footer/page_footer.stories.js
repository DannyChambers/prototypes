/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import PageFooter from './page_footer.vue'
import Container from '../../01-molecules/00-container/container.vue'

storiesOf('Components/Templates/Page Footer', module)
  .add('Default', () => ({
    components: { PageFooter, Container },
    template: '<PageFooter><Container><h2 class="h2">Some content in the Page Footer component (And utilizing Container component)</h2></Container></PageFooter>'
  }));