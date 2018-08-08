<template>
	<div>
		<div id="cover">
			<nav-bar :isShadow="false" :isHome="true" />
			<div id="coverContainer">
				<div id="coverContent">
					<h1>Welcome to <span>BioJS</span></h1>
					<p>{{ intro }}</p>
					<router-link to="/components"><button type="button" class="btn btn-success btn-sm">Explore</button></router-link>
					<router-link to="/about"><button type="button" class="btn btn-success btn-sm">Learn More</button></router-link>
				</div>
				<img src="@/../static/phone.png" id="phone" />
			</div>
		</div>
		<div id="visualize">
			<heading title="Visualize" />
			<div id="visContent">
				<div id="visAbout">
					<h2>{{visualization.name}}</h2>
					<p>{{visualization.description}}<br>
					Author: {{visualization.author}}</p>
					<div class="tags">
						<span>Tags: </span>
						<router-link v-for="(tag, index) in visualization.tags" :key="index" :to="'/search/'+tag">
							<span class="tagName">
								{{ tag }}
							</span>
						</router-link>
					</div>
					<br>
					<h2>Browse all components</h2>
					<search-component />
				</div>
				<div id="visIframe">
					<iframe src="@/../static/visualization/index.html" frameborder="0"></iframe>
				</div>
			</div>
		</div>
		<div id="components">
			<heading title="Popular Components" />
			<div id="componentsTable">
				<component-table title="Top Downloads" components="top_dwnld" />
				<component-table title="Top Starred" components="top_starred" />
				<component-table title="Most Recent" components="most_recent" />
			</div>
			<div id="search">
				<search-component />
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
				<router-link to="/about"><button type="button" class="btn btn-success btn-sm">Learn More</button></router-link>
				<router-link to="/guide"><button type="button" class="btn btn-success btn-sm">View Guide</button></router-link>
			</div>
		</div>
	</div>
</template>
<script>
import NavBar from './NavBar.vue';
import Heading from './Heading.vue';
import ComponentTable from './ComponentTable.vue';
import Testimonial from './Testimonial.vue';
import SearchComponent from './SearchComponent.vue';
export default {
	name: 'Home',
	introduction: 'The home component is a master component which combines most of the other components and renders the landing page.',
	description: 'It uses various major components and compiles them to produce the home page: nav-bar, heading, visualization, component-table, testimonial.',
	token: '<div id="cover">\n\t...\n</div>\n<div id="visualize">\n\t...\n</div>\n<div id="components">\n\t...\n</div>\n<div id="testimonials">\n\t...\n</div>\n<div id="about">\n\t...\n</div>',
	components: {
		'nav-bar': NavBar,
		'heading': Heading,
		'component-table': ComponentTable,
		'testimonial': Testimonial,
		'search-component': SearchComponent
	},
	data () {
		return {
			intro: 'BioJS is a library of over hundred JavaScript components enabling you to visualize and process data using current web technologies.',
			aboutBioJS: 'BioJS unites users and developers from all around the globe to create outstanding biological data representations. The open-source character of the BioJS project makes it easy for anyone to follow and discuss current developments in the project, as well as to contribute and share their code with others.',
			visualization: {
				name: 'bio-pv',
				description: 'WebGL protein viewer',
				author: 'Marco Biasini',
				tags: ['biojs', 'protein', '3d', 'webgl']
			}
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
#phone {
	max-height: 60vh;
	max-width: 40vw;
	position: absolute;
	bottom: 0;
	right: 10%;
}
#components {
	display: flex;
	flex-direction: column;
	align-items: center;
	#search {
		width: 35%;
	}
}
.tagName {
	background: #efefef;
    color: #007E3A;
    padding: 5px;
    border-radius: 1px;
    margin: 0 2.5px;
	display: inline-block;
	margin-bottom: 5px;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
}
.tagName:hover {
	background: #007E3A;
	color: #fff;
}
@media (max-width: 700px) {
	#coverContainer {
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;
	}
	#coverContent {
		width: 95%;
		text-align: center;
	}
	#phone {
		position: static;
		right: 0;
		overflow: hidden;
		max-height: 50vh;
		max-width: 80vw;
	}
	#coverContent {
		h1 {
			color: #000;
			font-family: 'Roboto', sans-serif;
			font-weight: bolder;
			span {
				color: #007E3A;
			}
			font-size: 30px;
		}
		p {
			font-size: 15px;
		}
	}
	#components {
		#search {
			width: 90%;
		}
	}
}
#visContent {
	display: flex;
	padding: 10px 7vw 30px 7vw;
	justify-content: space-between;
	#visAbout {
		margin-right: 5vw;
	}
	#visIframe {
		flex: 1;
		min-height: 400px;
		iframe {
			height: 100%;
			width: 100%;
			border-radius: 5px;
			min-height: 400px;
		}
	}
}
@media (max-height: 520px) and (max-width: 700px) {
	#phone {
		display: none;
	}
	#coverContainer {
		justify-content: center;
	}
}
@media (min-width: 700px) and (max-height: 500px) {
	#phone {
		display: none;
	}
	#coverContainer {
		justify-content: center;
		text-align: center;
	}
	#coverContent {
		width: 80%;
	}
}
@media (max-width: 1100px) {
	#visContent {
		flex-direction: column;
	}
	#visAbout {
		order: 2;
	}
	#visIframe {
		order: 1;
		margin-bottom: 20px;
		iframe {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
