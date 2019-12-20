/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import PageFooter from './page_footer.vue'

storiesOf('Components/Templates/Page Footer', module)
  .add('Default', () => ({
    components: { PageFooter },
    template: '<PageFooter/>'
  }));