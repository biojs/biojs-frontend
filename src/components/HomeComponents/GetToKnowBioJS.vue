<template>
  <v-container>
    <v-layout id="parent" row wrap fill-height justify-center align-center>
      <v-flex xs12>
        <v-card style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
          <v-container>
            <v-card-title class="color">
              <div class="headline-custom">Get To Know BIOJS</div>
            </v-card-title>
            <v-card-text class="color">{{ aboutBioJS }}</v-card-text>
            <v-card-actions>
              <v-flex class="text-xs-center" xs12>
                <v-btn
                  v-for="(button, index) in buttons"
                  :key="button.name"
                  round
                  @click="pushRoute(button.route)"
                  :class="computedButtonStyle(index)"
                  style="font-weight: 500"
                >{{ button.name }}</v-btn>
              </v-flex>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "GetToKnowBioJS",
  data() {
    return {
      buttons: [
        {
          name: "About"
        },
        {
          name: "Guide"
        }
      ],
      aboutBioJS:
        "BioJS unites users and developers from all around the globe to create outstanding biological data representations. The open-source character of the BioJS project makes it easy for anyone to follow and discuss current developments in the project, as well as to contribute and share their code with others."
    };
  },
  methods: {
    computedButtonStyle(index) {
      if (index === 1) {
        return "primary-button-style";
      }
      return "secondary-button-style v-btn--outline flat";
    }
  }
};
</script>

<style scoped>
.color {
  color: #2504c8;
}

.v-card {
  border-radius: 10px;
  background: transparent;
}

.headline-custom {
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 700;
  width: 100%;
}

.primary-buttom {
  background: yellow;
}

.secondary-button-style {
  color: #ff1744 !important;
}

.primary-button-style {
  color: white !important;
  background: #ff1744 !important;
}
</style>
