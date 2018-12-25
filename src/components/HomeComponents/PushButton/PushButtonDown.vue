<template>
  <v-layout id="push-button-down" class="push-button">
    <v-flex lg12 hidden-md-and-down>
      <v-btn fab dark small color="purple" :href="navigate">
        <v-icon>keyboard_arrow_down</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import "./pushButton.css";
import { pushRoute } from "@/components/global.js";
export default {
  name: "pushButtonDown",
  mixins: [pushRoute],
  props: ["navigate"]
};
</script>

<style scoped>
#push-button-down {
  position: relative;
  top: -25px;
  left: 50%;
  width: fit-content;
}
</style>
