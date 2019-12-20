/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Reset from './reset.vue'

storiesOf('Components/Environment/reset', module)
  .add('Default', () => ({
    components: { Reset },
    template: ''
  }));