// 对api进行统一的管理
import request from '@/utils/request'

// 获取博文接口
export const getBlog = (url, data) => request.post(url, data)
