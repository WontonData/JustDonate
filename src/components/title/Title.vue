<template>
  <div class="title" :style="{'color': color}" >
    <span class="arrow">◀</span>
    <span class="main-title" :style="{'color': color}" >{{title}}</span>
    <span class="arrow">▶</span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type:String,
      default: '平台介绍'
    },
    color: {
      type:String,
      default: '#0F1326'
    }
  }
}
</script>

<style scoped>
.title {
  padding-top: 35px;
  margin-bottom: 20px;
  text-align: center;
}
.arrow {
  vertical-align: middle;
}
.main-title {
  margin: 45px;
  font-size: 30px;
  font-weight: 500;
  color: #0F1326;
  letter-spacing: 5px;

  text-align: -moz-center !important;
  vertical-align: middle;
}
</style>