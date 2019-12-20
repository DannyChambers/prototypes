/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import TextInput from './text_input.vue'

storiesOf('Components/Atoms/Text input', module)
  .add('Default', () => ({
    components: { TextInput },
    template: '<TextInput inputID="abc" />'
  }));