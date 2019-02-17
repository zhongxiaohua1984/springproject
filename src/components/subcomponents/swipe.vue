<template>
  <div>
    <mt-swipe :auto="3000">
      <!-- <mt-swipe-item>
        <img src="https://img.alicdn.com/simba/img/TB19BgSFCzqK1RjSZFLSuwn2XXa.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://img.alicdn.com/tps/i4/TB1WKNDE7voK1RjSZPfSutPKFXa.jpg_q90_.webp" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://img.alicdn.com/tps/i4/TB1WKNDE7voK1RjSZPfSutPKFXa.jpg_q90_.webp" alt>
      </mt-swipe-item>-->
      <mt-swipe-item v-for="item in lunbotulist" :key="item.src">
        <!-- <img :src="item.img"> -->
        <img :src="item.src" :class="{full:isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["lunbotulist", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item{
    text-align: center;
  }
   img {
      height: 100%;
    }
  .full {
    width: 50%;
  }
}
</style>
