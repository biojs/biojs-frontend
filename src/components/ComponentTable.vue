<template>
	<div id="componentTable">
		<h2>{{ title }}</h2>
		<div id="table">
			<b-list-group>
				<b-list-group-item class="d-flex justify-content-between align-items-center" v-for="component in computedComponents" :key="component.id">
					{{ component.name }}
					<b-badge variant="primary"  style="margin-left: 20px;" pill>
						123
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
			required: true
		},
		components: {
			type: String,
			required: true
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
