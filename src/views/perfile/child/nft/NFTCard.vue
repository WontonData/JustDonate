<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="(item, index) in data" :key="index">
        <el-card class="card">
          <img :src=item.src class="image">
          <div style="padding: 14px;">
            <span>nft {{item.number}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
<!--              <el-button type="text" class="button">操作按钮</el-button>-->
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
    name: "NFTCard",
    data() {
      return {
        currentDate: new Date(),
        img: medal
      };
    },
    props: {
      data: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
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