<template>
  <div>
    <div>
      <h5>{{ active+1 }}.{{ data[active].title }}</h5>
      <!-- 单选 -->
      <van-radio-group v-if="!multiple" v-model="radio">
        <van-radio
          v-for="(m,n) in data[active].option"
          :key="n"
          :name="n"
        >
          {{ m.name }}
        </van-radio>
      </van-radio-group>
      <!-- 多选 -->
      <van-checkbox-group v-if="multiple" v-model="result">
        <van-checkbox
          v-for="(m,n) in data[active].option"
          :key="n"
          shape="square"
          :name="n"
        >{{ m.name }}</van-checkbox>
      </van-checkbox-group>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
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
      radio: '',
      activeIndex: 0,
      result: []
    }
  },
  methods: {
  }
}
</script>
