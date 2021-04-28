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
    <el-col :span="10" :offset="6">
      <Nav/>
    </el-col>
    <el-col :span="2">
      <wallet-btn @click.native="showConnDialog" />
    </el-col>
    <el-col :span="1">
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
import WalletBtn from "@/components/wallet/WalletBtn";

export default {
  name: "Head",
  components: {WalletBtn, Nav},
  computed: {
    ...mapState(["account"])
  },
  data() {
    return {
      logo: logo,
      perfile: perfile,
      status: false
    }
  },
  created() {
    this.init();
  },
  methods: {
    gotoPerfile() {
      console.log(this.account)
      if (this.account) {
        this.$router.replace('/perfile')
      } else {
        store.dispatch("getAccount");
      }
    },
    showConnDialog() {
      this.$emit("showConnDialog")
    },
    init() {
      console.log(this.account)
      this.status = !!this.account;
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
<style>
.el-button--donate {
  color: #FFF;
  background-color: #7F95D1;
  /*background-color: #5b6c95;*/
  border-color: #7F95D1;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.el-button--donate:focus, .el-button--donate:hover {
  background: #9aa7cd;
  border-color: #9aa7cd;
  color: #FFF;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.el-button--donate.is-active, .el-button--donate:active {
  background: #5b6c95;
  border-color: #5b6c95;
  color: #FFF
}

.el-button--donate:active {
  outline: 0
}

.el-button--donate.is-disabled, .el-button--donate.is-disabled:active, .el-button--donate.is-disabled:focus, .el-button--donate.is-disabled:hover {
  color: #FFF;
  background-color: #a0cfff;
  border-color: #a0cfff
}

.el-button--donate.is-plain {
  color: #7F95D1!important;
  background: #ecf5ff!important;
  border-color: #b3d8ff!important;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.el-button--donate.is-plain:focus, .el-button--donate.is-plain:hover {
  background: #7F95D1;
  border-color: #7F95D1;
  color: #FFF;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.el-button--donate.is-plain:active {
  background: #5b6c95;
  border-color: #5b6c95;
  color: #FFF;
  outline: 0
}

.el-button--donate.is-plain.is-disabled, .el-button--donate.is-plain.is-disabled:active, .el-button--donate.is-plain.is-disabled:focus, .el-button--donate.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff
}
.donateBtn .el-button.is-plain:focus, .el-button.is-plain:hover {
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  /*background: #e3ebff !important;*/
  /*border-color: #b3d8ff!important;*/
  /*color: #7F95D1!important;*/
}
</style>