<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "App",
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  }
};
=======
  
  export default {
    name: 'App',
    mounted() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
          });
        });
      });
    }
  };
>>>>>>> 77bcf42fd7a8045eac02c9f702a40815c04eb8d0
</script>
