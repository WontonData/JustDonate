<template>
  <div class="box-data">
    <data-one />
    <data-tow :card-data="cardData"/>
    <data-three />
    <data-four/>
    <bottom />
<!--    <el-affix position="bottom" :offset="20">-->
<!--      <el-button type="primary">距离底部 20px</el-button>-->
<!--    </el-affix>-->
  </div>
</template>

<script>
import DataCard from "@/views/data/child/DataCard";
import {mapState} from "vuex";
import donate from "@/assets/img/data/donate.svg";
import demand from "@/assets/img/data/demand.svg";
import DataOne from "@/views/data/child/DataOne";
import DataTow from "@/views/data/child/DataTow";
import Bottom from "@/views/data/bottom/Bottom";
import DataThree from "@/views/data/child/DataThree";
import DataFour from "@/views/data/child/DataFour";

export default {
  name: "Data",
  components: {DataFour, DataThree, Bottom, DataTow, DataOne, DataCard},
  computed: {
    ...mapState(["contractCharityFactory", "account"])
  },
  data() {
    return {
      cardData: [
        {
          style: 'blue',
          src: donate,
          title: '爱心捐赠数',
          num: 0,
          change: 0,
          fuhao: '+'
        },
        {
          style: 'pink',
          src: demand,
          title: '捐赠需求数',
          num: 0,
          change: 0,
          fuhao: '-'
        },
      ]
    };
  },
  created() {
    // const _this = this;
    setTimeout(() =>{
      this.init();
    }, 100)
  },
  methods: {
    init() {
      this.contractCharityFactory.index().then(res => {
        console.log(res)
        this.cardData[1].num = res[0]
      })
      this.contractCharityFactory.index().then(res => {
        console.log(res)
        this.cardData[0].num = res[0]
      })
    },

  }
}
</script>

<style scoped>
.box-data {
  /*width: 93%;*/
  margin: 0 auto;
}
span {
  line-height: 50px;
  color: dimgray;
}

h2 {
  color: #1e2947;
}
</style>