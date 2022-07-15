import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      appTheme: 'light'
    }
  },

  getters: {
    getAppTheme: state => {
      return state.appTheme
    }
  },

  mutations: {
    setAppTheme(state, theme) {
      state.appTheme = theme
    }
  },

  actions: {
    changeAppTheme({ commit }, theme) {
      commit('setAppTheme', theme)
    }
  },

  modules: {

  }
})