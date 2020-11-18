/* Test Store module Settings */

import settings from '@/store/modules/settings.js'

/* Mutations */
describe('Mutations for settings', () => {
  it('should set settings to payload', () => {
    const state = {
      settings: []
    }
    const payload = [
      {
        name: 'numQuestions',
        value: 0,
        type: 'number',
        label: 'Change number of questions'
      },
      {
        name: 'questionTimer',
        value: 15,
        type: 'number',
        label: 'Change timer for each question'
      }
    ]
    settings.mutations.updateSettings(state, payload)
    expect(settings.getters.settings(state)).toEqual(payload)
  })
})

/* Getters */
describe('Getters for settings', () => {
  it('should return settings', () => {
    const state = {
      settings: [
        {
          name: 'numQuestions',
          value: 0,
          type: 'number',
          label: 'Change number of questions'
        },
        {
          name: 'questionTimer',
          value: 15,
          type: 'number',
          label: 'Change timer for each question'
        }
      ]
    }
    expect(settings.getters.settings(state)).toEqual([
      {
        name: 'numQuestions',
        value: 0,
        type: 'number',
        label: 'Change number of questions'
      },
      {
        name: 'questionTimer',
        value: 15,
        type: 'number',
        label: 'Change timer for each question'
      }
    ])
  })
})