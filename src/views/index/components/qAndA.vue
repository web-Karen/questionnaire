<template>
  <div>
    <h5>{{ active + 1 }}.{{ data[active].title }}</h5>
    <van-field
      v-model="answer"
      rows="3"
      autosize
      label=""
      border
      type="textarea"
      :maxlength="maxlength"
      placeholder="请输入"
      show-word-limit
    />
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      maxlength: 50,
      answer: ''
    }
  }
}
</script>
