<template>
  <div class="d-flex flex-column align-center">
    <div class="inputs ma-3 d-flex justify-center" style="width: 100%">
      <v-text-field v-for="index in 5" :key="index" v-model="letters[index - 1]" @keyup="tab(index)" ref="input" solo outlined maxLength="1" class="mx-2 letterInput flex-grow-0"/>
    </div>
    <v-btn width="50%" class="ma-3" @click="submit">Submit</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Inputs',
  data: (): { letters: string[] } => ({
    letters: ['', '', '', '', '']
  }),
  computed: {
    currentGuess: {
      get () {
        return this.$store.state.currentGuess
      },
      set (value) {
        this.$store.commit('setState', { property: 'currentGuess', value })
      }
    },
    formValid () {
      return this.letters.reduce((val: boolean, letter: string) => letter.length === 1, false)
    }
  },
  methods: {
    submit () {
      if (this.formValid) this.$store.commit('addGuess', { guess: this.letters })
      this.letters = ['', '', '', '', '']
    },
    tab (index: number) {
      (this.$refs.input as HTMLElement[])[index].focus()
    }
  }
})
</script>

<style lang="scss" scoped>
.letterInput {
  height: 50px;
  width: 50px;
  display: inline;
}
</style>
