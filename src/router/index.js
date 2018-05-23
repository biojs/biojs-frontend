import Vue from 'vue';
import Router from 'vue-router';
import NavBar from '@/components/NavBar.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'NavBar',
			component: NavBar
		}
	]
});
