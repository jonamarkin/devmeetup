import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Documents from '../views/Documents.vue'
import Jobs from '../views/Jobs.vue'
import Message from '../views/Message.vue'
import Payments from '../views/Payments.vue'
import Register from '../views/Register.vue'
import Users from '../views/Users.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        // redirect: {
        //     name: 'SignIn'
        // }
    },
    {
        path: '/Jobs',
        name: 'Jobs',
        component: Jobs
    },
    {
        path: '/Documents',
        name: 'Documents',
        component: Documents
    },
    {
        path: '/Message',
        name: 'Message',
        component: Message
    },
    {
        path: '/Payments',
        name: 'Payments',
        component: Payments
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Users',
        name: 'Users',
        component: Users
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router