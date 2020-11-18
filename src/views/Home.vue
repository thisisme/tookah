<template>
  <div class="home">
    <h2>Let's play a game!</h2>
    <ul>
      <li>In Tookah you get questions that you should answer with the help of given alternatives</li>
      <li>You have a short time on each question</li>
      <li>If you need some help, there are two lifelines that you can use once per game</li>
    </ul>
    <router-link
      to="/game">
      Click here to start the game
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    /**
     * Fetch questions from api
     */
    this.$store.dispatch('questions/fetchQuestions')
  }
}
</script>
