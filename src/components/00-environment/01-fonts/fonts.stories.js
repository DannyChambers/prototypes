
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Fonts from './fonts.vue'


storiesOf('Components/Environment/Fonts', module)
  .add('Carrington', () => ({
    components: { Fonts },
    template: '<h1 class="h1 carrington" style="text-transform:none;">Carrington</h1>'
  }))
  .add('Raleway', () => ({
    components: { Fonts },
    template: '<h1 class="h2">Raleway</h1>'
  }));