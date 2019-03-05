<template>
	<div id="banner">
		<b-container fluid>
  		<b-row>
    		<b-col>
					<h4>BioJS</h4>
					<p> {{ aboutBioJs }} </p>
				</b-col>
    		<b-col>
					<h4>Connect with us</h4>
					<a href="https://github.com/biojs/biojs-frontend">
						<img src="../assets/component/commit.png" class="rounded">
					</a>
					<a href="https://biojs.net/">
						<img src="../../static/logo.png" class="rounded">
					</a>
					<a href="https://gitter.im/biojs/biojs">
						<img src="https://img.icons8.com/ios/50/000000/gitter-filled.png" class="rounded">
					</a>
				</b-col>
  		</b-row>
		</b-container>
	</div>
</template>
<script>
export default {
	name: 'Footer',
	data () {
		return {
			"aboutBioJs" : "BioJS is a community-based project compiling JavaScript widgets and modular components to visualize and process biological data using web technologies, making it easier to integrate them to your own website. BioJS provides a registry showcase so users can search components and see them in action."
		}
	}
};
</script>
<style lang="scss" scoped>
#banner {
	width: 100%;
	padding: 5px 5px 5px 25px;
	color: #fff;
	background-color: rgb(19, 19, 19);
	font-size: 17px;
	a {
		color: #3e9bff;
	}
	p{
		font-size:10px;
	}
}
img {
	height: 40px;
	margin: 10px;
	background-color: #fff;
}
</style>
