/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Textarea from './textarea.vue'

storiesOf('Components/Atoms/Textarea', module)
  .add('Default', () => ({
    components: { Textarea },
    template: '<Textarea id="abc"></textarea>'
  }));