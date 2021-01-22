import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    word: '',
    users: [],
    point: 0,
    startGame: false
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.users = payload.users
      state.startGame = payload.startGame
      state.word = payload.word
    },
    SOCKET_serverUser (state, payload) {
      state.users.push(payload)
    },
    SOCKET_setPlayGame (state, payload) {
      state.startGame = payload.startGame
      state.word = payload.word
    },
    SOCKET_updatePoint (state, payload) {
      state.users = payload.users
      state.word = payload.word
    },
    SOCKET_GameOver (state, payload) {
      state.word = ''
      state.users = []
      state.points = 0
      state.startGame = false
      // router.push('/')
    }
  },
  actions: {
  }
})
