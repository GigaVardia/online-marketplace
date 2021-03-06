import Vue from 'vue'
import VueRouter from 'vue-router'
import { homeRoutes } from '@/router/routes/home.routes'

Vue.use(VueRouter)

const routes = [
  ...homeRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
