/* Test core helpers */

import helpers from '@/core/helpers.js'

describe('Test randomBoolen', () => {
  it('should return boolean', () => {
    expect(typeof helpers.randomBoolen()).toBe('boolean')
  })
})

describe('Test getUniqueIndexes', () => {
  it('should return array with length 2', () => {
    expect(helpers.getUniqueIndexes(2, [0, 1, 2])).toHaveLength(2)
  })
  it('should return array with length 4', () => {
    expect(helpers.getUniqueIndexes(4, [0, 1, 2, 3, 4, 5, 6, 7, 8])).toHaveLength(4)
  })
})
