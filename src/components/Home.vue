<template>
	<div>
		<div id="cover">
			<nav-bar :isShadow="false" />
			<div id="coverContainer">
				<div id="coverContent">
					<h1>Welcome to <span>BioJS</span></h1>
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
			<div id="componentsTable">
				<component-table title="Top Downloads" components="most_recent" />
				<component-table title="Top Starred" components="top_starred" />
				<component-table title="Most Recent" components="top_dwnld" />
			</div>
		</div>
		<div id="testimonials">
			<heading title="Why biologists love BioJS!" color="#FFFFFF" />
			<testimonial />
		</div>
		<div id="about">
			<heading title="Get to know BioJS" />
			<p>{{ aboutBioJS }}</p>
			<div id="aboutButtons">
				<button type="button" class="btn btn-success btn-sm">Learn More</button>
				<button type="button" class="btn btn-success btn-sm">View Guide</button>
			</div>
		</div>
	</div>
</template>
<script>
import NavBar from './NavBar.vue';
import Heading from './Heading.vue';
import ComponentTable from './ComponentTable.vue';
import Testimonial from './Testimonial.vue';
export default {
	components: {
		'nav-bar': NavBar,
		'heading': Heading,
		'component-table': ComponentTable,
		'testimonial': Testimonial
	},
	data () {
		return {
			intro: 'BioJS is a library of over hundred JavaScript components enabling you to visualize and process data using current web technologies.',
			aboutBioJS: 'BioJS unites users and developers from all around the globe to create outstanding biological data representations. The open-source character of the BioJS project makes it easy for anyone to follow and discuss current developments in the project, as well as to contribute and share their code with others.'
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
	width: 40%;
}
#coverContent {
	h1 {
		color: #000;
		font-family: 'Roboto', sans-serif;
		font-weight: bolder;
		span {
			color: #007E3A;
		}
	}
	p {
		font-size: 20px;
	}
}
#visualize {
	background: #efefef;
}
#componentsTable {
	display: flex;
	width: 100%;
	justify-content: center;
	flex-wrap: wrap;
}
#testimonials {
	background: linear-gradient(#007E3A, #0C8C46, #00AF66);
}
#about {
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 30px;
	p {
		font-size: 18px;
		width: 70%;
		text-align: center;
	}
	#aboutButtons {
		button {
			font-size: 15px;
		}
		button:first-child {
			margin-right: 10px;
		}
	}
}
</style>
