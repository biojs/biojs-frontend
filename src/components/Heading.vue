<template>
<div>
	<h1 :style="{color: color}">{{ title }}</h1>
</div>
</template>
<script>
export default {
	name: 'Heading',
	introduction: 'The heading component is meant for all the headings in each section.',
	description: 'Heading component is undoubtedly the most used component. It defines the heading for each section. It accepts two props: title and color.',
	token: '<h1 :style="{color: color}">\n\t{{ title }}\n</h1>',
	props: {
		title: {
			type: String,
			default: 'undefined',
			required: true,
			note: 'Title simply accepts the name of heading of the section, for instance, "Components" for the Components\' page.'
		},
		color: {
			type: String,
			default: '#007E3A',
			required: false,
			note: 'As you can see, almost all the headings in the website are green colored. Except one! The color component has a default value, the green color, and accepts any other color in any format acceptable by SASS (RGBA, Hex, etc.)'
		}
	},
	computed: {
		computedColor: function () {
			return this.color;
		}
	}
};
</script>
<style lang="scss" scoped>
	$green: #007E3A;
	div {
		display: flex;
		justify-content: center;
	}
	h1 {
		font-family: 'Roboto', sans-serif;
		color: $green;
		text-align: center;
		padding: 30px 0 30px 0;
	}
	@media (max-width: 600px) {
		h1 {
			text-align: center;
		}
	}
</style>
