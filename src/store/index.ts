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
    wordList: wordList.words,
    success: false,
    failure: false,
    wrongLetters: []
  },
  mutations: {
    setState (state: any, payload: { property: string, value: any }) {
      state[payload.property] = payload.value
    },
    addGuess (state: any, payload: { guess: string[] }) {
      if (state.guesses.length < 6) state.guesses.push(payload.guess)
    },
    addIncorrect (state: any, payload: { letter: string }) {
      if (!state.wrongLetters.includes(payload.letter)) state.wrongLetters.push(payload.letter)
    }
  },
  actions: {
    getAnswer (context: any) {
      const allWords = context.state.wordList
      const randIndex = Math.floor(Math.random() * allWords.length)
      context.commit('setState', { property: 'answer', value: allWords[randIndex] })
    },
    async checkGuess (context: any, payload: { guess: string[] }) {
      // add guess
      await context.commit('addGuess', { guess: payload.guess })

      // add incorrect letters to incorrect array
      payload.guess.forEach(letter => {
        if (!context.state.answer.includes(letter)) context.commit('addIncorrect', { letter })
      })

      if (payload.guess.join('') === context.state.answer) {
        // if correct set success
        context.commit('setState', { property: 'success', value: true })
      } else if (context.state.guesses.length === 6) {
        // if max guesses reached set failure
        context.commit('setState', { property: 'failure', value: true })
      }
    },
    refresh (context: any) {
      context.dispatch('getAnswer')
      context.commit('setState', { property: 'guesses', value: [] })
      context.commit('setState', { property: 'success', value: false })
      context.commit('setState', { property: 'failure', value: false })
    }
  },
  modules: {
  }
})
