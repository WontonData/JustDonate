<template>
  <div class="box-nft">
    <!--切换-->
    <div class="box-nft-top">
      <el-col :span="5" :offset="4">
        <el-radio-group v-model="radio1" fill="#8da1db">
          <el-radio-button label="0">发现</el-radio-button>
          <el-radio-button label="1">我的</el-radio-button>
        </el-radio-group>
      </el-col>
    </div>

    <!--nft主界面-->
    <div class="box-nft-main">
      <!--图片轮播-->
      <div class="box-nft-main-img">
        <!--NFT页面图片滚动-->
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(item, index) in list" :key="index">
            <img :src="item.img" mode=""/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--卡片-->
      <div class="box-nft-main-card">
        <div v-if="radio1==0">
            <n-f-t-card-all
            :data="nftList"
            fit="cover"
            style="height: 200px"
            class="image"/>
        </div>
        <div v-if="radio1==1">
          <n-f-t-card
            :data="nftList"
            fit="cover"
            style="height: 200px"
            class="image"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import nft1 from '@/assets/img/nft/nft_img1.jpg';
import nft2 from '@/assets/img/nft/nft_img2.jpg';
import NFTCard from "./NFTCard";
import NFTCardAll from "./NFTCardAll";
import {mapState} from "vuex";

  export default {
    name: "PerNFT",
    components: {NFTCardAll, NFTCard},
    computed: {
      ...mapState(["contractCharityMedal", "account"])
    },
    data() {
      return {
        radio1: 0,
        choose: '0',
        list: [
          {
            name: 1,
            img: nft1
          },
          {
            name: 2,
            img: nft2
          }
        ],
        nftList: []
      };
    },
    mounted() {
      setTimeout(() =>{
        this.init();
      }, 100)
    },
    methods: {
      init() {
        this.nftList = []
        this.contractCharityMedal.getItemIds(this.account).then(res => {
          for (let i = 0; i < res.length; i++) {
            let nft = {
              number :res[i][0]
            }
            this.contractCharityMedal.tokenURI(res[i][0]).then(res => {
              nft.src = res
              this.nftList.push(nft);
              console.log(nft)
            }).catch(err => {
              console.log(err)
            })
          }
        })
      }
    },

  }
</script>

<style scoped>
  /*页面布局css*/
  .box-nft-top {
    position: absolute;
    width: 100%;
    height: 40px;
    padding-top: 20px;
    /*background-color: #ffa0c8;*/
  }

  .box-nft-main {
    position: absolute;
    width: 100%;
    top: 120px;
    /*background-color: #c3e7ff;*/
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-nft-main-img {
    position: absolute;
    top: 20px;
    width: 75%;
    height: 350px;
  }

  .box-nft-main-card {
    position: absolute;
    top: 350px;
    width: 80%;
    height: auto;
    /*background-color: #d6c5ff;*/
  }

  /*top-radio点击css*/
  .el-radio-button__inner:hover {
      /*color: #7F95D1;*/
      color: #8b9dd5 !important;
  }

  .el-radio-button__orig-radio:checked .el-radio-button__inner {
      color: #FFF;
      background-color: #8b9dd5 !important;
      border-color: #8b9dd5 !important;
      -webkit-box-shadow: -1px 0 0 0 #8b9dd5 !important;
      box-shadow: -1px 0 0 0 #8b9dd5 !important;
  }

  /*img*/
  .box-nft-main-img img{
      width: 100%;
      height: 100%;
      border-radius: 30px;
      will-change: auto;
  }

  /*图片轮播css*/
  .el-carousel__item h3 {
      /*color: #475669;*/
      font-size: 18px;
      opacity: 0.75;
      line-height: 350px;
      margin: 0;
  }

  /*.el-carousel__item:nth-child(2n) {*/
  /*    background-color: #99a9bf;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n+1) {*/
  /*    background-color: #d3dce6;*/
  /*}*/
</style>