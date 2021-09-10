<template>
  <div>
    <van-cell
      :title="source.name"
      :value="source.tel"
      :label="source.address"
      border
    />
  </div>
</template>
<script>
export default {
  props: {
    index: { // index of current item
      type: Number
    },
    source: { // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      chosenAddressId: '1'
    }
  }
}
</script>
