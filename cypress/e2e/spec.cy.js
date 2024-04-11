describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com/#/songs')
    cy.get('#btn-login').click()
  })
})