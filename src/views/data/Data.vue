<template>
  <div class="box-data">
    <el-row>
      <el-col :span="4">
        <h2>数据总览</h2>
      </el-col>
      <el-col :span="4" :offset="16">
        <span>截止{{ this.getDay(0, 3600000) }} 18:40</span>
      </el-col>
    </el-row>
    <el-row :gutter="40">
      <data-card :data-card="cardData" />
    </el-row>
    <el-row>
      <span>数据说明:统计本平台内已录入信息，不包括站外信息;爱心捐赠总额按物资总价估算;需求数据根据公开信息搜集整理</span>
    </el-row>
    <ve-map :data="chartData"
            :colors="colors"
            class="map"
            :settings="chartSettings"
            height='750px' width='78%'
            style=''
            :legend-visible='false'></ve-map>
  </div>
</template>

<script>
import DataCard from "@/views/data/child/DataCard";
import {mapState} from "vuex";
import donate from "@/assets/img/data/donate.svg";
import demand from "@/assets/img/data/demand.svg";

export default {
  name: "Data",
  components: {DataCard},
  computed: {
    ...mapState(["contractDonateFactory", "contractDemandFactory", "account"])
  },
  data() {
    this.chartSettings = {
      // position: 'province/henan', //位置  默认china  填写省市 要带province
      labelMap: {
        'people': '人口'  //修改指标名称
      },
      itemStyle: {
        normal: {   //不选中样式
          borderColor: '#fff',
          areaColor: "#E6EFFF",  //背景颜色
        },
        emphasis: {  //选中样式
          areaColor: "#7F95D1",
        }
      },
      label: {    //文本设置
        show: true,
        fontSize: 10,
        fontWeight: 300,
        color: '#9498AC'
      },
    }
    this.colors = [
      "#7f95d1",
      "#e299b5",
    ]
    return {
      chartData: {
        columns: ['位置', '需求', '捐赠'],
        rows: [
          {'位置': '吉林', '需求': 123, '捐赠': 123},
          {'位置': '北京', '需求': 1223, '捐赠': 2123},
          {'位置': '上海', '需求': 2123, '捐赠': 1243},
          {'位置': '浙江', '需求': 2, '捐赠': 15},
          {'位置': '新疆', '需求': 1626, '捐赠': 2452},
          {'位置': '青海', '需求': 2352, '捐赠': 25},
          {'位置': '西藏', '需求': 1878, '捐赠': 606},
          {'位置': '陕西', '需求': 4834, '捐赠': 134},
          {'位置': '江西', '需求': 272, '捐赠': 357},
          {'位置': '广东', '需求': 135, '捐赠': 603},
          {'位置': '湖南', '需求': 3573, '捐赠': 25},
          {'位置': '福建', '需求': 135, '捐赠': 5056},
          {'位置': '贵州', '需求': 5798, '捐赠': 1361},
          {'位置': '江苏', '需求': 1362, '捐赠': 353},
          {'位置': '安徽', '需求': 162, '捐赠': 3583},
          {'位置': '甘肃', '需求': 48, '捐赠': 468},
          {'位置': '内蒙古', '需求': 1351, '捐赠': 1314},
          {'位置': '黑龙江', '需求': 3473, '捐赠': 135},
          {'位置': '辽宁', '需求': 4984, '捐赠': 135},
        ]
      },
      cardData: [
        {
          style: 'blue',
          src: donate,
          title: '爱心捐赠数',
          num: 0,
          change: 0,
          fuhao: '+'
        },
        {
          style: 'pink',
          src: demand,
          title: '捐赠需求数',
          num: 0,
          change: 0,
          fuhao: '-'
        },
      ]
    };
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.contractDemandFactory.index().then(res => {
        console.log(res)
        this.cardData[1].num = res[0]
      })
      this.contractDonateFactory.index().then(res => {
        console.log(res)
        this.cardData[0].num = res[0]
      })
    },
    getDay (day, hours) {
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
    doHandleMonth (month) {
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
.box-data {
  width: 96%;
  margin: 0 auto;
}
span {
  line-height: 50px;
  color: dimgray;
}

.map {
  /*margin-top:;*/
  margin: -40px auto 0;
  /*z-index: -1;*/
}
h2 {
  color: #1e2947;
}
</style>