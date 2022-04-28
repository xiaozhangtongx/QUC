import Vue from 'vue'
import Vuex from 'vuex'
// 引入用户模块小仓库
import user from './user'
// 导航栏模块小仓库
import nav from './nav'
// 导入博文模块
import blog from './blog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    nav,
    blog,
  },
})
