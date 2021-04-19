<template>
  <div class="bg">
    <Title :title="title"></Title>
    <el-row :gutter="40">
      <data-card :data-card="cardData"/>
    </el-row>
    <el-row>
      <el-col :span="16">
        <span>数据说明:统计本平台内已录入信息，不包括站外信息;爱心捐赠总额按物资总价估算;需求数据根据公开信息搜集整理</span>
      </el-col>
      <el-col :span="4" :offset="4">
        <span>截止{{ this.getDay(0, 3600000) }} 18:40</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import DataCard from "@/views/data/child/DataCard";
import Title from "@/components/title/Title";

export default {
  name: "DataTow",
  components: {Title, DataCard},
  data() {
    return {
      title: '数据总览',

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
</style>