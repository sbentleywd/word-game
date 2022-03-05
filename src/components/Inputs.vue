<template>
  <div class="d-flex flex-column align-center">
    <div class="inputs ma-3 d-flex justify-center" style="width: 100%">
      <v-text-field v-for="(letter, index) in letters" :key="index" v-model="letters[index]" @change="setValue($event, index)" @keyup="tab($event, index)" @focus="activeInput = index" ref="input" solo outlined maxLength="1" class="mx-2 letterInput flex-grow-0"/>
    </div>
    <v-btn width="50%" class="ma-3" @click="submit">Submit</v-btn>
    <v-snackbar v-model="errorMessage" timeout="2000" rounded="pill" color="blue" content-class="text-center">Not in word list</v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Inputs',
  data: (): { letters: string[], activeInput: number } => ({
    letters: ['', '', '', '', ''],
    activeInput: 0
  }),
  computed: {
    formValid () {
      return this.letters.reduce((val: boolean, letter: string) => letter.length === 1, false)
    },
    errorMessage: {
      get (): boolean {
        return this.$store.state.wordError
      },
      set (value) {
        this.$store.commit('setState', { property: 'wordError', value })
      }
    },
    clickedLetter (): string {
      return this.$store.state.clickedLetter
    },
    clickedKey (): number {
      return this.$store.state.clickKey
    }
  },
  watch: {
    clickedKey (key: number) {
      if (key === 0) return
      this.letters[this.activeInput] = this.clickedLetter as string
      this.$forceUpdate()
      if (this.activeInput < 4) {
        this.activeInput++
        (this.$refs.input as HTMLInputElement[])[this.activeInput].focus()
      }
    }
  },
  methods: {
    submit (): void {
      if (!this.formValid) return
      const upperCase = this.letters.map(letter => letter.toUpperCase())
      this.$store.dispatch('checkGuess', { guess: upperCase })
      this.$store.commit('setState', { property: 'clickKey', value: 0 })
      this.letters = ['', '', '', '', ''] as any
      (this.$refs.input as HTMLElement[])[0].focus()
    },
    tab (val: KeyboardEvent, index: number) {
      if (val && index !== 4 && val.code !== 'Backspace') (this.$refs.input as HTMLElement[])[index + 1].focus()
    },
    setValue (value: string, index: number): void {
      this.letters[index] = value.toUpperCase()
      this.$forceUpdate()
    }
  }
})
</script>

<style lang="scss" scoped>
.letterInput {
  height: 50px;
  width: 50px;
  display: inline;
  text-transform: lowercase;
}
</style>
