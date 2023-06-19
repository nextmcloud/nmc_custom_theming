describe('Themes related changes', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('.input-field__main-wrapper #user').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.input-field__main-wrapper #password').type(`${Cypress.env('local').password}{enter}`)
})

  it('GARD ticket 323 text change in english', () => {
    cy.wait(3000)
    cy.get('#user-menu').click()
    cy.wait(1000)
    cy.get('#settings.menu-entry').click()
    cy.wait(2000)
    cy.get('#account-setting-language').select('Deutsch (Förmlich: Sie)')
    cy.wait(2000)
    cy.get('.unified-search__trigger').click()
    cy.get('.search-input-label').should('have.text','Search files or folders …')
  })

  it('English language  : check the sub menu for file section check box', () => {
  cy.visit(`${Cypress.env('local').app_url}/apps/files`);
  cy.get('.files-fileList td').first().find('input').check({force: true} );
  cy.get('.filesSelectionMenu').contains('span','Move or copy').should('have.class','label')

  })

    
  it('Search box related Css changes', () => {
    cy.wait(5000)
    cy.get('.unified-search__trigger').click()
    cy.get('#header-menu-unified-search').should('have.css','width', '496px').should('have.css','border-radius', '8px')
    cy.get('#header-menu-unified-search').should('have.css','padding', '14px').should('have.css','position', 'absolute')
    cy.get('.search-input-label').should('have.css','position', 'absolute').should('have.css','left', '12px').should('have.css','top', '12px')
  })


  it('check the sub menu for file section check box and check that last option is cancel', () => {
    cy.wait(5000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files`);
    cy.get('.files-fileList td').first().find('input').check({force: true} );
    cy.wait(5000)
    cy.get('.filesSelectionMenu').find('li').last().should('contain.text','Abbrechen')
  })


  it('check the sub menu for file section check box', () => {
    cy.wait(5000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files`);
    cy.get('.files-fileList td').first().find('input').check({force: true} );
    cy.wait(5000)
    cy.get('.filesSelectionMenu').contains('span','Verschieben oder kopieren').should('have.class','label')
    cy.get('#selectedActionsList .item-tags').should('have.css','display', 'none')
  })
  
})
