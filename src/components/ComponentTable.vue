<template>
	<div id="componentTable">
		<h2>{{ title }}</h2>
		<div id="table">
			<b-list-group>
				<b-list-group-item class="d-flex justify-content-between align-items-center" v-for="component in computedComponents" :key="component.id">
					{{ component.name }}
					<b-badge variant="primary"  style="margin-left: 20px;" pill>
						{{ getProperty(component.property) }}
					</b-badge>
				</b-list-group-item>
			</b-list-group>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
const URL = 'http://139.59.93.32/api/datatest/index/';
export default {
	name: 'ComponentTable',
	introduction: 'Component table for loading the top 3 components for various categories: Most downloaded, Top starred, and Most recent.',
	description: 'This component is a dynamic table to load and render the top 3 components of the desired category. An API call is made through Axios (npm package) for the desired category once the component is mounted.',
	token: '<div id="componentTable">\n\t<div id="table">\n\t\t...\n\t</div>\n</div>',
	data () {
		return {
			most_recent: [],
			top_starred: [],
			top_dwnld: []
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
		}
	},
	mounted () {
		axios({ method: 'GET', 'url': URL }).then(result => {
			this.most_recent = result.data.most_recent_components;
			this.top_starred = result.data.top_starred_components;
			this.top_dwnld = result.data.top_dl_components;
		}, error => {
			console.error(error);
		});
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
</style>
