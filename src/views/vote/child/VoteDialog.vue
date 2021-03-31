<template>
  <div>
    <div class="voteBox">
      <div v-show="isAgree">
        <el-divider><b>同意票</b></el-divider>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
      </div>

      <el-divider ><b>反对票</b></el-divider>
      <p>饿了别叫妈, 叫饿了么</p>
      <p>饿了别叫妈, 叫饿了么</p>
      <p>饿了别叫妈, 叫饿了么</p>
      <p>饿了别叫妈, 叫饿了么</p>
      <p>饿了别叫妈, 叫饿了么</p>
      <p>饿了别叫妈, 叫饿了么</p>
      <p>饿了别叫妈, 叫饿了么</p>
      <p>饿了别叫妈, 叫饿了么</p>
      <p>饿了别叫妈, 叫饿了么</p>
      <p>饿了别叫妈, 叫饿了么</p>
      <div v-show="!isAgree">
        <el-divider><b>同意票</b></el-divider>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
        <p>饿了别叫妈, 叫饿了么</p>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button class="item" type="danger" @click="approve">授权</el-button>
      <el-button v-if="isAgree" class="item" type="success" @click="agree">同意</el-button>
      <el-button v-else type="info" @click="against">反对</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoteDialog",
  data() {
    return {
    }
  },
  props: {
    agrees: {
      type: Array
    },
    againsts: {
      type: Array
    },
    isAgree: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    approve() {
      this.$emit("approve", this.form)
    },
    against() {
      this.$emit("against", this.form)
    },
    agree() {
      this.$emit("agree", this.form)
    }
  }
}
</script>

<style scoped>
.dialog-footer {
  text-align: right;
  margin-top: 20px;
}

.item {
  margin-right: 20px;
}
.voteBox {
  height: 300px;
  overflow:auto;
}
.voteBox p {
  margin-left: 1rem;
}
.el-divider {
  width: 90%;
  margin:10px auto;
}
</style>