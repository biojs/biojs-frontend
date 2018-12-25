import Vue from "vue";
import Router from "vue-router";

//Routes
import Home from "./containers/Home/Home.vue";
import About from "./containers/About/About.vue";
import Contact from "./containers/Contact/Contact.vue";
<<<<<<< HEAD
import Guide from "./containers/Guide/Guide.vue";
=======
>>>>>>> 77bcf42fd7a8045eac02c9f702a40815c04eb8d0

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
<<<<<<< HEAD
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
=======
    }
  ]
>>>>>>> 77bcf42fd7a8045eac02c9f702a40815c04eb8d0
});
