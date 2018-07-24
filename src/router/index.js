import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Components from '@/components/Components.vue';
import Guide from '@/components/Guide.vue';
import Component from '@/components/Component.vue';
import About from '@/components/About.vue';
import Visualization from '@/components/Visualization.vue';
import RandomSnippets from '@/components/RandomSnippets.vue';
import SearchPage from '@/components/SearchPage.vue';
import ContactUs from '@/components/ContactUs.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/components',
			name: 'Components',
			component: Components
		},
		{
			path: '/guide',
			name: 'Guide',
			component: Guide
		},
		{
			path: '/component/:name',
			name: 'Component',
			component: Component
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/visualization',
			name: 'Visualization',
			component: Visualization
		},
		{
			path: '/random/:num',
			name: 'Random Snippets',
			component: RandomSnippets
		},
		{
			path: '/search/:tag',
			name: 'Search for tag',
			component: SearchPage
		},
		{
			path: '/contact',
			name: 'Contact Us',
			component: ContactUs
		}
	]
});
