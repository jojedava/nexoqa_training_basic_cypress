/// <reference types="cypress" />

import HomePage from "./pages/home_page";

describe("Test home page", () => {

    beforeEach(() => {
        cy.request('http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com:8081/reset')
    })

    it("Perform a search", () => {
        cy.visit("/#/songs");
        var homePage = new HomePage();
        homePage.fillSearch("cyp");
        
        cy.get(".song-artist").should('have.length', 2);
    });

    it("Without songs", () => {
        cy.intercept('GET','http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com:8081/songs', { statusCode:200, fixture: 'empty_songs.json' }).as('songs')
        cy.visit("/#/songs");
        var homePage = new HomePage();
        cy.wait('@songs')
        cy.contains('No slot content defined.').should('exist');
    });

    it.only("Recently section 20 songs", () => {
        cy.intercept('GET','http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com:8081/histories', { statusCode:200, fixture: 'recently_songs.json' }).as('songs')

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
        cy.wait('@songs')
        
        homePage.getRecentlyNextPage().click()

        cy.get("div.mt-2 table tbody tr").should("have.length","5")

         homePage.getRecentlyPreviousPage().click()

        cy.get("div.mt-2 table tbody tr").should("have.length","5")
    });
});