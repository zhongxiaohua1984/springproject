<template>
  <div class="shopcar-container">
    <div class="goodslist">
      <!-- 商品预览区 -->
      <!-- <div class="mui-card" v-for="item in goodsList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thusm_path" alt="">
            <div class="info">
              <h1> {{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <cmt></cmt>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div> -->

      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img src="https://img.alicdn.com/simba/img/TB1V9FlBAvoK1RjSZFNSuwxMVXa.jpg" alt="">
            <div class="info">
              <h1> 原创*豆蔻*JK制服百褶裙 学院风少女百搭格裙</h1>
              <p>
                <span class="price">￥2199</span>
                <cmt></cmt>
                <a href="#">删除 </a>
                <!-- {{$store.getters.getGoodsCount[item.id]}} -->
                {{$store.getters.getGoodsCount}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品结算区 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div
            class="mui-card-content-inner"
          >这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cmt from './subcomponents/shopcar_numbox.vue'
export default {
  data(){
    return {
      goodsList:[]
    }
  },
  created(){
    this.getGoodsList()
  },
  methods: {
    getGoodsList(){
      var idArr=[];
      this.$store.state.car.forEach(item =>idArr.push(item.id));
      if(idArr.lenth<=0) return
      this.$http.get('/api/goods/getshopcarlist',{
        params:idArr.join(',')
      }).then(item=>{
        if(result.body.status==0){
          this.goodsList=result.body.message
        }
      })
    }
  },
  components:{
    cmt
  }
};
</script>
<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goodslist {
      .mui-card-content-inner {
        display: flex;
        align-items: center;
    }
    img {
      width: 60px;
      height: 60px;
      margin: 0 5px;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 13px;
      line-height: 20px;
      margin: 0;
    }
    .info {
      .price {
        color: red;
        font-weight: 700;
      }
    }

  }
}
</style>
