<template>
  <div class="bg">
    <Title :title="title"></Title>
    <el-row :gutter="40">
      <data-card :data-card="cardData"/>
<!--      <el-col :span="2" :offset="13">-->
        <el-button round type="primary" plain @click="dialogRelease = true">发布需求</el-button>
<!--      </el-col>-->
    </el-row>
    <el-row>
      <el-col :span="16">
        <span>数据说明:统计本平台内已录入信息，不包括站外信息;爱心捐赠总额按物资总价估算;需求数据根据公开信息搜集整理</span>
      </el-col>
      <el-col :span="4" :offset="4">
        <span>截止{{ this.getDay(0, 3600000) }} 18:40</span>
      </el-col>
    </el-row>
    <el-dialog title="发布物资需求" :visible.sync="dialogRelease">
      <per-don-dialog @releaseDialog="releaseDialog"/>
    </el-dialog>
  </div>
</template>

<script>

import DataCard from "@/views/data/child/DataCard";
import Title from "@/components/title/Title";
import PerDonDialog from "@/views/perfile/child/PerDonDialog";
import {mapState} from "vuex";
import store from "@/store";

export default {
  name: "DataTow",
  components: {PerDonDialog, Title, DataCard},
  computed: {
    ...mapState(["currentUser", "contractDemandFactory", "account", "contractCharityFactory"])
  },
  data() {
    return {
      title: '数据总览',
      dialogRelease: false
    }
  },
  props: {
    cardData: {
      type: Array,
    }
  },
  methods: {
    getDay(day, hours) {
      var today = new Date()
      var targetday = today.getTime() + 1000 * 60 * 60 * 24 * day + hours
      today.setTime(targetday)
      var tYear = today.getFullYear()
      var tMonth = today.getMonth()
      var tDate = today.getDate() - 1
      // var getHours = today.getHours()
      tMonth = this.doHandleMonth(tMonth + 1)
      tDate = this.doHandleMonth(tDate)
      return tYear + '-' + tMonth + '-' + tDate
    },
    doHandleMonth(month) {
      var m = month
      if (month.toString().length === 1) {
        m = '0' + month
      }
      return m
    },
    releaseDialog(item) {
      if (this.account) {
        this.contractCharityFactory.deployer(
            item.username,
            item.content,
            item.contact,
            item.address,
            item.img0,
        ).sendTransaction({
          from: this.account
        }).confirmed().then((res) => {
          console.log(res)
          this.$message({
            message: '发布成功！',
            type: 'success'
          });
          this.dialogRelease = false

        }).catch(err => {
          console.log(err)
          this.$message({
            message: '发布失败！',
            type: 'error'
          });
        })
      } else {
        store.dispatch("getAccount");
      }
      console.log(item)

    },

  }
}
</script>

<style scoped>
.bg {
  width: 93%;
  margin: 0 auto;
  height: 220px;
  background-image: url('~@/assets/img/data/BG-introduce.png');
  background-size:100% auto;
  background-color: #fff;
}
span {
  line-height: 50px;
  color: dimgray;
}

h2 {
  color: #1e2947;
}
.el-button {
  margin: 30px;
}
</style>