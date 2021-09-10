import sYoungRoute from './syoung'
const route = [
  {
    path: '/',
    redirect: { name: 'sYoungList' }
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
  },
  ...sYoungRoute
]
export default route
