describe('Themes related changes', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('.input-field__main-wrapper #user').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.input-field__main-wrapper #password').type(`${Cypress.env('local').password}{enter}`)
  })

it('Add button popup css changes ', () => {
    cy.wait(6000)
    cy.get('.icon-add').click()
    cy.get('.popovermenu').should('have.css', 'filter', 'none')
    cy.get('.newFileMenu').should('have.css', 'border-radius', '8px')
    cy.get('.newFileMenu .menuitem .displayname').should('have.css', 'padding-left', '8px')
    cy.get('.newFileMenu').find('li').last().should('have.css','display','none')
  }) 
})
