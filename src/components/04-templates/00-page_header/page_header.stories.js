/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import PageHeader from './page_header.vue'
import Container from '../../02-molecules/00-container/container.vue'

storiesOf('Components/Templates/Page Header', module)
  .add('Default', () => ({
    components: { PageHeader, Container },
    template: '<PageHeader><Container><h2 class="h2">Some content in the Page header component (And utilizing Container component)</h2></Container></PageHeader>'
  }));