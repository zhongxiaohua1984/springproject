Vue.config.productionTip = false
import Vue from 'vue'
import App from './App'
import router from './router/router'

// 导入axios
import axios from 'axios'
Vue.prototype.$http=axios
axios.defaults.baseURL = 'http://vue.studyit.io'; // 全局配置axios请求的地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// qs
import qs from 'qs'

// 导入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入mui样式
import './assets/css/mui.min.css'
import './assets/css/icons-extra.css'

var moment = require('moment');

Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})

new Vue({
  el: '#app',
  router,
  qs,
  components: { App },
  template: '<App/>'
})
