<template>
	<div id="container">
		Note: If biojs.io URL shows up nothing, that means the component does not exist in the old website.
		<table v-if="components !== 'loading'" border="1">
			<tr>
				<th>Component Name</th>
				<th>biojs.io URL</th>
				<th>New website URL</th>
			</tr>
			<tr v-for="component in components" :key="component.name">
				<td>{{component.name}}</td>
				<!-- <td v-if="biojsioExists === 'loading'">Loading...</td> -->
				<td>
					<a :href="'http://biojs.io/d/' + component.name" target="_blank">{{"http://biojs.io/d/" + component.name}}</a>
				</td>
				<!-- <td v-if="biojsioExists === 'false'">
					Does not exist
				</td> -->
				<td><a :href="'http://139.59.93.32/biojs-frontend/dist/#/component/' + component.url_name" target="_blank">{{'http://139.59.93.32/biojs-frontend/dist/#/component/' + component.url_name}}</a></td>
			</tr>
		</table>
		<div v-if="components === 'loading'">
			Loading...
		</div>
	</div>
</template>
<script>
import axios from 'axios';
const URL = 'http://139.59.93.32/api/random_snippets/?q=';
export default {
	data () {
		return {
			components: 'loading',
			biojsioExists: 'loading'
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
			axios({ method: 'GET', url: URL + this.$route.params.num }).then(
				result => {
					this.components = result.data.components;
				},
				error => {
					console.error(error);
				}
			);
		}
	}
};
</script>
<style lang="scss" scoped>
#container {
	display: flex;
	flex-direction: column;
	// justify-content: center;
	padding-top: 50px;
	align-items: center;
}
table {
	margin-top: 10px;
	text-align: center;
	td {
		padding: 5px;
	}
}
</style>
