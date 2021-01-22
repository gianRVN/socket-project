import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gameplay from '../views/Gameplay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gameplay',
    name: 'Gameplay',
    component: Gameplay
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
