<template>
  <h3>Answers</h3>
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
