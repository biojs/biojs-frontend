<template>
  <v-app>
    <PushButtonUp navigate="#visualization"/>
    <v-container>
      <v-layout id="parent-popular-component" row wrap>
        <v-container fluid>
          <v-flex xs12 headline style="color: #009688; text-align: center">Popular Components</v-flex>
          <SubComponents/>
        </v-container>
      </v-layout>
      <v-layout row wrap class="text-center">
        <v-flex xs12>
          <!-- <SearchComponent/> -->
          <!-- redisgn its input outlook -->
          <!-- it will be a plance input tag with placeholde and search icon in right most -->
        </v-flex>
      </v-layout>
    </v-container>
    <PushButtonDown navigate="#TestimonialsAndGetToKnowBioJS"/>
  </v-app>
</template>

<script>
import PushButtonDown from "./PushButton/PushButtonDown";
import PushButtonUp from "./PushButton/PushButtonUp";
import SubComponents from "./PopularComponentSubComponents/SubComponents.vue";
export default {
  name: "PopularComponents",
  components: {
    SubComponents,
    PushButtonDown,
    PushButtonUp
  }
};
</script>


<style scoped>
#parent-popular-component {
  background-color: white;
  box-shadow: 2px 2px 10px #ccc;
  padding: 6.25mm;
}
</style>
