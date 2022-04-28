// 导航栏模块仓库
const state = {
  selectId: window.localStorage.getItem('selectId'),
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
    window.localStorage.setItem('selectId', selectId)
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
