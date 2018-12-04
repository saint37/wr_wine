import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Marquisat from '@/components/Marquisat'
import Nove from '@/components/Nove'
import Dompierre from '@/components/Dompierre'
import Cauze from '@/components/Cauze'
import Julien from '@/components/Julien'
import Camarsac from '@/components/Camarsac'
import Subilaux from '@/components/Subilaux'
import hello from '@/common/HelloWorld'

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
      path: '/Cauze',
      name: 'Cauze',
      component: Cauze
    },
    {
      path: '/Julien',
      name: 'Julien',
      component: Julien
    },
    {
      path: '/Camarsac',
      name: 'Camarsac',
      component: Camarsac
    },
    {
      path: '/Subilaux',
      name: 'Subilaux',
      component: Subilaux
    },
    {
      path: '/test',
      name: 'hello',
      component: hello
    }
  ]
})
