// 存放路由
const routes_main = [
  // 路由重定向，默认打开Home页

  {
    path: '/home',
    // redirect: '/home',
    component: () => import('@/layout'),
    children: [
      // 系统首页路由
      {
        path: '/home',
        name: 'Home',
        meta: { icon: 'el-icon-s-home', title: '首页' },
        component: () => import('@/views/Home'),
      },
      // QU碳小课堂模块
      {
        path: '/class',
        name: 'Class',
        redirect: '/knowledge',
        meta: { icon: 'el-icon-tickets', title: 'QU碳小课堂' },
        component: () => import('@/views/Class'),
        children: [
          // 知识子路由
          {
            path: '/knowledge',
            name: 'Knowledge',
            meta: { icon: 'el-icon-video-camera', title: 'QU知识' },
            component: () => import('@/views/Class/Knowledge'),
          },
          // 视频模块子路由
          {
            path: '/video',
            name: 'Video',
            meta: { icon: 'el-icon-video-camera', title: 'QU视频' },
            component: () => import('@/views/Class/Videos'),
          },
        ],
      },
      // QU碳一点通
      {
        path: '/information',
        name: 'Information',
        redirect: '/news',
        meta: { icon: 'el-icon-s-flag', title: 'QU碳一点通' },
        component: () => import('@/views/Information'),
        children: [
          // 新闻资讯子路由
          {
            path: '/news',
            name: 'Information',
            meta: { icon: 'el-icon-s-flag', title: '资讯' },
            component: () => import('@/views/Information/News'),
          },
          // 活动模块子路由
          {
            path: '/activity',
            name: 'Activity',
            meta: { icon: 'el-icon-s-flag', title: '活动' },
            component: () => import('@/views/Information/Activity'),
          },
        ],
      },
      // QU碳办公室
      {
        path: '/office',
        name: 'Office',
        meta: { icon: 'el-icon-s-management', title: '低碳办公室' },
        component: () => import('@/views/Office'),
        children: [],
      },
      // QU碳在行动
      {
        path: '/action',
        name: 'Action',
        redirect: '/blog',
        meta: { icon: 'el-icon-user-solid', title: '低碳在行动' },
        component: () => import('@/views/Action'),
        children: [
          {
            path: '/blog',
            name: 'Blog',
            meta: { icon: 'el-icon-s-flag', title: 'QU动态' },
            component: () => import('@/views/Action/Blog'),
          },
          {
            path: '/actions',
            name: 'Actions',
            meta: { icon: 'el-icon-s-flag', title: 'QU行动' },
            component: () => import('@/views/Action/Actions'),
          },
        ],
      },
    ],
  },
]

export default routes_main
