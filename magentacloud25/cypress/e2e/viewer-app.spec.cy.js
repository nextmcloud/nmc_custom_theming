describe('Viewer app styling changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
    cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
    cy.get('#password').type(`${Cypress.env('local').password}{enter}`)
    })
    function clickOnTableRow(){
      cy.wait(3000);
      cy.get('tr[data-type="file"][data-mime^="image/"]')
      .first() 
      .click();
    }
    it('table element click', () => {
      clickOnTableRow();
      cy.wait(3000);
      })
      
    it('should have correct style for previous and next button',()=>{
      clickOnTableRow();
      cy.get('button.prev, button.next')
      .should('have.css', 'position', 'fixed')
      .should('have.css', 'top', '0px')
      .should('have.css', 'height', '70px')
      .should('have.css', 'opacity', '0.7')
      .should('have.css', 'z-index', '99999');
      })

    it('should have correct left align style for previous button', () => {  
      clickOnTableRow();
      cy.get('button.prev')
      .should('have.css', 'left')
      .then((leftValue) => {
        const parsedValue = parseInt(leftValue, 10);
        expect(parsedValue).to.be.closeTo(445, 1); 
      }); 
    });

    it('should have correct right align style for next button', () => {  
      clickOnTableRow();
      cy.get('button.next')
      .should('have.css', 'right')
      .then((rightValue) => {
        const parsedValue = parseInt(rightValue, 10);
        expect(parsedValue).to.be.closeTo(425, 1); 
      }); 
    });

    it('should have correct play pause button styles', () => {  
      clickOnTableRow();
      cy.get('#viewer .play-pause-icons')
      .should('have.css', 'left')
      .then((leftValue) => {
        const parsedValue = parseInt(leftValue, 10);
        expect(parsedValue).to.be.closeTo(498, 1); 
        }); 
    });

    it('should have border to the model wrapper',()=>{
      clickOnTableRow();
      cy.get('#viewer .modal-wrapper').should('have.css', 'border-top', '1px solid rgb(229, 229, 229)'
      )
    })

})