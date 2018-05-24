<template>
	<div>
		<div id="cover">
			<nav-bar :isShadow="false" />
			<div id="coverContainer">
				<div id="coverContent">
					<h2>Welcome to <span>BioJS</span></h2>
					<p>{{ intro }}</p>
					<button type="button" class="btn btn-success btn-sm">Explore</button>
					<button type="button" class="btn btn-success btn-sm">Learn More</button>
				</div>
			</div>
		</div>
		<div id="visualize">
			<heading title="Visualize" />
		</div>
		<div id="components">
			<heading title="Popular Components" />
			<component-table title="Top Downloads" />
			<component-table title="Top Starred" />
			<component-table title="Most Recent" />
		</div>
	</div>
</template>
<script>
import NavBar from './NavBar.vue';
import Heading from './Heading.vue';
import ComponentTable from './ComponentTable.vue';
export default {
	components: {
		'nav-bar': NavBar,
		'heading': Heading,
		'component-table': ComponentTable
	},
	data () {
		return {
			intro: 'BioJS is a library of over hundred JavaScript components enabling you to visualize and process data using current web technologies.'
		};
	}
};
</script>
<style lang="scss" scoped>
#cover {
	width: 100%;
	height: 100%;
	background: #ffffff;
}
#coverContainer {
	height: calc(100vh - 70px);
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 10% 0 10%;
}
#coverContent {
	width: 30%;
}
#coverContent {
	h2 {
		color: #000;
		font-family: 'Roboto', sans-serif;
		font-weight: bolder;
		span {
			color: #007E3A;
		}
	}
}
#visualize {
	background: #efefef;
}
</style>
