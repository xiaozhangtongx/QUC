// 用户模块仓库
const state = {
  selectId: 'Home',
}

const mutations = {
  CHANGEID(state, selectId) {
    state.selectId = selectId
  },
}

const actions = {
  // activeId的更改
  changeActiveId({ commit }, selectId) {
    commit('CHANGEID', selectId)
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
