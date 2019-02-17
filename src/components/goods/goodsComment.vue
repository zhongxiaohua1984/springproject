<template>
  <div>
<cmt :id="$route.params.id"></cmt>
  </div>
</template>
<script>
import cmt from '../subcomponents/comment.vue'
export default {

  components:{
    cmt
  }
}
</script>
<style lang="scss" scoped>

</style>
