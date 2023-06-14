describe('Guest view related changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })


  it('For language English check all translation of guest page', () => {
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Einstellungen').click()
    cy.wait(2000)
    cy.get('#languageinput').select('English')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/s/qtM34GLiesgJoRy`);
    cy.wait(1000)
    cy.get('#downloadFile').should('have.contain',"Download")
    cy.get('.informNow').find(".text").should('have.contain',"Inform Now")
  })


  it('For language German check all translation of gust page', () => {
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Settings').click()
    cy.wait(2000)
    cy.get('#languageinput').select('Deutsch')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/s/qtM34GLiesgJoRy`);
    cy.wait(1000)
    cy.get('#downloadFile').should('have.contain',"Herunterladen")
    cy.get('.informNow').find(".text").should('have.contain',"Jetzt informieren")
  })

  it('Check Css for guest view', () => {
    cy.visit(`${Cypress.env('local').app_url}/s/qtM34GLiesgJoRy`);
    cy.get('#header-primary-action').find('.gust-download-svg').should('have.css', 'margin-right', '5px')
    cy.get('#header-primary-action').find('.gust-download-label').should('have.css', 'font-size', '20px').should('have.css', 'font-weight', '700').should('have.css', 'vertical-align', 'super')
    cy.get('.directDownload').find('.video-file-details').should('have.css', 'font-size', '20px')
    cy.get('.directDownload').find('#downloadFile').should('have.css', 'margin-top', '16px').should('have.css', 'margin-bottom', '64px').should('have.css', 'border-radius', '8px').should('have.css','padding','10px 24px')
    cy.get('.content-dialog').find('.content-para').should('have.css', 'max-width', '850px')
    cy.get('.content-dialog').find('.informNow').should('have.css', 'margin-top', '24px')
    cy.get('.content-dialog').find('.informNow').find('span').should('have.css', 'vertical-align', 'middle')
    cy.get('.content-dialog').should('have.css', 'text-align', 'center').should('have.css', 'text-align','center').should('have.css','padding','24px')
  })





})

