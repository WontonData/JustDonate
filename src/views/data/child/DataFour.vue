<template>
  <div class="bg">
    <!--标题-->
    <Title :title="title"></Title>
    <!--排行榜-->
    <div class="rank">
      <el-row class="tac">
        <!--侧边导航栏-->
        <el-col :span="2">
          <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="rgba(127, 149, 209, 0.54)"
                  text-color="#fff"
                  active-text-color="#fff">
<!--            <el-menu-item v-for="item in menuData" :key="item.name" :index="item.routerPath">-->
<!--              <template>-->
<!--                <i :class=item.icon></i>-->
<!--                <span slot="title">{{ item.name }}</span>-->
<!--              </template>-->
<!--            </el-menu-item>-->
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <span slot="title">总榜</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-star-on"></i>
              <span slot="title">明星</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">品牌</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">学校</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">机构</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-s-home"></i>
              <span slot="title">城市</span>
            </el-menu-item>
            <el-menu-item index="7">
              <span slot="title"> </span>
            </el-menu-item>
            <el-menu-item index="7">
              <span slot="title"> </span>
            </el-menu-item>
            <el-menu-item index="7">
              <span slot="title"> </span>
            </el-menu-item>
            <el-menu-item index="7">
              <span slot="title"> </span>
            </el-menu-item>
            <el-menu-item index="7">
              <span slot="title"> </span>
            </el-menu-item>
            <el-menu-item index="7">
              <span slot="title"> </span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <!--content-->
        <el-col :span="10" class="changeRight" style="padding-left: 20px">
          <!--搜索框-->
          <el-row style="display: flex;justify-content: center;align-items: center;margin-bottom: 15px">
            <el-col :span="3" style="padding-left: 2px"><h3>Rank</h3></el-col>
            <el-col :span="19">
              <div style="margin: 0px;">
                <el-input placeholder="搜索" v-model="input3" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </el-col>
            <el-col :span="2"></el-col>
          </el-row>
          <!--总榜-->
          <el-row v-for="(nftOwner,index) in filterNftOwners" :key="index" style="display: flex;justify-content: center;align-items: center;margin-bottom: 20px;margin-left: 2px">
            <el-col :span="3" v-if="index===0||index===1||index===2"><img :src=rankImg[index]></el-col>
            <el-col :span="3" v-if="index!==0&&index!==1&&index!==2" style="padding-left: 17px">
              <h4>{{index+1}}</h4>
            </el-col>

            <el-col :span="4"><img :src=img class="image"></el-col>
            <el-col :span="12">
              <el-row><el-col style="font-weight: bold;margin-bottom: 6px">{{nftOwner.address.substring(0,15)}}...</el-col></el-row>
              <el-row><el-col style="color: #464646;font-size: 13px">爱心值{{nftOwner.medal*255}}</el-col></el-row>
            </el-col>
            <el-col :span="1">{{nftOwner.medal}}</el-col>
            <el-col :span="2"><img :src=img1 class="img1"></el-col>
            <el-col :span="2"> <span class="el-icon-arrow-right" style="color: rgba(53,53,53,0.41)"></span></el-col>
          </el-row>

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Title from "@/components/title/Title";
  import logo from '@/assets/img/data/logo.png';
  import love from '@/assets/img/data/love.png';
  import rank1 from '@/assets/img/data/rank1.png';
  import rank2 from '@/assets/img/data/rank2.png';
  import rank3 from '@/assets/img/data/rank3.png';
  import {mapState} from "vuex";

  export default {
    name: "DataFour",
    components: {Title},
    computed: {
      ...mapState(["contractCharityMedal", "account"]),
      filterNftOwners(){
        //取出相关数据
        // const {searchName,persons,orderType}=this
        //最终需要显示的数组
        let fPersons;
        //对persons进行过滤
        fPersons=this.nftOwners;

        //排序
        // if(orderType!==0){
        fPersons.sort(function(p1,p2){    //返回负数P1在前，返回正数P2在前
          //1代表升序，2代表降序
          // if(orderType===2){
          return p2.medal-p1.medal
          // }else{
          //   return p1.age-p2.age
          // }
          // return p2.age-p1.age
        })
        // }

        return fPersons
      }
    },
    data() {
      return {
        title: '排行榜',
        img: logo,
        img1: love,
        nftOwners: [],
        rankImg: [rank1,rank2,rank3],
        nftRankList: [],
        input3: ''
      }
    },

    mounted() {
      setTimeout(() =>{
        this.init();
      }, 100)
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

      init() {
        this.nftOwners = []
        this.contractCharityMedal.getOwners().then(res => {
          for (let i = 0; i < res.length; i++) {
            let nftOwner = {
              address :res[i]
            }
            this.contractCharityMedal.balanceOf(res[i]).then(res => {
              // nftOwner.medal = parseInt(5-i);
              nftOwner.medal = parseInt(res[0]);
              console.log(nftOwner)
              this.nftOwners.push(nftOwner);
            }).catch(err => {
              console.log(err)
            })
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .bg {
    width: 93%;
    /*height: 220px;*/
    margin: 0 auto 40px;
    background-image: url('~@/assets/img/data/BG-introduce.png');
    background-size:100% auto;
    background-color: #fff;
  }
  .rank{
    /*background-color: #5b6c95;*/
    height: 670px;
  }
  .tac{
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    /*background-color: rgba(63, 63, 63, 0.5);*/
  }
  .changeRight {
    background-color: rgba(139, 157, 213, 0.27);
    height: 100%;
  }
  .image {
    width: 50px;
    height: 50px;
    display: block;
  }
  .img1 {
    width: 23px;
    height: 21px;
    display: block;
  }
  .element.style {
    padding-left: 20px;
    color: #fff !important;
    /*background-color: rgba(0, 0, 0, 0.2) !important;*/
  }
</style>