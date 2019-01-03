<template>
  <v-app>
    <v-container fluid grid-list-xs style="padding: 0 background: #F6F9FC">
      <NavigationBar/>
      <RunLocallyGuide/>
    </v-container>
  </v-app>
</template>


<script>
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import RunLocallyGuide from "@/components/GuideComponent/RunLocallyGuide";
export default {
  name: "Guide",
  components: {
    NavigationBar,
    RunLocallyGuide
  }
};
</script>


