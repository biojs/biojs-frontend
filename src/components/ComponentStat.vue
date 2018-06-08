<template>
	<div id="stat">
		<img :src="imageURL" />
		<span>{{ propValue }} {{ propName }}</span>
	</div>
</template>
<script>
export default {
	props: {
		propName: {
			type: String,
			required: false,
			default: '',
			note: ''
		},
		imageURL: {
			type: String,
			required: true,
			default: '',
			note: ''
		},
		propValue: {
			type: String,
			required: true,
			default: '',
			note: ''
		}
	}
};
</script>
<style lang="scss" scoped>
#stat {
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		max-height: 60px;
		max-width: 60px;
		margin-bottom: 5px;
	}
}
</style>
