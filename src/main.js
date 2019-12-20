import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//Routes

//Building robust infield forms --
import _01VA from 				'./prototypes/01/variant_a/index.vue';
import _01VB from 				'./prototypes/01/variant_b/index.vue';
import _01VC from 				'./prototypes/01/variant_c/index.vue';
import _01VD from 				'./prototypes/01/variant_d/index.vue';
import _01VE from 				'./prototypes/01/variant_e/index.vue';

//CSS Skull --
import _02VA from 				'./prototypes/02/variant_a/index.vue';


//State
import store from './store';

Vue.use(VueRouter);

const routes = [
	{path: '/', component: _01VA},
	{path: '/01/variant_a/', component: _01VA},
	{path: '/01/variant_b/', component: _01VB},
	{path: '/01/variant_c/', component: _01VC},
	{path: '/01/variant_d/', component: _01VD},
	{path: '/01/variant_e/', component: _01VE},
	{path: '/02/', component: _02VA}
]

const router = new VueRouter({
	routes,
	mode: 'history',
	base: '/prototypes/'
});

Vue.config.productionTip = false

new Vue({	
  router,
  store,
  render: h => h(App),
}).$mount('#app')
