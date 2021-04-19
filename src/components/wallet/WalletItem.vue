<template>
  <ul>
    <li class="item-box"
        v-for="(item, index) in walletData"
        :key="index"
        @click="connWallet(item.name)">
      <span>{{ item.name }}</span>
      <el-image
          :src=item.img>
      </el-image>
    </li>
  </ul>
</template>

<script>

export default {
  name: "WalletItem",
  props: {
    walletData: {
      type: Array
    }
  },
  methods: {
    connWallet(wallet) {
      this.$emit("connWallet", wallet)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  line-height: 50px;
  border: #7F95D1 2px solid;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
li:hover {
  border: #a4bcff 2px solid;
  background-color: #f2f8ff;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

span {
  line-height: 50px;
  /*text-align: left;*/
}

.el-image {
  width: 25px;
  float: right;
  line-height: 50px;
  z-index: 999;
}
</style>
<style>
.item-box .el-image__inner {
  vertical-align: middle;
}
</style>