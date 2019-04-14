<template>
	<div id="stat">
		<a :href="statURL" :v-if="statURL" target="_blank">
			<img :src="imageURL" :alt="propName" />
			<span>{{ propValue }} {{ propName }}</span>
		</a>
	</div>
</template>
<script>
export default {
	name: 'ComponentStat',
	introduction: 'A component for displaying inidividual statistics like stars for a component under the "Social" and "Stats" category.',
	description:
`The ComponentStat component renders the stat for each property. It renders an image and the statistic corresponding to that property. It is used in the "Component" component and is used in the individual page of a component to show the stats.
<br>
<img src="https://raw.githubusercontent.com/biojs/biojs-frontend/guide-assets/guide-assets/ComponentStat.png" alt="Component statistics" height="80px">
`,
	token: `
<div id="stat">
	<img :src="imageURL" :alt="propName" />
	<span>{{ propValue }} {{ propName }}</span>
</div>
`,
	props: {
		propName: {
			type: String,
			required: false,
			default: '',
			note: 'The name of the property. e.g.: stars, downloads, etc.'
		},
		imageURL: {
			type: String,
			required: true,
			default: '',
			note: 'URL of the image of the property.'
		},
		propValue: {
			required: true,
			default: '',
			note: 'Statistic of the property (a numerical in most cases).'
		},
		statURL: {
			required: true,
			note: 'Other links relevant to the stat'
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

#stat a {
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		height: 50px;
		margin: 10px;
	}
	span {
		text-align: center;
	}
}
</style>
