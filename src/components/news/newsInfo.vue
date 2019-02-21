<template>
  <div class="newsinfo-container">
    <!-- <h3 class="title">{{newsInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
      <span>点击次数：{{newsInfo.click}}次</span>
    </p>
    <div class="content" v-html="newsInfo.content"></div> -->
    <h3 class="title">天王盖地虎</h3>
    <p class="subtitle">
      <span>发表时间：{{Date.now() | dateFormat}}</span>
      <span>点击次数：0次</span>
    </p>
    <div class="content">
      <img src="https://qnwww2.autoimg.cn/newsdfs/g1/M01/EE/B5/autohomecar__ChsEj1xk4ZiAJApxAAlkDWZ1DK4733.jpg?" alt="">
    </div>
    <cmtbox :id=this.id></cmtbox>
  </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      // id: this.$route.params.id,
      newsInfo:{},
      id:6
    };
  },
  created(){
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      let postData = this.$qs.stringify({
        id: this.id
      });
      this.$http({
        method: "post",
        url: "/api/getnew/",
        data: postData
      }).then(result => {
        if(result.body.status==0){
          this.newsInfo=result.body.message[0]
        }
      });
    }
  },
  components:{
    'cmtbox':comment
  }
};
</script>
<style lang="scss">
.newsinfo-container {
  padding: 0 4px;
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: #6fa2ff;
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #226aff;
  }
  .content {
    img {
      width: 100%;
    }
  }
  cmtbox {
    text-align: left
  }
}
</style>

