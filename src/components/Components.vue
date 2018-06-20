<template>
<div id="components">
	<navbar :isShadow="true" />
	<heading title="Components" />
	<search-component />
	<div id="componentsContainer">
		<div id="popComponents">
			<router-link v-for="component in components" :key="component.id" :to="computeURL(component.url_name)" class="link">
				<div id="component">
					<div class="image" :style="{backgroundImage: 'url(' + component.icon_url + ')' }"></div>
					<div id="componentInfo">
						<div class="title">
							{{ component.name }}
						</div>
						<div class="author">
							{{ component.author }}
						</div>
						<div class="description">
							{{ component.short_description }}
						</div>
						<div class="tags">
							<span>Tags: </span>
							<span class="tagName" v-for="tag in component.tags" :key="tag.id">
								{{ tag }}
							</span>
						</div>
						<div id="properties">
							<div class="downloads property">
								<i class="flaticon-cloud-computing"></i>
								{{ component.downloads }}
							</div>
							<div class="stars property">
								<i class="flaticon-star"></i>
								{{ component.stars }}
							</div>
							<div class="modified property">
								<i class="flaticon-passage-of-time"></i>
								{{ component.modified_time.split('T')[0] }}
							</div>
						</div>
					</div>
				</div>
			</router-link>
		</div>
		<div id="topComponents">
			<component-table title="Top Downloads" components="top_dwnld" />
			<component-table title="Top Starred" components="top_starred" />
			<component-table title="Most Recent" components="most_recent" />
		</div>
	</div>
</div>
</template>
<script>
import NavBar from './NavBar.vue';
import Heading from './Heading.vue';
import SearchComponent from './SearchComponent.vue';
import ComponentTable from './ComponentTable';

import axios from 'axios';
const URL = 'http://139.59.93.32/api/top/';

export default {
	name: 'Components',
	introduction: 'The components\' page',
	description: 'The components\' page renders the top ten components (icon, name, author, description, tags, downloads, stars and last modified) from the data received by the API call.\nIt also has a search bar to search amongst all the components and displays top 3 component for each category.',
	token: `<div id="component" v-for="component in components">
				\n\t ..loop through the ten components..
				\n\t<div class="image" \n\t:style="{backgroundImage: 'url(' + component.icon_url + ')' }">
				\n\t..display the icon..
				\n\t</div>
				\n\t<div id="componentInfo">
					\n\t\t..render all the other component information..
				\n\t</div>
			</div>
			\n</div>`,
	data () {
		return {
			components: []
		};
	},
	components: {
		'navbar': NavBar,
		'heading': Heading,
		'search-component': SearchComponent,
		'component-table': ComponentTable
	},
	methods: {
		computeURL (url) {
			return '/component/' + url;
		}
	},
	mounted () {
		axios({ method: 'GET', 'url': URL }).then(result => {
			this.components = result.data.top_components;
		}, error => {
			console.error(error);
		});
	}
};
</script>
<style lang="scss" scoped>
@import url("../../static/property-icons/flaticon.css");

#components {
	background: #efefef57;
}
#componentsContainer {
	width: 100%;
	display: flex;
	padding: 0 5%;
	justify-content: space-between;
	flex-wrap: wrap;
	box-sizing: border-box;
	padding-bottom: 30px;
}
#popComponents {
	width: 70%;
}
#component {
	width: 100%;
	border-radius: 2px 2px 0 0;
	background: #fff;
	border: 1px solid #efefef;
	display: flex;
	justify-content: flex-start;
	padding: 10px;
	border-bottom: 2px solid rgba(0,0,0,0.4);
	padding-bottom: 20px;
	transition: background 0.2s ease-in-out;
	cursor: pointer;
}
#component:hover {
	background: rgb(230, 230, 230);
}
.image {
	height: 150px;
	width: 150px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	margin-right: 20px;
}
.title {
	font-size: 25px;
	font-family: 'Roboto', sans-serif;
}
.author {
	color: rgba(0,0,0,0.6);
}
.description {
	font-size: 15px;
	width: 80%;
	margin-bottom: 20px;
}
.tags {
	margin-bottom: 20px;
}
.tagName {
	background: #efefef;
    color: #007E3A;
    padding: 5px;
    border-radius: 1px;
    margin: 0 2.5px;
	display: inline-block;
	margin-bottom: 5px;
}
#properties {
	display: flex;
}
.property {
	margin-right: 5px;
	background: #007E3A;
	color: #fff;
	padding: 5px 10px;
	border-radius: 4px;
}
i::before {
	margin: 0 !important;
}
.link {
	text-decoration: none;
	color: #000;
}
.link:hover {
	text-decoration: none;
	color: #000;
}
@media (max-width: 950px) {
	#componentsContainer {
		flex-direction: column;
		align-items: center;
	}
	#popComponents {
		width: 100%;
		margin-bottom: 30px;
	}
	#topComponents {
		// display: flex;
		// justify-content: center;
		// align-items: center;
		// flex-wrap: wrap;
		display: none;
	}
}
@media (max-width: 800px) {
	.image {
		height: 200px;
		width: 200px;
	}
}
@media (max-width: 700px) {
	#component {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-bottom: 30px;
	}
	.image {
		height: 100px;
		width: 100px;
		margin-right: 0;
	}
	#componentInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>
