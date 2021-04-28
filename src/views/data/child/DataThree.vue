<template>
  <div class="bg">
    <three-title :title="title" />
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
import Title from "@/components/title/Title";
import ThreeTitle from "@/components/title/ThreeTitle";

export default {
  name: "DataThree",
  components: {ThreeTitle, Title, DataCard},
  data() {
    this.chartSettings = {
      // position: 'province/henan', //位置  默认china  填写省市 要带province
      labelMap: {

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
      title: '支援地图'
    };
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
  background-image: url('~@/assets/img/data/BG-introduce.png');
  background-size:100% auto;
  height: 800px;
  background-color: #fff;
}

.map {
  /*margin-top:;*/
  margin: -40px auto 0;
  /*z-index: -1;*/
}
</style>