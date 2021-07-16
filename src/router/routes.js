import Index from '@/views/index/index.vue'
const route = [
  {
    path: '/',
    redirect: { name: 'index' }
  },
  {
    path: '/index',
    name: 'index',
    component: Index
    // component: import('@/views/index/index')
  }

]
export default route
