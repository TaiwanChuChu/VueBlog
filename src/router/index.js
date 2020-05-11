import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Login from '@/views/Login'
import Article from '@/views/Article'
import Admin from '@/views/Admin'
import Admin_Home from '@/views/Admin/AdminHome'
import Admin_Add from '@/views/Admin/Add'
import NotFound404 from '@/views/NotFound404'

Vue.use(VueRouter)

const routes = [{
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
        path: '/article/:id',
        name: 'Article',
        component: Article,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        children: [{
                path: '/',
                name: 'Admin_Home',
                component: Admin_Home,
            },
            {
                path: 'add',
                name: 'Admin_Add',
                component: Admin_Add,
            }
        ]
    },
    {
        path: '*',
        name: 'NotFound404',
        component: NotFound404,
    }
]

const router = new VueRouter({
    routes
})

export default router