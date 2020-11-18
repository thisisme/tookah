<template>
  <div class="home">
    <section class="game">
      <div class="game__stats">
        <div class="game__stats--stat timer">{{ questionTimer }} seconds left</div>
        <div class="game__stats--stat correct__answers">
          Correct answers: {{ correctAnswers }}
        </div>
        <div class="game__stats--stat current__question">
          Current question: {{ currentQuestion }} / {{ totalQuestions }}
        </div>
      </div>
      <section
        v-if="showQuestion === false"
        class="game__fedback">
        <div
          class="game__answer"
          v-if="correctAnswer != undefined">
          <h2>
            <span>{{ correctAnswer }}</span>
          </h2>
          <h3>
            Correct answer:
            <p>
              {{ answerFeedback }}
            </p>
          </h3>
        </div>
        <div
          class="game__prepare">
          <template v-if="!lastAnswered">
            <h3>Prepare for next question</h3>
            <h2>{{ prepareTimer }}</h2>
          </template>
          <template v-else>
            <h2>Game over!</h2>
          </template>
        </div>
      </section>
      <Question
        v-if="showQuestion"
        ref="question"
        :question="getCurrentQuestion()"
        @answer="setAnswer" />
      <div
        class="game__progress"
        v-if="!lastAnswered">
        <button
          @click="setPrepareTimer"
          :disabled="showQuestion === true">
          <template v-if="currentQuestion <= 1">
            Start
          </template>
          <template v-else>
            Next question
          </template>
        </button>
      </div>
      <div
        v-if="showQuestion === true"
        class="game__lifelines">
        <h3>Lifelines</h3>
        <p>You can use each lifeline one time only.</p>
        <p>50/50 removes two options and + 10 will give you 10 extra seconds</p>
        <div class="lifelines">
          <button
            :disabled="lifelineHalfUsed"
            @click="lifelineHalf"
            class="lifeline">
            50/50
          </button>
          <button
          :disabled="lifelineTimeUsed"
           @click="lifelineTime"
           class="lifeline">
            + 10 seconds
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Question from '@/components/Question'

export default {
  name: 'Game',
  components: {
    Question
  },
  data () {
    return {
      answerFeedback: undefined,
      correctAnswer: undefined,
      correctAnswers: 0,
      currentQuestion: 0,
      lastAnswered: false,
      lifelineHalfUsed: false,
      lifelineTimeUsed: false,
      prepareTimer: 5,
      questionTimer: 15,
      questionLoaded: false,
      showQuestion: false,
      totalQuestions: 0,
      timer: undefined
    }
  },
  computed: {
    questions () {
      return this.$store.getters['questions/questions']
    }
  },
  methods: {
    /**
     * Get current question
     * Returns object with question
     */
    getCurrentQuestion () {
      return this.questions[this.currentQuestion - 1]
    },
    /**
     * Show current question
     */
    question () {
      if (this.currentQuestion <= this.questions.length) {
        this.showQuestion = true
        this.setQuestionTimer()
        this.correctAnswer = undefined
        this.answerFeedback = this.getCurrentQuestion().alternatives.find(alt => alt.answer === true).text
      }
    },
    /**
     * Set answer
     */
    setAnswer (answer, feedback, timeout = false) {
      clearInterval(this.timer)
      this.showQuestion = false
      this.correctAnswer = timeout ? 'Sorry! You ran out of time' : 'Sorry! Wrong answer'
      if (answer === true) {
        this.correctAnswer = 'Great! Correct answer'
        this.correctAnswers += 1
      }
      if (this.currentQuestion < this.questions.length) {
        this.currentQuestion += 1
        this.questionTimer = 15
        this.prepareTimer = 5
      } else {
        this.lastAnswered = true
      }
    },
    /**
     * Set question timer
     */
    setQuestionTimer () {
      this.timer = setInterval(() => {
        this.questionTimer -= 1
        if (this.questionTimer === 0) {
          clearInterval(this.timer)
          this.setAnswer(false, true)
        }
      }, 1000)
    },
    /**
     * Set prepare timer
     */
    setPrepareTimer () {
      this.timer = setInterval(() => {
        this.prepareTimer -= 1
        if (this.prepareTimer === 0) {
          clearInterval(this.timer)
          this.question()
        }
      }, 1000)
    },
    lifelineHalf () {
      this.$refs.question.removeOptions()
      this.lifelineHalfUsed = true
    },
    lifelineTime () {
      clearInterval(this.timer)
      this.questionTimer += 10
      this.setQuestionTimer()
      this.lifelineTimeUsed = true
    }
  },
  mounted () {
    this.questionLoaded = true
    this.currentQuestion = 1
    this.totalQuestions = this.questions.length
  }
}
</script>
