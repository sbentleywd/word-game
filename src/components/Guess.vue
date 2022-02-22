<template>
  <div>
    <v-sheet
      v-for="(letter, letterIndex) in this.$props.guess"
      :key="letterIndex"
      outlined height="50"
      width="50"
      :color="mappedGuess.find(obj => obj.index === letterIndex).rightPlace ? 'green lighten-3' : yellow[letterIndex] ? 'yellow lighten-3' : 'grey lighten-3'"
      class="mx-2 d-flex justify-center align-center"
    >
        <span>{{ letter }}</span>
      </v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Guess',
  props: ['guess'],
  computed: {
    answer (): string {
      return this.$store.state.answer
    },
    answerCount (): Record<string, number> {
      return this.countLetters(this.answer.split(''))
    },
    guessCount (): Record<string, number> {
      return this.countLetters(this.$props.guess)
    },
    mappedGuess (): [] {
      return this.$props.guess.map((letter: string, index: number) => {
        return {
          letter,
          index,
          rightPlace: this.answer[index] === letter
        }
      })
    },
    yellow (): boolean[] {
      return this.$props.guess.map((letter: string, guessIndex: number) => {
        const answerNo = this.answerCount[letter]
        const correctCount = this.mappedGuess.filter((obj: { letter: string, index: number, rightPlace: boolean }) => obj.letter === letter && obj.rightPlace).length
        const alreadyChecked = this.$props.guess.slice(0, guessIndex).filter((item: string) => item === letter).length
        if (!answerNo || correctCount === answerNo || answerNo - correctCount - alreadyChecked < 1) {
          return false
        } else {
          return true
        }
      })
    }
  },
  methods: {
    countLetters (arr: string[]): Record<string, number> {
      return arr.reduce((obj: Record<string, number>, letter: string) => {
        const count = obj[letter]
        obj[letter] = count + 1 || 1
        return obj
      }, {})
    }
  }
})
</script>
