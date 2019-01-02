<template>
  <div id="visualization">
		{{ name }}@{{ version }}
    <div id="loading-bar-spinner" v-if="this.loading" class="spinner">
      <div class="spinner-icon"></div>
    </div>
    <div id="snippetDiv"></div>
  </div>
</template>
<script>
import axios from 'axios';
import axiosRetry from 'axios-retry';
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
		this.getBundle()
			.then(res => {
				const { data } = res;
				if (!data.startsWith('(function webpackUniversalModuleDefinition')) {
					throw new Error('Unexpected script format!'); // Just to be sure
				}
				this.bundle = data;
				console.log(`Got bundled script for ${this.name}!`);
				console.log(data.slice(0, 100));
				this.renderVisualisation();
			});
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
			return axios.get(url)
				.then((res) => res.data);
		},
		addSnippetCSS () {
			return Promise.all(this.css.map((css) => new Promise((resolve, reject) => {
				const style = document.createElement('link');
				style.rel = 'stylesheet';
				style.type = 'text/css';
				style.href = css.css_url;
				style.onload = resolve;
				document.head.appendChild(style);
			})));
		},
		addSnippetJS () {
			return Promise.all(this.js.map(js => new Promise((resolve, reject) => {
				const script = document.createElement('script');
				script.setAttribute('src', js.js_url);
				script.onload = resolve;
				document.head.appendChild(script);
			})));
		},
		fixSnippetCode (code) {
			// detect rootDiv
			code = code.replace(/yourDiv|mainDiv|masterDiv|biojsDiv/g, 'rootDiv');
			// detect component var name
			const varNamePattern = new RegExp('(var|let|const)\\s*(\\S+)\\s*=\\s*require\\(["\']' + this.name + '["\']\\);?');
			const varNameMatch = code.match(varNamePattern);
			if (!varNameMatch) throw new Error('No import found!');
			const varName = varNameMatch[2];
			// delete require line
			code = code.replace(varNameMatch[0], '');
			// replace instantiation with window[] call
			const instanceCallPattern = new RegExp('(new\\s+)?' + varName + '\\(');
			code = code.replace(instanceCallPattern, 'new window[\'' + this.name + '\'](');
			return code;
		},
		renderVisualisation () {
			return this.addSnippetCSS()
				.then(this.addSnippetJS)
				.then(() => this.getSnippetCode(this.snippetURL))
				.then((code) => {
					this.loading = false;
					// eslint-disable-next-line
					var rootDiv = document.getElementById('snippetDiv');
					// TODO: Serve bundle js statically after compilation?
					// eslint-disable-next-line
					eval(this.bundle); // Add bundle code
					const newSnippet = this.fixSnippetCode(code);
					eval(newSnippet); // run snippet code
					console.log(newSnippet);
				});
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
.message {
  height: 60px;
  color: black;
  display: none;
}

#loading-bar-spinner.spinner {
  left: 50%;
  margin-left: -20px;
  top: 50%;
  margin-top: -20px;
  position: absolute;
  z-index: 19 !important;
  animation: loading-bar-spinner 400ms linear infinite;
}

#loading-bar-spinner.spinner .spinner-icon {
  width: 60px;
  height: 60px;
  border: solid 4px transparent;
  border-top-color: rgb(0, 126, 58) !important;
  border-left-color: rgb(0, 126, 58) !important;
  border-radius: 50%;
}

@keyframes loading-bar-spinner {
  0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
