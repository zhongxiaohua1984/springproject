Vue.config.productionTip = false
import Vue from 'vue'
import App from './App'
import router from './router/router'

// 导入axios
import axios from 'axios'
Vue.prototype.$http=axios
axios.defaults.baseURL = 'http://vue.studyit.io'; // 全局配置axios请求的地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 导入vuex
import store from './store/vuex'

// qs
import qs from 'qs';
Vue.prototype.$qs = qs;

// 导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Swipe, SwipeItem ,Lazyload } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Lazyload);

// 导入mui样式
import './assets/css/mui.min.css'
import './assets/css/icons-extra.css'
import './assets/js/mui.min.js'

// 导入缩略图
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

// 导入时间插件
var moment = require('moment');

import fastclick from 'fastclick';
fastclick.attach(document.body);

Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})

new Vue({
  el: '#app',
  router,
  store,
  qs,
  components: { App },
  template: '<App/>'
})
