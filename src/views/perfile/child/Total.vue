<template>
  <div>
    <div id="china_map_box">
      <div id="china_map"></div>
    </div>
    <el-row>
      <el-col :span="17">
        <ve-map :data="chartData"
                :colors="colors"
                class="map"
                :settings="chartSettings"
                height='83vh' width='60vw'
                style="margin-top: -30px"
                :legend-visible='false'></ve-map>
      </el-col>
      <el-col :span="6">
        <el-card>
          <el-collapse accordion>
            <el-collapse-item v-for="(item, index) in cardData" :key="index">
              <template slot="title" >
                <div :class="[item.status==1?'delivery':'transport']">
                  {{ item.username }}<i class="header-icon el-icon-s-flag"></i>
                </div>
              </template>

              <span class="wuzi">捐赠物资: {{ item.content }}</span>

            </el-collapse-item>

          </el-collapse>
        </el-card>

      </el-col>
    </el-row>

  </div>


</template>

<script>

export default {
  name: "Total",
  data() {
    this.chartSettings = {
      // position: 'province/henan', //位置  默认china  填写省市 要带province
      labelMap: {},
      aspectScale: 0.75,
      itemStyle: {
        normal: {   //不选中样式
          borderColor: '#fff',
          areaColor: "#E6EFFF",  //背景颜色
        },
        emphasis: {  //选中样式
          areaColor: "#7F95D1",
          borderColor: '#7F95D1',
          shadowColor: 'rgba(7,39,126, 0.5)',
          shadowBlur: 30
        }
      },
      label: {    //文本设置
        show: true,
        fontSize: 13,
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
          {'位置': '吉林', '需求': 0, '捐赠': 0},
          {'位置': '北京', '需求': 0, '捐赠': 0},
          {'位置': '上海', '需求': 0, '捐赠': 0},
          {'位置': '浙江', '需求': 4, '捐赠': 6},
          {'位置': '新疆', '需求': 0, '捐赠': 0},
          {'位置': '青海', '需求': 0, '捐赠': 0},
          {'位置': '西藏', '需求': 0, '捐赠': 0},
          {'位置': '陕西', '需求': 0, '捐赠': 0},
          {'位置': '江西', '需求': 0, '捐赠': 0},
          {'位置': '广东', '需求': 0, '捐赠': 0},
          {'位置': '湖南', '需求': 0, '捐赠': 0},
          {'位置': '湖北', '需求': 1, '捐赠': 0},
          {'位置': '福建', '需求': 0, '捐赠': 0},
          {'位置': '贵州', '需求': 0, '捐赠': 0},
          {'位置': '江苏', '需求': 0, '捐赠': 0},
          {'位置': '安徽', '需求': 0, '捐赠': 0},
          {'位置': '甘肃', '需求': 0, '捐赠': 0},
          {'位置': '内蒙古', '需求': 0, '捐赠': 0},
          {'位置': '黑龙江', '需求': 0, '捐赠': 0},
          {'位置': '辽宁', '需求': 0, '捐赠': 0},
        ]
      },
      title: '支援地图'
    };
    // return {
    //   msg: 'Welcome to Your Vue.js App',
    //   options: {
    //     tooltip: {
    //       triggerOn: "mousemove",   //mousemove、click
    //       padding: 8,
    //       borderWidth: 1,
    //       borderColor: '#409eff',
    //       backgroundColor: 'rgba(255,255,255,0.7)',
    //       textStyle: {
    //         color: '#000000',
    //         fontSize: 13
    //       },
    //       formatter: function (e, t, n) {
    //         let data = e.data;
    //         //模拟数据
    //         data.specialImportant = Math.random() * 1000 | 0;
    //         data.import = Math.random() * 1000 | 0;
    //         data.compare = Math.random() * 1000 | 0;
    //         data.common = Math.random() * 1000 | 0;
    //         data.specail = Math.random() * 1000 | 0;
    //
    //         let context = `
    //            <div>
    //                <p><b style="font-size:15px;">${data.name}</b>(2020年第一季度)</p>
    //                <p class="tooltip_style"><span class="tooltip_left">事件总数</span><span class="tooltip_right">${data.value}</span></p>
    //                <p class="tooltip_style"><span class="tooltip_left">特别重大事件</span><span class="tooltip_right">${data.specialImportant}</span></p>
    //                <p class="tooltip_style"><span class="tooltip_left">重大事件</span><span class="tooltip_right">${data.import}</span></p>
    //                <p class="tooltip_style"><span class="tooltip_left">较大事件</span><span class="tooltip_right">${data.compare}</span></p>
    //                <p class="tooltip_style"><span class="tooltip_left">一般事件</span><span class="tooltip_right">${data.common}</span></p>
    //                <p class="tooltip_style"><span class="tooltip_left">特写事件</span><span class="tooltip_right">${data.specail}</span></p>
    //            </div>
    //         `
    //         return context;
    //       }
    //     },
    //     visualMap: {
    //       show: true,
    //       left: 26,
    //       bottom: 40,
    //       showLabel: true,
    //       pieces: [
    //         {
    //           gte: 100,
    //           label: ">= 1000",
    //           color: "#1f307b"
    //         },
    //         {
    //           gte: 500,
    //           lt: 999,
    //           label: "500 - 999",
    //           color: "#3c57ce"
    //         },
    //         {
    //           gte: 100,
    //           lt: 499,
    //           label: "100 - 499",
    //           color: "#6f83db"
    //         },
    //         {
    //           gte: 10,
    //           lt: 99,
    //           label: "10 - 99",
    //           color: "#9face7"
    //         },
    //         {
    //           lt: 10,
    //           label: '<10',
    //           color: "#bcc5ee"
    //         }
    //       ]
    //     },
    //     geo: {
    //       map: "china",
    //       scaleLimit: {
    //         min: 1,
    //         max: 2
    //       },
    //       zoom: 1,
    //       top: 120,
    //       label: {
    //         normal: {
    //           show: true,
    //           fontSize: "14",
    //           color: "rgba(0,0,0,0.7)"
    //         }
    //       },
    //       itemStyle: {
    //         normal: {
    //           //shadowBlur: 50,
    //           //shadowColor: 'rgba(0, 0, 0, 0.2)',
    //           borderColor: "rgba(0, 0, 0, 0.2)"
    //         },
    //         emphasis: {
    //           areaColor: "#f2d5ad",
    //           shadowOffsetX: 0,
    //           shadowOffsetY: 0,
    //           borderWidth: 0
    //         }
    //       }
    //     },
    //     series: [
    //       {
    //         name: "突发事件",
    //         type: "map",
    //         geoIndex: 0,
    //         data: []
    //       }
    //     ]
    //   },
    //   //echart data
    //   dataList: [
    //     {
    //       name: "南海诸岛",
    //       value: 100,
    //       eventTotal: 100,
    //       specialImportant: 10,
    //       import: 10,
    //       compare: 10,
    //       common: 40,
    //       specail: 20
    //     }, {
    //       name: "北京", value: 540
    //     }, {
    //       name: "天津", value: 130
    //     }, {
    //       name: "上海", value: 400
    //     }, {
    //       name: "重庆", value: 750
    //     }, {
    //       name: "河北", value: 130
    //     }, {
    //       name: "河南", value: 830
    //     }, {
    //       name: "云南", value: 110
    //     }, {
    //       name: "辽宁", value: 19
    //     }, {
    //       name: "黑龙江", value: 150
    //     }, {
    //       name: "湖南", value: 690
    //     }, {
    //       name: "安徽", value: 60
    //     }, {
    //       name: "山东", value: 39
    //     }, {
    //       name: "新疆", value: 4
    //     }, {
    //       name: "江苏", value: 31
    //     }, {
    //       name: "浙江", value: 104
    //     }, {
    //       name: "江西", value: 36
    //     }, {
    //       name: "湖北", value: 52
    //     },
    //     {
    //       name: "广西",
    //       value: 33
    //     },
    //     {
    //       name: "甘肃",
    //       value: 7
    //     },
    //     {
    //       name: "山西",
    //       value: 5
    //     },
    //     {
    //       name: "内蒙古",
    //       value: 778
    //     },
    //     {
    //       name: "陕西",
    //       value: 22
    //     },
    //     {
    //       name: "吉林",
    //       value: 4
    //     },
    //     {
    //       name: "福建",
    //       value: 18
    //     },
    //     {
    //       name: "贵州",
    //       value: 5
    //     },
    //     {
    //       name: "广东",
    //       value: 98
    //     },
    //     {
    //       name: "青海",
    //       value: 1
    //     },
    //     {
    //       name: "西藏",
    //       value: 0
    //     },
    //     {
    //       name: "四川",
    //       value: 44
    //     },
    //     {
    //       name: "宁夏",
    //       value: 4
    //     },
    //     {
    //       name: "海南",
    //       value: 22
    //     },
    //     {
    //       name: "台湾",
    //       value: 3
    //     },
    //     {
    //       name: "香港",
    //       value: 5
    //     },
    //     {
    //       name: "澳门",
    //       value: 555
    //     }
    //   ],
    //   // chartData: {
    //   //   columns: ['位置', '需求', '捐赠'],
    //   //   rows: [
    //   //     {'位置': '吉林', '需求': 123, '捐赠': 123},
    //   //     {'位置': '北京', '需求': 1223, '捐赠': 2123},
    //   //     {'位置': '上海', '需求': 2123, '捐赠': 1243},
    //   //     {'位置': '浙江', '需求': 2, '捐赠': 15},
    //   //     {'位置': '新疆', '需求': 1626, '捐赠': 2452},
    //   //     {'位置': '青海', '需求': 2352, '捐赠': 25},
    //   //     {'位置': '西藏', '需求': 1878, '捐赠': 606},
    //   //     {'位置': '陕西', '需求': 4834, '捐赠': 134},
    //   //     {'位置': '江西', '需求': 272, '捐赠': 357},
    //   //     {'位置': '广东', '需求': 135, '捐赠': 603},
    //   //     {'位置': '湖南', '需求': 3573, '捐赠': 25},
    //   //     {'位置': '福建', '需求': 135, '捐赠': 5056},
    //   //     {'位置': '贵州', '需求': 5798, '捐赠': 1361},
    //   //     {'位置': '江苏', '需求': 1362, '捐赠': 353},
    //   //     {'位置': '安徽', '需求': 162, '捐赠': 3583},
    //   //     {'位置': '甘肃', '需求': 48, '捐赠': 468},
    //   //     {'位置': '内蒙古', '需求': 1351, '捐赠': 1314},
    //   //     {'位置': '黑龙江', '需求': 3473, '捐赠': 135},
    //   //     {'位置': '辽宁', '需求': 4984, '捐赠': 135},
    //   //   ]
    //   // },
    //   // title: '支援地图'
    //
    // }
  },
  props: {
    cardData: {
      type: Array,
    }
  },
  created() {
    this.setEchartOption();

  },
  mounted() {
    this.$nextTick(() => {
      this.initEchartMap();
    })
    // this.drawLine();
  },
  methods: {
    //初始化中国地图
    initEchartMap() {
      // let mapDiv = document.getElementById('china_map');
      let myChart = this.$echarts.init(document.getElementById('china_map'))
      // let myChart = echarts.init(mapDiv);
      myChart.setOption(this.options);
      console.log(myChart)

    },
    //修改echart配制
    setEchartOption() {
      this.options.series[0]['data'] = this.dataList;
    },

  }
}
</script>

<style scoped>
.transport, .delivery {
  font-size: 16px;
}
.transport {
  color: #394e87;
  /*content: "运输中";*/
}
.delivery {
  color: #409EFF;
  /*content: "已完成";*/
}
.el-card {
  margin-top: 30px;
}
.el-collapse {
  /*margin-top: 40px;*/
  height: 65vh;
  overflow-y: scroll;
  overflow-x: hidden;
  /*padding-left: 20px;*/
  /*text-align: center;*/
}

.el-collapse::-webkit-scrollbar {
  display: none;
}
.el-collapse-item {
  padding-left: 15px;
  /*background-color: #f2f5ff;*/
}
#china_map_box {
  height: 100%;
  position: relative;
}

#china_map_box #china_map {
  height: 100%;
}

#china_map_box .china_map_logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
}
</style>
<style>
.el-collapse .is-active {
  background-color: #f2f5ff;
}
.el-collapse .is-active .el-collapse-item__content {
  background-color: #f2f5ff;
  color: #5b6c95;
  font-size: 14px;
}
#china_map .tooltip_style {
  line-height: 1.7;
  overflow: hidden;
}

#china_map .tooltip_left {
  float: left;
}

#china_map .tooltip_right {
  float: right;
}

</style>