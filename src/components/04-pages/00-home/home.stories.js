/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import store from '@/store';

import Home from './home.vue'

storiesOf('Components/Pages/Home', module)
  .add('Signed out', () => ({
  	store,
    components: { Home },
    template: '<Home />'
  }));