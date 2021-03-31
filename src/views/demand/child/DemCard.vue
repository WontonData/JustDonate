<template>
  <div>
    <el-col :span="8" v-for="(item, index) in cardData" :key="index">
      <el-card :body-style="{ padding: '0 0 10px 0' }" :class="[{'voted' :item.status<1}]"  @click.native="DemDetail(item)">
        <card-text :item="item" :key="index"/>
        <el-tag class="vote" v-if="item.status<1" type="danger">投票中</el-tag>
        <el-tag class="vote" v-else type="success">已通过</el-tag>
<!--        <div class="vote" v-show="item.status<1">投票中</div>-->
        <el-row >
          <el-col :span="4" :offset="18" v-show="btnShow">
            <el-button type="success" size="medium" round plain @click="">查看</el-button>
          </el-col>
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
  name: "DemCard",
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
    },
    btnShow: {
      type: Boolean,
      default: true
    },
    voted: {
      type: Boolean,
      default: false
    },

  },
  methods: {
    DemDetail(item) {
      console.log(item)
      this.$emit("DemDetail", item)
    }
  }
}
</script>

<style scoped>
.el-card {
  margin: 0.75rem 0 0.75rem;
  background: #f3fff4;
  position: relative;
}
.voted {
  /*padding: 0 0 10px 0;*/
  /*margin: 0.75rem 0 0.75rem;*/
  /*position: relative;*/
  background: #fff3f6 !important;
}

/*.time {*/
/*  text-align: center;*/
/*  font-weight: 500;*/
/*  !*font-size: 17px;*!*/
/*  margin: 0 auto;*/
/*}*/

/*span {*/
/*  !*float: left;*!*/
/*  line-height: 30px;*/
/*  font-size: 20px;*/
/*  font-weight: 600;*/
/*}*/

.vote {
  position: absolute;
  right: 2rem;
  top: 1.5rem;
}
</style>