import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutMe from '@/views/AboutMe.vue';
import Portifolio from '@/views/Portifolio.vue';
import Services from '@/views/Services.vue';
import Skills from '@/views/Skills.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: AboutMe },
  { path: '/portifolio', component: Portifolio },
  { path: '/services', component: Services },
  { path: '/skills', component: Skills },

];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
