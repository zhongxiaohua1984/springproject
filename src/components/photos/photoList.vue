<template>
  <div>
    <!-- huaodng -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">科技</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <!-- <a :class="['mui-control-item',item.id==0?'mui-active':'']"  v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">{{item.title}}/a> -->
        </div>
      </div>
    </div>
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <!-- <router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoInfo'+item.id"> -->
      <router-link v-for="item in list" :key="item.id" tag="li" to="/home/photoInfo">
        <img v-lazy="item.item_url">
        <div class="info">
          <!-- <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div> -->
          <h1 class="info-title">个韶钢松山</h1>
          <div class="info-body">该公司各省市</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../assets/js/mui.min.js";

export default {
  data() {
    return {
      cates: [],
      list: [
        {
          item_url:
            "https://img.alicdn.com/simba/img/TB15agFGbvpK1RjSZPiSuvmwXXa.jpg"
        },
        {
          item_url:
            "https://img.alicdn.com/tfs/TB17RdxGNYaK1RjSZFnXXa80pXa-520-280.jpg_q90_.webp"
        }
      ]
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  methods: {
    getAllCategory() {
      this.$http.get("/api/getimgcategory").then(result => {
        if (result.body.status == 0) {
          result.body.message.unshift({ itle: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
    },
    getPhotoListByCateId(cateId) {
      this.$http
        .get("/api/getimages/", {
          params: {
            cateId
          }
        })
        .then(result => {
          if (reuslt.body.status == 0) {
            this.list = reuslt.body.message;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo-list {
  list-style: none;
  padding: 10px;
  margin: 0;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: white;
      text-align: left;
      background-color: rgba(0, 0 , 0 ,.3);
      position: absolute;
      bottom: 0;
      width: 100%;
      max-height:84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
