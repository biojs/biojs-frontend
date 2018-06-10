<template>
<div id="container">
	<nav-bar></nav-bar>
	<heading :title="name"></heading>
	<a :href="githubURL" target="_blank">
		<img src="../assets/component/fork_banner.png" alt="Fork me on GitHub" id="githubFork" />
	</a>
	<div id="content">
		<p id="author" v-if="isAuthor()">Author: {{ author }}</p>
		<p>{{ description }}</p>
		<div id="install" class="section">
			<span class="code">npm install {{ name }}</span>
		</div>
		<div id="visualization" class="section" v-if="computeVisualization()">
			<div class="title">Visualization</div>
			<div class="content"></div>
		</div>
		<div id="tags" class="section">
			<div class="title">Tags</div>
			<div class="content">
				<span class="tag" v-for="tag in tags" :key="tag.id"> {{ tag }}</span>
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
</template>

<script>
import NavBar from './NavBar.vue';
import Heading from './Heading.vue';
import ComponentStat from './ComponentStat.vue';
import Contributor from './Contributor.vue';
import axios from 'axios';

export default {
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
			githubURL: 'https://www.github.com/'
		};
	},
	components: {
		'nav-bar': NavBar,
		'heading': Heading,
		'component-stat': ComponentStat,
		'contributor': Contributor
	},
	mounted () {
		this.fetchData();
	},
	watch: {
		'$route': 'fetchData'
	},
	methods: {
		fetchData () {
			axios({ method: 'GET', 'url': 'http://139.59.93.32/api/details/' + this.$route.params.name + '/' }).then(result => {
				// this.visualizations = result.data.visualizations;
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
			}, error => {
				console.error(error);
			});
		},
		computeVisualization () {
			// if (this.visualizations.length === 0) {
			// 	return false;
			// } else {
			// 	return true;
			// }
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
#install {
	padding: 10px 20px;
	.code {
		background: #efefef;
		color: red;
		padding: 0 5px;
		border-radius: 2px;
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
	margin-top: -20px;
	color: rgba(0,0,0,0.7);
}
@media (max-width: 700px) {
	#content {
		p {
			width: 100%;
		}
	}
}
</style>