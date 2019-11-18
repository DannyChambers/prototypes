/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Signup from './signup.vue'

storiesOf('Components/Pages/Sign up', module)
  .add('Signed out', () => ({
    components: { Signup },
    template: '<Signup />'
  }));