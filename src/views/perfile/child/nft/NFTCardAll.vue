<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="(item, index) in 14" :key="index">
        <el-card class="card">
          <img :src=img class="image">
          <div style="padding: 14px;">
<!--            <span>123{{String.format("%03d",index+1)}}123</span>-->
            <span class="medal">慈善勋章 (#{{index+1}})</span>
            <div class="bottom clearfix">
              <span class="time">出售价格： {{Math.floor(Math.random() * 30) + 1}}</span><br><br>
              <span class="time">出售时间： 2021年{{Math.floor(Math.random() * 12) + 1}}月{{Math.floor(Math.random() * 28) + 1}}日</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import medal from '@/assets/img/nft/medal.png'

  export default {
    name: "NFTCardAll",
    data() {
      return {
        currentDate: new Date(),
        img: medal,
        price: '',
        month: '',
        day: '',
        myIndex: ''
      };
    },
    created() {
      this.getRandomPrice(1,50);
      this.getRandomMonth(1,12);
      this.getRandomDay(1,28);
      this.getMyIndex(index);
    },
    methods: {
      getRandomPrice: function (min, max) {
        //返回min（包含）~max（包含）之间的数字
        this.price = Math.floor(Math.random() * (max - min + 1)) + min;
      },
      getRandomMonth: function (min, max) {
        //返回min（包含）~max（包含）之间的数字
        this.month = Math.floor(Math.random() * (max - min + 1)) + min;
      },
      getRandomDay: function (min, max) {
        //返回min（包含）~max（包含）之间的数字
        this.day = Math.floor(Math.random() * (max - min + 1)) + min;
      },
      getMyIndex: function (index) {
        this.myIndex = String.format("%03d",index+1);
      }
    },
    // props: {
    //   data: {
    //     type: Array
    //   }
    // }
  }
</script>

<style scoped>
  .medal {
    font-size: 20px;
    font-weight: bold;
  }
  .time {
    font-size: 14px;
    color: #747474;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 29vh;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .card {
    padding: 0 0 10px 0;
    height: 350px;
    width: 270px;
    margin: 0 10px 15px 15px;
  }
</style>