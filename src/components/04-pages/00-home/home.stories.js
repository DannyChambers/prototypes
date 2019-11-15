/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Home from './home.vue'

storiesOf('Components/Pages/Home', module)
  .add('Signed out', () => ({
    components: { Home },
    template: '<Home />'
  }));