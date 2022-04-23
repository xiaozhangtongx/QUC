// 导入用户相关的API
import { login, register, logout } from '@/api/user'
// 导入处理Token的函数
import { setToken, removeToken, getToken } from '@/utils/token'
// 用户模块仓库
const state = {
  token: getToken(),
  userInfo: {},
  user: {},
}
const mutations = {
  USERLOGIN(state, token) {
    state.token = token
  },
  // 清楚本地数据
  CLEAR(state) {
    state.token = ''
    state.user = {}
    removeToken()
  },
}

const actions = {
  // 用户注册
  async userRegister({ commit }, userInfo) {
    let res = await register('/register', userInfo)
    if (res.status === 200) {
      return 'success'
    } else {
      return Promise.reject(new Error('error'))
    }
  },

  // 用户登录
  async userLogin({ commit }, user) {
    let res = await login('/api/login', user)
    if (res.status === 200) {
      // 将token保存到Vuex中
      commit('USERLOGIN', res.data.token)
      // 将token保存到本地
      setToken(res.data.token)
      return 'success'
    } else {
      return Promise.reject(new Error('error'))
    }
  },

  // 用户退出
  async userLogout({ commit }) {
    let res = await logout('/logout')
    if (res.status === 200) {
      commit('CLEAR')
      return 'success'
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
