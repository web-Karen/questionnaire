<template>
  <div class="list">
    <van-tabs ref="tab" v-model="active" sticky @change="tabChange">
      <van-tab title="Davin">
        <virtual-list
          style="height: 100vh; overflow-y: auto;"
          :data-key="'id'"
          :data-sources="list"
          :data-component="itemComponent"
        />
      </van-tab>
      <van-tab ref="pList" title="Santiago" @scroll="handleScroll">
        <van-list
          ref="list"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :offset="offset"
          :error.sync="error"
          error-text="点击获取更多"
          @load="onLoad"
        >
          <!-- :immediate-check="false" -->
          <van-cell v-for="item in loadList" ref="item" :key="item.id" :title="item.name" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import VirtualList from 'vue-virtual-scroll-list'
import Item from './components/Item.vue'
export default {
  components: { 'virtual-list': VirtualList },
  data() {
    return {
      list: [],
      loadList: [],
      loading: false,
      finished: false,
      page: 0,
      active: 0,

      itemComponent: Item,

      offset: 10,
      windowHeight: document.documentElement.clientHeight,
      error: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleScroll() {
      console.log(111111)
    },
    tabChange(e) {

    },
    async getList() {
      const res = await this.mockApi(10000)
      this.list = res
    },
    mockApi(maxNum, page) {
      return new Promise((resolve, reject) => {
        const list = []
        try {
          setTimeout(() => {
            for (let i = 0; i < maxNum; i++) {
              list.push({
                id: `${i}_${page}`,
                name: page ? `page-${page}name${i + 1}` : `name${i + 1}`,
                address: `address${i + 1}`,
                tel: `tel${i + 1}`
              })
            }
            resolve(list)
          }, 300)
        } catch {
          reject()
        }
      })
    },
    async getLoadList(init) {
      console.log(this.page)
      if (!this.finished) {
        this.page++
      }
      // 异步更新数据
      const res = await this.mockApi(15, this.page)
      this.loadList.push(...res)

      // 加载状态结束
      this.loading = false

      // 数据全部加载完成
      if (this.page >= 4) {
        this.finished = true
      }
    },
    onLoad() {
      this.getLoadList()
    }
  }
}
</script>
<style scoped>
.list{
  background-color: #f8f8f8;
}
</style>
