<template>
  <div class="box-dem">
    <el-row>
      <el-col :span="4">
        <h2>实施需求发布</h2>
      </el-col>
      <el-col :span="4" :offset="16">
        <el-input placeholder="搜索需求方名称" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-row :gutter="50" >
      <dem-card :cardData="demandData.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
                @DemDetail="DemDetail"/>
    </el-row>

    <el-dialog title="物资需求详情" :visible.sync="dialogFormVisible">
      <el-dialog
          width="30%"
          title="捐助者信息"
          :visible.sync="innerVisible"
          append-to-body>
        <inner-dialog @sureDemand="sureDemand" />
      </el-dialog>
      <dem-dialog @sureDialog="sureDialog" :form="demand"/>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from "vuex";
import DemCard from "@/views/demand/child/DemCard";
import DemDialog from "@/views/demand/child/DemDialog";
import InnerDialog from "@/views/demand/child/InnerDialog";

export default {
  name: "Demand",
  components: {InnerDialog, DemDialog, DemCard},
  computed: {
    ...mapState(["contractDonateFactory", "contractDemandFactory", "account"])
  },
  inject: ["reload"],
  data() {
    return {
      search: '',
      formLabelWidth:'120px',
      dialogFormVisible: false,
      demandData: [],
      demand :{},
      innerVisible: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.contractDemandFactory.index().then(res => {
        for (let i = 0; i < res[0]; i++) {
          this.contractDemandFactory.demands(i).then(res => {
            if (res[5] == 1) {
              let demand = {
                id: res[0],
                username: res[1],
                sender: res[2],
                content: res[3],
                contact: res[4],
                status: res[5],
              }
              this.demandData.push(demand)
            }
          })
        }
      })
    },
    DemDetail(item) {
      this.dialogFormVisible = true
      this.demand = item
      console.log(item)
    },
    sureDialog() {
      this.innerVisible = true
      // this.dialogFormVisible = false

      // this.$message({
      //   message: '捐助成功！',
      //   type: 'success'
      // });

      // this.reload();
    },
    sureDemand(item) {

      this.contractDonateFactory.createDonate(
          this.demand.id,
          item.username,
          item.content,
          item.image,
          item.address,
          item.courier,
      ).
      sendTransaction({
        from: this.account
      }).then(res => {
        console.log(res)
        this.innerVisible = false
        this.dialogFormVisible = false
        this.$message({
          message: '捐助成功！',
          type: 'success'
        });
      }).catch(err => {
        console.log(err)
        this.$message({
          message: '捐助失败！',
          type: 'danger'
        });
      })
      // this.reload();
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

.input-with-select {
  margin-top: 20px;
}
</style>