describe('Right menu related changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/settings/user`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })


  it('Right menu options- names change in english', () => {
    cy.visit(`${Cypress.env('local').app_url}/settings/user`);
    cy.get('#languageinput').select('English')
    cy.wait(2000)
    cy.get('[data-id="settings"]').should('have.contain.text','Settings')
    if (Cypress.$('[data-id="core_apps"]').length > 0) {
      cy.get('[data-id="core_apps"]').should('have.contain.text','Apps')
    }
    if (Cypress.$('[data-id="core_users"]').length > 0) {
      cy.get('[data-id="core_users"]').should('have.contain.text','Users')
    }
    cy.get('[data-id="help"]').should('have.contain.text','Help & FAQ')
    cy.get('[data-id="logout"]').should('have.contain.text','Logout')
    if (Cypress.$('[data-id="nmc_welcome_popup-about"]').length > 0) {
      cy.get('[data-id="nmc_welcome_popup-about"]').should('have.contain.text','News')
    }
  })

  it('Right menu options- names change in german', () => {
    cy.visit(`${Cypress.env('local').app_url}/settings/user`);
    cy.get('#languageinput').select('Deutsch')
    cy.wait(2000)
    cy.get('[data-id="settings"]').should('have.contain.text','Einstellungen')
    if (Cypress.$('[data-id="core_apps"]').length > 0) {
      cy.get('[data-id="core_apps"]').should('have.contain.text','Apps')
    }
    if (Cypress.$('[data-id="core_users"]').length > 0) {
      cy.get('[data-id="core_users"]').should('have.contain.text','Benutzer')
    }
    cy.get('[data-id="help"]').should('have.contain.text','Hilfe & FAQ')
    cy.get('[data-id="logout"]').should('have.contain.text','Ausloggen')
    if (Cypress.$('[data-id="nmc_welcome_popup-about"]').length > 0) {
      cy.get('[data-id="nmc_welcome_popup-about"]').should('have.contain.text','Neuigkeiten')
    }
  })


})




