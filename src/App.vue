<template>
  <div id="app">
<!--    <keep-alive :include="['Donation', 'Demand']">-->
      <router-view v-if="isRouterAlive"/>
<!--    </keep-alive>-->
  </div>
</template>

<script>
import {mapState} from "vuex";
import Nav from "@/components/nav/Nav";
// import {Conflux, util} from 'js-conflux-sdk'
import {util} from 'js-conflux-sdk'

import conflux from "@/network/conflux";
import store from "@/store";

export default {
  name: "App",
  components: {
      Nav
  },
  computed: {
    ...mapState(["currentUser", "contract", "contractTow", "balance", "account"])
  },
  provide() { // 注册一个方法
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  created() {
    // store.dispatch("init");
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
        console.log('reload')
      })
    },
      clickText: function () {
          console.log(conflux)
          let result
          this.contract.num_tickets().then(result => {
              console.log(result);
          }).catch(err => {
              console.error(err);
          });

          conflux.getBalance("0x1c1e72f0c37968557b3d85a3f32747792798bbde").then(res => {
              // conflux.getBalance(util.format.hexAddress("cfxtest:aasb661u2r60uzn5h0c4h63hj76wtgf552r9ghu7a4")).then(res => {
              console.log(res)
          }).catch(err => {
              console.log(err)
          })
      }
  }
};
</script>

<style>
#app {
  letter-spacing: 1px;

}
</style>
