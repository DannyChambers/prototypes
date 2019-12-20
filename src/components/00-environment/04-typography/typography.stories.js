/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Typography from './typography.vue'

storiesOf('Components/Environment/typography', module)
  .add('Default', () => ({
    components: { Typography },
    template: ''
  }));