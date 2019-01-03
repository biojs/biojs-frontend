<template>
  <v-app style="background-image: linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%);">
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


