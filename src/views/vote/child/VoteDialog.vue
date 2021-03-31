<template>
  <div>
    <div class="voteBox">
      <div v-show="isAgree">
        <h3>您投的是支持票</h3>
        <el-divider><b>支持者</b></el-divider>
        <p v-show="agrees !==undefined && agrees.length > 0" v-for="item in agrees" >
          {{item}}
        </p>
        <p v-show="agrees == undefined || agrees.length <= 0">
          暂无数据
        </p>
      </div>

      <h3 v-show="!isAgree">您投的是反对票</h3>
      <el-divider ><b>反对者</b></el-divider>
      <p v-show="againsts !==undefined && againsts.length > 0" v-for="item in againsts" >
        {{item}}
      </p>
      <p v-show="againsts == undefined || againsts.length <= 0">
        暂无数据
      </p>

      <div v-show="!isAgree">
        <el-divider><b>支持者</b></el-divider>
        <p v-show="agrees !==undefined && agrees.length > 0" v-for="item in agrees" >
          {{item}}
        </p>
        <p v-show="agrees == undefined || agrees.length <= 0">
          暂无数据
        </p>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button class="item" type="danger" @click="approve">授权</el-button>
      <el-button v-if="isAgree" class="item" type="success" @click="agree">确认</el-button>
      <el-button v-else type="info" @click="against">确认</el-button>
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
  /*margin-left: 1rem;*/
  text-align: center;
}
.el-divider {
  width: 90%;
  margin: 20px auto;
}
h3 {
  text-align: center;
}
</style>