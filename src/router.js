import Vue from "vue";
import Router from "vue-router";

//Routes
import Home from "./containers/Home/Home.vue";
import About from "./containers/About/About.vue";
import Contact from "./containers/Contact/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
