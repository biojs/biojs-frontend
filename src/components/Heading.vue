<template>
	<h1><u>{{ title }}</u></h1>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		}
	}
};
</script>
<style lang="scss" scoped>
	$green: #007E3A;
	h1 {
		font-family: 'Roboto', sans-serif;
		color: $green;
		text-align: center;
		padding: 30px 0 30px 0;
	}
</style>
