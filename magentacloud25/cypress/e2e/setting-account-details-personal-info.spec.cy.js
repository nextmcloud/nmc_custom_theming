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

      it('should match account details name & language text by selecting english language', () => {
        clickAccountSetting();
        cy.get('#account-setting-language').select('English (US)')
        cy.get('.headerbar-label label:first')
        .should('contain', 'Full name');

        cy.get('.headerbar-label label:eq(1)')
        .should('contain', 'Language');

        cy.get('.headerbar-label label:eq(2)')
        .should('contain', 'Email');

      })

      it('should match account details email text by selecting english language', () => {
        clickAccountSetting();
        cy.get('#account-setting-language').select('English (US)')
        cy.get('.profile-settings-container em')
        .should('contain', 'Primary email for password reset and notifications');
        
        cy.get('.alt-email-text p')
        .within(() => {
          cy.get('label')
            .should('contain', 'You can add an alternative email address to receive your notifications there. It will also be used as an address for shared content. Your password can be changed in the')
          cy.get('a')
            .should('contain','login settings')
          
        });
      })
        
      it('should match account details name & language text by selecting Deutsch language', () => {
        clickAccountSetting();
        cy.get('#account-setting-language').select('Deutsch (Förmlich: Sie)')
        cy.get('.headerbar-label label:first')
        .should('contain', 'Vollständiger Name');

        cy.get('.headerbar-label label:eq(1)')
        .should('contain', 'Sprache');

        cy.get('.headerbar-label label:eq(2)')
        .should('contain', 'E-Mail');

      })

      it('should match account details email text by selecting Deutsch language', () => {
        clickAccountSetting();
        cy.get('#account-setting-language').select('Deutsch (Förmlich: Sie)')
        cy.get('.profile-settings-container em')
        .should('contain', 'Primäre E-Mail-Adresse für Benachrichtigungen und Passwort-Zurücksetzen');
        
        cy.get('.alt-email-text p')
        .within(() => {
          cy.get('label')
            .should('contain', 'Sie können eine alternative E-Mail-Adresse angeben um Ihre Benachrichtigungen dort zu erhalten. Sie wird ebenfalls als Adresse für geteilte Inhalte verwendet. Ihr Passwort können Sie in den')
          cy.get('a')
            .should('contain','Login-Einstellungen')
          
        });

      })


      })  

    


        