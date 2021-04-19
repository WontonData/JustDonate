<template>
  <div class="box-data">
    <data-one />
    <data-tow :card-data="cardData"/>
    <data-three />
    <bottom />
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

export default {
  name: "Data",
  components: {DataThree, Bottom, DataTow, DataOne, DataCard},
  computed: {
    ...mapState(["contractDonateFactory", "contractDemandFactory", "account"])
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
    this.init()
  },
  methods: {
    init() {
      this.contractDemandFactory.index().then(res => {
        console.log(res)
        this.cardData[1].num = res[0]
      })
      this.contractDonateFactory.index().then(res => {
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