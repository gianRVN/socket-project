import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      kata: '',
      point: ''
    }
  },
  mutations: {
    setInit (state, payload) {
      state.data.kata = payload.kata
      state.data.point = payload.point
    }
  },
  actions: {
    SOCKET_init (context, payload) {
      context.commit('setInit', payload)
    },
    SOCKET_nextQuestion (context, payload) {
      context.commit('setInit', payload)
    }
  }
})
