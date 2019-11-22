/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Variant_A from './variant_a/index.vue'
import Variant_B from './variant_b/index.vue'
import Variant_C from './variant_c/index.vue'
import Variant_D from './variant_d/index.vue'
import Variant_E from './variant_e/index.vue'

storiesOf('Components/Prototypes/01', module)
  .add('Variant A', () => ({
    components: { Variant_A },
    template: '<Variant_A />'
  }))
  .add('Variant B', () => ({
    components: { Variant_B },
    template: '<Variant_B />'
  }))
   .add('Variant C', () => ({
    components: { Variant_C },
    template: '<Variant_C />'
  }))
   .add('Variant D', () => ({
    components: { Variant_D },
    template: '<Variant_D />'
  }))
   .add('Variant E', () => ({
    components: { Variant_E },
    template: '<Variant_E />'
  }));

