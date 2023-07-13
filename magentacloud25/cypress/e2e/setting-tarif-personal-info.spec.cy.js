describe('Settings related changes', () => {
    beforeEach(() =>  {
      cy.visit(`${Cypress.env('local').app_url}/apps/files/`),
      cy.get('#user').type(`${Cypress.env('local').user}{enter}`),
      cy.get('#password').type(`${Cypress.env('local').password}{enter}`)
    })

    function clickAccountSetting(){
      cy.wait(3000);
      cy.get('#user-menu')
      .click();
      cy.wait(3000);
      cy.get("#settings")
      .click();
    }

    it('should match tarrif header as per english language',()=>{
      clickAccountSetting();
      cy.get('#account-setting-language').select('English (US)')
      cy.get('#tarrifInfo-details h4')
      .should('contain', 'Tariff information');
    })

    it('should match tarrif details as per english language',()=>{
      clickAccountSetting();
      cy.get('#account-setting-language').select('English (US)')
      cy.get('.tarrifInfo-usage-details')
      .should('contain','Your tariff')
      cy.get('.tarrifInfo-usage-details')
      .should('contain','Storage')
    })

    it('should match text for expand storage label for button as per english language',()=>{
      clickAccountSetting();
      cy.get('#account-setting-language').select('English (US)')
      cy.get('.tarrifInfo-usage-details button')
      .should('contain','Expand storage')
    })

    it('should match tarrif header as per Deutsch language',()=>{
      clickAccountSetting();
      cy.get('#account-setting-language').select('Deutsch (Förmlich: Sie)')
      cy.get('#tarrifInfo-details h4')
      .should('contain', 'Tarifinformationen');
    })

    it('should match tarrif details as per Deutsch language',()=>{
      clickAccountSetting();
      cy.get('#account-setting-language').select('Deutsch (Förmlich: Sie)')
      cy.get('.tarrifInfo-usage-details')
      .should('contain','Ihr Tarif')
      cy.get('.tarrifInfo-usage-details')
      .should('contain','Speicher')
    })

    it('should match text for expand storage label for button as per Deutsch language',()=>{
      clickAccountSetting();
      cy.get('#account-setting-language').select('Deutsch (Förmlich: Sie)')
      cy.get('.tarrifInfo-usage-details button')
      .should('contain','Speicherplatz erweitern')
    })

})