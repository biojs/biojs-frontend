<template>
<div id="container">
	<nav-bar></nav-bar>
	<div id="main" v-if="isLoading">
		<loader />
	</div>
	<div id="main" v-if="!isLoading">
		<heading :title="name"></heading>
		<a :href="githubURL" target="_blank">
			<img src="../assets/component/fork_banner.png" alt="Fork me on GitHub" id="githubFork" />
		</a>
		<div id="content">
			<div id="biojsio" v-if="this.$route.query && this.$route.query.debug === 'true'">
				<p v-if="biojsioURL!=='error' && biojsioURL!=='loading'" class="biojsio-found">URL to biojs.io website: <a  :href="biojsioURL">{{biojsioURL}}</a></p>
				<p class="biojsio-notfound" v-if="biojsioURL==='error'">Component not found in biojs.io!</p>
				<p v-if="biojsioURL==='loading'">Loading...</p>
			</div>
			<p id="author" v-if="isAuthor()">Author: {{ author }}</p>
			<p>{{ description }}</p>
			<div id="npm" class="section">
				<div class="title">npm</div>
				<div class="content">
					<span class="code">npm install {{ name }}</span>
					<a :href="'https://www.npmjs.com/package/' + name" target="_blank" id="npmLink">View package on npm</a>
				</div>
			</div>
			<div id="visualization" class="section" v-if="computeVisualization() && biojsioURL!=='error' && biojsioURL!=='loading'">
				<div class="title">Visualization</div>
				<div class="content">
					<visualization :snippet="selectedSnippet" :component="name" id="visualization" />
					<div id="selectMenu">
						<strong>Select visualization:</strong>
						<select id="visualizationSelect" v-model="selectedSnippet">
							<option
								v-for="(snippet, index) in visualizations"
								:key="index"
								:value="snippet.name"
							>
								{{ snippet.name }}
							</option>
						</select>
					</div>
				</div>
			</div>
			<div id="tags" class="section">
				<div class="title">Tags</div>
				<div class="content">
					<router-link v-for="tag in tags" :key="tag.id" :to="'/search/'+tag">
						<span class="tag">
							{{ tag }}
						</span>
					</router-link>
				</div>
			</div>
			<div id="social" class="section">
				<div class="title">Social</div>
				<div id="socialContent" class="content">
					<component-stat v-for="stat in social" :key="stat.id" :propName="stat.prop" :imageURL="stat.image" :propValue="stat.value" />
				</div>
			</div>
			<div id="stats" class="section">
				<div class="title">Stats</div>
				<div id="statsContent" class="content">
					<component-stat v-for="stat in stats" :key="stat.id" :propName="stat.prop" :imageURL="stat.image" :propValue="stat.value" />
				</div>
			</div>
			<div id="contributors" class="section">
				<div class="title">Contributors</div>
				<div id="contributorsContent" class="content">
					<contributor v-for="contributor in contributors" :key="contributor.id" :imageURL="contributor.avatar_url" :name="contributor.username" />
				</div>
			</div>
			<div id="legal" class="section">
				<div class="title">Legal</div>
				<div class="content">
					License: {{ computeLicense() }}
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
/* eslint-disable */ 
import NavBar from './NavBar.vue';
import Heading from './Heading.vue';
import ComponentStat from './ComponentStat.vue';
import Contributor from './Contributor.vue';
import Visualization from './Visualization.vue';
import axios from 'axios';
import {API_URL} from '../DB_CONFIG.js';
import Loader from './Loader';

