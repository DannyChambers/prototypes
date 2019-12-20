/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'
import Vuex from 'vuex';

const req = require.context('../../src/components', true, /.stories.js$/)


function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
