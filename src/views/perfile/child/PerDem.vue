<template>
  <div class="box-dem">
    <el-row>
      <el-col :span="4">
        <h2>我的需求</h2>
      </el-col>
      <el-col :span="5">
        <el-radio-group
            v-model="status"
            size="medium"
            fill="#8da1db"
            @change="select"
        >
          <el-radio-button label="0">等待中</el-radio-button>
          <el-radio-button label="1" @change="selectDonation">已捐助</el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :span="2" :offset="13">
        <el-button round type="danger" plain @click="dialogRelease = true">发布需求</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="50">
      <dem-card v-if="status==0"
                :cardData="demandData"
                @DemDetail="DemDetail"
                :btnShow="false"/>
      <don-card v-else
                :cardData="donatedData"
                @DonDetail="DemDetail"/>
    </el-row>

    <el-dialog title="物资需求详情" :visible.sync="dialogFormVisible">
      <dem-dialog @sureDialog="sureDialog" :form="demand" :perDem="true"/>
    </el-dialog>

    <el-dialog title="发布物资需求" :visible.sync="dialogRelease">
      <per-don-dialog @releaseDialog="releaseDialog"/>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from "vuex";
import DemCard from "@/views/demand/child/DemCard";
import DemDialog from "@/views/demand/child/DemDialog";
import PerDonDialog from "@/views/perfile/child/PerDonDialog";
import {DemandFactory} from "@/network/conflux";
import DonCard from "@/views/donation/child/DonCard";

export default {
  name: "PerDem",
  components: {DonCard, DemDialog, DemCard, PerDonDialog},
  computed: {
    ...mapState(["currentUser", "contractDemandFactory", "account", "contractCharityFactory"])
  },
  data() {
    return {
      status: 0,
      dialogFormVisible: false,
      dialogRelease: false,
      demandData: [],
      donatedData: [],
      oldDemandData: [],
      demand: {},
    }
  },
  created() {
    this.init()
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
            if (res[12] == 1 || res[12] == 0) {
              let demand = {
                id: res[0],
                sender: res[1],
                username: res[3],
                content: res[5],
                contact: res[6],
                img0: res[7],
                img1: res[8],
                location0: res[9],
                status: res[12],
              }
              this.demandData.push(demand)
            }
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
              this.donatedData.push(donate)
            }
            //0初始 1通过 2捐赠中 3捐赠完成 9失败
          }).catch(err => {
            console.log(err);
          })
        })

      }
    },
    DemDetail(item) {
      this.dialogFormVisible = true
      this.demand = item
      console.log(item)
    },
    DonDetail(item) {
      this.dialogFormVisible = true
      this.donate = item
      console.log(item)
    },
    sureDialog() {
      this.dialogFormVisible = false
    },
    releaseDialog(item) {
      console.log(item)
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
        let demand = {
          id: "",
          sender: this.account[0],
          username: item.username,
          content: item.content,
          contact: item.contact,
          img0: item.img0,
          img1: item.img0,
          location0: item.address,
          status: 0,
        }
        this.demandData.push(demand)
        // this.reload() // 调用方法
        // this.init()
      }).catch(err => {
        console.log(err)
        this.$message({
          message: '发布失败！',
          type: 'error'
        });
      })
    },
    selectWait() {
      console.log("selectWait")
      return this.demandData.filter(data => data.status < 0)
    },
    selectDonation() {
      return this.demandData.filter(data => data.status >= 0)
    },
    select() {
      if (this.status == 1) {
        return this.demandData.filter(item =>
            item.status[0] > 1
        )
      } else {
        return this.demandData.filter(item =>
            item.status[0] <= 1 || item.status[0] == undefined)
      }
    },
  }
}
</script>

<style scoped>
.box-dem {
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
<style>
.el-radio-button__inner:hover {
  /*color: #7F95D1;*/
  color: #8b9dd5!important;
}

.el-radio-button__orig-radio:checked .el-radio-button__inner {
  color: #FFF;
  background-color: #8b9dd5!important;
  border-color: #8b9dd5!important;
  -webkit-box-shadow: -1px 0 0 0 #8b9dd5!important;
  box-shadow: -1px 0 0 0 #8b9dd5!important;
}

</style>