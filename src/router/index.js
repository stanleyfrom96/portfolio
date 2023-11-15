import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Single from '../views/Single.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: "/:project",
      name: "project",
      component: Single,
      props: true,
    },
  ]
})

export default router
