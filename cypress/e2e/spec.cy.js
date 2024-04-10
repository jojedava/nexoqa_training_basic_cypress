describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com/')
    //var link = cy.get("#btn-login")
    // link.click()
    cy.get("#btn-login").click()
  })
})