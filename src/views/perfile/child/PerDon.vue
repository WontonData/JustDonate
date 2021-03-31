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
      <don-dialog @sureDialog="dialogFormVisible = false"/>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
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
    ...mapState(["currentUser", "contractVote", "account"])
  },
  created() {
    this.donationData = [
      {}
    ]
  },
  data() {
    return {
      donationData: '',
      dialogFormVisible: false
    }
  },
  methods: {
    DonDetail(item) {
      // this.dialogFormVisible = true
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