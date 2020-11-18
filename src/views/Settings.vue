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
