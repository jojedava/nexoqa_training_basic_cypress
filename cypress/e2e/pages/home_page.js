import SignUpPage from "../pages/signup_page";
import LoginPage from "../pages/login_page";

class HomePage{

    #link_sign_up = ""
    #link_login = ""

    constructor(){
        this.#link_sign_up = cy.get("#btn-signup")
        this.#link_login = cy.get("#btn-login")
    }

    openSignUpPage(){
        this.#link_sign_up.click();
        return new SignUpPage();
    }

    openLoginPage(){
        this.#link_login.click();
        return new LoginPage();
    }

    getLogoutBtn(){
        return cy.get('#btn-logout')
    }

}

export default HomePage;