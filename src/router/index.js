import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserSignup from '../views/UserSignup.vue'
import UserLogin from '../views/UserLogin.vue'
import UserLogout from '../views/UserLogout.vue'
import ProductsIndex from '../views/ProductsIndex.vue'
import ProductsShow from '../views/ProductsShow.vue'
import ProductsNew from '../views/ProductsNew.vue'
import ProductsEdit from '../views/ProductsEdit.vue'
// import VueMultiselect from '../views/VueMultiselect.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: UserSignup
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/logout',
    name: 'logout',
    component: UserLogout
  },
  {
    path: '/products',
    name: 'products-index',
    component: ProductsIndex
  },
  {
    path: '/products/:id',
    name: 'products-show',
    component: ProductsShow
  },
  {
    path: '/products/new',
    name: 'products-new',
    component: ProductsNew
  },
  {
    path: '/products/:id/edit',
    name: 'products-edit',
    component: ProductsEdit
  },
  // {
  //   path: '/tester',
  //   name: 'vue-multiselect',
  //   component: VueMultiselect
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router