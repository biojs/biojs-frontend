<template>
  <v-layout row wrap justify-center fill-height>
    <v-container>
      <v-card>
        <v-container>
          <v-card-title primary-title>
            <v-flex
              xs12
              class="headline text-xs-center"
              style="color: #651fff; font-weight: bold;"
            >Contact Us</v-flex>
          </v-card-title>
          <v-layout row wrap fill-height>
            <v-flex
              xs12
              style="line-height: 2; text-align: center"
            >BioJS is a community-based project compiling JavaScript widgets and modular components to visualize and process biological data using web technologies, making it easier to integrate them to your own website. BioJS provides a registry showcase so users can search components and see them in action.</v-flex>
            <v-flex xs12 style="line-height: 2; text-align: center">We would love to here from you!</v-flex>
          </v-layout>
          <v-card-actions>
            <v-flex xs12 text-xs-center mt-3>
              <a :href="gitterURL" style="text-decoration: none;">
                <v-btn round color="#651fff" dark>Contact us on Gitter</v-btn>
              </a>
            </v-flex>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-container>
  </v-layout>
</template>


<script>
export default {
  name: "ContactContainer",
  data() {
    return {
      gitterURL: "https://gitter.im/biojs/biojs"
    };
  }
};
</script>


<style scoped>
.v-card {
  border-radius: 20px;
}
</style>
