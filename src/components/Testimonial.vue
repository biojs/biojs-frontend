<template>
	<b-card-group class="testimonialContainer">
		<b-card v-for="testimonial in testimonials" class="testimonial" :key="testimonial.id">
			<div id="hearts">
				<i class="material-icons" v-for="n in testimonial.stars" :key="n + '-a'" style="text-align: center; color: #dc3545;">favorite</i>
				<i class="material-icons" v-for="n in 5 - testimonial.stars" :key="n + '-b'" style="text-align: center; color: #dc3545;">favorite_border</i>
			</div>
            <blockquote class="blockquote mb-0">
                <p style="font-size: 16px">{{ testimonial.testimonial }}</p>
                <footer class="blockquote-footer">{{ testimonial.author }}: <cite title="Source Title">{{ testimonial.specialization }}</cite></footer>
            </blockquote>
        </b-card>
	</b-card-group>
</template>
<script>
export default {
	name: 'Testimonial',
	introduction: 'Testimonials for the BioJS landing page written by awesome bioinformaticians!',
	description: 'The testimonial component consists of three static testimonials as seen in the home page. It implements core vue-bootstrap design, the b-card template.',
	token: '<b-card-groups>\n\t<b-card v-for="" :key="">\n\t...\n\t</b-card>\n</b-card-groups>',
	data () {
		return {
			testimonials: [
				{'id': 0, 'stars': 5, 'testimonial': 'I have always been looking for a smooth way to represent my data outside of PowerPoint. I like to use BioJS for my sequence alignments and it works just great!', 'author': 'J. Smith', 'specialization': 'Molecular Biologist'},
				{'id': 1, 'stars': 5, 'testimonial': 'This library is so easy to use if you know your way around JavaScript a bit. I just created an interactive sequence viewer for my working group last week - my colleagues love it!', 'author': 'C. Ronley', 'specialization': 'Bioinformatician'},
				{'id': 2, 'stars': 4, 'testimonial': 'Quite a nice set of components already out there - I often find a solution for my visualization needs in just a couple of lines of code.', 'author': 'A. Rose', 'specialization': 'PhD Student Systems Biology'}
			]
		};
	}
};
</script>
<style lang="scss" scoped>
.testimonialContainer {
	display: flex;
	width: 100%;
	justify-content: center;
	flex-wrap: wrap;
}
.testimonial {
	width: 350px;
	margin: 0 1% 50px 1%;
}
#hearts {
	display: flex;
	width: 100%;
	justify-content: center;
	padding: 20px 0;
	flex-wrap: wrap;
}
#hearts i {
	display: inline;
	margin: 0 3px;
}
#hearts i:last-child {
	margin-right: 20px;
}
#hearts i:before {
	margin: 0 !important;
}
@media (max-width: 400px) {
	.testimonial {
		width: 70%;
	}
	#hearts {
		display: none;
	}
}
</style>
