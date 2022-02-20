<template>
  <div>
    <div v-for="(guess, index) in guesses" :key="index"  class="d-flex my-2">
      <v-sheet v-for="(letter, letterIndex) in guess" :key="letterIndex" outlined height="50" width="50" class="mx-2 d-flex justify-center align-center"><span>{{ letter }}</span></v-sheet>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Answers',
  computed: {
    guesses () {
      return this.$store.state.guesses
    }
  }
})
</script>
