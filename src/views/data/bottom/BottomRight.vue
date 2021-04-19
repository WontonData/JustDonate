<template>
  <div>
    <el-image
          style="width: 80px; height: 80px"
          :src="src">
    </el-image>
    <div class="text">杭州电子科技大学信息工程学院</div>
  </div>
</template>

<script>
import ma from '@/assets/img/data/ma.png'

export default {
  name: "BottomRight",
  data() {
    return {
      src: ma
    }
  }
}
</script>

<style scoped>
.text {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #FFFFFF;
}
</style>