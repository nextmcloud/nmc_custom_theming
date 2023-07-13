describe('My shares related changes', () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files`);
      cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
      cy.get('#password').type(`${Cypress.env('local').password}{enter}`)
    })

    it('Create a new link for first document or folder in the list ', () => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files/?dir=/&view=sharingout`);
        cy.wait(3000)
        cy.get('#fileList td .fileactions .action-share').first().click({force: true} );
        cy.contains('Add link').click()
     })

     it('share file with external share ', () => {
      cy.wait(3000)
      cy.get('#fileList td .fileactions .action-share').first().click({force: true} );
    
      cy.get('input[placeholder*="Name, email, or Federated Cloud ID …"]').focus().type(makeid(10)).click({force : true})
      cy.wait(300)
      cy.get('.option__details > span').first().click()
      cy.wait(1300)
      cy.get('.sharing-permissions > .status-buttons__primary').click({force : true})
      cy.wait(1300)
      cy.get('.status-buttons__primary').click({force : true})
      
    })

     function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result+'@mailinator.com'; 
   }

   // for pending shares..
   it('Create a accept click for pending share for first document or folder in the list ', () => {
      cy.wait(3000)
      cy.get('#fileList').then(($btn) => {
         if ($btn.hasClass('.pendingSharesList')) {
            cy.get('.pendingSharesList td .fileactions a').first().click({force: true} );
         } else {
           // do something else
         }
       })
     
   })

   it('Create a reject click for pending share for first document or folder in the list ', () => {
      
      cy.get('#fileList').then(($btn) => {
         if ($btn.hasClass('.pendingSharesList')) {
            cy.get('.pendingSharesList td .fileactions a').first().next().click({force: true} );
         } else {
           // do something else
         }
       })
   })
  

})