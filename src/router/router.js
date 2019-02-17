import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import homeCantainer from '../components/homeCantainer.vue'
import memberContainer from '../components/memberContainer.vue'
import searchContainer from '../components/searchContainer.vue'
import shopcarContainer from '../components/shopcarContainer.vue'
import newsList from '../components/news/newsList.vue'
import newsInfo from '../components/news/newsInfo.vue'
import photoList from '../components/photos/photoList.vue'
import photoInfo from '../components/photos/photoInfo.vue'
import goodsList from '../components/goods/goodsList.vue'
import goodsInfo from '../components/goods/goodsInfo.vue'
import goodsDesc from '../components/goods/goodsDesc.vue'
import goodsComment from '../components/goods/goodsComment.vue'
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
    },
    {
      path:'/home/newslist',
      component:newsList
    },
    {
      // path:'/home/newsinfo/:id',
      path:'/home/newsinfo',
      component:newsInfo
    },
    {
      path:'/home/photoList',
      component:photoList
    },
    {
      // path:'/home/photoInfo/:id',
      path:'/home/photoInfo',
      component:photoInfo
    },
    {
      // path:'/home/goodsList/:id',
      path:'/home/goodsList',
      component:goodsList
    },
    {
      // path:'/home/goodsList/:id',
      path:'/home/goodsInfo',
      component:goodsInfo
    },
    // {
    //   path:'/home/goodsDesc/:id',
    //   name:'goodsDesc',
    //   component:goodsDesc
    // },
    // {
    //   path:'/home/goodsComment/:id',
    //   name:'goodsComment',
    //   component:goodsComment
    // }
    {
      path:'/home/goodsDesc',
      name:'goodsDesc',
      component:goodsDesc
    },
    {
      path:'/home/goodsComment',
      name:'goodsComment',
      component:goodsComment
    }
  ],
  linkActiveClass:'mui-active'
})
