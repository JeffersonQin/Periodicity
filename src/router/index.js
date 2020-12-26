import Vue from 'vue'
import Home from '../components/Home'
import ElementPage from '../components/ElementPage'
import Router from 'vue-router'

Vue.use(Router);

const routes = [{
        path: '/periodicity/', // Homepage
        component: Home
    },
    {
        path: '/periodicity/element/:id', // Individualized element pages
        component: ElementPage
    },
    {
        path: '*', // Redirect bad routes to Homepage
        redirect: '/periodicity/'
    }
]

const Foo = () =>
    import ('@/components/ElementPage.vue')

export default new Router({
    routes,
    mode: 'history' // Pretty links
})