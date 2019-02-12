
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
    </mt-swipe>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
  }
}
</style>
