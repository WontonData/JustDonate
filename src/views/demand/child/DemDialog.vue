<template>
  <div>
    <el-form :model="form" label-suffix=":">
      <el-form-item label="需求机构" :label-width="formLabelWidth" prop="name">
        <span>{{ form.username }}</span>
      </el-form-item>
      <el-form-item label="需求物资" :label-width="formLabelWidth" prop="supplies">
        <span>{{ form.content }}</span>
      </el-form-item>
      <el-form-item label="联系人地址" :label-width="formLabelWidth" prop="contact">
        <span>{{ form.sender }}</span>
      </el-form-item>
      <el-form-item v-show="unVote" label="联系方式" :label-width="formLabelWidth" prop="phone">
        <span>{{ form.contact }}</span>
      </el-form-item>
      <el-form-item label="需求原因" :label-width="formLabelWidth" prop="address">
        <span>{{ form.reason }}</span>
      </el-form-item>
<!--      <el-form-item label="详细地址" :label-width="formLabelWidth" prop="addressDetaile">-->
<!--        <span>{{ form.addressDetaile }}</span>-->
<!--      </el-form-item>-->
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button v-if="perDem" type="primary" @click="sureDialog">确定</el-button>
      <el-button v-else type="danger" @click="sureDialog">捐助</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemDialog",
  data() {
    return {
      formLabelWidth: "120px"
    }
  },
  props: {
    form: {
      type: Object,
    },
    perDem: {
      type: Boolean,
      default: false
    },
    unVote: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    sureDialog() {
      this.$emit("sureDialog")
    }
  }
}
</script>

<style >
.dialog-footer {
  text-align: right;
}
</style>