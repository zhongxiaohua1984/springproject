<template>
  <div class="photoinfo-container">
    <!-- <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoInfo.add_time | dateFormat}}</span>
      <span>点击次数：{{photoInfo.clcik}}次</span>
    </p>
    <hr>-->
    <!-- 缩略图 -->
    <!-- 图片内容区 -->
    <!-- <div class="content" v-html="photoInfo.content"></div> -->
    <h3>tittle</h3>
    <p class="subtitle">
      <span>发表时间：{{Date.now() | dateFormat}}</span>
      <span>点击次数：0次</span>
    </p>
    <hr>
    <!-- 缩略图 -->
    <div class="thumbs">
      <vue-preview
        :list="list"
        :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
        :previewBoxStyle="{border: '1px solid #eee'}"
        :tapToClose="true"
        @close="closeHandler"
        @destroy="destroyHandler"
      />
    </div>

    <!-- 图片内容区 -->
    <div class="content">发嘎嘎嘎嘎嘎嘎嘎啊嘎嘎嘎嘎嘎嘎嘎shgsdhshshshshshshshshshhhhhhhh</div>

    <cmt :id="id"></cmt>
  </div>
</template>
<script>
import cmt from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      list: [
        {
          src:
            "https://img1.360buyimg.com/da/jfs/t1/25704/32/5199/76278/5c3ac087E10248ed6/ac4545e65a29910c.jpg",
          w: 600,
          h: 600
        },
        {
          src:
            "https://m.360buyimg.com/babel/jfs/t1/20007/22/6939/96536/5c661516E6790ee78/72224dd069bb515a.jpg",
          w: 1200,
          h: 900
        }
      ]
    };
  },
  created() {
    this.getPhotoInfo(), this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http
        .get("api/getimageInfo/", {
          params: {
            id: this.id
          }
        })
        .then(result => {
          if (result.body.status == 0) {
            this.photoInfo = result.body.message;
          }
        });
    },
    getThumbs() {
      this.$http
        .get("api/getthumimages/", {
          params: {
            id: this.id
          }
        })
        .then(result => {
          if (result.body.status == 0) {
            result.body.message.forEach(item => {
              item.w = 600;
              item.h = 400;
            });
            this.list = result.body.message;
          }
        });
    }
  },
  components: {
    cmt
  }
};
</script>
<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
    margin: 5px 0;
  }
}
</style>

