describe('Settings related changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/settings/user`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })

 it('Check Css for setting-Tarif', () => {
    cy.get('.personal-settings-tarrif').should('have.id','tarrifInfo')
    cy.get('#tarrifInfo').find('h4').should('have.css', 'margin-bottom', '16px')
    cy.get('#tarrifInfo').find('h4').should('have.css', 'font-size', '20px').should('have.css', 'margin-bottom', '16px').should('have.css', 'font-weight', '700');
  })



  it('Setting-Tarif english test check', () => {
    cy.wait(3000)
    cy.get('#languageinput').select('English')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/settings/user`);
    cy.wait(1000)

    cy.get('#tarrifInfo h4').should('have.contain','Tariff information')
    cy.get('#tarrifInfo').find('div').first('strong').should('have.contain','Your tariff')
    cy.get('#tarrifInfo').find('div').eq(1).find('strong').should('have.contain','Storage')
    cy.get('#tarrifInfo').find('div').eq(2).find('button').should('have.contain','Expand storage')

  })


  it('Setting-Tarif german test check', () => {
    cy.wait(3000)
    cy.get('#languageinput').select('Deutsch')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/settings/user`);
    cy.wait(1000)

    cy.get('#tarrifInfo h4').should('have.contain','Tarifinformationen')
    cy.get('#tarrifInfo').find('div').first('strong').should('have.contain','Ihr Tarif')
    cy.get('#tarrifInfo').find('div').eq(1).find('strong').should('have.contain','Speicher')
    cy.get('#tarrifInfo').find('div').eq(2).find('button').should('have.contain','Speicherplatz erweitern')
  })

})
