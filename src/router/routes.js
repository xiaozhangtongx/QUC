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
  {
    path: '/waterfall',
    component: () => import('@/components/WaterFall'),
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
];

export default routes;
