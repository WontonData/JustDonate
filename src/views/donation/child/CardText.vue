<template>
  <div>
    <div style="padding: 14px; display: flex">
      <div class="left">
        <el-tag>捐</el-tag>
        <el-tag type="danger" style="margin-top: 1rem ">收</el-tag>
      </div>
      <div class="right">
        <p>{{ item.username }}</p>
        <p style="margin-top: 1rem ">{{ item.demandName }}</p>
      </div>
    </div>
    <span class="wuzi">
      交易哈希:
      <a target="_blank"
         :href="`https://testnet.confluxscan.io/transaction/${item.hash}`">
        {{ hsahSub }}
      </a>
    </span><br/>
    <span class="wuzi">捐赠物资: {{ item.content }}</span>
  </div>
</template>

<script>
export default {
  name: "CardText",
  computed: {
    hsahSub() {
      return this.item.hash.substr(0, 15) + "···" +
          this.item.hash.substr(this.item.hash.length - 10, this.item.hash.length)
    }
  },
  props: {
    item: {
      type: Object,
    }
  },
  methods: {
    clickHash() {

    }
  }
}
</script>

<style scoped>
.left {
  flex: 2;
  /*margin: 0 auto;*/
}

.el-tag {
  margin: 0 10px;
  font-size: 14px;
  font-weight: 600;
}

p {
  margin: 0 auto;
  line-height: 32px;
}

.right {
  flex: 10;
}

.wuzi {
  line-height: 32px;
  color: dimgray;
  padding: 24px;
  margin: 20px 0;
  /*margin-bottom: 15px;*/
}
</style>