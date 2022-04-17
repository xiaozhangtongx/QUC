// 存放路由
const routes = [
  // 路由重定向，默认打开Home页
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/test',
    component: () => import('@/components/Loading'),
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
  // 详细功能节面
  {
    path: '/detail',
    component: () => import('@/views/DetailPage'),
  },
  // 401
  {
    path: '/401',
    component: () => import('@/views/Error/401'),
  },
  // 403
  {
    path: '/403',
    component: () => import('@/views/Error/403'),
  },
  // 404
  {
    path: '*',
    component: () => import('@/views/Error/404'),
  },
]

export default routes
