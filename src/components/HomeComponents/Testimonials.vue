<template>
  <v-container>
    <v-layout id="parent" row wrap class="pt-5">
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <v-flex class="text-xs-center headline" style="color: #673ab7">Testimonials</v-flex>
          </v-card-title>
          <v-layout row wrap>
            <v-flex v-for="res in testimonials" :key="res.id" md4 text-md-center>
              <v-card-text>
                <v-layout row wrap justify-center align-center>
                  <v-flex xs12>
                    <v-icon style="color: #e91e63" v-for="n in res.stars" :key="n">favorite</v-icon>
                    <v-icon
                      style="color: #e91e63"
                      v-for="n in 5 - res.stars"
                      :key="n + 5"
                    >favorite_border</v-icon>
                  </v-flex>
                  <v-flex xs12 class="ma-4">{{ res.testimonial }}</v-flex>
                  <v-flex xs12 class="mt-2 grey--text">{{ res.author }}</v-flex>
                  <v-flex xs12 class="mt-2 grey--text">{{ res.specialization }}</v-flex>
                </v-layout>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          id: 0,
          stars: 5,
          testimonial:
            "I have always been looking for a smooth way to represent my data outside of PowerPoint. I like to use BioJS for my sequence alignments and it works just great!",
          author: "J. Smith",
          specialization: "Molecular Biologist",
          active: false
        },
        {
          id: 1,
          stars: 5,
          testimonial:
            "This library is so easy to use if you know your way around JavaScript a bit. I just created an interactive sequence viewer for my working group last week - my colleagues love it!",
          author: "C. Ronley",
          specialization: "Bioinformatician",
          active: true
        },
        {
          id: 2,
          stars: 4,
          testimonial:
            "Quite a nice set of components already out there - I often find a solution for my visualization needs in just a couple of lines of code.",
          author: "A. Rose",
          specialization: "PhD Student Systems Biology",
          active: false
        }
      ]
    };
  },
  methods: {
    activeBoolCard(activeBool) {
      if (activeBool) {
        return "active";
      }
      return "not-active";
    },
    activeBoolStars(activeBool) {
      if (activeBool) {
        // console.log("herer");
        return "#e5dfd4";
      }
      return "#3c1d88";
    }
  }
};
</script>


<style scoped>
.active {
  background: #3c1d88;
  color: #e3e9d3;
}

.not-active {
  background: #e5dfd4;
  color: #4e1dab;
}

.border-radius {
  border-radius: 10px;
}

.v-card {
  border-radius: 20px;
}
</style>