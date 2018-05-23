import Vue from 'vue';
import Router from 'vue-router';
import NavBar from '@/components/Home.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: NavBar
		}
	]
});
