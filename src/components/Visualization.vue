<template>
  <div id="visualization">
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
		snippet: {
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
		addSnippetCSS (url) {
			return new Promise((resolve, reject) => {
				const style = document.createElement('link');
				style.rel = 'stylesheet';
				style.type = 'text/css';
				style.href = url;
				style.onload = resolve;
				document.head.appendChild(style);
			});
		},
		renderVisualisation () {
			return Promise.all(this.css.map(this.addSnippetCSS))
				.then(() => {
					alert('done!', this.css.length);
				});
		},
		oldStuff () {
			// Promise.all(
			//   cssDeps.map(css => {
			//     return new Promise((res, rej) => {
			//       const style = document.createElement("link");
			//       style.rel = "stylesheet";
			//       style.type = "text/css";
			//       style.href = css.fields.css_url;
			//       style.onload = res;
			//       document.head.appendChild(style);
			//     });
			//   })
			// )
			//   .then(() => {
			//     console.log("done loading css!");
			//     return Promise.all(
			//       jsDeps.map(js => {
			//         return new Promise((res, rej) => {
			//           const script = document.createElement("script");
			//           script.setAttribute("src", js.fields.js_url);
			//           script.onload = res;
			//           document.head.appendChild(script);
			//         });
			//       })
			//     ).then(() => {
			//       console.log("done loading js!");
			//     });
			//   })
			//   .then(() => {
			//     stopLoading();
			//     var rootDiv = document.getElementById("snippetDiv");
			//     eval(script);
			//   });
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
