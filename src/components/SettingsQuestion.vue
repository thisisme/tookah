<template>
  <section class="settings__questions">
    <h3>Add personal questions. Minimum 2 alternatives</h3>
    <div>
      <div class="input">
        <label for="questionText">Type your question</label>
        <input type="text" name="questionText" id="questionText">
      </div>
      <div class="settings__list">
        <div
          v-for="alternative in numAlternatives"
          :key="alternative"
          class="input">
          <label
            :for="`questionAlternative-${alternative}`">
            Type your answer
          </label>
          <input
            type="text"
            :name="`questionAlternative-${alternative}`"
            :id="`questionAlternative-${alternative}`"
            :ref="`questionAlternative-${alternative}`">
        </div>
      </div>
      <div class="settings__actions">
        <button @click="addAlternative">
          Add alternative
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SettingsQuestion',
  data () {
    return {
      numAlternatives: 2
    }
  },
  methods: {
    addAlternative () {
      this.numAlternatives += 1
    },
    addQuestion () {
      console.log(this.$refs)
    }
  }
}
</script>
