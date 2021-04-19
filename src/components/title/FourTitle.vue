<template>
  <div class="title">
    <span class="main-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "FourTitle",
  props: {
    title: {
      type: String,
      default: '平台介绍'
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  padding-top: 65px;
  padding-bottom: 45px;
}

span {
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  color: #FFFFFF;
  letter-spacing: 4px;
}

</style>