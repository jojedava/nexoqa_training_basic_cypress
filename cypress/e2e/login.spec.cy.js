import HomePage from "./pages/home_page";

describe("Test suite login", () => {
  beforeEach(() => {
    cy.request(
      "http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com:8081/reset"
    );
  });

  it("Login with valid credentials", () => {
    cy.visit(
      "http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com/#/songs"
    );
    var homePage = new HomePage();
    cy.signUp(homePage, "test@test.com", "12345678");
    homePage.getLogoutButton().click();

    var loginPage = homePage.openLoginPage();
    loginPage.fillEmail("test@test.com");
    loginPage.fillPassword("12345678");
    loginPage.loginUser();
    homePage.getLogoutButton().should("exist");
  });

  it.only("Login with invalid credentials", () => {
    cy.visit(
      "http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com/#/songs"
    );
    var homePage = new HomePage();

    var loginPage = homePage.openLoginPage();
    loginPage.loginUser();
    loginPage.getErrorMessage().contains("The login information was incorrect").should("exist");
  });
  
});
