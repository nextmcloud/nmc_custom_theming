
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false
  }
})

describe('Sharing related changes', () => {
  beforeEach(function () {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
     cy.get('#password').type(`${Cypress.env('local').password}{enter}`)
  })

    it('For language English check all translation for sharing', () => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files`);
      cy.wait(1000)
      cy.get('.files-fileList .filename').first().find('span').first().click({force: true} );//.fileactions .action-share').click({force: true} );
      cy.get('aside').should('contain','Sharing')
      // cy.get('aside').should('contain','You can create links or send shares by mail. If you invite MagentaCLOUD users, you have more opportunities for collaboration.')
      // cy.get('aside').should('contain','Your shares')
      //  cy.get('.add-new-link-btn').should('have.css','font-size', '16px').should('have.css','border-radius','4px').should('have.css','height','40px');
      //  cy.get('li.sharing-entry').first().should('have.css','align-items','flex-start')
      //  cy.get('.custom-select').should('have.css','height','24px','border-radius','12px')
      //  cy.get('.app-sidebar .app-sidebar-header__desc .app-sidebar-header__title-container .app-sidebar-header__maintitle').should('have.css','font-size','16px')
      //  cy.get(".action-item__menutoggle").eq(1).click();
    })
  
    it('Click on add link button', () => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files`);
      cy.wait(1000)
      cy.get('.files-fileList .filename').first().find('span').first().click({force: true} );//.fileactions .action-share').click({force: true} );
      cy.get('#sharing').click({force: true} );//.fileactions .action-share').click({force: true} );
      cy.get('.add-new-link-btn').click({force: true} );//.fileactions .action-share').click({force: true} );
    })

    it('Call external share functionaity', () => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files`);
      cy.wait(1000)
      cy.get('.files-fileList .filename').first().find('span').first().click({force: true} );//.fileactions .action-share').click({force: true} );
      cy.get('#sharing').click({force: true} );//.fileactions .action-share').click({force: true} );
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

    

  })

//  describe('Sharing related changes', () => {
//       beforeEach(() => {
//       cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
//       cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
//       cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
//       })
//      it('For language German check all translation for sharing', () => {
//         cy.wait(5000)
//         cy.get('.settingsdiv').click()
//         cy.wait(2000)
//         cy.get('a[href*="/index.php/settings/user"]').contains('Settings').click()
//         cy.wait(2000)
//         cy.get('#languageinput').select('Deutsch')
//         cy.wait(2000)
//         cy.visit(`${Cypress.env('local').app_url}/apps/files`);
//         cy.wait(2000)
//         cy.get('#fileList td .fileactions .action-share').last().click({force: true} );
//         cy.get('aside').should('contain','Teilen')
//         cy.get('aside').should('contain','Sie können Links erstellen oder Freigaben per Mail versenden. Wenn Sie MagentaCLOUD Nutzer einladen, bieten sich Ihnen mehr Möglichkeiten der Zusammenarbeit.')
//         cy.get('aside').should('contain','Ihre Freigaben')
//         cy.get('.add-new-link-btn').should('contain','Link erstellen')

//        })


//        it('For language German check all translation for sharing', () => {
//         cy.wait(5000)
//         cy.visit(`${Cypress.env('local').app_url}/apps/files`);
//         cy.wait(2000)
//         cy.get('#fileList td .fileactions .action-share').last().click({force: true} );
//         cy.get('aside').should('contain','Teilen')
//         cy.get('aside').should('contain','Sie können Links erstellen oder Freigaben per Mail versenden. Wenn Sie MagentaCLOUD Nutzer einladen, bieten sich Ihnen mehr Möglichkeiten der Zusammenarbeit.')
//         cy.get('aside').should('contain','Ihre Freigaben')
//         cy.get('.add-new-link-btn').should('contain','Link erstellen')

//        })

//       it('Create a reject click for pending share for first document or folder in the list ', () => {
//         cy.get('#fileList').then(($btn) => {
//             if ($btn.hasClass('.pendingSharesList')) {
//               cy.get('.pendingSharesList td .fileactions a').first().next().click({force: true} );
//             } else {
//              // do something else
//             }
//           })
//       })
// })


