// 1.如何一次性渲染10000条以上的数据，渲染不卡
// 2.elementui，数据量小于1屏，会触发两次onload
<template>
  <div class="address">
    <van-address-list
      v-model="chosenAddressId"
      :list="data"
      disabled-text=""
      default-tag-text="默认"
    />
  </div>
</template>
<script>
import { data } from './data'
export default {
  data() {
    return {
      data,
      chosenAddressId: '1'
    }
  }
}
</script>
<style scoped>
.address{
  background-color: #f8f8f8;
  min-height: 100vh;
}
</style>

