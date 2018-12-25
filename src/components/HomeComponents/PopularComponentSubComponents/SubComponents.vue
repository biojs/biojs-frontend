<template>
  <v-container>
    <v-layout row wrap>
      <v-flex sm4 xs12>
        <HOC title="Top Downlaods" componentToRender="top_download"/>
      </v-flex>
      <v-flex sm4 xs12>
        <HOC title="Top Starred" componentToRender="top_starred"/>
      </v-flex>
      <v-flex sm4 xs12>
        <HOC title="Most Recent" componentToRender="most_recent"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HOC from "./HOC.vue";

export default {
  name: "SubComponents",
  components: {
    HOC
  }
};
</script>
