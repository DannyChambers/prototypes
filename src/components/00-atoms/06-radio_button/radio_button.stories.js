/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import RadioButton from './radio_button.vue'

storiesOf('Components/Atoms/Radio button', module)
  .add('Default', () => ({
    components: { RadioButton },
    template: '<RadioButton groupname="group_1" />'
  }));