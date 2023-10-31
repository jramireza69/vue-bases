import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import dayBookRouter from '@/modules/daybook/router'
import dayBookRouter from '../modules/daybook/router'  //lo voy a exparcir mediante el operador spreat
import authRouter from '../modules/auth/router'
import pruebaRouter from '../modules/prueba/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/daybook',
      ...dayBookRouter
    },
    {
      path: '/auth',
      ...authRouter
    },
    {
      path: '/prueba',
      ...pruebaRouter
    }
  ]
})

export default router
