// 对api进行统一的管理
import request from '@/utils/request'

// 用户登录接口
export const login = (url, data) => request.post(url, data)

// 用户注册接口
export const register = (url, data) => request.post(url, data)

// 用户退出登录接口
export const logout = (url) => request.get(url)

// 获取笑话接口
export const getJoke = (url, params) => request.get(url, params)
