<template>
  <v-app>
    <v-container fluid style="padding: 0 background: #F6F9FC">
      <NavigationBar/>
      <ContactComponent/>
    </v-container>
  </v-app>
</template>


<script>
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import ContactComponent from "@/components/ContactComponent/ContactComponent";
export default {
  name: "Guide",
  components: {
    NavigationBar,
    ContactComponent
  }
};
</script>


