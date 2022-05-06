interface State {
  test: string,
  openSidebar: boolean,
};
const state: State = {
  test: 'setting store test',
  openSidebar: true,
};
const getters = {};
const mutations = {
  SET_OPEN_SIDEBAR(state: State, data: boolean) { state.openSidebar = data; },
};
const actions = {
  setOpenSidebar({ commit }, data: boolean) {
    commit('SET_OPEN_SIDEBAR', data);
  },
};
const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default store;
