
describe('Sharing related changes', () => {
     beforeEach(() => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
      cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
      cy.get('#password').type(`${Cypress.env('local').password}{enter}`)

      })

     it('For language English check all translation for sharing', () => {
       cy.get('.settingsdiv').click()
       cy.wait(5000)
       cy.get('a[href*="/index.php/settings/user"]').contains('Einstellungen').click()
       cy.wait(2000)
       cy.get('#languageinput').select('English')
       cy.wait(2000)
       cy.visit(`${Cypress.env('local').app_url}/apps/files`);
       cy.wait(1000)
       cy.get('#fileList td .fileactions .action-share').last().click({force: true} );
       cy.get('aside').should('contain','Sharing')
       cy.get('aside').should('contain','You can create links or send shares by mail. If you invite MagentaCLOUD users, you have more opportunities for collaboration.')
       cy.get('aside').should('contain','Your shares')
       cy.get('.add-new-link-btn').should('have.css','font-size', '16px').should('have.css','border-radius','4px').should('have.css','height','40px');
       cy.get('li.sharing-entry').first().should('have.css','align-items','flex-start')
       cy.get('.custom-select').should('have.css','height','24px','border-radius','12px')
       cy.get('.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container .app-sidebar-header__maintitle').should('have.css','font-size','16px')
       cy.get(".action-item__menutoggle").eq(1).click();
    })
  })

 describe('Sharing related changes', () => {
      beforeEach(() => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
      cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
      cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
      })
     it('For language German check all translation for sharing', () => {
        cy.wait(5000)
        cy.get('.settingsdiv').click()
        cy.wait(2000)
        cy.get('a[href*="/index.php/settings/user"]').contains('Settings').click()
        cy.wait(2000)
        cy.get('#languageinput').select('Deutsch')
        cy.wait(2000)
        cy.visit(`${Cypress.env('local').app_url}/apps/files`);
        cy.wait(2000)
        cy.get('#fileList td .fileactions .action-share').last().click({force: true} );
        cy.get('aside').should('contain','Teilen')
        cy.get('aside').should('contain','Sie können Links erstellen oder Freigaben per Mail versenden. Wenn Sie MagentaCLOUD Nutzer einladen, bieten sich Ihnen mehr Möglichkeiten der Zusammenarbeit.')
        cy.get('aside').should('contain','Ihre Freigaben')
        cy.get('.add-new-link-btn').should('contain','Link erstellen')

       })
      })


