import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
// import Components from '@/components/Components.vue';
import Guide from '@/components/Guide.vue';
// import About from '@/components/About.vue';
// import Contact from '@/components/Contact.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		// {
		// 	path: '/components',
		// 	name: 'Components',
		// 	component: Components
		// },
		{
			path: '/guide',
			name: 'Guide',
			component: Guide
		}
		// {
		// 	path: '/about',
		// 	name: 'About',
		// 	component: About
		// },
		// {
		// 	path: '/contact',
		// 	name: 'Contact',
		// 	component: Contact
		// }
	]
});
