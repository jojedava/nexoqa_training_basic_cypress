import HomePage from "./pages/home_page"

describe('Test suite login', () => {
    
    beforeEach(() => {
        cy.request('http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com:8081/reset')
    })

    it.only('Login a user', () => {
        cy.visit('/')
        var email = 'test@test.com'
        var password = '12345678'

        var homePage = new HomePage()
        cy.signUp(homePage, email, password)
        homePage.getLogoutButton().click()
        
        ////login
        var loginPage = homePage.openLoginPage()
        loginPage.fillEmail(email)
        loginPage.fillPassword(password)
        loginPage.doLogin();
        homePage.getLogoutButton().should('exist')
    })

    it.only('Login a user -  intercepted', () => {
        cy.intercept('POST','http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com:8081/login', { statusCode:403, fixture: "login_error.json" }).as('login')
        
        cy.visit('/')
        var email = 'test@test.com'
        var password = '12345678'

        var homePage = new HomePage()
        cy.signUp(homePage, email, password)
        homePage.getLogoutButton().click()
        
        ////login
        var loginPage = homePage.openLoginPage()
        loginPage.fillEmail(email)
        loginPage.fillPassword(password)
        loginPage.doLogin();
        cy.wait('@login')
        loginPage.getErrorMessage().contains("The login information was incorrect").should("exist");
    })

    it("Login with invalid credentials", () => {
        cy.visit("/");
        var homePage = new HomePage();
    
        var loginPage = homePage.openLoginPage();
        loginPage.loginUser();
        loginPage.getErrorMessage().contains("The login information was incorrect").should("exist");
      });
})