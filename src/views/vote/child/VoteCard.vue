<template>
  <div>
    <el-col :span="8" v-for="(item, index) in cardData" :key="index">
      <el-card :body-style="{ padding: '0 0 10px 0', background: '#fff3f6' }">
        <card-text :item="item" :key="index" @click.native="voteDetail(item)"/>
        <el-row>
          <el-col :span="4" :offset="14">
            <el-badge  :value="item.approve" class="item" type="success">
              <el-button plain size="mini" round type="success" @click="voteAgree(item)">同意</el-button>
            </el-badge>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-badge :value="item.against" class="item" type="info">
              <el-button plain size="mini" round type="info" @click="voteAgainst(item)">反对</el-button>
            </el-badge>
          </el-col>
<!--          <el-col :span="4" :offset="6">-->
<!--            <el-button type="success" plain @click="voteDetail(item)">投票</el-button>-->
<!--          </el-col>-->
        </el-row>
      </el-card>
    </el-col>
  </div>

</template>

<script>
import img1 from '@/assets/img/donation/1.jpg'
import img2 from '@/assets/img/donation/2.jpg'
import img3 from '@/assets/img/donation/3.jpg'
import img4 from '@/assets/img/donation/4.jpg'
import img5 from '@/assets/img/donation/5.jpg'
import img6 from '@/assets/img/donation/6.jpg'

import CardText from "@/views/demand/child/CardText";
import demand from '@/assets/img/data/demand.svg'


export default {
  name: "VoteCard",
  components: {CardText},
  data() {
    return {
      src: demand,
      currentDate: new Date()
    };
  },
  props: {
    cardData: {
      type: Array,
    }
  },
  methods: {
    voteDetail(item) {
      console.log(item)
      this.$emit("voteDetail", item)
    },
    voteAgree(item) {
      console.log(item)
      this.$emit("voteAgree", item)
    },
    voteAgainst(item) {
      console.log(item)
      this.$emit("voteAgainst", item)
    }
  }
}
</script>

<style scoped>
.el-card {
  margin: 0.75rem 0 0.75rem;
}

/*span {*/
/*  line-height: 30px;*/
/*  !*font-size: 20px;*!*/
/*  font-weight: 600;*/
/*}*/
</style>