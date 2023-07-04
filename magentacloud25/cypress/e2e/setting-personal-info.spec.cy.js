describe('setting personal info related changes', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
        cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
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

        it('should have correct styling for personal info h2 tag', () => {
            clickAccountSetting();
            cy.get('#personal-settings h2')
                .should('have.css', 'margin-left', '4.45312px')
                .and('have.css', 'color', 'rgb(25, 25, 25)') 
                .and('have.css', 'font-weight', '700')
                .and('have.css', 'font-size', '20px') 

            })
        
        it('should have correct styling for text box',()=>{
            clickAccountSetting();
            cy.get('.personal-settings-container .personal-settings-setting-box input[type=text], input[type=email]')
            .should('have.css', 'width', '432px') 
            .and('have.css', 'height', '48px')
            .and('have.css', 'padding', '12px 12px 12px 11.008px') 
            .and('have.css', 'background-color', 'rgb(229, 229, 229)') 
            
        })

        it('should have correct styling for email box',()=>{
            clickAccountSetting();
            cy.get('profile-settings-container .personal-settings-setting-box input[type=text],input[type=email]')
            .should('have.css', 'width', '432px') 
            .and('have.css', 'height', '48px')
            .and('have.css', 'padding', '12px 12px 12px 11.008px') 
            .and('have.css', 'background-color', 'rgb(229, 229, 229)')         
        })

        it('should have correct color for change login password link',()=>{
            clickAccountSetting();
            cy.get('.alt-email-text a')
            .should('have.css', 'color') 
            .and('eq', 'rgb(226, 0, 116)'); 

        })

        it('should have correct width for language selection', () => {
            clickAccountSetting();
            cy.get('select#account-setting-language')
              .should('have.css','width','432px');
          });
        
          it('should have correct height for language selection', () => {
            clickAccountSetting();
            cy.get('select#account-setting-language')
              .should('have.css', 'height', '48px');
          });
        
          it('should have correct padding for language selection', () => {
            clickAccountSetting();
            cy.get('select#account-setting-language')
              .should('have.css', 'padding', '12px 28px 12px 11.008px');
          });
        
          it('should have correct background color for language selection', () => {
            clickAccountSetting();
            cy.get('select#account-setting-language')
              .should('have.css', 'background-color', 'rgb(255, 255, 255)');
          });
        
          it('should have correct border for language selection', () => {
            clickAccountSetting();
            cy.get('select#account-setting-language')
              .should('have.css', 'border', '1px solid rgb(25, 25, 25)');
          });

        
        
          it('should be displayed as inline block for language selection', () => {
            clickAccountSetting();
            cy.get('select#account-setting-language')
              .should('have.css', 'display', 'block');
          });
        
          it('should have unset border radius for language selection', () => {
            clickAccountSetting();
            cy.get('select#account-setting-language')
              .should('have.css', 'border-radius', '0px');
          });
        

        })  

    


        