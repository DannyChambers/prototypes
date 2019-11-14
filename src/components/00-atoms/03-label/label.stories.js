/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Label from './label.vue'

storiesOf('Components/Atoms/Label', module)
  .add('Default', () => ({
    components: { Label },
    template: '<Label text="Full name" />'
  }));