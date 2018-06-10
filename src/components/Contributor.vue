<template>
	<div id="contributor">
		<img :src="imageURL" :alt="name" />
		<span>{{ name }}</span>
	</div>
</template>
<script>
export default {
	props: {
		imageURL: {
			type: String,
			required: true,
			default: '',
			note: ''
		},
		name: {
			type: String,
			required: true,
			default: '',
			note: ''
		}
	}
};
</script>
<style lang="scss" scoped>
#contributor {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10px;

	img {
		margin: 10px;
		border-radius: 50%;
		max-height: 40px;
	}

	span {
		text-align: center;
	}
}
</style>
