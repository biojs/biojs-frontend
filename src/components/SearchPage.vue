<template>
	<div id="container">
		<nav-bar/>
		<heading :title="'Search results for: ' + this.$route.params.tag " />
		<search-component />
		<div v-if="isLoading===true" id="noResult">
			Loading...
		</div>
		<div v-if="!isLoading && searchResults.length === 0" id="noResult">
			No results!
		</div>
		<div v-if="isLoading == 'error'" id="noResult">
			Error occurred! :(
		</div>
		<div v-if="!isLoading && searchResults.length !== 0" id="resultContainer">
			<b-list-group id="resultsContent">
				<router-link v-for="(result, index) in searchResults" :key="index" :to='computeURL(result.url_name)' class="link">
					<b-list-group-item class="resultItem">
						<span class="resultName">
							{{result.name}}
						</span>
						<div class="tags">
							Tags:
							<router-link v-for="tag in result.tags" :key="tag" :to="'/search/' + tag" id="tagLinkContainer">
								<span class="resultTag">{{tag}}</span>
							</router-link>
						</div>
					</b-list-group-item>
				</router-link>
			</b-list-group>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import NavBar from './NavBar.vue';
import Heading from './Heading.vue';
import SearchComponent from './SearchComponent.vue';
import {API_URL} from '../DB_CONFIG.js';

export default {
	components: {
		'heading': Heading,
		'nav-bar': NavBar,
		'search-component': SearchComponent
	},
	data () {
		return {
			components: [],
			query: this.$route.params.tag,
			isLoading: true,
			searchResults: []
		};
	},
	watch: {
		'$route': 'fetchData'
	},
	mounted () {
		this.fetchData();
	},
	methods: {
		fetchData () {
			this.searchResults = [];
			this.query = this.$route.params.tag;
			this.isLoading = true;
			axios({ method: 'GET', 'url': API_URL + 'all/' }).then(result => {
				this.components = result.data.all_components;
				console.log(this.components);
				this.components.map(component => {
					component.tags.map(tag => {
						if (tag === this.query) {
							this.searchResults.push(component);
						}
					});
				});
				this.isLoading = false;
				console.log(this.searchResults);
			}, error => {
				this.isLoading = 'error';
				console.error(error);
			});
		},
		computeURL (url) {
			return '/component/' + url;
		}
	}
};
</script>
<style lang="scss" scoped>
#resultContainer {
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
}
#resultsContent {
	width: 80%;
	margin-bottom: 50px;
}
.resultName {
	font-weight: bolder;
}
.tags {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}
.resultTag {
	padding: 1px 5px;
	margin: 0px 5px;
	border-radius: 2px;
	background: #eee;
	margin: 5px;
	transition: 0.2s all ease-in-out;
	color: #000;
	text-decoration: none;
}
.resultTag:hover {
	background: #007E3A;
	color: #fff;
	text-decoration: none;
}
.resultTag:active, .resultTag:visited {
	text-decoration: none;
	color: #000;
}
#tagLinkContainer {
	margin: 5px 0;
}
#noResult {
	font-size: 20px;
	font-weight: bolder;
	text-align: center;
}
.resultItem {
	transition: background 0.2s ease-in-out;
	cursor: pointer;
	margin-bottom: 10px;
}
.resultItem:hover {
	background: rgb(230, 230, 230);
}
.link {
	text-decoration: none;
	color: #000;
}
.link:hover {
	text-decoration: none;
	color: #000;
}
</style>
