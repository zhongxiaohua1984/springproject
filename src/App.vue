<template>
  <div class="app-container">
    <!-- header -->
    <mt-header fixed title="淘货网">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- main -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- footer -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-list" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-list" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-list" to="/shopCar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart" id="badge">
          <span class="mui-badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label" >购物车</span>
      </router-link>
      <router-link class="mui-tab-item-list" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag:false
    }
  },
  created(){
this.flag=this.$route.path==='/home'?false:true
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  },
  watch: {
    '$route.path':function (newval) {
      if(newval=='/home'){
        this.flag=false
      }else {
        this.flag=true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  .mint-header {
    z-index: 99
  }
  margin-top: 40px;
  overflow-x: hidden;
  margin-bottom: 50px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-item-list.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-list {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-list .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-list .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
