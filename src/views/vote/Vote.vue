<template>
  <div class="box-dem">
    <el-row>
      <el-col :span="2">
        <h2>投票表决</h2>
      </el-col>
      <el-col :span="4" :offset="1">
        <p style="margin-top: 25px"><i class="el-icon-coin"/> 您拥有的投票权：12</p>
      </el-col>
      <el-col :span="4" :offset="13">
        <el-input placeholder="搜索需求方名称" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-row :gutter="50" >
      <vote-card :cardData="demandData.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
                 @voteAgree="voteAgree" @voteAgainst="voteAgainst" @voteDetail="voteDetail"/>
    </el-row>

    <el-dialog title="需求详情" :visible.sync="dialogFormVisible">
      <dem-dialog @sureDialog="sureDialog" :form="vote" :unVote="false" :perDem="true"/>
      <!--      <vote-dialog @approve="approve" @against="against" @agree="agree" :form="vote" :is-agree="isAgree" />-->
    </el-dialog>

    <el-dialog title="投票详情" :visible.sync="dialogVote">
      <vote-dialog
          @approve="approve"
          @against="against"
          @agree="agree"
          :form="vote"
          :is-agree="isAgree"
          :agrees="agrees"
          :againsts="againsts"
      />
    </el-dialog>

  </div>
</template>

<script>
import {conflux} from '@/network/conflux'
import {mapState} from "vuex";
import DemCard from "@/views/demand/child/DemCard";
import VoteCard from "@/views/vote/child/VoteCard";
import VoteDialog from "@/views/vote/child/VoteDialog";
import DemDialog from "@/views/demand/child/DemDialog";

export default {
  name: "Vote",
  components: {DemDialog, VoteDialog, VoteCard, DemCard},
  computed: {
    ...mapState(["currentUser", "contractVote", "contractDemandFactory", "account"])
  },
  data() {
    return {
      search: '',
      dialogFormVisible: false,
      dialogVote: false,
      demandData: [],
      vote: {},
      isAgree: true,
      agrees: [],
      againsts: [],
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.contractDemandFactory.index().then(res => {
        for (let i = 0; i < res[0]; i++) {
          this.contractDemandFactory.demands(i).then(res => {
            // console.log(res[0])
            if (res[5] == 0) {
              let demand = {
                id: res[0],
                username: res[1],
                sender: res[2],
                content: res[3],
                contact: res[4],
                status: res[5],
                approve: 0,
                against: 0,
              }
              this.contractVote.getVotesCount(res[0]).then(res => {
                console.log(res)
                res[0][0] >= 0? demand.approve = res[0][0]:demand.approve = 0
                res[1][0] >= 0? demand.against = res[1][0]:demand.against = 0

              }).catch(err => {
                console.log(err)
              })
              this.demandData.push(demand)
            }
          })
        }
      })
    },

    getAllVoters() {
      console.log(this.vote.id)
      this.contractVote.getAllVoters(this.vote.id).then(res => {
        console.log(res)
        this.agrees = res[0];
        this.againsts = res[1];
      })
    },

    sureDialog() {
      this.dialogFormVisible = false
    },

    voteDetail(item) {
      this.dialogFormVisible = true
      this.vote = item
      console.log(item)
    },

    voteAgree(item) {
      this.dialogVote = true
      this.isAgree = true
      this.vote = item
      this.getAllVoters()
      console.log(item)
    },

    voteAgainst(item) {
      this.dialogVote = true
      this.isAgree = false
      this.vote = item
      this.getAllVoters()
      console.log(item)
    },

    approve(item) {
      // this.contractVote.agree(item.id[0]).
      // sendTransaction({
      //   from: this.account
      // }).then(res => {
      //   console.log(res)
      //   this.dialogFormVisible = false
      //   this.$message({
      //     message: '支持成功！',
      //     type: 'success'
      //   });
      // }).catch(err => {
      //   console.log(err)
      //   this.$message({
      //     message: '支持失败！',
      //     type: 'danger'
      //   });
      // })
    },

    agree(item) {
      this.contractVote.agree(item.id[0]).
      sendTransaction({
        from: this.account
      }).then(res => {
        console.log(res)
        this.dialogFormVisible = false
        this.$message({
          message: '支持成功！',
          type: 'success'
        });
      }).catch(err => {
        console.log(err)
        this.$message({
          message: '支持失败！',
          type: 'danger'
        });
      })

    },

    against(item) {
      this.contractVote.against(item.id[0]).
      sendTransaction({
        from: this.account
      }).then(res => {
        console.log(res)
        this.dialogFormVisible = false
        this.$message({
          message: '反对成功！',
          type: 'success'
        });
      }).catch(err => {
        console.log(err)
        this.$message({
          message: '反对失败！',
          type: 'danger'
        });
      })
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

.input-with-select, span {
  margin-top: 20px;
}
</style>