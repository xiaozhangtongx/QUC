// 导入路由模块
import router from '@/router'
// axios 二次封装
import axios from 'axios'
// 引入进度条
import NProgress from 'nprogress'
// 引入进度条的样式
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/token'
import { Message } from 'element-ui'

// 定义常见的错误信息
const TOKEN_ERROR = 'Token认证失败,请重新登录'
const NETWORK_ERROR = '网络异常，请检查网络后重试'

const service = axios.create({
  // baseURL: '/api',
  withCredentials: true,
  timeout: 8000,
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // TODO
    const headers = config.headers
    if (!headers.Authorization) {
      headers.Authorization = 'Bearer ' + getToken('token')
    }
    // 进度条开始
    NProgress.start()
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截
service.interceptors.response.use((response) => {
  const { status, data, message } = response.data
  if (status === 200) {
    // Message.success(message)
    // 进度条结束
    NProgress.done()
    return response.data
  } else if (status === 400) {
    // 验证码输出错误
    Message.error(message)
    return Promise.reject(message)
  } else if (status === 401) {
    Message.error(TOKEN_ERROR)
    setTimeout(() => {
      router.push({ path: '/login' })
    }, 1000)
    return Promise.reject(TOKEN_ERROR)
  } else {
    Message.error(message || NETWORK_ERROR)
    return Promise.reject(message || NETWORK_ERROR)
  }
})

export default service
