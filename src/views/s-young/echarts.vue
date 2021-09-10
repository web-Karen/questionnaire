// 3.van-tab+echarts组合，切换tab时，更新echarts，至少不白屏
/**
  Vue.$nextTick
 */
<template>
  <div class="echart">
    <van-tabs ref="tab" v-model="active" @change="drawLine">
      <van-tab title="Santiago">
        <div v-if="active === 0" ref="lineChart" class="item" />
      </van-tab>
      <van-tab title="Davin">
        <div v-if="active === 1" ref="pieChart" class="item" />
      </van-tab>
    </van-tabs>

  </div>
</template>
<script>
import { lineOption, pieOption } from './data'
export default {
  data() {
    return {
      lineOption,
      pieOption,
      active: 0
    }
  },
  mounted() {
    this.getLine()
  },
  methods: {
    getLine() {
      this.$nextTick(() => {
        const lineChart = this.$echarts.init(this.$refs.lineChart)
        lineChart.setOption(this.lineOption)
      })
    },
    getPie() {
      this.$nextTick(() => {
        const pieChart = this.$echarts.init(this.$refs.pieChart)
        pieChart.setOption(this.pieOption)
      })
    },
    drawLine(e) {
      e === 0 && this.getLine()
      e === 1 && this.getPie()
    }
  }
}
</script>
<style scoped lang="scss">
.echart{
  padding: 0 1.25rem;
  .item{
    width: 100%;
    height: 50vh;
    margin-top: 5vh;
  }
}
</style>
