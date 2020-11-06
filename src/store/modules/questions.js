const state = {
  questions: []
}

const mutations = {
  addQuestions (state, payload) {
    state.questions = payload
  },
  addQuestion (state, payload) {
    let question = state.questions.find(q => q.id === payload.id)
    if (question) {
      question = payload
      return
    }
    state.questions.push(payload)
  }
}

const getters = {
  questions: state => {
    return state.questions
  },
  questionById: state => id => {
    return state.questions.findOne(q => q.id === id)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
