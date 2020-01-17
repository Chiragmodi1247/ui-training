import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    children: [
      {
        name: 'bangalore',
        path: 'bangalore',
        component: () => import('../views/bangalore.vue')
      },
      {
        name: 'delhi',
        path: 'delhi',
        component: () => import('../views/delhi.vue')
      }
    ]
  },{
    path: '/chirag',
    name: 'Chirag',
    component: () => import('../views/Chirag.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
