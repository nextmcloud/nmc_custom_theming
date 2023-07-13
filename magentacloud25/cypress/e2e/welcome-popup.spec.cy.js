
describe('Themes related changes', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
    cy.get('#password').type(`${Cypress.env('local').password}{enter}`)
  })



  it('Open welcome popup', () => {
    cy.wait(2000)
    cy.get('.settingsdiv').click()
    cy.wait(5000)
    cy.get("#expanddiv li[data-id='nmc_welcome_popup-about'] a").should('contain.text','Neuigkeiten').click()
    cy.get('.nmc_welcome_popup-header h2').should('have.css','font-weight','700').should('have.css','text-align','left').should('have.css','padding','0px')
    cy.get('.modal-body').should('have.css','padding','0px 24px')
    cy.get('#nmc_welcome_popup .logo img').should('have.css','display','block').should('have.css','padding-top','4px')
    cy.get('.modal-body .content').should('have.css','padding','20px 0px')
    cy.get('#nmc_welcome_popup .modal-footer').should('have.css','text-align','right').should('have.css','justify-content','space-between').should('have.css','margin-top','32px')
    cy.get('.modal-footer .pagination').should('have.css','float','left').should('have.css','height','40px').should('have.css','opacity','0.6')
    cy.get('button.primary').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','border-radius','8px').should('have.css','font-size','16px').should('have.css','overflow','hidden').should('have.css','vertical-align','middle')
  })

 })





