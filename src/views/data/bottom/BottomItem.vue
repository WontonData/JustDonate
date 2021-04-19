<template>
  <div class="box">
    <div class="pre">{{ pre }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "BottomItem",
  props: {
    pre: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  display: block;
  float: left;
  font-size: 12px;
  line-height: 30px;
  color: #CCCCCC;
}

.pre {
  width: 27%;
}

.text {
  color: #FFFFFF;
  width: 70%;
}
</style>