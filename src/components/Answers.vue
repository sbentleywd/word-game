<template>
  <div>
    <Guess v-for="(guess, index) in guesses" :key="index" :guess="guess" class="d-flex my-2" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Guess from './Guess.vue'

export default Vue.extend({
  name: 'Answers',
  components: {
    Guess
  },
  computed: {
    guesses () {
      return this.$store.state.guesses
    }
  }
})
</script>
