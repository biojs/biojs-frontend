<template>
<div>
	<navbar :isShadow="true" />
	<heading title="Components" />
	<search-component />
</div>
</template>
<script>
import NavBar from './NavBar.vue';
import Heading from './Heading.vue';
import SearchComponent from './SearchComponent.vue';
export default {
	components: {
		'navbar': NavBar,
		'heading': Heading,
		'search-component': SearchComponent
	}
};
</script>
<style lang="scss" scoped>
</style>
