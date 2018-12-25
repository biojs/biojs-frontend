<template>
  <v-layout class="push-button" id="push-button-up">
    <v-flex lg12 hidden-md-and-down>
      <v-btn fab dark small color="purple" :href="navigate">
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import "./pushButton.css";
import { pushRoute } from "@/components/global.js";
export default {
  name: "pushButtonUp",
  mixins: [pushRoute],
  props: ["navigate"]
};
</script>

<style scoped>
#push-button-up {
  top: -5px;
  position: absolute;
  left: 50%;
}
</style>


