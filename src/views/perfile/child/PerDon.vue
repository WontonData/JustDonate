<template>
  <div class="box-don">
    <el-row>
      <el-col :span="4">
        <h2>捐赠列表</h2>
      </el-col>
      <el-col :span="3" :offset="16">
        <el-radio-group
            v-model="status"
            size="medium"
            fill="#8da1db"
        >
          <el-radio-button label="0">详情</el-radio-button>
          <el-radio-button label="1">总览</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>

    <el-row :gutter="50">
      <don-card v-if="status==0"
                :cardData="donationData"
                @DonDetail="DonDetail"/>
      <total v-else
             :cardData="donationData"/>
    </el-row>

    <el-dialog title="物资援助详情" :visible.sync="dialogFormVisible">
      <don-dialog @sureDialog="dialogFormVisible = false" :form="donate"/>
    </el-dialog>

  </div>
</template>

<script>
import {mapState} from "vuex";
import DonCard from "@/views/donation/child/DonCard";
import DonDialog from "@/views/donation/child/DonDialog";
import Total from "@/views/perfile/child/Total";

export default {
  name: "PerDon",
  components: {Total, DonDialog, DonCard},
  computed: {
    ...mapState(["contractDemandFactory", "contractDonateFactory", "account", "contractCharityFactory"])
  },
  created() {
    this.init()
  },
  data() {
    return {
      search: '',
      donationData: [],
      donate: {},
      dialogFormVisible: false,
      innerVisible: false,
      status: 0,

    }
  },
  methods: {
    init() {
      for (let i = 0; i < 15; i++) {
        this.contractCharityFactory.charities(i).then(res => {
          let Charity = window.confluxJS.Contract({
            address: res,
            abi: require("network/abiCharity.json")
          });
          let donate = {
            hash: res
          }
          Charity.Info().then(res => {
            console.log(res)
            if (res[12] == 2 || res[12] == 3) {
              // donate = {
              donate.id = res[0]
              donate.sender = res[1]
              donate.helper = res[2]
              donate.username = res[3]
              donate.helperName = res[4]
              donate.content = res[5]
              donate.contact = res[6]
              donate.img0 = res[7]
              donate.img1 = res[8]
              donate.location0 = res[9]
              donate.location1 = res[10]//捐助者 位置地区
              donate.express = res[11]
              donate.status = res[12]
              // }
              this.donationData.push(donate)
            }
            //0初始 1通过 2捐赠中 3捐赠完成 9失败
          }).catch(err => {
            console.log(err);
          })
        })
      }
    },

    DonDetail(item) {
      this.dialogFormVisible = true
      this.donate = item
      console.log(item)
    },
  }
}
</script>

<style scoped>
.box-don {
  width: 93%;
  margin: 0 auto;
}

h2 {
  color: #1e2947;
}
.el-button, .el-radio-group {
  margin-top: 20px;
}

</style>