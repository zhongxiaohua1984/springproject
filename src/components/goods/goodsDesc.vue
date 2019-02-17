<template>
  <div class="goodsDesc-container">
    <!-- <h1>{{goodsDesc.title}}</h1>
<hr>
    <div class="content" v-html="goodsDesc.content"></div>-->
    <h1>【梗豆物语】春上新 原创*豆蔻*JK制服百褶裙 学院风少女百搭格裙</h1>

    <div class="content">
      <img
        src="https://img.alicdn.com/imgextra/i3/1644008796/O1CN0103S0F32EqcHpH3r9R_!!1644008796.jpg"
        alt
      >
      <img src="https://img.alicdn.com/imgextra/i4/1644008796/O1CN01hxwf2C2EqcHmIrp8G_!!1644008796.jpg" alt="">
    </div>
  </div>

</template>
<script>

export default {
  data() {
    return {
      // id:this.$route.params.id,
      id: 89,
      goodsDesc: {}
    };
  },
  created() {
    this.getgoodsDesc();
  },
  methods: {
    getgoodsDesc() {
      this.$http
        .get("api/goods/getdesc/", {
          params: {
            id: this.id
          }
        })
        .then(result => {
          if (result.body.status == 0) {
            this.goodsDesc = result.body.message;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.goodsDesc-container {

  color: #226aff;
  text-align: center;
  margin: 15px 0;
  h1 {
font-size: 16px;
line-height: 26px;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
