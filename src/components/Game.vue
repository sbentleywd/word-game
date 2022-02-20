<template>
  <v-container class="d-flex flex-column align-center justify-center" style="height: 100vh">
    <h1 class="flex-grow-0 ma-4">Word game</h1>
    <div class="flex-grow-1 d-flex flex-column align-center justify-center">
      <Answers />
      <Inputs v-if="!success && !failure"/>
      <EndMessage v-if="success || failure" :success="success"/>
    </div>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Answers from './Answers.vue'
import Inputs from './Inputs.vue'
import EndMessage from './EndMessage.vue'

export default Vue.extend({
  name: 'Game',
  components: {
    Answers,
    Inputs,
    EndMessage
  },
  computed: {
    success (): boolean {
      return this.$store.state.success
    },
    failure (): boolean {
      return this.$store.state.failure
    }
  },
  mounted () {
    this.$store.dispatch('getAnswer')
  }
})
</script>
