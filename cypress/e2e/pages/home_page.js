import SignUpPage from "../pages/signup_page";
import LoginPage from "../pages/login_page";

class HomePage {

    #link_sign_up = "";
    #link_login = "";
    #input_search = "";

    constructor() {
        this.#link_sign_up = cy.get('#btn-signup')
        this.#link_login = cy.get('#btn-login')
        this.#input_search = cy.get('input[type="text"]')
    }

    openSignUpPage() {
        this.#link_sign_up.click();
        return new SignUpPage();
    }

    openLoginPage() {
        this.#link_login.click();
        return new LoginPage();
    }

    getLogoutButton() {
        return cy.get('#btn-logout');
    }

    fillSearch(search){
        this.#input_search.clear();
        this.#input_search.focus();
        this.#input_search.type(search);
        cy.wait(1000);
    }
}

export default HomePage;