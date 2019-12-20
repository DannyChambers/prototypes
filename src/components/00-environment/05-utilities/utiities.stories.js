/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Utilities from './utilities.vue'

storiesOf('Components/Environment/Utilities', module)
  .add('Default', () => ({
    components: { Utilities },
    template: ''
  }));