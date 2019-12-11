import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		primaryNavigation: [
			{text: "Home", loggedOut: true},
			{text: "For her", loggedOut: true},
			{text: "For him", loggedOut: true},
			{text: "Contact", loggedOut: true},
			{text: "Sign in", loggedOut: true},
			{text: "Sign out", loggedOut: false}
		]
	},
	getters: {
		buildPrimaryNav(state){
			return state.primaryNavigation;
		}
	}
});