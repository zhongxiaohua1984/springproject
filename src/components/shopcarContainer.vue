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
      </div>-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch> -->
            <!-- <mt-switch v-model="$store.getters.getGoodsSelected" @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch> -->
            <mt-switch v-model="$store.getters.getGoodsSelected" @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img src="https://gd3.alicdn.com/imgextra/i1/1644008796/O1CN01CWffLT2EqcHmtBqfW_!!1644008796.jpg" alt>
            <div class="info">
              <h1>原创*豆蔻*JK制服百褶裙 学院风少女百搭格裙</h1>
              <p>
                <span class="price">￥2199</span>
                <!-- <cmt :initcount="$store.getters.getGoodsCount[item.id]"></cmt> -->
                <!-- <cmt :initcount="$store.getters.getGoodsCount"></cmt> -->
                <!-- <cmt :initcount="$store.getters.getGoodsCount" :goodsid="item.id"></cmt> -->
                <cmt :initcount="$store.getters.getGoodsCount"></cmt>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                <!-- {{$store.getters.getGoodsCount[item.id]}} -->
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品结算区 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>
                总计（不含运费）
              </p>
              <p>
                已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总价：<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span>
              </p>
            </div>
              <mt-button type="danger">结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cmt from "./subcomponents/shopcar_numbox.vue";
export default {
  data() {
    return {
      goodsList: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      // var idArr=[];
      // this.$store.state.car.forEach(item =>idArr.push(item.id));
      // if(idArr.lenth<=0) return
      // this.$http.get('/api/goods/getshopcarlist',{
      //   params:idArr.join(',')
      var idArr = [];
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      if (idArr.length <= 0) return;
      this.$http
        .get("/api/goods/getshopcarlist", {
          params: idArr.join(",")
        })
        .then(item => {
          if (result.body.status == 0) {
            this.goodsList = result.body.message;
          }
        });
    },
    remove(id, index) {
      this.goodsList.splice(index, 1);
      this.$store.commit("removeFoemCar", id);
    },
    selectedChange(id,val){
      this.$store.commit('updateGoodsSelected',{id,selected:val})
    }
  },
  components: {
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
    .jiesuan {
      display: flex;
      justify-content: space-between;
      .left {
        .red {
          color: red;
          font-weight: 700;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
