describe('Settings related changes', () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
      cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
      cy.get('#password').type(`${Cypress.env('local').password}{enter}`)
    })

    function clickAccountSetting(){
      cy.get('#user-menu')
      .click();
      cy.get("#settings")
    }
    it('should match details in storage utilization text as per english language',()=>{
      clickAccountSetting();
      cy.get('#account-setting-language').select('English (US)')
      cy.get('h3.headerbar-label.setting-property')
        .should('exist')
        .within(() => {
          cy.contains('span', 'Details')
            .should('be.visible');
        });
    })

    it('should match media details text in storage utilization as per english language',()=>{
        clickAccountSetting();
        cy.get('#account-setting-language').select('English (US)')
        cy.get('.extra-details:first')
        .should('contain', 'Files');

        cy.get('.extra-details')
        .should('contain', 'Photos & videos');

        cy.get('.extra-details')
        .should('contain', 'Recycle Bin');
    
    })

    it('should recycle bin text details as per english language',()=>{
      clickAccountSetting();
      cy.get('#account-setting-language').select('English (US)')
      cy.get('.recycle-para')
      .should('contain', 'The recycle bin is automatically tidied up.');
      cy.get('.para-2')
      .should('contain', 'Files that have been in the recycle bin for longer than 30 days are automatically deleted permanently and free up storage space.');
    })

})
