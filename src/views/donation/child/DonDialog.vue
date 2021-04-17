<template>
  <div>
    <el-form :model="form" label-suffix=":">
      <el-form-item label="捐助人" :label-width="formLabelWidth" >
        <span>{{ form.helper }}</span>
      </el-form-item>
      <el-form-item label="捐助人地址" :label-width="formLabelWidth">
        <span>{{ form.sender }}</span>
      </el-form-item>
      <el-form-item label="需求机构" :label-width="formLabelWidth">
        <span>{{ form.username }}</span>
      </el-form-item>
      <el-form-item label="捐赠物资" :label-width="formLabelWidth">
        <span>{{ form.content }}</span>
      </el-form-item>
      <el-form-item label="捐助地址" :label-width="formLabelWidth" >
        <span>{{ form.location0 }}</span>
      </el-form-item>
      <el-form-item label="运输单号" :label-width="formLabelWidth">
        <span>{{ form.express }}</span>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonDialog",
  data() {
    return {
      formLabelWidth: "120px"
    }
  },
  props: {
    form: {
      type: Object,
      default: {
        name: "河北雄安新区联爱社会服务中心(非营利机构)",
        supplies: "KN95口罩1000",
        contact: '贺东虎',
        phone: '15294457513',
        address: '浙江省杭州市临安区',
        addressDetaile: '青山湖街道'
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit("sureDialog")
      this.form = {}
    },
  }
}
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>