import Vue from 'vue';
import VueRouter from 'vue-router';

import AboutMe from '@/views/AboutMe.vue';
import Gallery from '@/views/Gallery.vue';
import Contact from '@/views/Contact.vue';
import Services from '@/views/Services.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: AboutMe },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
  { path: '/services', component: Services },

];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
