<template>
  <div class="goodsInfo-container">
     <!-- 设置小球 -->
  <transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter">
    <div class="ball" v-show="flag" ref="ball"></div>
  </transition>
    <!-- 轮播图 -->
    <div class="mui-card">
      <swipe :lunbotulist="lunbotu" :isfull="true"></swipe>
    </div>
    <!-- 商品购买区域 -->
    <!-- <div class="mui-card">
      <div class="mui-card-header">
        <h1>{{goodsInfo.title}}</h1>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{goodsInfo.sell_price}}</del>&nbsp;&nbsp;销售价
            <span class="now_sprice">￥{{market_price}}</span>
            <span></span>
          </p>
          <p>购买数量：<numbox></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购买车</mt-button>
          </p>
        </div>
      </div>
    </div> -->
    <!-- 商品参数区域 -->
    <!-- <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsInfo.goods_no}}</p>
          <p>库存情况：{{goodsInfo.sfkfkff}}</p>
          <p>上架时间：{{goodsInfo.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div> -->

  <!-- 介绍 -->
    <div class="mui-card">
      <div class="mui-card-header">
        <h1>春上新 原创*豆蔻*JK制服百褶裙 学院风少女百搭格裙</h1>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥2399</del>&nbsp;&nbsp;销售价
            <span class="now_sprice">￥{{price}}</span>
            <span></span>
          </p>
          <!-- <p>购买数量：<numbox :max="goodsInfo.quan_gagag" @getCount="getSelectedCount"></numbox></p> -->
          <p>购买数量：<numbox :max="nums" @getCount="getSelectedCount"></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购买车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：iso222844</p>
          <p>库存情况：{{nums}}件</p>
          <p>上架时间：{{Date.now() | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swipe from "../subcomponents/swipe";
import numbox from '../subcomponents/goodsInfo_numbox'
export default {
  data() {
    return {
      // id: this.$route.params.id,
      id: 89,
      lunbotu: [
        {
          src:
            "https://gd4.alicdn.com/imgextra/i1/1644008796/O1CN01CWffLT2EqcHmtBqfW_!!1644008796.jpg"
        },
        {
          src:
            "https://gd4.alicdn.com/imgextra/i4/1644008796/O1CN01RevjG02EqcHmIvRsV_!!1644008796.jpg"
        },
        {
          src:
            "https://gd3.alicdn.com/imgextra/i3/1644008796/O1CN01zEu0s32EqcHnYuD9O_!!1644008796.jpg"
        }
      ],
      goodsInfo:{},
      flag:false,
      selectedCount:1,
      nums:15,
      price:2199,
    };
  },
  created() {
    this.getLunbotu();
    this.getGoodsInfo()
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("api/getthumimages/", {
          params: {
            id: this.id
          }
        })
        .then(result => {
          if (result.body.status == 0) {
            result.body.message.forEach(item => {
              item.img = item.src;
            });
            this.lunbotu = result.body.message;
          }
        });
    },
    getGoodsInfo(){
      this.$http.get('api/goods/getinfo/',{
        params:{
          id:this.id
        }
      }).then(result=>{
        if(result.body.status==0){
          this.goodsInfo=reuslt.body.message[0]
        }
      })
    },
    goDesc(id){
      this.$router.push({name:'goodsDesc',params:{id}})
    },
    goComment(id){
      this.$router.push({name:'goodsComment',params:{id}})
    },
    addToShopCar(){
      this.flag=!this.flag
      var goodsInfo={
        id:this.id,
        count:this.selectedCount,
        price:this.price,
        selected:true
      }
      this.$store.commit('addToCar',goodsInfo)
    },
    beforeEnter(el){
      el.style.transform="translate(0,0)"
    },
    enter(el,done){
      const ballPotsition=this.$refs.ball.getBoundingClientRect()
      const badgePosition=document.getElementById('badge').getBoundingClientRect()

      const xDist=badgePosition.left-ballPotsition.left
      const yDist=badgePosition.top-ballPotsition.top
      el.offsetWidth
      el.style.transform=`translate(${xDist}px,${yDist}px)`
      el.style.transition="all 1s cubic-bezier(.64,-0.09,.68,.64) "
      done()
    },
    afterEnter(el){
      this.flag=!this.flag
    },
    getSelectedCount(count){
      this.selectedCount=count
    }
  },
  components: {
    swipe,
    numbox
  }
};
</script>
<style lang="scss" scoped>
.goodsInfo-container {
  background-color: #eee;
  overflow: hidden;
  position: relative;
  .now_sprice {
    color: red;
    font-size: 16px;
    font-weight: 700;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .ball {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background:red;
    position: absolute;
    z-index: 999;
    top: 420px;
    left:152px
  }
}
</style>
