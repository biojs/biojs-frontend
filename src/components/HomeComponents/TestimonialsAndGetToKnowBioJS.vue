<template>
  <v-app>
    <v-container>
      <Testimonials/>
      <GetToKnowBioJS/>
    </v-container>
  </v-app>
</template>

<script>
import Testimonials from "./Testimonials";
import GetToKnowBioJS from "./GetToKnowBioJS";

export default {
  name: "TestimonialsAndGetToKnowBioJS",
  components: {
    Testimonials,
    GetToKnowBioJS
  }
};
</script>

