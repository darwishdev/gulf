import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/projects',
      component: () => import('./views/Projects.vue'),
    },
    {
      path: '/adblock',
      component: () => import('./views/Adblock.vue'),
    },
    {
      path: '/soil',
      component: () => import('./views/Soil.vue'),
    },
    {
      path: '/landscapes',
      component: () => import('./views/Landscape.vue'),
    },
    {
      path: '/contact',
      component: () => import('./views/Contact.vue'),
    },
  ],
})
