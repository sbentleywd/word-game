import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answer: 'steam',
    guesses: [['a', 'b', 'c', 'd', 'e']],
    correct: [],
    wrongPlace: []
  },
  mutations: {
    setState (state: any, payload: { property: string, value: any }) {
      state[payload.property] = payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
