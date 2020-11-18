import { createServer, Model } from 'miragejs'

export function makeServer ({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      question: Model
    },

    seeds (server) {
      server.create('question', {
        text: 'What year was Pulp Fiction released?',
        alternatives: [
          { text: '2004', id: 1, answer: false },
          { text: '2000', id: 2, answer: false },
          { text: '1994', id: 3, answer: true },
          { text: '1997', id: 4, answer: false }
        ],
        used: false
      })
      server.create('question', {
        text: 'Who produced The Grand Budapest Hotel?',
        alternatives: [
          { text: 'Steven Spielberg', id: 5, answer: false },
          { text: 'Mel Brooks', id: 6, answer: false },
          { text: 'Martin Scorsese', id: 7, answer: false },
          { text: 'Wes Anderson', id: 8, answer: true }
        ],
        used: false
      })
      server.create('question', {
        text: 'In Big Lebowski there is a swedish actor, who?',
        alternatives: [
          { text: 'Peter Stormare', id: 5, answer: true },
          { text: 'Max von Sydow', id: 6, answer: false },
          { text: 'Stellan Skarsgård', id: 7, answer: false },
          { text: 'Dolph Lundgren', id: 8, answer: false }
        ],
        used: false
      })
      server.create('question', {
        text: 'Who wrote Fear and Loathing in Las Vegas?',
        alternatives: [
          { text: 'Terry Gilliam', id: 5, answer: false },
          { text: 'Hunter s. Thompson', id: 6, answer: true },
          { text: 'Stanley Kubrick', id: 7, answer: false },
          { text: 'Spike Jonze', id: 8, answer: false }
        ],
        used: false
      })
      server.create('question', {
        text: 'Who the soundtrack to The Social Network?',
        alternatives: [
          { text: 'David Bowie', id: 5, answer: false },
          { text: 'Prince', id: 6, answer: true },
          { text: 'Trent Reznor', id: 7, answer: true },
          { text: 'Nick Cave', id: 8, answer: false }
        ],
        used: false
      })
      server.create('question', {
        text: 'Who played Batman in Batman Begins?',
        alternatives: [
          { text: 'Christian Bale', id: 5, answer: true },
          { text: 'Robert Pattinson', id: 6, answer: false },
          { text: 'Michael Keaton', id: 7, answer: true },
          { text: 'Adam West', id: 8, answer: false }
        ],
        used: false
      })
      server.create('question', {
        text: 'When was Jojo Rabbit released?',
        alternatives: [
          { text: '2009', id: 5, answer: false },
          { text: '2019', id: 6, answer: true },
          { text: '2015', id: 7, answer: true },
          { text: '2012', id: 8, answer: false }
        ],
        used: false
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
