
describe('Title test', () => {
    it('Asserts correct title', () => {
      cy.visit('https://aklavins.github.io/')
  
      cy.get('h1').contains('Maģistra darbs')
    })
  })

  describe('Table test', () => {
    it('Asserts correct table element value', () => {
      cy.visit('https://aklavins.github.io/')
  
      cy.contains('Read').click()
    })
  })