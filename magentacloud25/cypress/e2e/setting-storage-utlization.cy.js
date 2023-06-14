describe('Settings related changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/settings/user`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })

  it('Check Css for setting storage utilization', () => {
    cy.get('.extra-details').find('#files').should('have.class','files-usage')
    cy.get('.extra-details').find('#photos').should('have.class','photos-usage')
    cy.get('.extra-details').find('#bin').should('have.class','bin-usage')
    cy.get('.personal-settings-setting-box').find('b').should('have.css', 'font-size', '20px').should('have.css', 'color', 'rgb(25, 25, 25)');

  })

  it('Setting-Storage Utilization english test check', () => {
    cy.wait(3000)
    cy.get('#languageinput').select('English')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/settings/user`);
    cy.wait(1000)

    cy.get('.personal-settings-setting-box b').should('have.contain','Storage utilisation')
   // cy.get('.files-usage').should('have.contain','Files:')
   // cy.get('.photos-usage').should('have.contain','Photos & videos:')
   // cy.get('.bin-usage').should('have.contain','Recycle Bin:')
   cy.get('.recycle-para').should('have.contain','The recycle bin is automatically tidied up.')
   cy.get('.para-2').should('have.contain','Files that have been in the recycle bin for longer than 30 days are automatically deleted permanently and free up storage space.')
  })

  it('Setting-Storage Utilization german test check', () => {
    cy.wait(3000)
    cy.get('#languageinput').select('Deutsch')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/settings/user`);
    cy.wait(1000)

    cy.get('.personal-settings-setting-box b').should('have.contain','Speicherplatz')
    // cy.get('.files-usage').should('have.contain','Dateien:')
    // cy.get('.photos-usage').should('have.contain','Fotos & Videos:')
    // cy.get('.bin-usage').should('have.contain','Papierkorb:')
    cy.get('.recycle-para').should('have.contain','Der Papierkorb wird automatisch aufgeräumt.')
    cy.get('.para-2').should('have.contain','Dateien, die länger als 30 Tage im Papierkorb liegen, werden automatisch endgültig gelöscht und geben Speicherplatz frei.')

  })

})
