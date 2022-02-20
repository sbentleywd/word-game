<template>
  <div class="d-flex flex-column align-center">
    <div class="inputs ma-3 d-flex justify-center" style="width: 100%">
      <v-text-field v-for="index in 5" :key="index" v-model="letters[index - 1]" @keyup="tab($event, index)" ref="input" solo outlined maxLength="1" class="mx-2 letterInput flex-grow-0"/>
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
    formValid () {
      return this.letters.reduce((val: boolean, letter: string) => letter.length === 1, false)
    }
  },
  methods: {
    submit () {
      if (this.formValid) this.$store.dispatch('checkGuess', { guess: this.letters })
      this.letters = ['', '', '', '', '']
    },
    tab (val: string, index: number) {
      if (val) (this.$refs.input as HTMLElement[])[index].focus()
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
