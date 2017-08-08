import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Detail from '@/components/detail'
import ProductDetail from '@/components/ProductDetail'
Vue.use(Router)

export default new Router({
  routes: [
      	{
      		path:'/',
      		redirect:'home'
      	},
      	{
      		path:'/home',
      		name:'home',
      		component:Home
      	},
        {
          path:'/detail',
          name:'detail',
          component:Detail
        },
        {
          path:'/productDetail',
          name:'productDetail',
          component:ProductDetail
        },
    ]
})
