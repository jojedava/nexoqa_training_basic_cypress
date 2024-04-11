describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    //var link = cy.get("#btn-login")
    // link.click()
    cy.get("#btn-login").click()
  })
})