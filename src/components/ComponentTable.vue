<template>
	<div id="componentTable">
		<h2 class="title">{{ title }}</h2>
		<loader v-if="isLoading" />
		<div id="table" v-if="!isLoading">
			<b-list-group>
				<router-link class="link" v-for="component in computedComponents" :key="component.id" :to="componentURL(component.url_name)">
					<b-list-group-item class="d-flex justify-content-between align-items-center tableItem">
						{{ component.name }}
						<b-badge variant="primary"  style="margin-left: 20px;" pill>
							{{ getProperty(component.property) }}
						</b-badge>
					</b-list-group-item>
				</router-link>
			</b-list-group>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import {API_URL} from '../DB_CONFIG.js';
import Loader from './Loader';

export default {
	name: 'ComponentTable',
	introduction: 'Component table for loading the top 3 components for various categories: Most downloaded, Top starred, and Most recent.',
	description: `
This component is a dynamic table to load and render the top 3 components of the desired category. An API call is made through Axios (npm package) for the desired category once the component is mounted.
#### API Response
<img src="https://raw.githubusercontent.com/biojs/biojs-frontend/guide-assets/guide-assets/ComponentTableAPI.png" width="400px" alt="API Response">

#### UI
<img src="https://raw.githubusercontent.com/biojs/biojs-frontend/guide-assets/guide-assets/ComponentTable.png" width="300px" alt="Component Table">
`,
	token: `
<div id="componentTable">
	<div id="table">
		...
	</div>
</div>
`,
	data () {
		return {
			most_recent: [],
			top_starred: [],
			top_dwnld: [],
			isLoading: true
		};
	},
	props: {
		title: {
			type: String,
			required: true,
			default: 'undefined',
			note: 'Title defines the heading of the table which is the category desired.'
		},
		components: {
			type: String,
			required: true,
			default: 'undefined',
			note: 'Components prop accepts the category required. For example, passing "most_recent" would render the three most recent components.'
		}
	},
	computed: {
		computedComponents: function () {
			if (this.components === 'most_recent') {
				return this.most_recent;
			} else if (this.components === 'top_starred') {
				return this.top_starred;
			} else if (this.components === 'top_dwnld') {
				return this.top_dwnld;
			}
		}
	},
	methods: {
		getProperty (property) {
			if (this.components === 'most_recent') {
				return property.split('T')[0];
			} else {
				return property;
			}
		},
		componentURL (url) {
			return '/component/' + url;
		}
	},
	mounted () {
		axios({ method: 'GET', 'url': API_URL }).then(result => {
			this.most_recent = result.data.most_recent_components;
			this.top_starred = result.data.top_starred_components;
			this.top_dwnld = result.data.top_dl_components;
			this.isLoading = false;
		}, error => {
			console.error(error);
		});
	},
	components: {
		'loader': Loader
	}
};
</script>
<style lang="scss" scoped>
h2 {
	font-family: 'Roboto', sans-serif;
}
b-list-group {
	font-family: 'Open-Sans', sans-serif;
}
#componentTable {
	text-align: center;
	margin: 0 2.5% 50px 2.5%;
	min-width: 20%;
}
.tableItem {
	transition: background 0.2s ease-in-out;
}
.tableItem:hover {
	background: #eee;
	cursor: pointer;
}
.link {
	text-decoration: none;
	color: #000;
}
</style>
