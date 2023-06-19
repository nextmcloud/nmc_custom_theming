import * as iconConstant from '../../constants'
describe('Text app styling changes', () => { 
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
    cy.get('#password').type(`${Cypress.env('local').password}{enter}`)
    })

    it('table element click', () => {
    cy.wait(5000);
    cy.get('table.files-filestable.list-container.has-controls') 
    .find('tbody tr') 
    .eq(1) 
    .click();
    cy.wait(3000);
    })

   it('Text app Menubar styling',()=>{
    cy.get('.text-menubar__entries .button-vue--icon-only.button-vue--vue-tertiary .material-design-icon')
    .should('have.css', 'width', '39px')
    .should('have.css', 'height', '24px')
    .should('have.css','padding','0px')
     cy.wait(3000)
    })

   it('verify icons  are present or not',()=>{
    cy.get('.arrow-u-left-top-icon')
    .should('have.css', 'background-image', iconConstant.iconBackwardCustom);

    cy.get('.arrow-u-right-top-icon')
    .should('have.css', 'background-image', iconConstant.iconForwardCustom);

    cy.get('.format-bold-icon')
    .should('have.css', 'background-image', iconConstant.iconBoldCustom);

    cy.get('.format-italic-icon')
    .should('have.css', 'background-image', iconConstant.iconItalicCustom);

    cy.get('.format-underline-icon')
    .should('have.css', 'background-image', iconConstant.iconUnderlineCustom );

    cy.get('.format-strikethrough-icon')
    .should('have.css', 'background-image', iconConstant.iconStrikeCustom);
    
    cy.get('.format-header1-icon')
    .should('have.css', 'background-image', iconConstant.iconH1Custom);

    cy.get('.format-list-bulleted-icon')
    .should('have.css', 'background-image', iconConstant.iconUlCustom);

    cy.get('.format-list-numbered-icon')
    .should('have.css', 'background-image', iconConstant.iconOlCustom);

    cy.get('.format-list-checkbox-icon')
    .should('have.css', 'background-image', iconConstant.iconTasklistCustom);

    cy.get('.format-quote-close-icon')
    .should('have.css', 'background-image', iconConstant.iconQuoteCustom);

    cy.get('.code-tags-icon')
    .should('have.css', 'background-image', iconConstant.iconCodeCustom);

    cy.get('.emoticon-outline-icon')
    .should('have.css', 'background-image', iconConstant.iconEmojiCustom );

    cy.get('.image-multiple-outline-icon')
    .should('have.css', 'background-image', iconConstant.iconImageCustom );

    cy.get('.table-icon')
    .should('have.css', 'background-image', iconConstant.iconTableCustom);

    cy.get('.help-circle-icon')
    .should('have.css', 'background-image', iconConstant.iconHelpCustom);

   })


   

    

})