export default {
	name: 'Component',
	introduction: 'A dynamic page for each component.',
description: `
The component page gets the data from backend through an API call and renders it to display all the information for a specific component.
A watcher has been added to the component to render the details dynamically when the component changes.
#### API structure
<img src="https://raw.githubusercontent.com/biojs/biojs-frontend/guide-assets/guide-assets/API_Response.png" width="500px" alt="API Response">
#### Various methods have been implemented:
1. fetchData() fetches the data from the database through an API call and stores it.
2. computeLicense() returns "Not available" is a license is not present in the data and returns the license otherwise.
3. isAuthor() shows the author under the component's name is an author is present in the data received otherwise it does not show the author.
`,
token: `
<p id="author" v-if="isAuthor()">..rendered if author is present..</p>
<p>{{description}}</p>
<div id="install">..renders the npm install command..</div>
<div id="tags">..renders the tags..</div>
<div id="social>..displays social stats (stars, watchers, contirbutors, forks)..</div>
<div id="stats>..displays general stats (downloads, last modified, commits, version, created at, open issues)..</div>
<div id="contributors></div>
<div id="legal>..displays the license information if it exists..</div>
`,

	data () {
		return {
			name: '',
			description: '',
			urlName: '',
			visualizations: [],
			tags: [],
			social: [],
			stats: [],
			contributors: [],
			license: '',
			author: '',
			githubURL: 'https://www.github.com/',
			sniper_data: {},
			js_dependencies: [],
			css_dependencies: [],
			biojsioURL: 'loading',
			selectedSnippet: '',
			isLoading: true
		};
	},
	components: {
		'nav-bar': NavBar,
		'heading': Heading,
		'component-stat': ComponentStat,
		'contributor': Contributor,
		'visualization': Visualization,
		'loader': Loader
	},
	mounted () {
		this.fetchData();
	},
	watch: {
		'$route': 'fetchData',
		selectedSnippet: function (value) {
			this.selectedSnippet = value;
		}
	},
	methods: {
		fetchData () {
			axios({ method: 'GET', 'url': API_URL + 'details/' + this.$route.params.name + '/' }).then(result => {
				this.visualizations = result.data.snippets;
				let details = result.data.details;
				this.name = details.name;
				this.description = details.short_description;
				this.urlName = details.url_name;
				this.tags = details.tags;
				this.author = details.author;
				this.githubURL = details.github_url;
				this.social = [
					{prop: 'stars', image: require('../assets/component/stars.png'), value: details.stars},
					{prop: 'watchers', image: require('../assets/component/watchers.png'), value: details.watchers},
					{prop: 'contributors', image: require('../assets/component/contributors.png'), value: details.no_of_contributors},
					{prop: 'forks', image: require('../assets/component/fork.png'), value: details.forks}
				];
				this.stats = [
					{prop: 'downloads', image: require('../assets/component/download.png'), value: details.downloads},
					{prop: 'last modified', image: require('../assets/component/modified.png'), value: details.modified_time.split('T')[0]},
					{prop: 'commits', image: require('../assets/component/commit.png'), value: details.commits},
					{prop: 'version', image: require('../assets/component/version.png'), value: details.version},
					{prop: 'created at', image: require('../assets/component/created.png'), value: details.created_time.split('T')[0]},
					{prop: 'open issues', image: require('../assets/component/issues.png'), value: details.open_issues}
				];
				this.contributors = result.data.contributors.map((obj) => obj.contributor);
				this.license = details.license;
				this.sniper_data = result.data.sniper_data;
				this.js_dependencies = result.data.js_dependencies;
				this.css_dependencies = result.data.css_dependencies;
				this.isLoading = false;

				axios({method: 'GET', 'url': 'http://workmen.biojs.net/detail/'+this.name})
				.then(result => {
					if(result.data.error) {
						this.biojsioURL = 'error';
					} else {
						this.biojsioURL = 'http://biojs.io/d/'+this.name;
					}
				}, error => {
					this.biojsioURL = 'error';
					console.error(error);
				});
				
				if(this.visualizations)
					this.selectedSnippet = result.data.snippets[0].name;
				else
					this.selectedSnippet = '';
			
			}, error => {
				console.error(error);
			});
		},
		computeVisualization () {
			if (!this.visualizations) {
				return false;
			} else {
				return true;
			}
		},
		computeLicense () {
			if (this.license === '') {
				return 'Not available';
			} else {
				return this.license;
			}
		},
		isAuthor () {
			if (this.author === '') {
				return false;
			} else {
				return true;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
#container {
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #efefef;
	min-height: 100vh;
	font-family: 'Open Sans', sans-serif;
}
#content {
	width: 90%;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		width: 60%;
	}
	.section {
		background: #fff;
		border-radius: 3px;
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		margin-bottom: 3vh;
		width: 100%;
		text-align: left;

		.title {
			background: rgb(0, 126, 58);
			font-family: 'Roboto', sans-serif;
			color: #fff;
			padding: 5px 17px;
			font-size: 20px;
			border-radius: 3px 3px 0 0;
		}

		.content {
			padding: 10px 20px;
		}
	}
}
#npm {
	.code {
		background: #efefef;
		color: red;
		padding: 0 5px;
		border-radius: 2px;
	}
	.content {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	#npmLink {
		color: #007bff;
		font-weight: bold;
		text-decoration: underline;
	}
	#npmLink:hover, #npmLink:active {
		color: #0056b3;
	}
}
#tags {
	.tag {
		background: #efefef;
		color: #007E3A;
		padding: 5px;
		border-radius: 1px;
		margin: 0 2.5px;
		display: inline-block;
		margin-bottom: 5px;
		transition: all 0.2s ease-in-out;
	}
	.tag:hover {
		background: #007E3A;
		color: #fff;
	}
}
#socialContent, #statsContent {
	display: flex;
	width: 100%;
	justify-content: center;
	flex-wrap: wrap;
}
#contributorsContent {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
}
#githubFork {
	position: absolute;
	top: 0;
	right: 0;
	height: 150px;
	width: 150px;
	cursor: pointer;
	z-index: 9999;
}
#author {
	// margin-top: -20px;
	color: rgba(0,0,0,0.7);
}
#biojsio {
	width: 80%;
	border-radius: 3px;
	background-color: #fff;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	p {
		margin: 0;
		padding: 5px;
	}
}
.biojsio-found {
	color: green;
}
.biojsio-notfound {
	color: red;
}
#selectMenu {
	text-align: center;
	margin-bottom: 20px;
}
#main {
	width: 100%;
	display: flex;
    flex-direction: column;
    align-items: center;
	justify-content: center;
	min-height: 100%;
}
@media (max-width: 700px) {
	#content {
		p {
			width: 100%;
		}
	}
}
</style>
