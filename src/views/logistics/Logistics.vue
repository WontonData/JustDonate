<template>
<div>
  <el-row>
    <el-col :span="20" :offset="1">
      <head-back :tracking_numbers="tracking_numbers" />
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
              <h4>{{item.tracking_detail}}</h4>
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
      getOrder(this.tracking_numbers).then(res => {
        console.log(res.data.data)
        console.log(res.data.data[0].origin_info)
        this.information = res.data.data[0].origin_info.trackinfo
        console.log(this.information)

      }).catch(err => {
        console.log(err)
      })
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