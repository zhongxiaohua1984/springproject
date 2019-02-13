import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import homeCantainer from '../components/homeCantainer.vue'
import memberContainer from '../components/memberContainer.vue'
import searchContainer from '../components/searchContainer.vue'
import shopcarContainer from '../components/shopcarContainer.vue'

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:homeCantainer
    },
    {
      path:'/member',
      component:memberContainer
    },
    {
      path:'/search',
      component:searchContainer
    },
    {
      path:'/shopCar',
      component:shopcarContainer
    }
  ],
  linkActiveClass:'mui-active'
})
