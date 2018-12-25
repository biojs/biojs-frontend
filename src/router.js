import Router from "vue-router";

//Routes
import Home from "./containers/Home/Home.vue";
import About from "./containers/About/About.vue";
import Contact from "./containers/Contact/Contact.vue";
import Guide from "./containers/Guide/Guide.vue";

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
    },
    {
      path: "/guide",
      name: "guide",
      component: Guide
    }
  ],
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
  }
});
