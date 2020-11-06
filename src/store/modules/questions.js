const state = {
  questions: [
    {
      text: 'How much is the fish?',
      alternatives: [
        {
          text: '1',
          value: 1,
          answer: false
        },
        {
          text: '2',
          value: 2,
          answer: false
        },
        {
          text: '3',
          value: 3,
          answer: false
        },
        {
          text: '4',
          value: 4,
          answer: true
        }
      ],
      used: false
    }
  ]
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
