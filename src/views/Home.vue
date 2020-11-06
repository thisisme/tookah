<template>
  <div class="home">
    <h1>Tookah!</h1>
    <section class="game">
      <div class="game__stats">
        <div class="game__stats--stat timer">{{ questionTimer }} seconds left</div>
        <div class="game__stats--stat correct__answers">Correct answers: {{ correctAnswers }}</div>
        <div class="game__stats--stat current__question">Current question: {{ currentQuestion }} / 10</div>
      </div>
      <div
        v-if="showQuestion === false"
        class="game__prepare">
        <h3>Prepare for next question</h3>
        <h2>{{ prepareTimer }}</h2>
      </div>
      <Question
        v-if="showQuestion"
        :question="getCurrentQuestion()"
        @answer="setAnswer" />
      <button @click="setPrepareTimer">
        <template v-if="currentQuestion === 1">
          Start
        </template>
        <template v-else>
          Next question
        </template>
      </button>
    </section>
  </div>
</template>

<script>
import Question from '@/components/Question'

export default {
  name: 'Home',
  components: {
    Question
  },
  data () {
    return {
      correctAnswers: 1,
      currentQuestion: 1,
      showQuestion: false,
      questionTimer: 15,
      prepareTimer: 5,
      timer: undefined
    }
  },
  computed: {
    questions () {
      return this.$store.getters['questions/questions']
    }
  },
  methods: {
    getCurrentQuestion () {
      return this.questions[this.currentQuestion - 1]
    },
    setAnswer (answer) {
      console.log(answer)
      clearInterval(this.timer)
    },
    setQuestionTimer () {
      this.timer = setInterval(() => {
        this.questionTimer -= 1
        if (this.questionTimer === 0) {
          clearInterval(this.timer)
        }
      }, 1000)
    },
    setPrepareTimer () {
      this.timer = setInterval(() => {
        this.prepareTimer -= 1
        if (this.prepareTimer === 0) {
          clearInterval(this.timer)
          this.setQuestionTimer()
          this.getCurrentQuestion()
          this.showQuestion = true
        }
      }, 1000)
    }
  }
}
</script>
