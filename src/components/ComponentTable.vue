<template>
	<div id="componentTable">
		<h2>{{ title }}</h2>
		<b-list-group>
			<b-list-group-item class="d-flex justify-content-between align-items-center">
				<b-badge variant="primary" pill></b-badge>
			</b-list-group-item>
		</b-list-group>
	</div>
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
h2 {
	font-family: 'Roboto', sans-serif;
}
b-list-group {
	font-family: 'Open-Sans', sans-serif;
}
#componentTable {
	float: left;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
