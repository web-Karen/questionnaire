const sYoungRoute = [
  {
    path: '/sYoung/index',
    name: 'sYoungIndex',
    component: () => import('@/views/s-young/index')
  },
  {
    path: '/sYoung/echarts',
    name: 'sYoungEcharts',
    component: () => import('@/views/s-young/echarts')
  },
  {
    path: '/sYoung/list',
    name: 'sYoungList',
    component: () => import('@/views/s-young/list')
  }

]
export default sYoungRoute
