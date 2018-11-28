import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Marquisat from '@/components/Marquisat'
import hello from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
    ,{
      path: '/Marquisat',
      name: 'Marquisat',
      component: Marquisat
    }
    ,{
      path: '/test',
      name: 'hello',
      component: hello
    }
  ]
})
