import HomePage from "./pages/home_page"
import SignUpPage from "./pages/signup_page"

describe('Test suite sign up', () => {
    
    beforeEach(() => {
        cy.request('http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com:8081/reset')
    })
    
    it('Register new user', () => {
        cy.visit('/')
        var homePage = new HomePage()
        cy.signUp(homePage, 'test@test.com', '12345678')
        homePage.getLogoutBtn().should('exist')

    })

    it.only('Register wrong email', () => {
        cy.visit('/')
        var homePage = new HomePage()
        cy.signUp(homePage, 'test', '12345678')
        var signUpPage = new SignUpPage()
        signUpPage.getErrorMessage().contains('You must provide a valid email address').should('exist')
    })

    it('Register wrong password with special characters', () => {
        cy.visit('/')
        var homePage = new HomePage()
        cy.signUp(homePage, 'test@test.com', '$12345678')
        var signUpPage = new SignUpPage()
        signUpPage.getErrorMessage().contains('1. It must contain ONLY the following characters: lower case, upper case, numerics').should('exist')
    })

    it('Register wrong password with less than 8 characters', () => {
        cy.visit('/')
        var homePage = new HomePage()
        cy.signUp(homePage, 'test@test.com', '1234567')
        var signUpPage = new SignUpPage()
        signUpPage.getErrorMessage().contains('2. It must be at least 8 characters in length and not greater than 32 characters in length.').should('exist')
    })

    it('Register wrong password with greater than 32 characters', () => {
        cy.visit('/')
        var homePage = new HomePage()
        cy.signUp(homePage, 'test@test.com', '1234567ABCDEFGHIJKLMAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        var signUpPage = new SignUpPage()
        signUpPage.getErrorMessage().contains('2. It must be at least 8 characters in length and not greater than 32 characters in length.').should('exist')
    })

    // it('Register new user2', () => {
    //     cy.visit('http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com/')
    //     cy.get("#btn-signup").click()
    //     cy.get("input[name='email']").clear()
    //     cy.get("input[name='email']").focus()
    //     cy.get("input[name='email']").type('test@test.com')
    //     cy.get("input[name='password']").clear()
    //     cy.get("input[name='password']").focus()
    //     cy.get("input[name='password']").type('12345678') 
    // })
})