describe('Left menu related changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })

  it('Check Css for delete activity button', () => {
    cy.get('.app-navigation-translation').should('have.css', 'top', '73px')
    cy.get('.NextCloudPorgressBar').find('.customprogressbar').should('have.css', 'height', '4px').should('have.css', 'border-radius', '4px').should('have.css', 'margin-bottom', '8px')
    cy.get('.memory-ocup-message').should('have.css', 'font-size', '14px')
    cy.get('#app-navigation').find('.custom-button').find('.btn-style').should('have.css', 'font-size', '16px')
    .should('have.css', 'cursor', 'pointer').should('have.css', 'font-weight', '400')
    .should('have.css', 'display', 'inline-block').should('have.css', 'font-family', 'TeleNeoWeb, TeleNeo, sans-serif')
    cy.get('#app-settings-header').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    cy.get('#app-settings-header').find('.settings-button').should('have.css', 'display', 'block').should('have.css', 'height', '20px').should('have.css', 'width', '287px')
    .should('have.css', 'background-repeat', 'no-repeat').should('have.css', 'box-shadow', 'none').should('have.css', 'border', '0px none rgb(226, 0, 116)')
    .should('have.css', 'border-radius', '0px').should('have.css', 'text-align', 'left').should('have.css', 'padding-left', '40px')
    .should('have.css', 'font-weight', '400')
  })


  it('Left menu names change in english', () => {
    cy.wait(3000)
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Einstellungen').click()
    cy.wait(2000)
    cy.get('#languageinput').select('English')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.wait(1000)
    cy.get("li[data-id='nmc_files_activity'] a").should('have.contain','Activities')
    cy.get("#app-navigation li[data-id='favorites'] a").should('have.contain','Favourites')
    cy.get("#app-navigation li[data-id='files'] a").should('have.contain','All files')
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
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Settings').click()
    cy.wait(2000)
    cy.get('#languageinput').select('Deutsch')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.wait(1000)

    cy.get("li[data-id='nmc_files_activity'] a").should('have.contain','Aktivitäten')
    cy.get("#app-navigation li[data-id='favorites'] a").should('have.contain','Favoriten')
    cy.get("#app-navigation li[data-id='files'] a").should('have.contain','Alle Dateien')
    cy.get("#app-navigation li[data-id='sharingout'] a").should('have.contain','Meine geteilten Inhalte')
    cy.get("#app-navigation li[data-id='sharingin'] a").should('have.contain','Mit mir geteilt')
    cy.get("#app-navigation li[data-id='trashbin'] a").should('have.contain','Gelöschte Dateien')
    cy.get('.custom-button .btn-default').should('have.contain','Speicherplatz erweitern')
    cy.get('.settings-button').should('have.contain','Anzeigeeinstellungen')

    cy.get("label[for='showhiddenfilesToggle']").should('have.contain','Versteckte Dateien anzeigen')
    cy.get("label[for='cropimagepreviewsToggle']").should('have.contain','Vorschaubilder  beschneiden')
  })

})


