<template>
  <div class="settings">
    <h2>Settings</h2>
    <section class="settings__game">
      <h3>Change game settings</h3>
      <section class="settings__list">
        <div
          v-for="(setting, i) in settings"
          :key="i"
          class="input">
          <label :for="setting.name">
            {{ setting.label }}
            <template v-if="setting.name === 'numQuestions'">
              (max {{ numQuestions }})
            </template>
          </label>
          <input
            :type="setting.type"
            :name="setting.name"
            :id="setting.name"
            :ref="setting.name"
            min="0"
            :max="setting.name === 'numQuestions' ? numQuestions : undefined"
            :value="setting.value">
        </div>
      </section>
    </section>
    <section class="settings__actions">
      <button @click="save">
        Save
      </button>
    </section>
    <section class="settings__questions">
      <h3>Questions</h3>
      <div
        class="settings__questions--question"
        v-for="question in questions"
        :key="question.id">
        <div class="settings__question__container">
          <div class="settings__question__header">
            <h4>Question</h4>
            <span class="settings__question--id">#{{ question.id }}</span>
          </div>
          <p>{{ question.text }}</p>
          <h5>Alternatives</h5>
          <div class="settings__alternatives">
            <div
              class="settings__alternatives--alternative"
              :class="{ correct: alternative.answer }"
              v-for="alternative in question.alternatives"
              :key="alternative.id">
              <p>{{ alternative.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
    }
  },
  computed: {
    settings () {
      return this.$store.getters['settings/settings']
    },
    numQuestions () {
      return this.$store.getters['questions/questionsLength']
    },
    questions () {
      return this.$store.getters['questions/questions']
    }
  },
  methods: {
    save () {
      const localSettings = []
      Object.keys(this.$refs).forEach(el => {
        const element = this.$refs[el][0]
        localSettings.push({
          name: element.name,
          value: element.type === 'number' ? Number(element.value) : element.value
        })
      })
      this.$store.commit('settings/updateSettings', localSettings)
    }
  }
}
</script>
