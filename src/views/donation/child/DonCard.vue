<template>
  <div>
    <el-col :span="8" v-for="(item, index) in cardData" :key="index" >
      <div class="corner" :class="[item.status==1?'delivery':'transport']">
        <el-card :body-style="{ padding: '0 0 10px 0', background: '#f2f5ff'}" >
          <div class="mask" >
            <p @click="DonDetail(item)">03-21 18:40<br/>已在区块链存证</p>
<!--            <el-image :src="'https://ipfs.io/ipfs/'+item.img0"-->
            <el-image :src=src[index%6]
                      fit="cover"
                      style="height: 200px"
                      class="image">
            </el-image>
          </div>
          <card-text :item="item"/>
        </el-card>
      </div>


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

import CardText from "@/views/donation/child/CardText";

export default {
  name: "DonCard",
  components: {CardText},
  data() {
    return {
      src: [img1, img2, img3, img4, img5, img6],
      currentDate: new Date()
    };
  },
  props: {
    cardData: {
      type: Array,
    }
  },
  computed: {

  },
  methods: {
    DonDetail(item) {
      this.$emit("DonDetail", item)
    }
  }
}
</script>

<style scoped>

.transport::before {
  content: "运输中";
}
.delivery::before {
  content: "已完成";
}
.corner {
  position: relative;
}

.corner::before {
  /*content: "";*/
  position: absolute;
  top: 0.5rem;
  left: -0.5rem;
  /*z-index: 1;*/
  padding-right: 0.625rem;
  /*font-weight: bold;*/
  line-height: 0px;
  font-size: 14px;
  color: #ececec;
  height: 0px;
  border: 1rem solid #829dff;
  border-right-color: transparent;
  box-shadow: 0px 0.3125rem 0.3125rem -0.3125rem #000;
  z-index: 99;
}

.corner::after {
  content: "";
  position: absolute;
  top: 2.5rem;
  left: -0.5rem;
  border: 0.35rem solid #49578b;
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.el-card {
  margin: 0.75rem 0 0.75rem;
}

.el-card:hover {
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.el-card:hover .el-image, .el-card:hover .mask p {
  /*height: 200px;*/
  opacity: 1;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.el-image {
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.mask {
  position: relative;
}

.mask p {
  position: absolute;
  background-color: rgba(22, 22, 22, 0.2);
  color: #f0f2ff;
  width: 100%;
  height: 120px;
  text-align: center;
  font-size: 18px;
  margin: 0;
  padding-top: 80px;
  line-height: 30px;
  z-index: 9;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0;
}
</style>