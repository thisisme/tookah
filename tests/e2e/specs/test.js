// https://docs.cypress.io/api/introduction/api.html

describe('Check for header', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Tookah!')
  })
})
