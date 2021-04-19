<template>
  <div>
    <el-button v-show="getStatus" class="donateBtn"
               type="donate" size="small" round plain icon="el-icon-location">{{ getAccount }}</el-button>
    <el-button v-show="!getStatus" class="donateBtn"
               type="donate" size="small" round plain icon="el-icon-wallet">连接钱包</el-button>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "WalletBtn",
  computed: {
    ...mapState(["account"]),
    getAccount() {
      if (this.account) {
        return this.account.substr(0,5) + "···" +
            this.account.substr(this.account.length - 4,this.account.length)
      }
    },
    getStatus() {
      return !!this.account;
    }
  },
}
</script>

<style scoped>

.el-button {
  margin-top: 15px
}
</style>