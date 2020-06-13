import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/views/HelloWorld'
import Kanban from '@/views/Kanban'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'

import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: { default: HelloWorld, header: MainNavbar, footer: MainFooter },
      props: {
        msg: 'Welcome to Your Vue.js App',
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/kanban',
      name: 'Kanban',
      components: { default: Kanban, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      components: { default: Dashboard, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'Login',
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ]
})
