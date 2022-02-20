<template>
  <div>
    <span>{{ this.$props.success ? 'Well done' : `Bad luck the answer was ${answer}` }}</span>
    <v-btn icon @click="refresh">
      <v-icon>mdi-reload</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SuccessMessage',
  props: ['success'],
  computed: {
    answer (): string {
      return this.$store.state.answer
    }
  },
  methods: {
    refresh () {
      this.$store.dispatch('refresh')
    }
  }
})
</script>
