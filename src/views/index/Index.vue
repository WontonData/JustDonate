<template>
  <div>
    <el-container>
      <el-header>
        <Head @showConnDialog="showConnDialog" />
      </el-header>
      <el-container>
        <el-main>
          <keep-alive :include="['Donation', 'Demand', 'Vote']">
            <router-view/>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
    <el-dialog title="连接钱包"
               :visible="walletDialog"
               width="26%"
               @open="dialogOpen"
               @close="dialogClose"
               :before-close="handleClose">
      <conn-dialog @connWallet="connWallet"/>
    </el-dialog>
  </div>

</template>

<script>
import Head from "@/components/head/Head";
import ConnDialog from "@/views/index/child/ConnDialog";
import store from "@/store";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "Index",
  components: {ConnDialog, Head},
  computed: {
    ...mapState(["walletDialog"])
  },
  data() {
    return {
      status: false
    }
  },
  methods: {
    ...mapActions(["getAccount"]),
    ...mapMutations(["showWalletDialog", "hiddenWalletDialog"]),
    showConnDialog() {
      this.showWalletDialog()
    },
    handleClose() {
      this.hiddenWalletDialog()
    },
    connWallet(wallet) {
      if (wallet === "ConfluxPortal") {
        this.getAccount();
        // store.dispatch("getAccount");
        // if (this.account) {
        //   this.walletDialog = false
        // }
        // this.status = !!this.account;
        // this.walletDialog = false
      }
    }
  }
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

<style>
.el-dialog {
   border-radius: 7px!important;
}
</style>