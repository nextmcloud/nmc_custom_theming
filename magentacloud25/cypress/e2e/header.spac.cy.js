describe('Sharing app related changes', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
        cy.get('.input-field__main-wrapper #user').type(`${Cypress.env('local').user}{enter}`)
        cy.get('.input-field__main-wrapper #password').type(`${Cypress.env('local').password}{enter}`)
    })
    
    it('Check for logo ', () => {
        cy.get('#header .header-left').find('a div').should('have.class','logo')
    })

    it('Check for header right side search ', () => {
        cy.get('#header .header-right').find('div').should('have.id','unified-search')
    })

})