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

  it('Left menu names change in english', () => {
    cy.wait(3000)
    cy.get('#user-menu').click()
    cy.wait(1000)
    cy.get('#settings.menu-entry').click()
    cy.wait(2000)
    cy.get('#account-setting-language').select('English (US)')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.wait(1000)
    cy.get("#app-navigation li[data-id='favorites'] a.nav-icon-favorites.svg").should('have.contain','Favorites')
    cy.get("#app-navigation li[data-id='files'] a.nav-icon-files.svg").should('have.contain','All files')
    cy.get("#app-navigation li[data-id='sharingout'] a").should('have.contain','My shares')
    cy.get("#app-navigation li[data-id='sharingin'] a").should('have.contain','Shared with me')
    cy.get("#app-navigation li[data-id='trashbin'] a").should('have.contain','Deleted files')
    cy.get('.custom-button .btn-default').should('have.contain',' Expand storage')
    cy.get('.settings-button').should('have.contain','Display settings')
    cy.get("label[for='showhiddenfilesToggle']").should('have.contain','Show hidden files')
    cy.get("label[for='cropimagepreviewsToggle']").should('have.contain','Crop image previews')
  })

  it('Left menu names - in German', () => {
    cy.wait(3000)
    cy.get('#user-menu').click()
    cy.wait(1000)
    cy.get('#settings.menu-entry').click()
    cy.wait(2000)
    cy.get('#account-setting-language').select('Deutsch (Förmlich: Sie)')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.wait(1000)

    cy.get("#app-navigation li[data-id='files'] a").should('have.contain','Alle Dateien')
    cy.get("#app-navigation li[data-id='sharingout'] a").should('have.contain','Meine geteilten Inhalte')
    cy.get("#app-navigation li[data-id='sharingin'] a").should('have.contain','Mit mir geteilt')
    cy.get("#app-navigation li[data-id='trashbin'] a").should('have.contain','Gelöschte Dateien')
    cy.get('.custom-button .btn-default').should('have.contain','Speicherplatz erweitern')
    cy.get('.settings-button').should('have.contain','Anzeigeeinstellungen')

    cy.get("#files-setting-showhidden label[for='showhiddenfilesToggle']").should('have.contain','Versteckte Dateien anzeigen')
  })
})


