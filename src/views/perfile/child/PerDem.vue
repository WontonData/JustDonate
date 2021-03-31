<template>
  <div class="box-dem">
    <el-row>
      <el-col :span="4">
        <h2>我的需求</h2>
      </el-col>
      <el-col :span="2" :offset="18">
        <el-button round type="danger" plain @click="dialogRelease = true">发布需求</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="50">
      <dem-card :cardData="demandData" @DemDetail="DemDetail" :btnShow="false"/>
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

export default {
  name: "PerDem",
  components: {DemDialog, DemCard, PerDonDialog},
  computed: {
    ...mapState(["currentUser", "contractDemandFactory", "account"])
  },
  data() {
    return {
      search: '',
      dialogFormVisible: false,
      dialogRelease: false,
      demandData: [],
      demand: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.contractDemandFactory.index().then(res => {
      // let res = DemandFactory.index().call().then(res => {
        console.log(res.toString())
        for (let i = 0; i < res.toString(); i++) {
          this.contractDemandFactory.demands(i).then(res => {
            console.log(res)
            let demand = {
              id: res[0],
              username: res[1],
              sender: res[2],
              content: res[3],
              contact: res[4],
              status: res[5],
            }
            this.demandData.push(demand)
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
    }
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

.el-button {
  margin-top: 20px;
}
</style>