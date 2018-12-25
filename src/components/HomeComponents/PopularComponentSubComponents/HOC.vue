<template>
  <v-container>
    <v-card>
      <v-card-title style="background-color: #561FC5 ; color: #D2EEC8  ">
        <div class="center-title">{{ title }}</div>
        <v-layout style=" margin: 10px; padding: 10px; border-radius: 10px">
          <v-flex xs12>need support on this</v-flex>
        </v-layout>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import "@/components/global.css";
export default {
  name: "HOC",
  props: ["componentToRender", "title"],
  mounted() {
    let vm = this;
    axios.get("http://localhost:8000").then(
      result => {
        vm.most_recent = result.data.most_recent_components;
        vm.top_starred = result.data.top_starred_components;
        vm.top_download = result.data.top_dl_components;
        // vm.isLoading = false;
      },
      error => {
        console.error(error);
      }
    );
  },
  data() {
    return {
      most_recent: [],
      top_starred: [],
      top_download: [],
      isLoading: true
    };
  },
  computed: {
    computedComponents() {
      let vm = this;
      if (vm) {
        switch (vm.componentToRender) {
          case "most_recent":
            return vm.most_recent;

          case "top_starred":
            return vm.top_starred;

          case "top_download":
            return vm.top_download;
        }
      }
      return 0;
    }
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 20px;
}
.center-title {
  text-align: center;
  width: 100%;
  font-size: 1.5em;
}
</style>
