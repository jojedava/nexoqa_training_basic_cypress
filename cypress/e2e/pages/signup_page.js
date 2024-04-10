class SignUpPage{

    #email = ""
    #password = ""
    #register_btn = ""

    constructor(){
        this.#email = cy.get("input[name='email']")
        this.#password = cy.get("input[name='password']")
        this.#register_btn = cy.get("button[name='registerBtn']")
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

    registerUser(){
        this.#register_btn.click()
    }

    getErrorMessage(){
        return cy.get("div.danger-alert")
    }

}

export default SignUpPage;