<template>
  <v-app>
    <v-container>
      <v-layout row wrap fill-height align-center justify-center>
        <v-flex md6 xs12 id="parent-card" class="centerClass">
          <v-card-title primary-title>
            <div class="raisedCard">
              <h3
                class="headline mb-0"
                style="color:rgb(36, 180, 126);; font-weight: bold"
              >Welcome to BioJS</h3>
              <div
                class="my-4"
              >BioJS is a library of over hundred JavaScript components enabling you to visualize and process data using current web technologies.</div>
              <v-layout row wrap>
                <v-flex
                  md6
                  xs12
                  v-for="navigationItem in navigationItems"
                  :key="navigationItem.name"
                >
                  <v-btn flat color="#f50057" dark @click="pushRoute(navigationItem.screen)">
                    <div style="font-weight: 500">{{ navigationItem.name }}</div>
                  </v-btn>
                </v-flex>
              </v-layout>
            </div>
          </v-card-title>
        </v-flex>
        <v-flex md6 xs12 id="logo-parent">
          <v-flex xs12 class="spiralContainer centerClass">
            <v-img class="spiral" id="logo-homescreen" :src="require('../../assets/phone.png')"/>
          </v-flex>
        </v-flex>
      </v-layout>
      <PushButtonDown navigate="#visualization"/>
    </v-container>
  </v-app>
</template>

<script>
import "@/components/global.css";
import { pushRoute } from "@/components/global.js";
import PushButtonDown from "./PushButton/PushButtonDown.vue";
export default {
  mixins: [pushRoute],
  data() {
    return {
      navigationItems: [
        {
          name: "Components",
          screen: "/components"
        },
        {
          name: "About",
          screen: "/about"
        }
      ]
    };
  },
  components: {
    PushButtonDown
  }
};
</script>

<style scoped>
.raisedCard {
  text-align: center;
  padding: 8.35mm;
  transition-duration: 0.2s;
  background-color: white;
}

@media only screen and (min-width: 600px) {
  #logo-homescreen {
    max-height: 300px;
    max-width: 300px;
  }
  .raisedCard {
    box-shadow: 2px 5px 30px #ccc;
    border-radius: 20px;
    padding: 8.35mm;
  }
  .raisedCard:hover {
    box-shadow: 2px 10px 50px #ccc;
  }
}
@media only screen and (max-width: 600px) {
  #parent-card {
    margin-top: 25px;
  }
  #logo-homescreen {
    max-height: 180px;
    max-width: 180px;
  }
  .raisedCard {
    border-radius: 15px;
  }
}
</style>