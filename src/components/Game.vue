<template>
  <v-container class="d-flex flex-column align-center justify-center" style="height: 100vh">
    <h1 class="flex-grow-0 ma-4">Word game</h1>
    <div class="flex-grow-1 d-flex flex-column align-center justify-center">
      <Answers />
      <Inputs />
    </div>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Answers from './Answers.vue'
import Inputs from './Inputs.vue'

export default Vue.extend({
  name: 'Game',
  components: {
    Answers,
    Inputs
  },
  mounted () {
    this.$store.dispatch('getAnswer')
  }
})
</script>
