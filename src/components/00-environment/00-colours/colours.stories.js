/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import Colours from './colours.vue'

storiesOf('Components/Environment/Colours', module)
  .add('Default', () => ({
    components: { Colours },
    template: ''
  }));