<template>
  <div class="title">
    <span class="main-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "ThreeTitle",
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
}

span {
  width: 100%;
  font-size: 30px;
  font-weight: 500;
  color: #7F95D1;
  letter-spacing: 4px;
}

span:after {
  content: "";
  display: block;
  position: relative;
  width: 2%;
  right: -49%;
  top: 10px;
  height: 6px;
  border-bottom: solid 5px #7F95D1;
}
</style>