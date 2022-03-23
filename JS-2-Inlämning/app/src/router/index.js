import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import UserSettings from '../views/UserSettings.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/user',
    name: 'UserSettings',
    component: UserSettings,
    meta: { authorize: true }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/details/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const { authorize } = to.meta
  const loggedIn = store.getters.loggedIn
  // console.log(store.getters.loggedIn)

  if(authorize) {
    if(!loggedIn) {
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  }
  next()
})


export default router
