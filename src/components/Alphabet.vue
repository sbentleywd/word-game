<template>
  <div class="alphabet d-flex flex-wrap mt-5 justify-space-around" style="width: 100%">
    <v-sheet
      v-for="(letter, letterIndex) in letters"
      :key="letterIndex"
      outlined
      height="50"
      width="50"
      :color="wrongLetters.includes(letter) ? 'grey' : ''"
      class="mx-2 mb-2 d-flex justify-center align-center"
      @click="letterClick(letter)"
    >{{letter}}</v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Alphabet',
  data: (): { letters: any } => ({
    letters: [...Array(26).keys()].map(num => String.fromCharCode(65 + num))
  }),
  computed: {
    wrongLetters () {
      return this.$store.state.wrongLetters
    }
  },
  methods: {
    letterClick (value: string): void {
      this.$store.commit('setState', { property: 'clickedLetter', value })
      this.$store.commit('incrementClick')
    }
  }
})
</script>
