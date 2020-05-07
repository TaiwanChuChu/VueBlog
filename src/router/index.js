import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Login from '@/views/Login'
import Article from '@/views/Article'
import Admin from '@/views/Admin'
import Admin_Add from '@/views/Admin/Add'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/add',
        name: 'Admin_Add',
        component: Admin_Add,
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
