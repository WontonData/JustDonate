<template>
  <div>
    <el-col :span="8" v-for="(item, index) in cardData" :key="index">
      <el-card :body-style="{ padding: '0 0 10px 0', background: '#fff3f6' }"  @click.native="DemDetail(item)">
        <card-text :item="item" :key="index"/>
        <el-row >
          <el-col :span="4" :offset="18" v-show="btnShow">
            <el-button type="danger" size="medium" round plain @click="">查看</el-button>
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
    }
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
}

.time {
  text-align: center;
  font-weight: 500;
  /*font-size: 17px;*/
  margin: 0 auto;
}

span {
  /*float: left;*/
  line-height: 30px;
  font-size: 20px;
  font-weight: 600;
}
</style>