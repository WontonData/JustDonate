<template>
  <div>
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <el-form-item label="需求机构" :label-width="formLabelWidth" prop="username">
        <el-input v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="需求物资" :label-width="formLabelWidth" prop="content">
        <el-input v-model="form.content" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" :label-width="formLabelWidth" prop="contact">
        <el-input v-model="form.contact" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="收货地址" :label-width="formLabelWidth" prop="address">
        <v-distpicker v-model="form.address" @selected="selected"></v-distpicker>
      </el-form-item>
      <el-form-item label="详细地址" :label-width="formLabelWidth" prop="addressDetaile">
        <el-input v-model="form.addressDetaile" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
    </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'

export default {
  name: "PerDonDialog",
  components: {VDistpicker},
  inject: ['reload'], // 引入方法
  data() {
    return {
      formLabelWidth: "120px",
      form: {},
      rules: {
        username: [
          {required: true, message: '请输入需求机构', trigger: 'blur'},
          {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '请输入需求物资', trigger: 'blur'}
        ],
        contact: [
          {required: true, message: '请输入联系方式', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '请选择收货地址', trigger: 'blur'}
        ],
        addressDetaile: [
          {required: true, message: '请输入详细地址', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    selected(item) {
      this.form.address = item.province.value + item.city.value + item.area.value
      console.log(item)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("releaseDialog", this.form)
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>