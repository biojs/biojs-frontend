<template>
	<div>
		<iframe :src="getSrc()"></iframe>
	</div>
</template>
<script>
export default {
	data () {
		return {
		};
	},
	props: {
		snippet: {
			type: String
		},
		component: {
			type: String
		}
	},
	methods: {
		getSrc () {
			return 'http://139.59.93.32/api/visualization/' + this.component + '/' + this.snippet + '/';
		}
	}
};
</script>
<style lang="scss" scoped>
</style>
