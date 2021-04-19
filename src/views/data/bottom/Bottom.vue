<template>
  <div class="box-bottom">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="5">
        <span class="title">最新动态</span>
        <bottom-left :dataList="dynamic"/>
      </el-col>
      <el-col :span="5">
        <span class="title">联系我们</span>
        <bottom-left :dataList="contact"/>
      </el-col>
      <el-col :span="5" class="right">
        <span class="title">关注我们</span>
        <bottom-right />
      </el-col>
    </el-row>
<!--    <div class="banquan">备案号&nbsp;&nbsp;&nbsp;2020杭州鼎研科技有限公司&nbsp;&nbsp;版权所有</div>-->
  </div>
</template>

<script>
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";

export default {
  name: "Bottom",
  components: {BottomRight, BottomLeft},
  data() {
    return {
      dynamic: [
        {pre: '04-16-2021', text: "慈善捐赠溯源平台V1.0上线"},
        // {pre: '12-05-2019', text: "工业互联网平台V1.2上线"},
      ],
      contact: [
        {pre: '技术支持：', text: "Conflux"},
        {pre: '团队邮箱：', text: "@.cn"},
        {pre: '团队地址：', text: "浙江省杭州市临安区"},
      ]
    }

  }
}
</script>

<style scoped>
.box-bottom {
  height: 190px;
  /*background: #0F1326;*/
  background: #333a50;
  letter-spacing: 1px;
}

.title {
  font-size: 16px;
  font-weight: 500;
  line-height: 60px;
  color: #FFFFFF;
}
.right {
  text-align: center;
}
.banquan {
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: #E6E6E6;
  text-align: center;
}
</style>