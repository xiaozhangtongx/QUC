import Vue from 'vue'
import Vuex from 'vuex'
// 引入用户模块小仓库
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
  },
})
