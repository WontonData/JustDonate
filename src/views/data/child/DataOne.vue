<template>
  <div class="bg">
<!--    <div class="box">-->
      <el-row>
        <el-col :span="4">
          <el-image
              style="width: 400%; margin-top: 30px"
              :src="title1">
          </el-image>
          <el-image
              style="width: 200%; margin-left: 30px; margin-top: -50px"
              :src="title2">
          </el-image>
        </el-col>
      </el-row>
<!--    </div>-->
  </div>
</template>

<script>
import title1 from 'assets/img/data/title1.png'
import title2 from 'assets/img/data/title2.png'

export default {
  name: "DataOne",
  data() {
    return {
      title1: title1,
      title2: title2,

    }
  }
}
</script>

<style scoped>
.bg {
  width: 100%;
  height: 450px;
  z-index: 9999;
  background-image: url('~@/assets/img/data/bg.jpg');
  background-size:105% auto;
  background-attachment: fixed;
  /*background-repeat:no-repeat;*/
}
.el-row {
  width: 93%;
  margin: 0 auto;
}

</style>