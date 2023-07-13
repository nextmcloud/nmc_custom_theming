describe('FIle sharing guest view styling changes', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
        cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
        cy.get('#password').type(`${Cypress.env('local').password}{enter}`)
        })

    it('should have download text in header', () => {
        cy.visit(`${Cypress.env('local').app_url}/s/JK9yJaenkCzJ2Zx#`);
        cy.get('.gust-download-label').should('exist');
        cy.get('.gust-download-label').should('have.contain','Download')
        })

    it('should have download icon present before download text', () => {
        cy.visit(`${Cypress.env('local').app_url}/s/JK9yJaenkCzJ2Zx#`);
        cy.get('.gust-download-svg').should('exist')
        })
    

    it('should have centered alignment for main content ',()=>{
        cy.visit(`${Cypress.env('local').app_url}/s/JK9yJaenkCzJ2Zx#`);
        cy.get('#files-public-content')
        .should('have.css', 'display', 'flex')
        .should('have.css', 'justify-content', 'center')
        .should('have.css', 'align-items', 'center');
    })

    it('should have appropriate spacing while displaying banner of content',()=>{
        cy.visit(`${Cypress.env('local').app_url}/s/JK9yJaenkCzJ2Zx#`);
        cy.get('#files-public-content #imgframe')
        .should('have.css', 'padding', '24px 0px 16px');
    })

    it('should have appropriate styling for download button',()=>{
        cy.visit(`${Cypress.env('local').app_url}/s/JK9yJaenkCzJ2Zx#`);
        cy.get('.directDownload #downloadFile')
        .should('have.css','margin-top','16px');
        
    })

    it('should match the appropriate text given for footer',()=>{
        cy.visit(`${Cypress.env('local').app_url}/s/JK9yJaenkCzJ2Zx#`);
        cy.get('.content-para').should('contain', 'The MagentaCLOUD is Telekom\'s secure and free online storage. Ideal for your photos, videos and any other files you want to store securely. You can upload your data directly from your smartphone, tablet or PC, access it from anywhere and easily share it with family and friends.')
    })

    it('footer button should have appropriate text',()=>{
        cy.visit(`${Cypress.env('local').app_url}/s/JK9yJaenkCzJ2Zx#`);
        cy.get('.informNow').should('contain','Inform Now');
    })

    it('footer div should remove on click of close button',()=>{
        cy.visit(`${Cypress.env('local').app_url}/s/JK9yJaenkCzJ2Zx#`);
        cy.get('.closePopup').click().should('have.css', 'visibility', 'hidden');
    })
    
})
   

    



