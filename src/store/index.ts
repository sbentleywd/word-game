import Vue from 'vue'
import Vuex from 'vuex'
import wordList from '@/assets/wordList.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answer: 'steam',
    guesses: [],
    correct: [],
    wrongPlace: [],
    wordList: wordList.words
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
    getAnswer (context: any) {
      const allWords = context.state.wordList
      const randIndex = Math.floor(Math.random() * allWords.length)
      context.commit('setState', { property: 'answer', value: allWords[randIndex] })
    }
  },
  modules: {
  }
})
