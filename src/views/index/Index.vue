<template>
  <el-container>
    <el-header>
      <Head/>
    </el-header>
    <el-container>
      <el-main>
        <keep-alive :include="['Donation', 'Demand', 'Vote']">
          <router-view/>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Head from "@/components/head/Head";

export default {
  name: "Index",
  components: {Head}
}
</script>

<style scoped>
.el-header {
  padding: 0;
  /*#FF82A9*/
  /*#FFC0BE*/
  /*#FFEBE7*/
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;

}

.el-main {
  padding: 60px 0 0 0;
  overflow: hidden;
  /*background: url('~@/assets/img/donation/3.jpg');*/

}
</style>