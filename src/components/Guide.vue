<template>
<div id="guide">
	<navbar active="guide" :isShadow="true" />
	<div id="documentation">
		<heading title="Run BioJS Locally" />
		<div id="build">
			<div>
				<h4>Clone GitHub repository</h4>
				<code>git clone https://github.com/biojs/biojs-frontend</code>
			</div>
			<div>
				<h4>Change directory</h4>
				<code>cd biojs-frontend</code>
			</div>
			<div>
				<h4>Install dependencies</h4>
				<code>npm install</code>
			</div>
			<div>
				<h4>Serve the website</h4>
				<code>npm run dev</code>
				<span><strong>Note: Due to security reasons, your browser might not allow the website to make API calls (Cross Origin Resource Sharing blocked).</strong></span>
			</div>
			<div>
				<h4>Build the website for production</h4>
				<code>npm run build</code>
			</div>
			<div>
				<h4>Build the website for production and view the bundle analyzer report</h4>
				<code>npm run build --report</code>
			</div>
			<div>
				<h4>Run unit tests</h4>
				<code>npm run unit</code>
			</div>
			<div>
				<h4>Run e2e tests</h4>
				<code>npm run e2e</code>
			</div>
			<div>
				<h4>Run all tests</h4>
				<code>npm test</code>
			</div>
		</div>
		<heading title="Website documentation" />
		<prop-doc :component="About"></prop-doc>
		<prop-doc :component="Component"></prop-doc>
		<prop-doc :component="Components"></prop-doc>
		<prop-doc :component="ComponentStat"></prop-doc>
		<prop-doc :component="ComponentTable"></prop-doc>
		<prop-doc :component="Contributor"></prop-doc>
		<prop-doc :component="Guide"></prop-doc>
		<prop-doc :component="Heading"></prop-doc>
		<prop-doc :component="Home"></prop-doc>
		<prop-doc :component="NavBar"></prop-doc>
		<prop-doc :component="SearchComponent"></prop-doc>
		<prop-doc :component="Testimonial"></prop-doc>
	</div>
	<foo-ter/>
</div>
</template>
<script>
import propDoc from '@/../static/node_modules/propdoc';
import '@/../static/node_modules/propdoc/style.scss';
import About from './About.vue';
import Component from './Component.vue';
import Components from './Components.vue';
import ComponentStat from './ComponentStat.vue';
import ComponentTable from './ComponentTable.vue';
import Contributor from './Contributor.vue';
import Guide from './Guide.vue';
import Heading from './Heading.vue';
import Home from './Home.vue';
import NavBar from './NavBar.vue';
import SearchComponent from './SearchComponent.vue';
import Testimonial from './Testimonial.vue';
import Footer from './Footer.vue';

export default {
	name: 'Guide',
	introduction: 'The guide component is indeed the documentation for the BioJS website.',
	description: 'BioJS uses PropDoc with a custom stylesheet for enhanced responsiveness. ',
	token: '<div id="documentation">\n\t<prop-doc :component="component_name"></prop-doc>\n</div>',
	components: {
		propDoc,
		'about': About,
		'component': Component,
		'components': Components,
		'componentStat': ComponentStat,
		'componentTable': ComponentTable,
		'contributor': Contributor,
		'guide': Guide,
		'heading': Heading,
		'home': Home,
		'navbar': NavBar,
		'searchComponent': SearchComponent,
		'testimonial': Testimonial,
		'foo-ter': Footer
	},
	data () {
		return {
			About,
			Component,
			Components,
			ComponentStat,
			ComponentTable,
			Contributor,
			Guide,
			Heading,
			Home,
			NavBar,
			SearchComponent,
			Testimonial
		};
	}
};
</script>
<style lang="scss" scoped>
#guide {
	background: #efefef57;
}
#documentation {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
}
#build {
	width: 80%;
	background: #eee;
	padding: 10px;
	border-radius: 5px;
	div {
		margin-bottom: 15px;
	}
	span {
		display: block;
	}
}
</style>
