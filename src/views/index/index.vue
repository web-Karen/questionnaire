<template>
  <div class="main">
    <van-nav-bar
      right-text="交卷"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #title>
        <div class="title" @click="titleTap()">
          {{ type.text }}<van-icon name="arrow-down" color="#7d7e80" size="12" />
        </div>
      </template>
      <template #right>
        <van-icon name="clock" color="#7469F8" />
        <van-count-down :time="time" />
      </template>
    </van-nav-bar>
    <div class="name-num">
      <p>数学（100分）</p>
      <div><span>{{ curIndex + 1 }}</span>/{{ curTotal }}</div>
    </div>
    <div class="content">
      <!-- 单选题 -->
      <single-opt v-if="type.value === 0" :multiple="false" :data="singleList" :active="curIndex" />
      <!-- 判断题 -->
      <true-or-false v-if="type.value === 1" :data="tfList" :active="curIndex" />
      <!-- 填空题 -->
      <fill-in v-if="type.value === 2" :data="fillList" :active="curIndex" />
      <!-- 问答题 -->
      <q-and-a v-if="type.value === 3" :data="qaList" :active="curIndex" />
      <!-- 多选题 -->
      <single-opt v-if="type.value === 4" :multiple="true" :data="singleList" :active="curIndex" />
    </div>

    <!-- 题型 -->
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-picker
        title="题型"
        show-toolbar
        :columns="option"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>

    <van-tabbar v-model="active" active-color="#7d7e80">
      <van-tabbar-item icon="arrow-left" @click="alterNum('last')">上一题</van-tabbar-item>
      <van-tabbar-item icon="share" @click="onClickRight">交卷</van-tabbar-item>
      <van-tabbar-item icon="arrow" @click="alterNum('next')">下一题</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import singleOpt from './components/singleOpt'
import TrueOrFalse from './components/trueOrFalse.vue'
import fillIn from './components/fillIn.vue'
import qAndA from './components/qAndA.vue'
export default {
  components: {
    singleOpt,
    TrueOrFalse,
    fillIn,
    qAndA
  },
  data() {
    return {
      type: {
        text: '单选题',
        value: 0
      },
      curIndex: 0,
      curTotal: 0,
      active: 0,
      show: false,
      option: [
        { text: '单选题', value: 0 },
        { text: '判断题', value: 1 },
        { text: '填空题', value: 2 },
        { text: '问答题', value: 3 },
        { text: '多选题', value: 4 }
      ],
      time: 30 * 60 * 60 * 1000,
      singleList: [{
        title: '下列数据中，不能作为直角三角形的边长的是',
        option: [{
          name: '6,8,10'
        }, {
          name: '7,24,35'
        }, {
          name: '2,5,7'
        }]
      }, {
        title: '下列命题是假命题的是',
        option: [{
          name: '两条直角边对应相等的两个直角三角形全等'
        }, {
          name: '每个命题都有逆命题'
        }, {
          name: '每个定理都有逆命题'
        }]
      }, {
        title: '12+34x4÷3 = ？',
        option: [{
          name: '12'
        }, {
          name: '58'
        }, {
          name: '37'
        }]
      }],
      tfList: [{
        title: '1 + 1 = 2 ?',
        option: [{
          name: '是'
        }, {
          name: '否'
        }]
      }],
      fillList: [{
        title: '函数定理',
        question: '一个函数就是从&nbsp;到&nbsp;的对应关系，满足前者中的一个数只对应后者中的一个数'
      }],
      qaList: [{
        title: '请举例一个假命题'
      }]
    }
  },
  created() {
    this.calcActive()
  },
  methods: {
    calcActive() {
      if (this.type.value === 0 || this.type.value === 4) {
        this.curTotal = this.singleList.length
      }
      if (this.type.value === 1) {
        this.curTotal = this.tfList.length
      }
      if (this.type.value === 2) {
        this.curTotal = this.fillList.length
      }
      if (this.type.value === 3) {
        this.curTotal = this.qaList.length
      }
      // ...
    },
    aletrType(type) {
      if (type === 'next') {
        if (this.type.value < 4) {
          this.curIndex = 0
          this.type.value++
          this.type.text = this.option.find(e => {
            return e.value === this.type.value
          }).text
          this.calcActive()
        } else {
          this.$toast('没有更多')
        }
      }
      if (type === 'last') {
        if (this.type.value > 0) {
          this.type.value--
          this.type.text = this.option.find(e => {
            return e.value === this.type.value
          }).text
          this.calcActive()
          this.curIndex = this.curTotal - 1
        } else {
          this.$toast('没有更多')
        }
      }
    },
    alterNum(type) {
      if (type === 'next') {
        if (this.curIndex < this.curTotal - 1) {
          this.curIndex++
        } else {
          // 进入下一题型
          this.aletrType(type)
        }
      }
      if (type === 'last') {
        if (this.curIndex > 0) {
          this.curIndex--
        } else {
          this.aletrType(type)
        }
      }
      console.log(type)
    },
    titleTap() {
      this.curIndex = 0
      this.show = true
    },
    dropdownChange() {

    },
    onConfirm(e) {
      this.type = e
      this.show = false
      this.calcActive()
      console.log(e)
    },
    onCancel() {

    },
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$dialog.confirm({
        title: '提示',
        message: '确认交卷？',
        confirmButtonColor: '#409EFF'
      }).then((res) => {
        this.$toast('提交试卷')
      })
    }
  }
}
</script>
<style lang="scss">
.main{
  .title{
    display: flex;
    align-items: center;
    i{
      margin-left: .1875rem;
    }
  }
  i.van-icon-clock{
    margin-right: .1875rem;
  }
  .name-num{
    margin: 0 .625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .0625rem dashed rgb(235, 234, 234);
    span{
      font-size: 1.875rem;
      color: #7469F8;
    }
  }
  .content{
    padding: 0 .625rem;
  }
}
</style>
