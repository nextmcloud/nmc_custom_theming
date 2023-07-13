describe('Text app styling changes', () => { 
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
    cy.get('#password').type(`${Cypress.env('local').password}{enter}`)
    })

    function tableElementClick(){
      cy.get('tr[data-type="file"][data-mime="text/markdown"]')
      .first() 
      .click(); 
    }

    it('should able to click table element', () => {
      tableElementClick();
    })

   it('should able to match appropriate styling',()=>{
      cy.get('.text-menubar__entries .button-vue--icon-only.button-vue--vue-tertiary .material-design-icon')
        .should('have.css', 'width', '39px')
        .should('have.css', 'height', '24px')
        .should('have.css','padding','0px')
    })

    it('should present forward and backword icons',()=>{
      tableElementClick();
      cy.get('.arrow-u-left-top-icon')
      .should('have.class', 'arrow-u-left-top-icon');

      cy.get('.arrow-u-right-top-icon')
      .should('have.class', 'arrow-u-right-top-icon');
    })

    it('should present bold and italic icons',()=>{
      tableElementClick();
      cy.get('.format-bold-icon')
      .should('have.class', 'format-bold-icon');

      cy.get('.format-italic-icon')
      .should('have.class', 'format-italic-icon');
    })


    it('should present underline and strikethrogh icons',()=>{
      tableElementClick();
      cy.get('.format-underline-icon')
      .should('have.class', 'format-underline-icon');

      cy.get('.format-strikethrough-icon')
      .should('have.class', 'format-strikethrough-icon');
    })

    it('should present bullets and number icons',()=>{
      tableElementClick();
      cy.get('.format-list-bulleted-icon')
      .should('have.class', 'format-list-bulleted-icon');

      cy.get('.format-list-numbered-icon')
      .should('have.class', 'format-list-numbered-icon');
    })

    it('should present header and to do list icons',()=>{
      tableElementClick();

      cy.get('.format-header1-icon')
      .should('have.class', 'format-header1-icon');

      cy.get('.format-list-checkbox-icon')
      .should('have.class', 'format-list-checkbox-icon');

    })

    it('should present quote and code block icons',()=>{
      tableElementClick();

      cy.get('.format-quote-close-icon')
      .should('have.class', 'format-quote-close-icon');

      cy.get('.format-list-checkbox-icon')
      .should('have.class', 'format-list-checkbox-icon');

    })

    it('should present table and emoticon icons',()=>{
      tableElementClick();

      cy.get('.emoticon-outline-icon')
      .should('have.class', 'emoticon-outline-icon');

      cy.get('.table-icon')
      .should('have.class', 'table-icon');

    })

    it('should present attachment and help icon',()=>{
      tableElementClick();

      cy.get('.image-multiple-outline-icon')
      .should('have.class', 'image-multiple-outline-icon');

      cy.get('.help-circle-icon')
      .should('have.class', 'help-circle-icon');
    })

})
