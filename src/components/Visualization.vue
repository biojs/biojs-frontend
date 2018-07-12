<template>
	<html v-html="test"></html>
</template>
<script>
export default {
	data () {
		return {
			wzrdURL: false,
			test: '<script>console.log("RUN");</scr' + 'ipt>'
		};
	},
	props: {
		sniperData: {
			type: Object,
			required: true
		},
		js: {
			type: Array,
			required: true
		},
		css: {
			type: Array,
			required: true
		},
		snippets: {
			type: Array,
			required: true
		},
		githubURL: {
			type: String,
			required: true
		}
	},
	mounted () {
		// this.fetchData();
	},
	methods: {
		fetchData () {
		},
		getWzrd () {
			if (this.sniperData.wzrd_url !== '#') {
				this.wzrdURL = this.sniperData['wzrd_url'];
			}
			return this.wzrdURL;
		},
		translateRelative (body, baseLocal, path) {
			if (body.indexOf('./') >= 0) {
				// var rawURL = 'https://cors-anywhere.herokuapp.com/ + pkg.github.raw_url;
				var htmlUrl = baseLocal + '/' + path + '/';
				body = body.replace(/\.\.\//g, baseLocal + '/');
				body = body.replace(/\.\//g, htmlUrl);
			}
			return body;
		},
		makeAbsolute (path) {
			var firstChar = path.charAt(0);
			// check whether it is http or https
			if (path.indexOf(':') >= 0) {
				return path;
			}
			// defined path
			if (firstChar === '/') {
				return path;
			}
			if (firstChar === '/') {
				return path.slice(1);
			}
			return '/' + path;
		}
	}
};
</script>
<style lang="scss" scoped>
</style>
