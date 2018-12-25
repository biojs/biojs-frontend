<template>
  <v-app>
    <NavigationBar/>
    <HomeComponent id="homecomponent"/>
    <Visualization id="visualization"/>
    <PopularComponent id="popularcomponents"/>
    <TestimonialsAndGetToKnowBioJS id="TestimonialsAndGetToKnowBioJS"/>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import HomeComponent from "@/components/HomeComponents/HomeComponent";
import Visualization from "@/components/HomeComponents/Visualization";
import PopularComponent from "@/components/HomeComponents/PopularComponents";
import TestimonialsAndGetToKnowBioJS from "@/components/HomeComponents/TestimonialsAndGetToKnowBioJS";

export default {
  name: "Home",
  components: {
    NavigationBar,
    HomeComponent,
    Visualization,
    PopularComponent,
    TestimonialsAndGetToKnowBioJS
  }
};
</script>


