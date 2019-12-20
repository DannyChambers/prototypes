/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import store from '@/store';

import Signup from './signup.vue'

storiesOf('Components/Pages/Sign up', module)
  .add('Signed out', () => ({
  	store,
    components: { Signup },
    template: '<Signup />'
  }));