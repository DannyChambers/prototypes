/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Button from './button.vue'

storiesOf('Atoms/Button', module)
  .add('Primary', () => ({
    components: { Button },
    template: '<Button @click="action">Buy Soap</Button>',
    methods: { action: action('clicked') }
  }))
  .add('Secondary', () => ({
    components: { Button },
    template: '<Button variant="button--secondary" @click="action">Buy Soap</Button>',
    methods: { action: action('clicked') }
  }));