/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Container from './container.vue'

storiesOf('Components/Molecules/Container', module)
  .add('Default', () => ({
    components: { Container },
    template: '<Container><h2 class="h2">Some content in the Container component</h2></Container>'
  }));