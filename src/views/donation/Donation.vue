<template>
  <div class="box-don">
    <el-row>
      <el-col :span="4">
        <h2>实时捐赠动态</h2>
      </el-col>
      <el-col :span="4" :offset="16">
        <el-input placeholder="搜索捐赠方名称" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-row :gutter="50">
      <don-card :cardData="donationData" @DonDetail="DonDetail"/>
    </el-row>

    <el-dialog title="物资援助详情" :visible.sync="dialogFormVisible">
      <don-dialog @sureDialog="dialogFormVisible = false" :form="donate"/>
    </el-dialog>
  </div>
</template>

<script>
import DonCard from "@/views/donation/child/DonCard";
import DonDialog from "@/views/donation/child/DonDialog";
import {mapState} from "vuex";
import {DonateFactory} from "@/network/conflux";

const util = require('js-conflux-sdk/src/util');

export default {
  name: "Donation",
  components: {DonDialog, DonCard},
  computed: {
    ...mapState(["contractDonateFactory", "contractDemandFactory", "account", "contractCharityFactory"])
  },
  mounted() {
    this.init()
  },
  data() {
    return {
      search: '',
      donationData: [],
      donate: {},
      dialogFormVisible: false,
      innerVisible: false,
      hash: ['0x3757a1fbe8be8b3a20a32caa3e5bc0fd419c1104536240861edd10af6097c4e5',
        '0x054bc7fb7e875e6574c5eaf298c7946652614c2888d1c17972901dffab1e578c']
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
    sureDialog() {
      this.dialogFormVisible = false

      // this.reload();
    }
  }
}
</script>

<style scoped>
.box-don {
  width: 96%;
  margin: 0 auto;
}

h2 {
  color: #1e2947;
}

.input-with-select {
  margin-top: 20px;
}
</style>