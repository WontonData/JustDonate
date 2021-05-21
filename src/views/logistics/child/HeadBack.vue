<template>
  <el-page-header
      @back="back"
      icon="el-icon-arrow-left"
      title="物流详情"
      :content=tracking_numbers></el-page-header>
</template>

<script>
export default {
  name: "HeadBack",
  methods: {
    back() {
      this.$router.replace('/donation');
    }
  },
  props: {
    tracking_numbers: String
  }
}
</script>

<style scoped>
.el-page-header {
  margin: 15px;
}
</style>