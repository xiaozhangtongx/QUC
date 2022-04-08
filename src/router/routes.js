// 存放路由
const routes = [
  // 路由重定向，默认打开Home页
  {
    path: '',
    redirect: '/home-page',
  },
  // HomePage页面
  {
    path: '/home-page',
    component: () => import('@/views/HomePage'),
  },
  // 可视化
  {
    path: '/echart',
    name: 'Echart',
    meta: { icon: 'el-icon-s-data', title: '可视化' },
    component: () => import('@/views/Echarts'),
  },
  // 401
  {
    path: '/401',
    component: () => import('@/views/Error/401'),
  },
  // 404
  {
    path: '*',
    component: () => import('@/views/Error/404'),
  },
]

export default routes
