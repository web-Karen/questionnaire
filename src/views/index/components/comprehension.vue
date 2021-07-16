<template>
  <div>
    <h4>{{ data[active].title }}</h4>
    <div v-for="(item,index) in data[active].subject" :key="index">
      <h5>
        {{ index + 1 }}.{{ item.title }}
        <span v-if="!item.multiple">[单选题]</span>
        <span v-if="item.multiple">[多选题]</span>
      </h5>
      <van-radio-group v-if="!item.multiple" v-model="item.radio">
        <van-radio
          v-for="(m,n) in item.option"
          :key="n"
          :name="n"
        >
          {{ m.name }}
        </van-radio>
      </van-radio-group>
      <van-checkbox-group v-if="item.multiple" v-model="item.result">
        <van-checkbox
          v-for="(m,n) in item.option"
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

    }
  }
}
</script>
