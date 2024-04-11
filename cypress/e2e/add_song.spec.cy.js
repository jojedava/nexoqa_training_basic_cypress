import AddSong from "./pages/add_song_page";

describe("Test home page", () => {
    beforeEach(() => {
        cy.request('http://ec2-52-49-67-237.eu-west-1.compute.amazonaws.com:8081/reset')
    })
    it("Perform a search", () => {
        cy.visit("/#/songs/create");
        var addSong = new AddSong();
        addSong.fill_text_inputs("Texto de Prueba",6)
        addSong.fill_text_area("Texto de Prueba",2)
        addSong.press_button_create_song()
        cy.get('div.song').contains("Texto de Prueba").should("exist")
    })
})