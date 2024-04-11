/// <reference types="cypress" />

class AddSong{
    #inputs=[]
    #btn_create_song=""
    constructor(){
        this.#inputs=cy.get('input[type=text]')
        this.#btn_create_song=cy.get('#sngBtn')

    }
    fill_text_inputs(text,numero){
        // this.#inputs.each((el, index, list) => {
        //     cy.wrap(list).should('have.length',7)
        //     cy.wrap(el).clear()
        //     cy.wrap(el).focus()
        //     cy.wrap(el).type(text)
        //     cy.log(index)
        // })

        // cy.get('input[type=text]').each((el) => {
        //     cy.wrap(el).clear()
        //     cy.wrap(el).focus()
        //     cy.wrap(el).type(text)
        // })


        for (var n=0; n<numero;n++ ){

            cy.get('input[type=text]').eq(n).clear()
            cy.get('input[type=text]').eq(n).focus()
            cy.get('input[type=text]').eq(n).type(text)
        }

    }
    fill_text_area(text,numero){
        for (var n=0; n<numero;n++ ){
            cy.get('textarea').eq(n).clear()
            cy.get('textarea').eq(n).focus()
            cy.get('textarea').eq(n).type(text)
        }
    }
    press_button_create_song(){
        this.#btn_create_song.click()
    }
}
export default AddSong;