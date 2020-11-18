/* Test Store module Questions */

import questions from '@/store/modules/questions.js'

/* Mutations */
describe('Mutations for questions', () => {
  it('should set questions to payload', () => {
    const state = {
      questions: []
    }
    const payload = [
      {
        text: 'Question 1?',
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
      }
    ]
    questions.mutations.addQuestions(state, payload)
    expect(questions.getters.questions(state)).toEqual(payload)
  })
})

/* Getters */
describe('Getters for questions', () => {
  it('should return questions', () => {
    const state = {
      questions: [
        {
          text: 'Qyestion 1?',
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
        }
      ]
    }
    expect(questions.getters.questions(state)).toEqual([
      {
        text: 'Qyestion 1?',
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
      }
    ])
  })
})