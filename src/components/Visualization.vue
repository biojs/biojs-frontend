<template>
	<div id="visualization">
		<iframe :src="getSrc()" id="frame"></iframe>
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
			if (this.component === '') {
				return '';
			} else {
				return 'http://workmen.biojs.net/demo/' + this.component + '/' + this.snippet + '/';
			}
		}
	}
};
</script>
<style lang="scss" scoped>
#visualization {
	margin: 30px 0;
	width: 100%;
	height: 500px;
}
#frame {
	width: 100%;
	height: 100%;
	box-shadow: 0 0 2px 0 #cecece;
	outline: none;
	border: 1px solid #eee;
	border-radius: 5px;
}
</style>
