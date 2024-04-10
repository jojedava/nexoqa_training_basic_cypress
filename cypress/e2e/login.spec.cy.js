import HomePage from "./pages/home_page"

describe('Test suite login', () => {

    beforeEach(() => {
        cy.request('http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com:8081/reset')
    })

    it('Login a user', () => {
        cy.visit('http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com/')
        var email = 'test@test.com'
        var password = '12345678'

        var homePage = new HomePage()
        cy.signUp(homePage, email, password).then((signUpPage) => {})
        homePage.getLogoutBtn().click()
        
        
        ////login
        var loginPage = homePage.openLoginPage()
        loginPage.fillEmail(email)
        loginPage.fillPassword(password)
        loginPage.doLogin();
        homePage.getLogoutBtn().should('exist')

    })
})