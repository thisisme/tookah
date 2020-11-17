<template>
  <div class="question">
    <div class="question__text">
      <h2>{{ question.text }}</h2>
    </div>
    <div class="question__alternatives">
      <button
        v-for="(alternative, i) in question.alternatives"
        :key="i"
        :ref="`alternative-${i}`"
        :disabled="optionsToRemove.includes(i)"
        class="btn question__alternatives--alternative alternative__text"
        @click="$emit('answer', alternative.answer)">
        <p>{{ alternative.text }}</p>
      </button>
    </div>
  </div>
</template>

<script>
import helpers from '@/core/helpers'

export default {
  name: 'Question',
  props: {
    question: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      optionsToRemove: []
    }
  },
  methods: {
    removeOptions () {
      this.optionsToRemove = this.getOptionsToRemove()
    },
    getOptionsToRemove () {
      const alternatives = this.question.alternatives
        .filter((alternative, i) => alternative.answer === false)
        .map((filtered, i) => i)
      const uniqueIndexes = helpers.getUniqueIndexes(Math.floor(alternatives / 2), alternatives)
      return uniqueIndexes
    }
  }
}
</script>

<style lang="scss">
</style>
