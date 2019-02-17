
<template>
  <div>
    <swipe :lunbotulist="lunbotu" :isfull="false"></swipe>
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
// 导入轮播图
import swipe from "./subcomponents/swipe.vue";
export default {
  data() {
    return {
      lunbotu: [
        {
          src:'https://img.alicdn.com/tfs/TB1902tGjDpK1RjSZFrXXa78VXa-520-280.jpg_q90_.webp'
        },
        {
          src:'https://img.alicdn.com/simba/img/TB1hCSQDMHqK1RjSZFkSut.WFXa.jpg'
        },
        {
          src:'https://img.alicdn.com/simba/img/TB1NdTLz4TpK1RjSZR0SuvEwXXa.jpg'
        },
        {
          src:'https://img.alicdn.com/tfs/TB160fAGXzqK1RjSZFvXXcB7VXa-520-280.jpg_q90_.webp'
        },
        {
          src:'https://img.alicdn.com/simba/img/TB19mAsGHvpK1RjSZFqSuwXUVXa.jpg'
        }
      ]
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
  },
  components: {
    swipe
  }
};
</script>
<style lang="scss" scoped>
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
