<template>
  <div class="card-text">
    <div style="display: flex">
      <div class="left">
        <el-tag type="danger">需</el-tag>
      </div>
      <div class="right">
        <p class="title">{{ item.username }}</p>
      </div>
    </div>
    <p class="wuzi"><b>需求物资:</b>
      {{ item.content }}
    </p>
    <p class="wuzi"><b>发起人地址:</b>
      {{ senderSub }}
    </p>
    <p class="wuzi"><b>需求地址:</b>
      {{ item.location0 }}
    </p>
<!--    <p class="wuzi"><b>联系方式:</b>-->
<!--      {{ item.contact }}-->
<!--    </p>-->
  </div>
</template>

<script>
export default {
  name: "CardText",
  computed: {
    senderSub() {
      console.log(this.item.sender)
      return this.item.sender.substr(0,11) + "···" +
          this.item.sender.substr(this.item.sender.length - 8,this.item.sender.length)
    },
    reasonSub() {
      // return this.item.sender.substr(0,25) + "···"
      return "原因" + "···"
    }
  },
  props: {
    item: {
      type: Object,
    }
  },
}
</script>

<style scoped>
.left {
  flex: 2;
}

.el-tag {
  margin: 0 10px;
  font-size: 14px;
  font-weight: 600;
}

/*p {*/
/*  margin: 10px auto;*/

/*}*/
.title {
  margin: 0 auto;
  line-height: 32px;
  font-size: 20px;
  font-weight: 600;
}


.right {
  flex: 10;
  float: left;
}

.wuzi {
  line-height: 25px;
  color: dimgray;
  padding: 0 0.5rem 0 0.5rem;
}

span {
  padding: 0 0.5rem 0.5rem 0.5rem;
  color: dimgray;
}

.card-text {
  padding: 14px;
}
</style>