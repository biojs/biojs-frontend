<template>
  <div>
    <v-toolbar
      absolute
      scroll-off-screen
      scroll-target="#scrolling-techniques"
      dark
      color="#7E57C2"
    >
      <v-toolbar-title>
        <v-btn flat @click="pushRoute('/')" style="font-weight: bold">BioJS</v-btn>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="navbarItem in navbarItems"
          :key="navbarItem.name"
          @click="pushRoute(navbarItem.route)"
          style="font-weight: 500"
        >{{ navbarItem.name }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { pushRoute } from "@/components/global.js";
export default {
  name: "NavigationBar",
  mixins: [pushRoute],
  mounted() {
    const pushInNavbarItems = navbarObj => this.navbarItems.push(navbarObj);
    const { path } = this.$route;
    if (path !== "/") {
      pushInNavbarItems({
        name: "Home",
        route: "/"
      });
    }
    // if (path !== "/components") {
    //   pushInNavbarItems({
    //     name: "Components",
    //     route: "/components"
    //   })
    // }
    // if (path !== "/guides") {
    //   pushInNavbarItems({
    //     name: "Guides",
    //     route: "/guides"
    //   })
    // }
    if (path !== "/about") {
      pushInNavbarItems({
        name: "About",
        route: "/about"
      });
    }
    // if (path !== "/contact") {
    //   pushInNavbarItems({
    //     name: "Contact",
    //     route: "/contact"
    //   })
    // }
  },
  data() {
    return {
      navbarItems: []
    };
  }
};
</script>

<style scoped>
</style>