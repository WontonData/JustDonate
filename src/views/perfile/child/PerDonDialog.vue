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
      <el-form-item label="上传凭证" :label-width="formLabelWidth" prop="img">
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
      },
      hashCode: '',
      status: "连接 IPFS 中...",
    }
  },
  mounted: function () {
    this.getIpfsNodeInfo();
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
        this.form.img0 = added.cid.toString();
      } catch (err) {
        console.error(err);
      }
    },
  }
}
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>
<style>
.upload {
  position: relative;
  display: inline-block;
  background: #D0EEFF;
  border: 1px solid #99D3F5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #1E88C7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}

.upload input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}

.upload:hover {
  background: #AADFFD;
  border-color: #78C3F3;
  color: #004974;
  text-decoration: none;
}
</style>