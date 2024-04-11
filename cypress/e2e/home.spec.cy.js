import HomePage from "./pages/home_page";

describe("Test home page", () => {

    it("Perform a search", () => {
        cy.visit("/#/songs");
        var homePage = new HomePage();
        homePage.fillSearch("cyp");
        
        cy.get(".song-artist").should('have.length', 2);
    });
});