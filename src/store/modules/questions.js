import Vue from 'vue'

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

const actions = {
  fetchQuestions: async (context, params) => {
    const path = 'api/questions'

    let response = {}
    try {
      response = await Vue.axios.get(path)
    } catch (error) {
      throw new Error(error)
    }

    if (response && response.status === 200) {
      const data = response.data
      context.commit('addQuestions', data.questions)

      return true
    }

    return false
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
