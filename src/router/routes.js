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
    meta: { icon: 'el-icon-s-home', title: '首页' },
    component: () => import('@/views/Home'),
  },
  // 资讯模块路由
  {
    path: '/policy',
    name: 'Policy',
    meta: { icon: 'el-icon-s-home', title: '资讯' },
    component: () => import('@/views/Policy'),
  },
  // 活动模块路由
  {
    path: '/activity',
    name: 'Activity',
    meta: { icon: 'el-icon-s-home', title: '活动' },
    component: () => import('@/views/Activity'),
  },
  // 视频模块路由
  {
    path: '/video',
    name: 'Video',
    meta: { icon: 'el-icon-s-home', title: '视频' },
    component: () => import('@/views/Videos'),
  },
  // 数据可视化模块路由
  {
    path: '/echart',
    name: 'Echart',
    meta: { icon: 'el-icon-s-home', title: '可视化' },
    component: () => import('@/views/Echarts'),
    children: [
      {
        path: '/echart/country',
        name: 'Country',
        meta: { icon: 'el-icon-s-home', title: '全国数据可视乎' },
        component: () => import('@/views/Echarts/Country'),
      },
      {
        path: '/echart/province',
        name: 'Province',
        meta: { icon: 'el-icon-s-home', title: '各省数据可视乎' },
        component: () => import('@/views/Echarts/Province'),
      },
    ],
  },
  // 个人中心模块路由
  {
    path: '/my',
    name: 'My',
    meta: { icon: 'el-icon-s-home', title: '个人中心' },
    component: () => import('@/views/My'),
  },
  // 401
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/Error/401'),
  },
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/views/Error/404'),
  },
]

export default routes
