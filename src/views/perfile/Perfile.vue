<template>
  <el-container>
    <el-header>
      <Head />
    </el-header>
    <el-container>
      <el-main>
        <keep-alive :include="['PerDem', 'PerDon', 'Vote']">

        <router-view/>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Head from "@/views/perfile/child/Head";
export default {
  name: "Perfile",
  components: {Head}
}
</script>

<style scoped>
.el-header {
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
}

.el-main {
  padding-top: 60px;
}
</style>