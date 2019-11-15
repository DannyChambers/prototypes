/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import PageBody from './page_body.vue'
import Container from '../../01-molecules/00-container/container.vue'

storiesOf('Components/Templates/Page Body', module)
  .add('Default', () => ({
    components: { PageBody, Container },
    template: '<PageBody><Container><h2 class="h2">Some content in the Page Body component (And utilizing Container component)</h2></Container></PageBody>'
  }));