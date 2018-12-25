<template>
<<<<<<< HEAD
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

=======
    <v-container fluid>
        <div class="mb-5">
            <NavigationBar/>
        </div>
        <div class="mt-5 pt-5">
            <HomeComponent />
        </div>
    </v-container>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar/NavigationBar"
    import HomeComponent from "@/components/HomeComponent/HomeComponent"
    
    export default {
        name: "Home",
        components: {
            NavigationBar,
            HomeComponent
        }
    }
</script>

<style scoped>
    #navbar {
        margin: 10
    }
</style>
>>>>>>> 77bcf42fd7a8045eac02c9f702a40815c04eb8d0

