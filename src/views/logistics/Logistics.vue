<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="1">
        <head-back :tracking_numbers="tracking_numbers"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14" :offset="4">
        <div class="block">
          <el-timeline>
            <el-timeline-item v-for="item in information"
                              :timestamp="item.checkpoint_date"
                              :icon="(item.checkpoint_delivery_status==='delivered'?'el-icon-check':'el-icon-arrow-up')"
                              :type="(item.checkpoint_delivery_status==='delivered'?'success':'info')"
                              size="large"
                              placement="top">
              <el-card>
                <h4>{{ item.tracking_detail }}</h4>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeadBack from "@/views/logistics/child/HeadBack";
import {getOrder, getCarriers, addOrder} from "@/request/abi";

export default {
  name: "Logistics",
  components: {HeadBack},
  data() {
    return {
      tracking_numbers: 'YT5486585591911',
      information: []
    }
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      // getCarriers().then(res => {
      //   //识别物流
      //   // console.log(res.data.data)
      //   res.data.data.map((item,i) => {
      //     if (item.name === "Yunda Express"){
      //       // console.log(item ,i)
      //     }
      //   })
      // }).catch(err => {
      //   console.log(err)
      // })
      // addOrder('557053465723100', '百世快递').then(res => {
      //   console.log(res.data)
      // }).catch(err => {
      //   console.log(err)
      // })
      // getOrder('SF1432571440568').then(res => {
      this.tracking_numbers = this.$route.params.order
      // getOrder(this.tracking_numbers).then(res => {
      //   console.log(res.data.data)
      //   console.log(res.data.data[0].origin_info)
      //   this.information = res.data.data[0].origin_info.trackinfo
      //   console.log(this.information)
      //
      // }).catch(err => {
      //   console.log(err)
      // })
      this.information =
        [{
          "checkpoint_date": "2021-05-07 18:43:36",
          "tracking_detail": "您的快件已签收，如有疑问请电联快递员【徐元辉，电话：17681880601】。疫情期间顺丰每日对网点消毒、快递员每日测温、配戴口罩，感谢您使用顺丰，期待再次为您服务。（主单总件数：1件）",
          "location": null,
          "checkpoint_delivery_status": "delivered",
          "checkpoint_delivery_substatus": "delivered001"
        }, {
          "checkpoint_date": "2021-05-07 18:43:27",
          "tracking_detail": "快件领取成功",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-07 18:32:49",
          "tracking_detail": "快件到达顺丰合作点【杭州电子信息工程学院（青山湖校区）乐收服务站】,请携带有效证件前往自取",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-07 16:08:38",
          "tracking_detail": "快件交给徐元辉,正在派送途中（联系电话：17681880601,顺丰已开启“安全呼叫”保护您的电话隐私,请放心接听！）（主单总件数：1件）",
          "location": null,
          "checkpoint_delivery_status": "pickup",
          "checkpoint_delivery_substatus": "pickup001"
        }, {
          "checkpoint_date": "2021-05-07 15:45:48",
          "tracking_detail": "快件到达 【杭州青山湖速运营业点】",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-07 13:51:46",
          "tracking_detail": "快件已发车",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-07 13:51:38",
          "tracking_detail": "快件在【全国航空枢纽（萧山)】完成分拣,准备发往 【杭州青山湖速运营业点】",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-07 11:48:13",
          "tracking_detail": "快件到达 【全国航空枢纽（萧山)】",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-07 11:37:19",
          "tracking_detail": "快件已发车",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-07 09:59:20",
          "tracking_detail": "快件在【浙江陆运枢纽（杭州）】完成分拣,准备发往 【全国航空枢纽（萧山)】",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-07 08:39:19",
          "tracking_detail": "快件到达 【浙江陆运枢纽（杭州）】",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-06 18:44:03",
          "tracking_detail": "快件已发车",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-06 18:10:26",
          "tracking_detail": "快件在【济南春晖中转场】完成分拣,准备发往 【浙江陆运枢纽（杭州）】",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-06 02:50:44",
          "tracking_detail": "快件到达 【济南春晖中转场】",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-05 18:28:46",
          "tracking_detail": "快件已发车",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-05 18:27:47",
          "tracking_detail": "快件在【济南历城同华路营业点】完成分拣,准备发往 【济南春晖中转场】",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }, {
          "checkpoint_date": "2021-05-05 14:50:19",
          "tracking_detail": "顺丰速运 已收取快件",
          "location": null,
          "checkpoint_delivery_status": "transit",
          "checkpoint_delivery_substatus": "transit001"
        }]


    }
  }
}
</script>

<style scoped>
.block {
  margin-top: 20px;
}

.el-card {
  background-color: #f2f9ff;
  border-radius: 10px;
}

</style>
<style>
.el-card .el-card__body {
  border-radius: 10px;
}
</style>