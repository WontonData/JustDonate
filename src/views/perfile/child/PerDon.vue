<template>
  <div class="box-don">
    <el-row>
      <el-col :span="4">
        <h2>捐赠列表</h2>
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
import {mapState} from "vuex";
import DonCard from "@/views/donation/child/DonCard";
import DonDialog from "@/views/donation/child/DonDialog";

export default {
  name: "PerDon",
  components: {DonDialog, DonCard},
  computed: {
    ...mapState(["contractDemandFactory", "contractDonateFactory", "account"])
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
      hash: ['0x3757a1fbe8be8b3a20a32caa3e5bc0fd419c1104536240861edd10af6097c4e5',
        '0x054bc7fb7e875e6574c5eaf298c7946652614c2888d1c17972901dffab1e578c']
    }
  },
  methods: {
    init() {
      this.contractDonateFactory.index().then(res => {
        console.log(res)
        for (let i = 0; i < res[0]; i++) {
          this.contractDonateFactory.donates(i).then(res => {
            console.log(res)
            let donate = {
              id: res[0],
              id2: res[1],
              username: res[2],
              sender: res[3],
              content: res[4],
              image: res[5],
              address: res[6],
              courier: res[7],
              status: res[8],
              hash: this.hash[i]
            }
            this.contractDemandFactory.demands(res[1]).then(res => {
              donate.demandName = res[1];
              this.donationData.push(donate)

            })
            console.log(donate)
          })
        }
      })
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
  width: 96%;
  margin: 0 auto;
}

h2 {
  color: #1e2947;
}

</style>