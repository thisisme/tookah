import { createServer, Model } from 'miragejs'

export function makeServer ({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      question: Model
    },

    seeds (server) {
      server.create('question', {
        text: 'How much is the fish?',
        alternatives: [
          {
            text: '1',
            id: 1,
            answer: false
          },
          {
            text: '2',
            id: 2,
            answer: false
          },
          {
            text: '3',
            id: 3,
            answer: false
          },
          {
            text: '4',
            id: 4,
            answer: true
          }
        ],
        used: false
      })
      server.create('question', {
        text: 'Question 2?',
        alternatives: [
          {
            text: '1',
            id: 5,
            answer: true
          },
          {
            text: '1',
            id: 6,
            answer: false
          },
          {
            text: '1',
            id: 7,
            answer: false
          },
          {
            text: '1',
            id: 8,
            answer: false
          }
        ]
      })
    },

    routes () {
      this.namespace = 'api'

      this.get('/questions', (schema) => {
        return schema.questions.all()
      })
    }
  })

  return server
}
