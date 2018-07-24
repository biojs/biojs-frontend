<template>
<div id="container">
	<nav-bar />
	<heading title="Contact Us" />
	<div id="content">
		<p>
			BioJS is a community-based project compiling JavaScript widgets and modular components to visualize and process biological data using web technologies, making it easier to integrate them to your own website. BioJS provides a registry showcase so users can search components and see them in action.
		</p>
		<div id="contact">
			<p>We would love to here from you!</p>
			<a :href="gitterURL">
				<button type="button" class="btn btn-success btn-sm">Contact us on Gitter</button>
			</a>
		</div>
	</div>
</div>
</template>
<script>
import NavBar from './NavBar.vue';
import Heading from './Heading.vue';

export default {
	data () {
		return {
			gitterURL: 'https://gitter.im/biojs/biojs'
		};
	},
	components: {
		'nav-bar': NavBar,
		'heading': Heading
	}
};
</script>
<style lang="scss" scoped>
#container {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 18px;
}
#content {
	width: 70%;
	text-align: center;
}
#contact {
	font-weight: bold;
	button {
		font-weight: bold;
		font-size: 18px;
	}
}
</style>
