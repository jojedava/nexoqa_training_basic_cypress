import HomePage from "./pages/home_page";

describe("Test home page", () => {

    it("Perform a search", () => {
        cy.visit("http://ec2-34-249-209-43.eu-west-1.compute.amazonaws.com/#/songs");
        var homePage = new HomePage();
        homePage.fillSearch("cyp");
        cy.wait(1000);
        cy.get(".song-artist").should('have.length', 2);
    });
});