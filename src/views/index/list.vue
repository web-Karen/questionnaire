<template>
  <div class="list">
    <van-nav-bar
      title="考试列表"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <van-row v-for="(item,index) in list" :key="index" class="item" type="flex" justify="space-between">
      <van-col span="18">
        <h4>{{ item.name }} {{ `(${item.score}分)` }}</h4>
        <p>考试时间：{{ item.start }} ~ {{ item.end }}</p>
        <p>考试时长：{{ item.time }}</p>
      </van-col>
      <van-col span="5">
        <span :class="item.statusCode == '1' ? 'ing' : 'end'">{{ item.status }}</span>
      </van-col>
      <van-col span="24">
        <div
          v-if="item.statusCode == '1'"
          class="enter"
          @click="enterTest()"
        >进入考试<van-icon name="arrow" />
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        name: '韩语',
        score: '100',
        start: '2021-07-19 15:00:00',
        end: '2021-07-19 17:00:00',
        status: '正在考试...',
        statusCode: '1',
        time: '100分钟'
      }, {
        name: '高数',
        score: '100',
        start: '2021-07-19 15:00:00',
        end: '2021-07-19 17:00:00',
        status: '考试结束',
        statusCode: '0'
      }, {
        name: '高数',
        score: '100',
        start: '2021-07-19 15:00:00',
        end: '2021-07-19 17:00:00',
        status: '考试结束',
        statusCode: '0'
      }, {
        name: '韩语',
        score: '100',
        start: '2021-07-19 15:00:00',
        end: '2021-07-19 17:00:00',
        status: '正在考试...',
        statusCode: '1'
      }, {
        name: '韩语',
        score: '100',
        start: '2021-07-19 15:00:00',
        end: '2021-07-19 17:00:00',
        status: '正在考试...',
        statusCode: '1'
      }]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    enterTest() {
      this.$router.push('index')
    }
  }
}
</script>
<style lang="scss" scoped>
.list{
    margin-top: 4.125rem;
    padding: 0 1.25rem;
    .item{
        background-color: #F8F8F8;
        margin-bottom: .9375rem;
        border-radius: 5px;
        padding: .9375rem 1.25rem;
        h4{
            margin: 0;
            line-height: 1.375rem;
            margin-bottom: .5rem;
        }
        p{
            color: #757DA3;
            font-size: .75rem;
            margin: 0;
            margin-top: .125rem;
            line-height: 1.0625rem;
        }
        .enter{
            color: #757DA3;
            display: flex;
            font-size: .875rem;
            justify-content: space-between;
            padding-top: .9375rem;
            margin-top: .625rem;
            position: relative;
            &::after{
                position: absolute;
                width: calc(100% + 2.5rem);
                left: -1.25rem;
                top: 0;
                content: '';
                height: 1px;
                background-color: #EBEBEB;
            }
        }
        span{
            font-size: .75rem;
            &.ing{
                color: #F86969;
            }
            &.end{
                color: #7469F8;
            }
        }
    }
}
</style>
