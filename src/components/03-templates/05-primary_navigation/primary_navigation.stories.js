import { storiesOf } from '@storybook/vue'
import store from '@/store';

import PrimaryNavigation 	from './primary_navigation.vue'

storiesOf('Components/templates/Primary navigation', module)
  .add('Signed out', () => ({
  	store,
    components: { PrimaryNavigation },
    template: '<PrimaryNavigation />'
  }));