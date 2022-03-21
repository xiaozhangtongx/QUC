// 存放路由
const routes = [
  // 路由重定向，默认打开Home页
  {
    path: '',
    redirect: '/home',
  },
  // 系统首页路由
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/Error/404/'),
  },
]

export default routes
