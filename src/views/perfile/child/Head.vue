<template>
  <el-row>
    <el-col :span="3" :offset="2">
      <span>个人中心</span>
      <!--      <el-image-->
      <!--          style="width: 40px; height: 40px"-->
      <!--          :src="logo">-->
      <!--      </el-image>-->
      <!--        <head-logo :src="src"/>-->
    </el-col>
    <el-col :span="8" :offset="9">
      <el-menu
          router
          mode="horizontal"
          background-color="#7F95D1"
          text-color="#fff"
          active-text-color="#d7dcef"
          :default-active="$route.path">
        <el-menu-item v-for="item in menuData" :key="item.name" :index="item.routerPath">
          <template slot="title">
            <i :class=item.icon style="color: #d7dcef" ></i>
            {{ item.name }}
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="2">
      <el-image
          @click="gotoHome"
          style="width: 30px; height: 30px; margin-top: 15px"
          :src="home">
      </el-image>
    </el-col>
  </el-row>
</template>

<script>
import logo from '@/assets/logo.png'
import home from '@/assets/img/home.png'

export default {
  name: "Head",
  data() {
    return {
      logo: logo,
      home: home,
      menuData: [
        {
          name: "我的捐赠", icon: "el-icon-s-promotion", routerPath: "/perfile/donation"
        },
        {
          name: "我的需求", icon: "el-icon-s-flag", routerPath: "/perfile/demand"
        },
        {
          name: "NFT", icon: "el-icon-present", routerPath: "/perfile/nft"
        },
      ],
    }
  },
  methods: {
    gotoHome() {
      this.$router.replace('/index')
    }
  }
}
</script>

<style scoped>

.el-row {
  background-color: #7F95D1;
  height: 60px;
}
span {
  line-height: 60px;
  font-size: 19px;
  color: #f9faff;
  letter-spacing: 2px;

}
</style>