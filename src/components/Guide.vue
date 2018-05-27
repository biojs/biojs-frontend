<template>
<div>
	<navbar :isShadow="true" />
	<heading title="Documentation" />
	<div id="documentation">
		<prop-doc :component="ComponentTable"></prop-doc>
		<prop-doc :component="Guide"></prop-doc>
		<prop-doc :component="Heading"></prop-doc>
		<prop-doc :component="Home"></prop-doc>
		<prop-doc :component="NavBar"></prop-doc>
		<prop-doc :component="Testimonial"></prop-doc>
	</div>
</div>
</template>
<script>
import propDoc from 'propdoc';
import '@/../static/node_modules/propdoc/style.scss';
import ComponentTable from './ComponentTable.vue';
import Guide from './Guide.vue';
import Heading from './Heading.vue';
import Home from './Home.vue';
import NavBar from './NavBar.vue';
import Testimonial from './Testimonial.vue';

export default {
	name: 'Guide',
	introduction: 'The guide component is indeed the documentation for the BioJS website.',
	description: 'BioJS uses PropDoc with a custom stylesheet for enhanced responsiveness. ',
	token: '<div id="documentation">\n\t<prop-doc :component="component_name"></prop-doc>\n</div>',
	components: {
		propDoc,
		'componentTable': ComponentTable,
		'guide': Guide,
		'heading': Heading,
		'home': Home,
		'navbar': NavBar,
		'testimonial': Testimonial
	},
	data () {
		return {
			ComponentTable,
			Guide,
			Heading,
			Home,
			NavBar,
			Testimonial
		};
	}
};
</script>
<style lang="scss" scoped>
#documentation {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
}
</style>
