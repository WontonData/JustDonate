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
          <el-row style="display: flex;justify-content: center;align-items: center;margin-bottom: 20px;margin-left: 2px">
            <el-col :span="3"><img :src=first></el-col>
            <el-col :span="4"><img :src=img class="image"></el-col>
            <el-col :span="12">
              <el-row><el-col style="font-weight: bold;margin-bottom: 6px">信工1队</el-col></el-row>
              <el-row><el-col style="color: #464646;font-size: 13px">爱心值4125</el-col></el-row>
            </el-col>
            <el-col :span="1">75</el-col>
            <el-col :span="2"><img :src=img1 class="img1"></el-col>
            <el-col :span="2"> <span class="el-icon-arrow-right" style="color: rgba(53,53,53,0.41)"></span></el-col>
          </el-row>
          <el-row style="display: flex;justify-content: center;align-items: center;margin-bottom: 20px;margin-left: 2px">
            <el-col :span="3"><img :src=second style="height: 40px;width: 40px"></el-col>
            <el-col :span="4"><img :src=img class="image"></el-col>
            <el-col :span="12">
              <el-row><el-col style="font-weight: bold;margin-bottom: 6px">信工5队</el-col></el-row>
              <el-row><el-col style="color: #464646;font-size: 13px">爱心值3630</el-col></el-row>
            </el-col>
            <el-col :span="1">66</el-col>
            <el-col :span="2"><img :src=img1 class="img1"></el-col>
            <el-col :span="2"> <span class="el-icon-arrow-right" style="color: rgba(53,53,53,0.41)"></span></el-col>
          </el-row>
          <el-row style="display: flex;justify-content: center;align-items: center;margin-bottom: 20px;margin-left: 2px">
            <el-col :span="3"><img :src=third style="height: 40px;width: 40px"></el-col>
            <el-col :span="4"><img :src=img class="image"></el-col>
            <el-col :span="12">
              <el-row><el-col style="font-weight: bold;margin-bottom: 6px">信工3队</el-col></el-row>
              <el-row><el-col style="color: #464646;font-size: 13px">爱心值2915</el-col></el-row>
            </el-col>
            <el-col :span="1">53</el-col>
            <el-col :span="2"><img :src=img1 class="img1"></el-col>
            <el-col :span="2"> <span class="el-icon-arrow-right" style="color: rgba(53,53,53,0.41)"></span></el-col>
          </el-row>
          <el-row style="display: flex;justify-content: center;align-items: center;margin-bottom: 20px;margin-left: 10px">
            <el-col :span="3"><h4>4</h4></el-col>
            <el-col :span="4"><img :src=img class="image"></el-col>
            <el-col :span="12">
              <el-row><el-col style="font-weight: bold;margin-bottom: 6px">信工7队</el-col></el-row>
              <el-row><el-col style="color: #464646;font-size: 13px">爱心值2585</el-col></el-row>
            </el-col>
            <el-col :span="1">47</el-col>
            <el-col :span="2"><img :src=img1 class="img1"></el-col>
            <el-col :span="2"> <span class="el-icon-arrow-right" style="color: rgba(53,53,53,0.41)"></span></el-col>
          </el-row>
          <el-row style="display: flex;justify-content: center;align-items: center;margin-bottom: 20px;margin-left: 10px">
            <el-col :span="3"><h4>5</h4></el-col>
            <el-col :span="4"><img :src=img class="image"></el-col>
            <el-col :span="12">
              <el-row><el-col style="font-weight: bold;margin-bottom: 6px">信工2队</el-col></el-row>
              <el-row><el-col style="color: #464646;font-size: 13px">爱心值1760</el-col></el-row>
            </el-col>
            <el-col :span="1">32</el-col>
            <el-col :span="2"><img :src=img1 class="img1"></el-col>
            <el-col :span="2"> <span class="el-icon-arrow-right" style="color: rgba(53,53,53,0.41)"></span></el-col>
          </el-row>
          <el-row style="display: flex;justify-content: center;align-items: center;margin-bottom: 20px;margin-left: 10px">
            <el-col :span="3"><h4>6</h4></el-col>
            <el-col :span="4"><img :src=img class="image"></el-col>
            <el-col :span="12">
              <el-row><el-col style="font-weight: bold;margin-bottom: 6px">信工6队</el-col></el-row>
              <el-row><el-col style="color: #464646;font-size: 13px">爱心值1540</el-col></el-row>
            </el-col>
            <el-col :span="1">28</el-col>
            <el-col :span="2"><img :src=img1 class="img1"></el-col>
            <el-col :span="2"> <span class="el-icon-arrow-right" style="color: rgba(53,53,53,0.41)"></span></el-col>
          </el-row>
          <el-row style="display: flex;justify-content: center;align-items: center;margin-bottom: 20px;margin-left: 10px">
            <el-col :span="3"><h4>7</h4></el-col>
            <el-col :span="4"><img :src=img class="image"></el-col>
            <el-col :span="12">
              <el-row><el-col style="font-weight: bold;margin-bottom: 6px">信工4队</el-col></el-row>
              <el-row><el-col style="color: #464646;font-size: 13px">爱心值770</el-col></el-row>
            </el-col>
            <el-col :span="1">14</el-col>
            <el-col :span="2"><img :src=img1 class="img1"></el-col>
            <el-col :span="2"> <span class="el-icon-arrow-right" style="color: rgba(53,53,53,0.41)"></span></el-col>
          </el-row>
          <el-row style="display: flex;justify-content: center;align-items: center;margin-bottom: 20px;margin-left: 10px">
            <el-col :span="3"><h4>8</h4></el-col>
            <el-col :span="4"><img :src=img class="image"></el-col>
            <el-col :span="12">
              <el-row><el-col style="font-weight: bold;margin-bottom: 6px">信工8队</el-col></el-row>
              <el-row><el-col style="color: #464646;font-size: 13px">爱心值385</el-col></el-row>
            </el-col>
            <el-col :span="1">7</el-col>
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
  import first from '@/assets/img/data/first.png';
  import second from '@/assets/img/data/second.png';
  import third from '@/assets/img/data/third.png';

  export default {
    name: "DataFour",
    components: {Title},
    data() {
      return {
        title: '排行榜',
        img: logo,
        img1: love,
        first: first,
        second: second,
        third: third
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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