/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import ButtonGroup from './button_group.vue'
import Button from '../../00-atoms/00-button/button.vue'

storiesOf('Components/Molecules/Button Group', module)
  .add('Left', () => ({
    components: { ButtonGroup, Button },
    template: '<ButtonGroup variant="left"><Button variant="primary" text="Buy Soap" /><Button variant="secondary" text="Cancel" /></ButtonGroup>'
  }))
  .add('Right', () => ({
    components: { ButtonGroup, Button },
    template: '<ButtonGroup variant="right"><Button variant="primary" text="Buy Soap" /><Button variant="secondary" text="Cancel" /></ButtonGroup>'
  }))
  .add('Centre', () => ({
    components: { ButtonGroup, Button },
    template: '<ButtonGroup variant="centre"><Button variant="primary" text="Buy Soap" /><Button variant="secondary" text="Cancel" /></ButtonGroup>'
  }))
  .add('Full width', () => ({
    components: { ButtonGroup, Button },
    template: '<ButtonGroup variant="fullwidth"><Button variant="primary" text="Buy Soap" /><Button variant="secondary" text="Cancel" /></ButtonGroup>'
  }));