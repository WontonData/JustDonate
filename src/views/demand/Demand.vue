<template>
  <div class="box-dem">
    <el-row>
      <el-col :span="4">
        <h2>实时需求发布</h2>
      </el-col>
      <el-col :span="4" :offset="16">
        <el-input placeholder="搜索需求方名称" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-row :gutter="50">
      <dem-card
          :cardData="demandData.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
          @DemDetail="DemDetail"/>
    </el-row>

    <el-dialog title="物资需求详情" :visible.sync="dialogFormVisible">
      <el-dialog
          width="30%"
          title="捐助者信息"
          :visible.sync="innerVisible"
          append-to-body>
        <inner-dialog @sureDemand="sureDemand"/>
      </el-dialog>
      <dem-dialog @sureDialog="sureDialog" :form="demand"/>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from "vuex";
import conflux from "@/network/conflux";
import DemCard from "@/views/demand/child/DemCard";
import DemDialog from "@/views/demand/child/DemDialog";
import InnerDialog from "@/views/demand/child/InnerDialog";

export default {
  name: "Demand",
  components: {InnerDialog, DemDialog, DemCard},
  computed: {
    ...mapState(["contractDonateFactory", "contractDemandFactory", "account", "contractCharityFactory"])
  },
  inject: ["reload"],
  data() {
    return {
      search: '',
      formLabelWidth: '120px',
      dialogFormVisible: false,
      demandData: [],
      demand: {},
      innerVisible: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
<<<<<<< HEAD
=======

>>>>>>> a02ec73ed95616fd92f40251a2fb3f4d4c3419c5
      for (let i = 0; i < 15; i++) {
        this.contractCharityFactory.charities(i).then(res => {
          let Charity = window.confluxJS.Contract({
            address: res,
            abi: require("network/abiCharity.json")
          });
          let demand = {
            address: res,
          }
          Charity.Info().then(res => {
            console.log(res)
            if (res[12] == 1) {
              // let demand = {
              demand.id = res[0]
              demand.sender = res[1]
              demand.username = res[3]
              demand.content = res[5]
              demand.contact = res[6]
              demand.img0 = res[7]
              demand.img1 = res[8]
              demand.location0 = res[9]
              demand.status = res[12]
              // }
              this.demandData.push(demand)
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
<<<<<<< HEAD
      console.log(item)
      let Charity = window.confluxJS.Contract({
        address: this.demand.address,
        abi: require("network/abiCharity.json")
      });
      console.log(Charity)
      Charity.Donate(
          item.helper,
          item.img,
=======
      this.contractCharityFactory.createDonate(
          this.demand.id,
          item.username,
          item.content,
          item.image,
>>>>>>> a02ec73ed95616fd92f40251a2fb3f4d4c3419c5
          item.address,
          item.express,
      ).sendTransaction({
        from: this.account
      }).then(res => {
        console.log(res)
        this.innerVisible = false
        this.dialogFormVisible = false
        this.$message({
          message: '捐助成功！',
          type: 'success'
        });
        this.demand.status = 2;
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