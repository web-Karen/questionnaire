<template>
  <div class="notice">
    <van-nav-bar
      title="通知公告"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <div v-for="(item,index) in list" :key="index" class="item">
      <div class="text">
        <h4>{{ item.title }}</h4>
        <span>{{ item.content }}</span>
        <p @click="checkDetail(item)">查看详情</p>
      </div>
      <div class="time">2021-12-31 15:20:15</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        title: '通知1',
        content: `阿萨达撒多阿萨达撒大多群翁掠取多考点拉大拉沙来复苏收款方都是上课发呆看是否合适考试卡上打哈卡上打哈大卡上打哈阿莎阿卡上打哈阿卡上打哈`
      }, {
        title: '通知2',
        content: '内容内容内容内容内容内容内容内容'
      }, {
        title: '通知2',
        content: '内容内容内容内容内容内容内容内容'
      }, {
        title: '通知2',
        content: '内容内容内容内容内容内容内容内容'
      }, {
        title: '通知2',
        content: '内容内容内容内容内容内容内容内容'
      }, {
        title: '通知2',
        content: '内容内容内容内容内容内容内容内容'
      }]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    checkDetail(row) {
      this.$dialog.alert({
        title: row.title,
        message: row.content,
        messageAlign: 'left'
      }).then(() => {
        this.$toast('已读')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.notice{
    margin-top: 2.875rem;
    padding: 1.25rem;
    .item{
        color: #757DA3;
        text-align: center;
        margin-bottom: 1.25rem;
        .text{
            padding: 1.25rem 1.25rem 0;
            background-color: #F8F8F8;
            border-radius: .3125rem;
            h4{
                color: #212F6E;
                margin: 0;
                line-height: 1.375rem;
                margin-bottom: .5rem;
            }
            span{
                font-size: .875rem;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            p{
                font-size: .75rem;
                margin: 0;
                padding: .5rem 0;
                border-top: 1px solid #EBEBEB;
                margin-top: .5rem;
            }
        }
        .time{
            font-size: .75rem;
            margin-top: .5rem;
        }
    }
}
</style>
