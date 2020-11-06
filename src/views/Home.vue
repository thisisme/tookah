<template>
  <div class="home">
    <h1>Tookah!</h1>
    <section class="game">
      <div class="game__stats">
        <div class="game__stats--stat timer">20 seconds left</div>
        <div class="game__stats--stat correct__answers">Correct answers: {{ correctAnswers }}</div>
        <div class="game__stats--stat current__question">Current question: {{ currentQuestion }} / 10</div>
      </div>
      <Question
        :question="getCurrentQuestion()"
        @answer="setAnswer" />
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
      currentQuestion: 1
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
    }
  }
}
</script>
