<template>
  <div class="fill-in-blank">
    <h5>{{ active + 1 }}.{{ data[active].title }}</h5>
    <div class="items">
      <div v-for="(item,index) in list" :key="index" class="item">
        <span>{{ item }}</span>
        <input v-if="index < list.length - 1" type="text">
      </div>
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
      list: []
    }
  },
  watch: {
    data: {
      handler(n) {
        this.list = this.data[this.active].question.split('&nbsp;')
        console.log(this.list)
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss">
.fill-in-blank{
  .items{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .item{
      display: flex;
      flex-wrap: wrap;
      input{
        border: none;
        border-bottom: 1px solid rgb(204, 203, 203);
        width: 3.75rem;
        text-align: center;
        padding: 0 .625rem;
        margin: 0 .3125rem;
      }
    }
  }
}
</style>
