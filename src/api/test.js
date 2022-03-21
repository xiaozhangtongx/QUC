// 对api进行统一的管理
import request from '@/utils/request'

// 权限测试接口
export const test = (url) => request.get(url)
