<template>
  <div>
    <bottom-item v-for="(item, index) in dataList"
                 :key="index"
                 :pre="item.pre"
                 :text="item.text"/>
  </div>
</template>

<script>
import BottomItem from "./BottomItem";

export default {
  name: "BottomLeft",
  components: {BottomItem},
  props: {
    dataList: {
      type: Array
    },
  }
}
</script>

<style scoped>

</style>