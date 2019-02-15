<template>
  <div>
<ul class="mui-table-view">
				<!-- <li class="mui-table-view-cell mui-media" v-for="item in getNewsList" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                <span>{{item.add_time}}</span>
                <span>{{item.click}}</span>
              </p>
						</div>
					</a>
				</li> -->
        <li class="mui-table-view-cell mui-media">
					<!-- <router-link :to="'/home/newsinfo'+iem.id"> -->
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="https://images.gitee.com/uploads/30/4766930_huahua9527.png!avatar100?1547179119">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                <span>發給發的是根深蒂固山豆根</span>
                <span>{{Date.now() | dateFormat}}</span>
              </p>
						</div>
					</router-link>
				</li>

			</ul>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default {
  data(){
    return {
      newsList:[],
     
    }
  },
  created(){
    this.getNewsList()
  },
  methods: {
    getNewsList(){
      this.$http.get('api/getnewslist').then(result=>{
        if(result.body.status==0){
          this.newsList=result.body.message
        }else{
          Toast('获取数据失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.mui-media-body {
  text-align: center;
  h1 {
    font-size: 16px;
  }

  .mui-ellipsis {
    color: #82aceb;
    font-size: 13px;
    display: flex;
    justify-content: space-between
  }
}
</style>

