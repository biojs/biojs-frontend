<template>
	<div id="stat">
		<img :src="imageURL" :alt="propName" />
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
	margin: 15px;
	img {
		height: 50px;
		margin: 10px;
	}
	span {
		text-align: center;
	}
}
</style>
