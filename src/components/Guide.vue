<template>
<div id="guide">
	<navbar :isShadow="true" />
	<heading title="Documentation" />
	<div id="documentation">
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
		'testimonial': Testimonial
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
</style>
