import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import routes_main from '@/router/routes_main'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
routes.push(...routes_main)
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
})

export default router
