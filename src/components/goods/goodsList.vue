<template>
  <div class="goodslist">
    <!-- <div class="goods-item" v-for="item in goodslist" :key="item.id">
      <img
        :src="item.img_url"

      >
      <h1 class="title" >{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{sell_price}}</span>
          <span class="old">￥{{makret_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{stock_quantity}}件</span>
        </p>
      </div>
    </div> -->
    <!-- <router-link class="goods-item" to="/home/goodsInfo" tag="div"> -->
    <router-link class="goods-item" to="/home/goodsInfo" tag="div">
      <img
        src="https://gd1.alicdn.com/imgextra/i1/1644008796/O1CN01CWffLT2EqcHmtBqfW_!!1644008796.jpg_400x400.jpg"
        alt
      >
      <h1 class="title">【梗豆物语】春上新 原创*豆蔻*JK制服百褶裙 学院风少女百搭格裙</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </router-link>
    <div class="goods-item">
      <img
        src="https://gd1.alicdn.com/imgextra/i1/1644008796/O1CN01CWffLT2EqcHmtBqfW_!!1644008796.jpg_400x400.jpg"
        alt
      >
      <h1 class="title">【梗豆物语】春上新 原创*豆蔻*JK制服百褶裙 学院风少女百搭格裙</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img
        src="https://gd1.alicdn.com/imgextra/i1/1644008796/O1CN01CWffLT2EqcHmtBqfW_!!1644008796.jpg_400x400.jpg"
        alt
      >
      <h1 class="title">【梗豆物语】春上新 原创*豆蔻*JK制服百褶裙 学院风少女百搭格裙</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      pageindex:1,
      goodslist:[]
    }
  },
  created() {
    this.getGoodsList()
  },
  methods:{
    getGoodsList(){
      this.$http.get('/api/getgoods',{
        params:{
          pageindex:this.pageindex
        }
      }).then(result=>{
        if(result.body.status==0){
          this.goodslist=this.goodslist.concat(result.body.message)
        }
      })
    },
    getMore(){
      this.pageindex++
      this.getGoodsList()
    }
  }
};
</script>
<style lang="scss" scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    box-shadow: 0 0 8px #ccc;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
      line-height: 20px;
    }
    .info {
      background-color: #e4e4e4;

      bottom: 0;
      p {
        margin: 0;
      }
      .price {

        .now {
          color:red;
          font-weight: 700;
        }
        .old {
           color:red;
           font-size: 12px;
          font-weight: 400;
          text-decoration: line-through;
          padding: 0 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        padding: 0 5px;
      }
    }
  }
}
</style>
