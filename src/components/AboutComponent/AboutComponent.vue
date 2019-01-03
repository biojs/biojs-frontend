<template>
  <v-container>
    <v-layout row wrap>
      <v-container>
        <v-layout class="my-5">
          <v-flex
            class="headline"
            style="text-align: center; color: rgb(36, 180, 126); font-weight: 400"
          >About Us</v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 class="centerClass spiralContainer">
            <v-img
              class="m-a spiral"
              max-height="100"
              max-width="100"
              :src="require('../../assets/phone.png')"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-flex class="colorRgb">
          <span>BioJS</span> is a community-based project compiling JavaScript widgets and modular components to visualize and process biological data using web technologies, making it easier to integrate them to your own website. BioJS provides a registry showcase so users
          can search components and see them in action.
        </v-flex>
        <v-flex class="colorRgb">
          <span>BioJS</span> started in 2012 and has grown via Google Summer of Code (GSoC) where BioJS has participated standalone in 2014 and 2016, and as part of the Open Bioinformatics Foundation in 2018. In 2015, BioJS and the Galaxy project joined forces and created a
          tool to automatically convert BioJS components into Galaxy’s visualisation system
        </v-flex>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import "@/components/global.css";
export default {
  name: "AboutComponent"
};
</script>

<style scoped>
.colorRgb {
  color: rgb(82, 95, 127);
  text-align: center;
  line-height: 2;
  transition-duration: 0.2s;
  padding: 5.25mm;
  font-size: 17px;
  margin-bottom: 10px;
}

span {
  color: rgb(103, 114, 229);
}
</style>