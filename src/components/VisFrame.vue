<template>
  <div class="frame-container">
    <iframe id="frame" v-on:load="loaded" :srcdoc="snippet"></iframe>
    <div id="loading-bar-spinner" v-if="this.loading" class="spinner">
      <div class="spinner-icon"></div>
    </div>
  </div>
</template>
<script>
export default {
	data () {
		return {
			loading: true
		};
	},
	props: {
		snippet: {
			type: String
		}
	},
	methods: {
		loaded () {
			this.loading = false;
			console.log('iframe loaded!!');
		}
	}
};
</script>
<style lang="scss" scoped>
.frame-container {
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
	// margin: 20px;
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
