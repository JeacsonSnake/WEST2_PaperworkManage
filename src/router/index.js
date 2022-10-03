import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  console.log('to ', to)
  if (to.path === '/' || to.path === '/personal') {
    store.commit('NAVBAR_APPEAR', true)
  } else {
    store.commit('NAVBAR_APPEAR', false)
  }
  next()
})

export default router
