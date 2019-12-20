/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Button from './button.vue'

storiesOf('Components/Atoms/Button', module)
  .add('Primary', () => ({
    components: { Button },
    template: '<Button variant="primary" text="Buy Soap" />'
  }))
  .add('Secondary', () => ({
    components: { Button },
    template: '<Button variant="secondary" text="Cancel" />'
  }));