/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Checkbox from './checkbox.vue'

storiesOf('Components/Atoms/Checkbox', module)
  .add('Default', () => ({
    components: { Checkbox },
    template: '<Checkbox groupname="group_1" />'
  }));