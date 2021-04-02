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
    ...mapState(["currentUser", "contractDemandFactory", "account"])
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
      hash: ['0x3757a1fbe8be8b3a20a32caa3e5bc0fd419c1104536240861edd10af6097c4e5',
        '0x054bc7fb7e875e6574c5eaf298c7946652614c2888d1c17972901dffab1e578c']
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.contractDemandFactory.index().then(res => {
        // let res = DemandFactory.index().call().then(res => {
        for (let i = 0; i < res.toString(); i++) {
          this.contractDemandFactory.demands(i).then(res => {
            let demand = {
              id: res[0],
              username: res[1],
              sender: res[2],
              content: res[3],
              contact: res[4],
              status: res[5],
            }
            // console.log(res[5])
            let index = 0
            if (demand.status[0] > 1) {
              //已被捐赠
              console.log(demand)
              demand.demandName = res[1]
              demand.username = "捐助者" + i
              demand.hash = this.hash[index++];
              this.donatedData.push(demand)
              //暂时判断 过滤
            } else if (demand.username == "杭电信工") {
              //正在投票或等待捐赠
              this.demandData.push(demand)
            }
            // }
          }).catch(err => {
            console.log(err)
          })
        }
      }).catch(err => {
        console.log(err)
      })
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
      this.contractDemandFactory.createDemand(
          item.username,
          item.content,
          item.contact
      ).sendTransaction({
        from: this.account
      }).confirmed().then((res) => {
        console.log(res)
        //transactionHash "0x63985a5e71552c883a9b32eae440122fa857e92155da272e57a4c930d2ead97a"
        //0x900a39cafa39091051cfc792a40166f9b26ad4cad3b8685a72aedf282ead11f5
        this.$message({
          message: '发布成功！',
          type: 'success'
        });
        this.dialogRelease = false
        this.reload() // 调用方法
        this.init()
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
  width: 96%;
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
  color: #8b9dd5;
}

.el-radio-button__orig-radio:checked .el-radio-button__inner {
  color: #FFF;
  background-color: #8b9dd5;
  border-color: #8b9dd5;
  -webkit-box-shadow: -1px 0 0 0 #8b9dd5;
  box-shadow: -1px 0 0 0 #8b9dd5;
}
</style>