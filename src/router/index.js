import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Detail from '../components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Home,
      children:[
      	{
      		path:'/',
      		redirect:'home'
      	},
      	{
      		path:'home',
      		name:'home',
      		component:Home
      	},
        {
          path:'detail',
          name:'detail',
          component:Detail
        },
      ]
    }
  ]
})
