const route = [
  {
    path: '/',
    redirect: { name: 'list' }
  },
  // 考题
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index')
  },
  // 考试列表
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/index/list')
  },
  // 通知公告
  {
    path: '/notice',
    name: 'notice',
    component: () => import('@/views/notice/index')
  }

]
export default route
