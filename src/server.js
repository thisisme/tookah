import { createServer, Model } from 'miragejs'
import { v4 as uuidv4 } from 'uuid'

export function makeServer ({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      question: Model
    },

    seeds (server) {
      server.create('question', {
        id: uuidv4(),
        text: 'What year was Pulp Fiction released?',
        alternatives: [
          { text: '2004', id: uuidv4(), answer: false },
          { text: '2000', id: uuidv4(), answer: false },
          { text: '1994', id: uuidv4(), answer: true },
          { text: '1997', id: uuidv4(), answer: false }
        ],
        used: false
      })
      server.create('question', {
        id: uuidv4(),
        text: 'Who produced The Grand Budapest Hotel?',
        alternatives: [
          { text: 'Steven Spielberg', id: uuidv4(), answer: false },
          { text: 'Mel Brooks', id: uuidv4(), answer: false },
          { text: 'Martin Scorsese', id: uuidv4(), answer: false },
          { text: 'Wes Anderson', id: uuidv4(), answer: true }
        ],
        used: false
      })
      server.create('question', {
        id: uuidv4(),
        text: 'In Big Lebowski there is a swedish actor, who?',
        alternatives: [
          { text: 'Peter Stormare', id: uuidv4(), answer: true },
          { text: 'Max von Sydow', id: uuidv4(), answer: false },
          { text: 'Stellan Skarsgård', id: uuidv4(), answer: false },
          { text: 'Dolph Lundgren', id: uuidv4(), answer: false }
        ],
        used: false
      })
      server.create('question', {
        id: uuidv4(),
        text: 'Who wrote Fear and Loathing in Las Vegas?',
        alternatives: [
          { text: 'Terry Gilliam', id: uuidv4(), answer: false },
          { text: 'Hunter s. Thompson', id: uuidv4(), answer: true },
          { text: 'Stanley Kubrick', id: uuidv4(), answer: false },
          { text: 'Spike Jonze', id: uuidv4(), answer: false }
        ],
        used: false
      })
      server.create('question', {
        id: uuidv4(),
        text: 'Who wrote the soundtrack to The Social Network?',
        alternatives: [
          { text: 'David Bowie', id: uuidv4(), answer: false },
          { text: 'Prince', id: uuidv4(), answer: false },
          { text: 'Trent Reznor', id: uuidv4(), answer: true },
          { text: 'Nick Cave', id: uuidv4(), answer: false }
        ],
        used: false
      })
      server.create('question', {
        id: uuidv4(),
        text: 'Who played Batman in Batman Begins?',
        alternatives: [
          { text: 'Christian Bale', id: uuidv4(), answer: true },
          { text: 'Robert Pattinson', id: uuidv4(), answer: false },
          { text: 'Michael Keaton', id: uuidv4(), answer: true },
          { text: 'Adam West', id: uuidv4(), answer: false }
        ],
        used: false
      })
      server.create('question', {
        id: uuidv4(),
        text: 'When was Jojo Rabbit released?',
        alternatives: [
          { text: '2009', id: uuidv4(), answer: false },
          { text: '2019', id: uuidv4(), answer: true },
          { text: '2015', id: uuidv4(), answer: true },
          { text: '2012', id: uuidv4(), answer: false }
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
