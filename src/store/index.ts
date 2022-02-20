import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answer: 'steam',
    guesses: [],
    correct: [],
    wrongPlace: []
  },
  mutations: {
    setState (state: any, payload: { property: string, value: any }) {
      state[payload.property] = payload.value
    },
    addGuess (state: any, payload: { guess: string[] }) {
      if (state.guesses.length < 5) state.guesses.push(payload.guess)
    }
  },
  actions: {
  },
  modules: {
  }
})
