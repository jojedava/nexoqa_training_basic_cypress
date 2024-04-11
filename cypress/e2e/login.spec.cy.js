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
        cy.signUp(homePage, email, password)
        homePage.getLogoutBtn().click()
        
        ////login
        var loginPage = homePage.openLoginPage()
        loginPage.fillEmail(email)
        loginPage.fillPassword(password)
        loginPage.doLogin();
        homePage.getLogoutBtn().should('exist')
    })

    it("Login with invalid credentials", () => {
        cy.visit(
          "http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com/#/songs"
        );
        var homePage = new HomePage();
    
        var loginPage = homePage.openLoginPage();
        loginPage.loginUser();
        loginPage.getErrorMessage().contains("The login information was incorrect").should("exist");
      });
})