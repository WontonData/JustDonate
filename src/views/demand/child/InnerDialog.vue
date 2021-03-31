<template>
  <div>
    <el-form :model="form" :rules="rules" label-suffix=":" ref="demForm">
      <el-form-item label="捐赠机构" :label-width="formLabelWidth" prop="username">
        <el-input v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="捐赠物资" :label-width="formLabelWidth" prop="content">
        <el-input v-model="form.content" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="图片" :label-width="formLabelWidth" prop="image">
        <el-input v-model="form.image" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="捐赠地址" :label-width="formLabelWidth" prop="address">
        <el-input v-model="form.address" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="快递单号" :label-width="formLabelWidth" prop="courier">
        <el-input v-model="form.courier" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="danger" @click="sureDemand('demForm')">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InnerDialog",
  data() {
    return {
      formLabelWidth: "95px",
      form: {},
      rules: {
        username: [
          {required: true, message: '请输入需求机构', trigger: 'blur'},
          {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '请输入需求物资', trigger: 'blur'}
        ],
        image: [
          {required: true, message: '请上传图片', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '请选择收货地址', trigger: 'blur'}
        ],
        courier: [
          {required: true, message: '请输入快递单号', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    sureDemand(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("sureDemand", this.form)
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>

</style>