<template>
  <div id="app">
    <Header />
    <!-- <router-view /> -->
    <AboutMe />
    <Gallery />
    <Services />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AboutMe from "@/views/AboutMe.vue";
import Gallery from "@/views/Gallery.vue";
import Services from "@/views/Services.vue";
import ContactForm from "@/views/ContactForm.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    AboutMe,
    Gallery,
    Services,
    ContactForm,
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
