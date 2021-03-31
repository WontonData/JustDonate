<template>
  <div>
    <div class="box-about">
      <el-row>
        <el-col :span="4">
          <h2>运营及技术支持</h2>
        </el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col :span="4">
          <span>Conflux</span>
        </el-col>
        <el-col :span="4">
          <span>WontonData</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <h2>联系我们</h2>
        </el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col :span="4">
          <span><i class="el-icon-phone"></i>12345678</span>
        </el-col>
        <el-col :span="4">
          <span><i class="el-icon-message"></i>@.com</span>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.box-about {
  width: 96%;
  margin: 0 auto;
}
h2 {
  color: #1e2947;
}
</style>