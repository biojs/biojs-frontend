<template>
<div id="components">
	<navbar active="components" :isShadow="true" />
	<heading title="Components" />
	<div id="randomComponents" v-if="this.$route.query && this.$route.query.debug === 'true'">
		<p id="">Generate</p>
		<input type="number" v-model="randomComponentNum" />
		<p>random components!</p>
		<router-link :to="generateRandom()"><button type="button" class="btn btn-success btn-sm">Go</button></router-link>
	</div>
	<div id="randomComponents" v-if="this.$route.query && this.$route.query.debug === 'true'">
		<router-link to="/version-list">Compare versions with old website</router-link>
	</div>
	<div id="search">
		<search-component />
	</div>
	<div id="componentsContainer">
		<div id="popComponents" class="loading" v-if="isComponentsLoading">
			<loader />
		</div>
		<div id="popComponents" v-if="!isComponentsLoading">
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
							<router-link v-for="tag in component.tags" :key="tag.id" :to="'/search/'+tag">
								<span class="tagName">
									{{ tag }}
								</span>
							</router-link>
						</div>
						<div id="properties">
							<div class="downloads property">
								<i class="material-icons">cloud_download</i>
								{{ component.downloads }}
							</div>
							<div class="stars property">
								<i class="material-icons">star</i>
								{{ component.stars }}
							</div>
							<div class="modified property">
								<i class="material-icons">update</i>
								{{ component.modified_time && component.modified_time.split('T')[0] }}
							</div>
						</div>
					</div>
				</div>
			</router-link>
			<infinite-loading @infinite="loadNextComponentsPage"></infinite-loading>
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
import NavBar from './NavBar';
import Heading from './Heading';
import SearchComponent from './SearchComponent';
import ComponentTable from './ComponentTable';
import axios from 'axios';
import {API_URL} from '../DB_CONFIG.js';
import Loader from './Loader';

export default {
	name: 'Components',
	introduction: 'The components page',
	description: `
The components page renders the top ten components (icon, name, author, description, tags, downloads, stars and last modified) from the data received by the API call.\nIt also has a search bar to search amongst all the components and displays top 3 component for each category.
#### API Response
<img src="https://raw.githubusercontent.com/biojs/biojs-frontend/guide-assets/guide-assets/Top10_API_Response.png" width="500px" alt="API Response">

#### Searchbar
A fuzzy search has been implemented. You can find the details of the search component in its documentation.

`,
	token: `
<div id="component" v-for="component in components">
\t ..loop through the ten components..
\t<div class="image"
\t:style="{backgroundImage: 'url(' + component.icon_url + ')' }">
\t..display the icon..
\t</div>
\t<div id="componentInfo">
\t\t..render all the other component information..
\t</div>
</div>
`,
	data () {
		return {
			components: [],
			randomComponentNum: 5,
			isComponentsLoading: true,
			page: 1
		};
	},
	components: {
		'navbar': NavBar,
		'heading': Heading,
		'search-component': SearchComponent,
		'component-table': ComponentTable,
		'loader': Loader
	},
	methods: {
		computeURL (url) {
			return '/component/' + url;
		},
		generateRandom () {
			return '/random/' + this.randomComponentNum;
		},
		loadNextComponentsPage (scrollState) {
			return axios.get(`${API_URL}components?page=${this.page}`)
				.then((response) => {
					const components = response.data.components;
					if (components.length) {
						this.components = this.components.concat(components);
						this.page += 1;
						if (scrollState) {
							scrollState.loaded();
						}
					} else {
						if (scrollState) {
							scrollState.complete();
						}
					}
				});
		}
	},
	mounted () {
		this.loadNextComponentsPage()
			.then(() => {
				this.isComponentsLoading = false;
			});
	}
};
</script>
<style lang="scss" scoped>
#components {
	background: #efefef57;
	display: flex;
	flex-direction: column;
	align-items: center;
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
	transition: all 0.2s ease-in-out;
}
.tagName:hover {
	background: #007E3A;
	color: #fff;
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
	display: flex;
	align-items: center;
	justify-content: center;
	i {
		margin-right: 5px;
	}
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
#randomComponents {
	display: flex;
	align-items: center;
	align-self: center;
	justify-content: center;
	margin-bottom: 20px;
	p {
		margin: 0px 5px;
		padding: 0;
	}
	input {
		width: 50px;
		border-radius: 3px;
		border: 1px solid rgba(0,0,0,0.1);
		padding: 3px;
	}
}
#topComponents {
	max-width: 30%;
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
#search {
	width: 40%;
}
@media (max-width: 800px) {
	.image {
		height: 200px;
		width: 200px;
	}
	#search {
		width: 90%;
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
