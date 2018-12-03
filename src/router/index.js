import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Marquisat from '@/components/Marquisat'
import Nove from '@/components/Nove'
import Dompierre from '@/components/Dompierre'
import hello from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Marquisat',
      name: 'Marquisat',
      component: Marquisat
    },
    {
      path: '/Nove',
      name: 'Nove',
      component: Nove
    },
    {
      path: '/Dompierre',
      name: 'Dompierre',
      component: Dompierre
    },
    {
      path: '/test',
      name: 'hello',
      component: hello
    }
  ]
})
