<template>
  <div class="question">
    <div class="question__text">
      <h2>{{ question.text }}</h2>
    </div>
    <div class="question__alternatives">
      <button
        v-for="(alternative, i) in question.alternatives"
        :key="i"
        class="btn question__alternatives--alternative alternative__text"
        @click="$emit('answer', alternative.answer)">
        <p>{{ alternative.text }}</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
</style>
