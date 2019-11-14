/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Logo from './logo.vue'

storiesOf('Components/Organisms/Logo', module)
  .add('Default', () => ({
    components: { Logo },
    template: '<Logo />'
  }));