/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Layout from './layout.vue'

storiesOf('Components/Environment/layout', module)
  .add('Defaut', () => ({
    components: { Layout },
    template: ''
  }));