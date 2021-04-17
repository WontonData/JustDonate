<template>
  <div>
    <el-form :model="form" :rules="rules" label-suffix=":" ref="demForm">
      <el-form-item label="捐赠机构" :label-width="formLabelWidth" prop="helper">
        <el-input v-model="form.helper" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="捐赠地址" :label-width="formLabelWidth" prop="address">
        <el-input v-model="form.address" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="快递单号" :label-width="formLabelWidth" prop="express">
        <el-input v-model="form.express" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="上传凭证" :label-width="formLabelWidth" prop="image">
        <el-button size="small" type="primary" class="upload">{{ status }}
          <input type="file"
                 accept="image/gif,image/jpeg,image/jpg,image/png"
                 @change="saveToIpfs">
        </el-button>
        <br/>
        <el-image v-show="hashCode"
                  class="hash-link"
                  style="width: 70%; height: 60px"
                  fit="cover"
                  :src="'https://ipfs.io/ipfs/'+hashCode"
                  :preview-src-list="['https://ipfs.io/ipfs/'+hashCode]"
                  :z-index="9999">
        </el-image>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="success" @click="sureDemand('demForm')">确定</el-button>
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
        helper: [
          {required: true, message: '请输入捐赠机构', trigger: 'blur'},
          {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '请输入需求物资', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '请选择捐赠地址', trigger: 'blur'}
        ],
        express: [
          {required: true, message: '请输入快递单号', trigger: 'blur'}
        ],
      },
      hashCode: '',
      status: "连接 IPFS 中...",
    }
  },
  mounted: function () {
    this.getIpfsNodeInfo();
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
    },
    async getIpfsNodeInfo() {
      try {
        const ipfs = await this.$ipfs;
        const {agentVersion, id} = await ipfs.id();
        this.status = "已经连接到 IPFS，点击上传";
      } catch (err) {
        // Set error status text.
        this.status = `报错: ${err}`;
      }
    },
    // 上传文件到ipfs的方法
    async saveToIpfs(event) {
      let file = event.target.files[0]
      const ipfs = await this.$ipfs;
      try {
        const added = await ipfs.add(file, {
          progress: (prog) => console.log(`received: ${prog}`),
        });
        // 获取上传文件hash值
        //文件哈希值为：QmURij53hkzpaVvLwfr8EFLKS69xnE7augU4GcP3pYYKmc
        this.hashCode = added.cid.toString();
        this.form.img = added.cid.toString();
      } catch (err) {
        console.error(err);
      }
    },
  }
}
</script>

<style scoped>

</style>