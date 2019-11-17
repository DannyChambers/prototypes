/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import CopyBlock from './copy_block.vue'
import H2 from '../../00-atoms/02-typography/h2.vue'
import T1 from '../../00-atoms/02-typography/t1.vue'

storiesOf('Components/Molecules/Copy Block', module)
  .add('Default', () => ({
    components: { CopyBlock, H2, T1 },
    template: '<CopyBlock><H2 text="This is a block of copy" /><T1 text="Lorem ipsum site etiet." /></CopyBlock>'
  }));