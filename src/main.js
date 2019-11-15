import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//Routes
import Home from './components/04-pages/00-home/home.vue';

Vue.use(VueRouter);

const routes = [
	{path: '/', component: Home}
]

const router = new VueRouter({
	routes,
	mode: 'history'
});

Vue.config.productionTip = false

new Vue({	
  router,
  render: h => h(App),
}).$mount('#app')
