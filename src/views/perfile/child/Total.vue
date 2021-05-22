<template>
  <div>
    <div id="china_map_box">
      <div id="china_map"></div>
    </div>
    <el-row>
      <el-col :span="17">
        <div ref="map" style="height:83vh; width: 60vw;"></div>

        <!--        <ve-map :data="chartData"-->
        <!--                :colors="colors"-->
        <!--                class="map"-->
        <!--                :settings="chartSettings"-->
        <!--                height='83vh' width='60vw'-->
        <!--                style="margin-top: -30px"-->
        <!--                :legend-visible='false'></ve-map>-->
      </el-col>
      <el-col :span="6">
        <el-card>
          <el-collapse accordion>
            <el-collapse-item v-for="(item, index) in cardData" :key="index">
              <template slot="title">
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
          areaColor: "#E6EFFF",  //背景颜色},
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
        ],
        title: '支援地图',
        mapData: []
      }
    }
  },
  props: {
    cardData: {
      type: Array,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getmap();
    })
  },
  methods: {

    getmap() {
      // 基于准备好的dom(myEchartPillar)，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.map);
      var data = [
        {name: "北京", selected: true, value: 27},
        {name: "天津", selected: false, value: 42},
        {name: "河北", selected: true, value: 102},
        {name: "山西", value: 81},
        {name: "内蒙古", value: 47},
        {name: "辽宁", value: 67},
        {name: "吉林", value: 82},
        {name: "黑龙江", value: 66},
        {name: "上海", value: 24},
        {name: "江苏", value: 92},
        {name: "浙江", value: 114},
        {name: "安徽", value: 109},
        {name: "福建", value: 116},
        {name: "江西", value: 91},
        {name: "山东", value: 119},
        {name: "河南", value: 137},
        {name: "湖北", value: 116},
        {name: "湖南", value: 114},
        {name: "重庆", value: 91},
        {name: "四川", value: 125},
        {name: "贵州", value: 62},
        {name: "云南", value: 83},
        {name: "西藏", value: 9},
        {name: "陕西", value: 80},
        {name: "甘肃", value: 56},
        {name: "青海", value: 10},
        {name: "宁夏", value: 18},
        {name: "新疆", value: 67},
        {name: "广东", value: 123},
        {name: "广西", value: 59},
        {name: "海南", value: 14},
      ];
      var mapName = 'china'
      var toolTipData = [{name: "北京", value: [{name: "地区", value: 95}]},
        {name: "天津", value: [{name: "捐赠", value: 22}]},
        {name: "河北", value: [{name: "捐赠", value: 60}]},
        {name: "山西", value: [{name: "捐赠", value: 40}]},
        {name: "内蒙古", value: [{name: "捐赠", value: 23}]},
        {name: "辽宁", value: [{name: "捐赠", value: 39}]},
        {name: "吉林", value: [{name: "捐赠", value: 41}]},
        {name: "黑龙江", value: [{name: "捐赠", value: 35}]},
        {name: "上海", value: [{name: "捐赠", value: 12}]},
        {name: "江苏", value: [{name: "捐赠", value: 47}]},
        {name: "浙江", value: [{name: "捐赠", value: 57}]},
        {name: "安徽", value: [{name: "捐赠", value: 57}]},
        {name: "福建", value: [{name: "捐赠", value: 59}]},
        {name: "江西", value: [{name: "捐赠", value: 49}]},
        {name: "山东", value: [{name: "捐赠", value: 67}]},
        {name: "河南", value: [{name: "捐赠", value: 69}]},
        {name: "湖北", value: [{name: "捐赠", value: 60}]},
        {name: "湖南", value: [{name: "捐赠", value: 62}]},
        {name: "重庆", value: [{name: "捐赠", value: 47}]},
        {name: "四川", value: [{name: "捐赠", value: 65}]},
        {name: "贵州", value: [{name: "捐赠", value: 32}, {name: "需求", value: 30}]},
        {name: "云南", value: [{name: "捐赠", value: 42}]},
        {name: "西藏", value: [{name: "捐赠", value: 5}]},
        {name: "陕西", value: [{name: "捐赠", value: 38}]},
        {name: "甘肃", value: [{name: "捐赠", value: 28}]},
        {name: "青海", value: [{name: "捐赠", value: 5}]},
        {name: "宁夏", value: [{name: "捐赠", value: 10}]},
        {name: "新疆", value: [{name: "捐赠", value: 36}]},
        {name: "广东", value: [{name: "捐赠", value: 63}]},
        {name: "广西", value: [{name: "捐赠", value: 29},]},
        {
          name: "海南", value: [{name: "捐赠", value: 8}]
        },
      ];
      var geoCoordMap = {};
      /*获取地图数据*/
      myChart.showLoading();
      var mapFeatures = this.$echarts.getMap(mapName).geoJson.features;
      myChart.hideLoading();
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;

      });
      console.log(geoCoordMap)
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;

      });
      var max = 480,
          min = 9; // todo
      var maxSize4Pin = 100,
          minSize4Pin = 20;

      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              selected: true,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };

      let bjData = [
        // [{name: '北京'}, {name: '上海', value: "黄浦区"}],
        // [{name: '浙江'}, {name: '湖北', value: "武汉"}],
        [{name: '浙江'}, {name: '广东', value: '广州'}]
      ];

      let convert = (data) => {
        let res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          console.log(dataItem)
          var from = geoCoordMap[dataItem[0].name];
          var to = geoCoordMap[dataItem[1].name];
          console.log(from, to)
          if (from && to) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [from, to]
            });
          }
        }
        console.log(res)
        return res;
      };
      // 设置高亮
      myChart.dispatchAction({
        type: 'highlight',
        // 使用 dataIndex 来定位节点。
        dataIndex: [0, 2]
      });

      //指定图表的配置项和数据，绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            console.log(params)
            if (params.seriesType != 'lines') {
              var toolTiphtml = ''
              if (typeof (params.value)[2] == "undefined") {

                for (let i = 0; i < toolTipData.length; i++) {
                  if (params.name == toolTipData[i].name) {
                    toolTiphtml += toolTipData[i].name + ':<br>'
                    for (let j = 0; j < toolTipData[i].value.length; j++) {
                      toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                    }
                  }
                }
                return toolTiphtml;
              } else {
                for (let i = 0; i < toolTipData.length; i++) {
                  if (params.name == toolTipData[i].name) {
                    toolTiphtml += toolTipData[i].name + ':<br>'
                    for (let j = 0; j < toolTipData[i].value.length; j++) {
                      toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                    }
                  }
                }
                return toolTiphtml;
              }
            } else {
              for (let i = 0; i < bjData.length; i++) {
                console.log(params)
                if (params.data.fromName == bjData[i][0].name && params.data.toName == bjData[i][1].name) {
                  return params.data.fromName + '至' + '<br>' + params.data.toName + bjData[i][1].value;
                }
              }
            }

          },
          // formatter:function(params, ticket, callback){
          //   console.log("params")
          //   if(params.seriesType=="lines")
          //     return params.data.name;
          // }
        },
        //hover
        geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#E6EFFF',
              borderColor: '#7f95d1',
            },
            emphasis: {
              areaColor: '#7F95D1',
            }
          },
          regions: [      //对不同的区块进行着色
            // {
            //   name: '北京', //区块名称
            //   itemStyle: {
            //     normal: {
            //       areaColor: '#6a7dad'
            //     }
            //   }
            // },
            {
              name: '浙江',
              itemStyle: {
                normal: {
                  areaColor: '#6a7dad'
                }
              }
            },
            // {
            //   name: '上海',
            //   itemStyle: {
            //     normal: {
            //       areaColor: '#9cb7ff'
            //     }
            //   }
            // },
            {
              name: '广东',
              itemStyle: {
                normal: {
                  areaColor: '#9cb7ff'
                }
              }
            },
            // {
            //   name: '湖北',
            //   itemStyle: {
            //     normal: {
            //       areaColor: '#9cb7ff'
            //     }
            //   }
            // }
            ]
        },
        series: [
          {
            name: '连线',
            type: 'lines',
            zlevel: 1,
            symbol: ['none'],
            symbolSize: 10,

            lineStyle: {
              normal: {
                color: '#5276d7',
                width: 1,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            data: convert(bjData)
          },
          {
            name: '流动动画',
            type: 'lines',// 这里还有一个连线其实是做的在线上的一个流动效果，运行代码注意观察你就会看到
            symbol: ['none'],
            symbolSize: 10,
            data: convert(bjData),
            lineStyle: {
              normal: {
                color: '#001b63',
                width: 0,
                curveness: 0.2
              }
            },
            effect: {
              constantSpeed: 20,
              show: true,
              trailLength: 0.1,
              symbolSize: 3
            },
            zlevel: 1
          },
          // {
          //   name: '高亮显示 发货',
          //   type: 'map',
          //   map: 'china',
          //   data: [
          //     {name: '北京', selected: true},
          //     {name: '浙江', selected: true}
          //   ],
          //   label: {
          //     normal: {
          //       show: false
          //     },
          //     emphasis: {
          //       show: false,
          //     }
          //   },
          //   itemStyle: {
          //     normal: {
          //       borderWidth: 1,//边际线大小
          //       areaColor: '#E6EFFF',
          //       borderColor: '#8bd17f',
          //     },
          //     emphasis: {
          //       areaColor: '#7F95D1',
          //     }
          //
          //   },
          // },
          // {
          //   name: '高亮显示 收货',
          //   type: 'map',
          //   map: 'china',
          //   data: [
          //     {name: '上海', selected: true},
          //     {name: '湖北', selected: true},
          //     {name: '河南', selected: true}
          //   ],
          //   label: {
          //     normal: {
          //       show: false
          //     },
          //     emphasis: {
          //       show: false,
          //     }
          //   },
          //   itemStyle: {
          //     normal: {
          //       borderWidth: 1,//边际线大小
          //       areaColor: '#E6EFFF',
          //       borderColor: '#d17fc9',
          //     },
          //     emphasis: {
          //       areaColor: '#7F95D1',
          //     }
          //
          //   },
          // }
        ]

      });

      //解决自适应
      setTimeout(function () {
        window.addEventListener("resize", () => {
          myChart.resize();
        });
      }, 500);

    }
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