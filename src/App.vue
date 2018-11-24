<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

html, body {
	margin: 0;
	padding: 0;
}
* {
	font-family: 'Open Sans', sans-serif;
}
#app {
	margin: 0;
	padding: 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
