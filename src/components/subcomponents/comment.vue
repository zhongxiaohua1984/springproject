<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入120字以内" maxlength="120" v-model="msg"></textarea>
    <mt-button size="large" type="primary" @click="postComment">发表评论</mt-button>
    <!-- <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{i+1}}楼&nbsp;&nbsp;用户：{{comments.user_name}}&nbsp;&nbsp;发表时间：{{comments.add_time | dateFormat}}
        </div>
        <div class="cmt-body">
            {{item.content=='undefined'?'‘此用户很懒':item.content}}
        </div>
      </div>
    </div> -->
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{Date.now() | dateFormat}}
        </div>
        <div class="cmt-body">
            gsg个公司公司各耍各
        </div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{Date.now() | dateFormat}}
        </div>
        <div class="cmt-body">
            gsg个公司公司各耍各
        </div>
      </div>
    </div>
    <mt-button size="large" type="danger" plain @click="getmore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      pageIndex:1,
      comments:[],
      msg:'',
      id:$route.params.id
    }
  },
  created(){
    this.getComment()
  },
  methods: {
    getComment(){
      console.log(id)
       let postData = this.$qs.stringify({
        id: this.id,
        pageIndex:this.pageIndex
      });
      this.$http.post('api/getcomments/',postData).then(result=>{
        if(result.body.status==0){
          this.comments=this.comments(result.body.message)
        }
      })

    },
    getmore(){
      this.pageIndex++
    },
    postComment(){
      if(this.msg.length==0){
        return Toast('评论不能为空')
      }
      let postData = this.$qs.stringify({
        id: this.id,
       content:this.msg.trim()
      });
      this.$http.post('api/postcomment/',postData).then(result=>{
        if(result.body.status==0){
         var cmt={
           user_name:'匿名用户',
           add_time:Date.now(),
           content:this.msg.trim()
         }
         this.comments.unshift(cmt)
         this.msg=''
        }
      })
    }
  },
  props:['id']
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin-top: 5px;
    .cmt-item {
      font-size: 13px;
      color: #272424;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
        text-align: left

      }
    }
  }
}
</style>

