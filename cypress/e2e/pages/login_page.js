class LoginPage{

    #email = ""
    #password = ""
    #login_btn = ""

    constructor(){
        this.#email = cy.get("input[name='email']")
        this.#password = cy.get("input[name='password']")
        this.#login_btn = cy.get("button[name='loginBtn']")
    }

    fillEmail(email){
        this.#email.clear()
        this.#email.focus()
        this.#email.type(email)
    }

    fillPassword(password){
        this.#password.clear()
        this.#password.focus()
        this.#password.type(password)
    }

    doLogin(){
        this.#login_btn.click()
    }

    getErrorMessage(){
        return cy.get("div.danger-alert")
    }

}

export default LoginPage;