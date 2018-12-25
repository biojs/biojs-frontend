<template>
  <v-app>
    <v-container fluid grid-list-xs style="padding: 0 background: #F6F9FC">
      <NavigationBar/>
      <AboutComponent/>
    </v-container>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import AboutComponent from "@/components/AboutComponent/AboutComponent.vue";
export default {
  name: "About",
  components: {
    NavigationBar,
    AboutComponent
  }
};
</script>

