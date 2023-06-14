describe('Activity related changes', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('local').app_url}/apps/files/?dir=/&view=nmc_files_activity`);
    cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
    cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
  })

  it('Check Css for delete activity button', () => {
    cy.get('.del-files-activity-div').find('a').should('have.class','del-files-activity')
    cy.get('.file-activity-heading').should('have.css', 'font-size', '20px').should('have.css', 'margin-top', '48px').should('have.css', 'margin-bottom', '16px').should('have.css', 'margin-left', '16px').should('have.css', 'font-weight', '700');
    cy.get('.file-activity-note').should('have.css', 'font-size', '16px').should('have.css', 'margin-left', '16px').should('have.css', 'margin-bottom', '16px').should('have.css', 'margin-right', '16px').should('have.css', 'font-size', '16px');
    cy.get('.del-files-activity').find('button').should('have.css', 'background-color', 'rgb(226, 0, 116)').should('have.css', 'height', '40px').should('have.css', 'border-radius', '8px').should('have.css', 'color', 'rgb(255, 255, 255)');
  })


  it('For language English check all translation of activity page like heading, title and delete button', () => {
    cy.wait(3000)
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Einstellungen').click()
    cy.wait(2000)
    cy.get('#languageinput').select('English')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files/?dir=/&view=nmc_files_activity`);
    cy.wait(1000)

    cy.get('.file-activity-heading').should('have.contain','Activities')
    cy.get('.file-activity-note').should('have.contain','Notifications are only visible to you and are stored just as securely encrypted in your MagentaCLOUD as your data. You can still delete your activities. Please note that activities regarding shared content cannot be deleted, as they belong to the sharer.		')
    cy.get('.del-files-activity .btn-default').should('have.contain','Delete all activities')
  })

  it('For language German check all translation of activity page like heading, title and delete button', () => {
    cy.wait(3000)
    cy.get('.settingsdiv').click()
    cy.wait(1000)
    cy.get('a[href*="/index.php/settings/user"]').contains('Settings').click()
    cy.wait(2000)
    cy.get('#languageinput').select('Deutsch')
    cy.wait(2000)
    cy.visit(`${Cypress.env('local').app_url}/apps/files/?dir=/&view=nmc_files_activity`);
    cy.wait(1000)
    cy.get('.file-activity-heading').should('have.contain','Aktivitäten')
    cy.get('.file-activity-note').should('have.contain','Benachrichtigungen sind nur für Sie einsehbar und genauso sicher verschlüsselt in Ihrer MagentaCLOUD gespeichert, wie Ihre Daten. Sie können trotzdem Ihre Aktivitäten löschen. Beachten Sie, dass Aktivitäten bezüglich geteilter Inhalte nicht gelöscht werden können, da diese zu dem Teilenden gehören.')
    cy.get('.del-files-activity .btn-default').should('have.contain','Alle Aktivitäten löschen')

  })

})
