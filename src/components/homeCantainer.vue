
<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="https://img.alicdn.com/simba/img/TB19BgSFCzqK1RjSZFLSuwn2XXa.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://img.alicdn.com/tps/i4/TB1WKNDE7voK1RjSZPfSutPKFXa.jpg_q90_.webp" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://img.alicdn.com/tps/i4/TB1WKNDE7voK1RjSZPfSutPKFXa.jpg_q90_.webp" alt>
      </mt-swipe-item>
      <!-- <mt-swipe-item v-for="item in lunbotu" :key=item.url>
        <img :src="item.img">
      </mt-swipe-item>-->
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../assets/images/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoList">
          <img src="../assets/images/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <img src="../assets/images/menu3.png" alt>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/images/menu4.png" alt>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/images/menu5.png" alt>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/images/menu6.png" alt>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotu: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status == 0) {
          this.lunbotu = result.body.message;
        } else {
          Toast("地址不存在");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: none;
  img {
      width: 60px;
      height: 60px;
    }
  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
  }
</style>
