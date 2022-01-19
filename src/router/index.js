import Vue from 'vue'
import VueRouter from 'vue-router'
import Piggy from '../views/Piggy.vue'
import add from '../views/add.vue'
import NotFound from '../views/NotFound.vue'
import details from '../views/details.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Piggy',
    component: Piggy,
  },
  {
    path: '/add/:type',
    name: 'add',
    component: add
  },
  {
    path: '/details/:id',
    name: 'details',
    component: details
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
