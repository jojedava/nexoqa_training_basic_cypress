import HomePage from "./pages/home_page";
import SignUp from "./pages/signup_page";

describe("Test suite sign up", () => {
  beforeEach(() => {
    cy.request(
      "http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com:8081/reset"
    );
  });

  it("Register new user", () => {
    cy.visit(
      "http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com/#/songs"
    );
    var homePage = new HomePage();
    cy.signUp(homePage, "test@test.com", "12345678");
    homePage.getLogoutButton().should("exist");
  });

  it("Register wrong email", () => {
    cy.visit(
      "http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com/#/songs"
    );
    var homePage = new HomePage();
    cy.signUp(homePage, "test", "12345678");
    var signUpPage = new SignUp();
    signUpPage
      .getErrorMessage()
      .contains("You must provide a valid email address")
      .should("exist");
  });

  it("Register wrong password with special characters", () => {
    cy.visit(
      "http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com/#/songs"
    );
    var homePage = new HomePage();
    cy.signUp(homePage, "test@test.com", "$12345678");
    var signUpPage = new SignUp();
    signUpPage
      .getErrorMessage()
      .contains(
        "1. It must contain ONLY the following characters: lower case, upper case, numerics."
      )
      .should("exist");
  });

  it("Register wrong password with less than 8 characters", () => {
    cy.visit(
      "http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com/#/songs"
    );
    var homePage = new HomePage();
    cy.signUp(homePage, "test@test.com", "1234567");
    var signUpPage = new SignUp();
    signUpPage
      .getErrorMessage()
      .contains(
        "2. It must be at least 8 characters in length and not greater than 32 characters in length."
      )
      .should("exist");
  });

  it("Register wrong password with more than 32 characters", () => {
    cy.visit(
      "http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com/#/songs"
    );
    var homePage = new HomePage();
    cy.signUp(homePage, "test@test.com", "123456789012345678901234567890123");
    var signUpPage = new SignUp();
    signUpPage
      .getErrorMessage()
      .contains(
        "2. It must be at least 8 characters in length and not greater than 32 characters in length."
      )
      .should("exist");
  });
});
