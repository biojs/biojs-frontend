<template>
<div id="about">
	<nav-bar active="about"></nav-bar>
	<heading title="About Us" />
	<p id="aboutContent" v-html="about"></p>
	<div>
		<router-link to="/components"><button type="button" class="btn btn-success btn-sm" id="btn">Explore</button></router-link>
		<router-link to="/contact"><button type="button" class="btn btn-success btn-sm" id="btn">Contact Us</button></router-link>
	</div>
	<app-footer class="footer"/>
</div>
</template>
<script>
import NavBar from './NavBar.vue';
import Heading from './Heading.vue';
import Footer from './Footer.vue';

export default {
	name: 'About',
	introduction: 'The about section is an informational page which provides insights about BioJS and its foundation.',
	data () {
		return {
			about: `BioJS is a community-based project compiling JavaScript widgets and modular components to visualize and process biological data using web technologies, making it easier to integrate them to your own website. BioJS provides a registry showcase so users can search components and see them in action.<br><br>
			BioJS started in 2012 and has grown via Google Summer of Code (GSoC) where BioJS has participated standalone in 2014 and 2016, and as part of the Open Bioinformatics Foundation in 2018. In 2015, BioJS and the Galaxy project joined forces and created a tool to automatically convert BioJS components into Galaxy’s visualisation system.`
		};
	},
	components: {
		'heading': Heading,
		'nav-bar': NavBar,
		'app-footer': Footer
	}
};
</script>
<style lang="scss" scoped>
#about {
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
#aboutContent {
	width: 80%;
	text-align: center;
	font-size: 20px;
}
#btn {
	padding: 5px;
	font-size: 20px;
	margin: 10px;
}
.footer{
	position: absolute;
	bottom: 0px;
}
</style>
