// 导入用户相关的API
import { getBlog, getPolicy } from '@/api/blog'
// 博客模块仓库
const state = {
  blog: '',
}

const mutations = {}

const actions = {
  async getBlog({ commit }, queryInfo) {
    let res = await getBlog('/api/getBlog', queryInfo)
    console.log(res)
    if (res.status === 200) {
      return res.data
    } else {
      return Promise.reject(new Error('error'))
    }
  },

  async getPolicy({ commit }) {
    let res = await getPolicy('/api/getPolicy')
    console.log(res)
    if (res.status === 200) {
      return res.data
    } else {
      return Promise.reject(new Error('error'))
    }
  },
}
const getters = {}

// 对外暴露模块
export default {
  state,
  mutations,
  actions,
  getters,
}
