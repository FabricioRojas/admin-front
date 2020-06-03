import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Kanban from '@/components/Kanban'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      props: { msg: 'Welcome to Your Vue.js App' },
      component: HelloWorld
    },
    {
      path: '/kanban',
      name: 'Kanban',
      component: Kanban
    }
  ]
})
