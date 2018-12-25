<template>
  <v-app style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <v-container>
      <PushButtonUp navigate="#homecomponent"/>
      <v-layout row wrap fill-height>
        <v-container id="parent-container">
          <v-layout row wrap>
            <v-flex xs12 class="centerClass headline">Visualize</v-flex>
          </v-layout>
          <v-layout row wrap fill-height align-center jistify-center>
            <v-flex sm6 xs12>
              <v-layout>
                <v-flex xs12 class="centerClass">
                  <v-btn
                    color="#303F9F"
                    dark
                    flat
                    @click="pushRoute('/component/' + visualization.url)"
                  >{{ visualization.name }}</v-btn>
                </v-flex>
              </v-layout>
              <v-layout row wrap class="mt-4">
                <v-flex sm6 xs12 class="centerClass description-text">Description</v-flex>
                <v-flex sm6 xs12 class="centerClass description-text">{{visualization.description}}</v-flex>
                <v-flex sm6 xs12 class="centerClass description-text">Author</v-flex>
                <v-flex sm6 xs12 class="centerClass description-text">{{visualization.author}}</v-flex>
              </v-layout>
              <v-layout row wrap align-center justify-center class="mt-4">
                <v-flex xs12 class="centerClass">
                  <div id="tags">Tags</div>
                </v-flex>
                <v-flex
                  sm3
                  xs6
                  v-for="(tag, index) in visualization.tags"
                  :key="tag"
                  class="centerClass"
                >
                  <v-btn
                    flat
                    round
                    dark
                    :style=" { 'background-color': colorTags[index] } "
                  >{{ tag }}</v-btn>
                </v-flex>
              </v-layout>
              <v-layout row wrap class="text-center">
                <v-flex xs12>
                  <!-- <SearchComponent/> -->
                  <!-- redisgn its input outlook -->
                  <!-- it will be a plance input tag with placeholde and search icon in right most -->
                </v-flex>
              </v-layout>
            </v-flex>
            <v-divider class="mx-3" inset vertical></v-divider>
            <v-flex sm6 xs12>
              <!-- <iframe src="@/../static/visualization/index.html" frameborder="0"></iframe> -->
              <!-- ifrmae -->
              <!-- check working of divider -->
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
      <PushButtonDown navigate="#popularcomponents"/>
    </v-container>
  </v-app>
</template>
 

 <script>
import "@/components/global.css";
import { pushRoute } from "@/components/global.js";
import PushButtonDown from "./PushButton/PushButtonDown.vue";
import PushButtonUp from "./PushButton/PushButtonUp.vue";
// import SearchComponent from "./SearchComponent.vue";

export default {
  mixins: [pushRoute],
  data() {
    return {
      visualization: {
        name: "bio-pv",
        url: "bio-pv",
        description: "WebGL protein viewer",
        author: "Marco Biasini",
        tags: ["biojs", "protein", "3d", "webgl"]
      },
      colorTags: ["#e91e63", "#f50057", "#3f51b5", "#651fff"]
    };
  },
  components: {
    PushButtonDown,
    PushButtonUp
    // SearchComponent
  }
};
</script>
 
 <style scoped>
#parent-container {
  background: white;
  border-radius: 10px;
}

.description-text {
  color: rgb(36, 180, 126);
}

#tags {
  text-transform: uppercase;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 15%;
  color: white;
  margin-bottom: 15px;
  padding: 15px;
  background-color: #009688;
}
</style>
 