import Vue from "vue";
<<<<<<< HEAD
import './plugins/axios'
import "./plugins/vuetify";
=======
>>>>>>> 77bcf42fd7a8045eac02c9f702a40815c04eb8d0
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
