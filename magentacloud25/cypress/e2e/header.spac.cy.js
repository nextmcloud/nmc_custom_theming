describe('Sharing app related changes', () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
      cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
      cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
    })

    it('Check for logo ', () => {
        cy.get('.header-brandbar-logo').find('svg').should('have.class','brandbar-logo-magenta')
    })

    it('Check for logo color and css ', () => {
        cy.get('.header-brandbar-logo').find('svg').should('have.class','brandbar-logo-magenta').should('have.css', 'color', 'rgb(25, 25, 25)')
    })

    it('Check for logo text match ', () => {
        cy.get('.header-left').find('h5').should('contain.text','MagentaCLOUD')
    })

    it('Check for logo color and css match ', () => {
        cy.get('.header-left').find('span').should('contain.text','CLOUD').should('have.css', 'font-weight', '400').should('have.css', 'font-size', '25px')
    })

    // Footer
    it('Check for footer section ', () => {
        cy.get('.brand-footer-bar').find('div').should('have.class','brand-footer-bar-text') //.should('have.css','color','#666666 !important')
    })

    it('Check for footer section text match ', () => {
        cy.get('.brand-footer-bar').find('div').should('contain','Telekom Deutschland GmbH')
    })

    it('Check for footer section text match for first li link ', () => {
        cy.get('.brand-footer-nav').find('li').first().should('contain.text','Impressum')
    })

    it('Check for footer section first li color and css match ', () => {
        cy.get('.brand-footer-nav').find('li').first().should('contain.text','Impressum').should('have.css', 'width', '79.125px').should('have.css', 'color', 'rgb(25, 25, 25)')
    })

    it('Check for footer last section text match ', () => {
        cy.get('.brand-footer-nav').find('li').last().should('contain.text','Hilfe & FAQ')
    })

})

    