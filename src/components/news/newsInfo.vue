<template>
  <div class="newsinfo-container">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间：{{Date.now() | dateFormat}}</span>
      <span>点击次数：0次</span>
    </p>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    getNewsInfo(){
      this.$http.get()
    }
  }
};
</script>
<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #226aff;
  }
  .content {
  }
}
</style>

