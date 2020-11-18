import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import settings from './modules/settings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questions,
    settings
  }
})
