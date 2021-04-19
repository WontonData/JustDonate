<template>
  <el-row>
    <el-col :span="3" :offset="2">
      <span>慈善捐赠溯源平台</span>
<!--      <el-image-->
<!--          style="width: 40px; height: 40px"-->
<!--          :src="logo">-->
<!--      </el-image>-->
      <!--        <head-logo :src="src"/>-->
    </el-col>
    <el-col :span="11" :offset="6">
      <Nav />
    </el-col>
    <el-col :span="2">
      <el-image
          @click="gotoPerfile"
          style="width: 30px; height: 30px; margin-top: 15px"
          :src="perfile">
      </el-image>
    </el-col>
  </el-row>
</template>

<script>
import logo from '@/assets/logo.png'
import perfile from '@/assets/img/perfile.png'
import Nav from "@/components/nav/Nav";
import store from "@/store";
import {mapState} from "vuex";

export default {
  name: "Head",
  components: {Nav},
  computed: {
    ...mapState(["account"])
  },
  data() {
    return {
      logo: logo,
      perfile: perfile,

    }
  },
  methods: {
    gotoPerfile() {
      console.log(this.account)
      if (this.account) {
        this.$router.replace('/perfile')
      } else {
        store.dispatch("init");
      }
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