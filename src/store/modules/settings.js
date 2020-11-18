const state = {
  settings: [
    {
      name: 'numQuestions',
      value: 0,
      type: 'number',
      label: 'Change number of questions'
    },
    {
      name: 'questionTimer',
      value: 15,
      type: 'number',
      label: 'Change timer for each question'
    }
  ]
}

const mutations = {
  updateSettings (state, payload) {
    payload.forEach(el => {
      const tmp = state.settings.find(setting => setting.name === el.name)
      tmp.value = el.value
    })
  },
  setQuestionTimer (state, payload) {
    state.settings.questionTimer = payload
  }
}

const getters = {
  settings: state => {
    return state.settings
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
