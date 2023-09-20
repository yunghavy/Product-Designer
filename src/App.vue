<template>
  <div id="app">
    <Header />
    <!-- <router-view /> -->
    <AboutMe />
    <Skills />
    <Services />
    <Portifolio />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AboutMe from "@/views/AboutMe.vue";
import Portifolio from "@/views/Portifolio.vue";
import Services from "@/views/Services.vue";
import Skills from "@/views/Skills.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    AboutMe,
    Skills,
    Services,
    Portifolio,
    Footer
  }
};
</script>

<style>
/* Add any global styles or adjustments here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}
</style>
