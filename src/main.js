import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import '@/assets/styles/index.scss'

import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'
import vant from 'vant'
Vue.use(vant) // 导入vant

// const echarts = require('echarts')
import * as echarts from 'echarts' // 5+版本的引用方式
Vue.prototype.$echarts = echarts

import env from '@/env'

// 基础路径
Vue.prototype.$baseUrl = process.env.VUE_APP_PUBLIC_PATH || '/'
// 当前环境
Vue.prototype.$nodeEnv = process.env.NODE_ENV
// 当前环境变量
Vue.prototype.$env = env

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
