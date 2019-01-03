<template>
  <div id="visualization">
    <div id="mount"></div>
  </div>
</template>
<script>
import axios from 'axios';
import axiosRetry from 'axios-retry';
import Vue from 'vue';
import VisFrame from './VisFrame.vue';
const BUILDER_URL = 'http://localhost:3000';
export default {
	data () {
		return {
			loading: true
		};
	},
	props: {
		snippetName: {
			type: String
		},
		snippetURL: {
			type: String
		},
		name: {
			type: String
		},
		version: {
			type: String
		},
		sniperData: {
			type: Object
		},
		js: {
			type: Array
		},
		css: {
			type: Array
		}
	},
	mounted () {
		this.getBundle().then(res => {
			const { data } = res;
			if (!data.startsWith('(function webpackUniversalModuleDefinition')) {
				throw new Error('Unexpected script format!'); // Just to be sure
			}
			this.bundle = data;
			console.log(`Got bundled script for ${this.name}!`);
			console.log(data.slice(0, 100));
			this.buildVisualisationScript().then(script => {
				const FrameConstructor = Vue.extend(VisFrame);
				this.frame = new FrameConstructor({
					propsData: {
						snippet: script
					}
				}).$mount('#mount');
			});
		});
	},
	watch: {
		snippetName: function (value) {
			this.buildVisualisationScript()
				.then((script) => {
					this.frame.snippet = script;
				});
		}
	},
	methods: {
		getBundle () {
			const builder = axios.create({ baseURL: BUILDER_URL });
			axiosRetry(builder, {
				retryDelay: c => c * 1000,
				retries: 100,
				retryCondition: e => e.response.status === 302
			});
			return builder.get(
				`/component?module_name=${this.name}&module_version=${this.version}`
			);
		},
		getSnippetCode (url) {
			return axios.get(url).then(res => res.data);
		},
		createCSSImport (script, css) {
			return (
				script +
        `<link rel="stylesheet" type="text/css" href="${css.css_url}">\n`
			);
		},
		createJSImport (script, js) {
			// eslint-disable-next-line
			return script + `<script src="${js.js_url}"><\/script>\n`;
		},
		fixSnippetCode (code) {
			// detect rootDiv
			code = code.replace(/yourDiv|mainDiv|masterDiv|biojsDiv/g, 'rootDiv');
			// detect component var name
			// eslint-disable-next-line
			const importPattern = new RegExp('require\\(["\']' + this.name + '["\']\\);?');
			code = code.replace(
				importPattern,
				"window['" + this.name + "'];"
			);
			return code;
		},
		buildVisualisationScript () {
			return this.getSnippetCode(this.snippetURL).then(code => {
				const newSnippetCode = this.fixSnippetCode(code);
				// Create HTML boilerplate
				let script = '<!DOCTYPE html>\n<html>\n<head>\n';
				// Add CSS
				script = this.css.reduce(this.createCSSImport, script);
				// Add JS deps
				script = this.js.reduce(this.createJSImport, script);
				// Add bundle
				// eslint-disable-next-line
				script += `<script>\n${this.bundle}\n<\/script>\n`;
				// Add snippet script
				script += `</head>\n<body>\n`;
				script += '<div id="snippetDiv"></div>\n';
				script += `<script>\nvar rootDiv = document.getElementById('snippetDiv');\n`;
				// eslint-disable-next-line
				script += `${newSnippetCode}\n<\/script>\n`;
				script += '</body>\n</html>\n';
				// return result
				return script;
			});
		}
	}
};
</script>
<style lang="scss" scoped>
#visualization {
	padding-bottom: 20px;
}
#mount {
  margin: 30px 0;
  width: 100%;
}
.message {
  height: 60px;
  color: black;
  display: none;
}

</style>
