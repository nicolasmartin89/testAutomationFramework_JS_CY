// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

//Custom comand
Cypress.Commands.add('goToApp', ()=>{
    //App URL from cypress environment variables.
    const url = Cypress.env('application_URL')

    //Navigate to the app.
    cy.visit(url)
})