<template>
  <div>
    <div>
      <h5>{{ active+1 }}.{{ data[active].title }}</h5>
      <van-radio-group v-model="radio">
        <van-radio
          v-for="(m,n) in data[active].option"
          :key="n"
          :name="n"
        >
          {{ m.name }}
        </van-radio>
      </van-radio-group>
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
      radio: ''
    }
  },
  methods: {

  }
}
</script>
