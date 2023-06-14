describe('Device and session settings related changes', () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
      cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
      cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
    })

    it('For language English check all translation for device and session page', () => {
      cy.get('.settingsdiv').click()
      cy.wait(5000)
      cy.get('a[href*="/index.php/settings/user"]').contains('Einstellungen').click()
      cy.wait(2000)
      cy.get('#languageinput').select('English')
      cy.wait(2000)
      cy.visit(`${Cypress.env('local').app_url}/settings/user/security`);
      cy.wait(1000)
      cy.get('#clientsbox').should('contain','Mobile applications')
      cy.get('#webdav-address').should('contain','WebDAV Address')
      cy.get('#webdav-address em').should('contain','With the WebDAV address, you can set up your MagentaCLOUD as a network drive on Windows, for example. You can find more information about WebDAV and how to use it')
      cy.get('#security.section h2').should('have.text','Sessions')
      cy.wait(5000)
      cy.get('#setting-tokens-table').should('contain','You can terminate individual sessions here or remove them completely. When terminating, a new login is necessary. If you delete a session, all data of your MagentaCLOUD on the respective device will also be removed.')
      cy.wait(5000)
      cy.get('#setting-session').should('contain','You can manually create a new session here and connect a new device to your MagentaCLOUD via login data or QR code.')
      cy.wait(5000)
      cy.get('.create-session').should('contain','Create new session')
      cy.wait(2000)
      cy.get('.create-session').click()
      cy.wait(3000)
      cy.get('.app-password-username-row .app-password-label').should('contain.text','Username')
      cy.wait(1000)
      cy.get('.app-password-row span').should('have.text','Password')
      cy.get('.app-password-code button').should('contain.text','Done')
      cy.get('.app-password-code a').should('contain.text','Show QR code')
      cy.get('#webdav-address input').should('have.css', 'width', '400px').should('have.css', 'height', '48px').should('have.css', 'background-color', 'rgb(229, 229, 229)')
      cy.get('#security table').should('have.css', 'max-width', '562px').should('have.css', 'border-collapse', 'collapse').should('have.css', 'width', '562px')
      cy.get('#setting-tokens-table').should('have.css', 'padding-top', '32px').should('have.css', 'padding-bottom', '24px')
    })


    it('For language German check all translation for device and session page', () => {
      cy.wait(3000)
      cy.get('.settingsdiv').click()
      cy.wait(1000)
      cy.get('a[href*="/index.php/settings/user"]').contains('Settings').click()
      cy.wait(2000)
      cy.get('#languageinput').select('Deutsch')
      cy.wait(2000)
      cy.visit(`${Cypress.env('local').app_url}/settings/user/security`);
      cy.wait(1000)
      cy.get('#clientsbox').should('contain','Mobile Applikationen')
      cy.get('#webdav-address').should('contain','WebDAV Adresse')
      cy.get('#webdav-address em').should('contain','Mit der WebDAV Adresse können sie ihre MagentaCLOUD z.B. als Netzlaufwerk bei Windows einrichten. Weitere Information über WebDAV und wie Sie es nutzen können finden Sie')
      cy.get('#security h2').should('have.text','Sitzungen')
      cy.get('#setting-tokens-table').should('contain','Sie können einzelne Sitzungen hier beenden oder ganz entfernen. Beim Beenden wird ein erneuter Login notwendig. Löschen Sie eine Sitzung, werden auch alle Daten ihrer MagentaCLOUD auf dem betreffenden Gerät entfernt.')
      cy.get('#setting-session').should('contain','Sie können hier manuell eine neue Sitzung erstellen und per Login-Daten oder QR-Code ein neues Gerät mit ihrer MagentaCLOUD verbinden.')
      cy.get('.create-session').should('contain','Neue Sitzung erstellen')
      cy.get('.create-session').click()
      cy.get('.app-password-username-row span').should('have.text','Benutzername')
      cy.get('.app-password-row span').should('have.text','Passwort')
      cy.get('.app-password-code button').should('contain','Erledigt')
      cy.get('.app-password-code a').should('contain','QR-Code anzeigen')
    })

})

describe('Account information settings related changes', () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env('local').app_url}/apps/files/`);
      cy.get('.grouptop input').type(`${Cypress.env('local').user}{enter}`)
      cy.get('.groupbottom input').type(`${Cypress.env('local').password}{enter}`)
    })

    it('For language English check all translation for account information page', () => {
      cy.get('.settingsdiv').click()
      cy.wait(5000)
      cy.get('a[href*="/index.php/settings/user"]').contains('Einstellungen').click()
      cy.wait(2000)
      cy.get('#languageinput').select('English')
      cy.wait(2000)
      cy.visit(`${Cypress.env('local').app_url}/settings/user`);
      cy.wait(1000)
      cy.get('#monthly-notifications-settings h1').should('contain.text','Regular mails')
      cy.wait(5000)
      cy.get('#monthly-notifications-settings [type="checkbox"]').check()
      cy.wait(2000)
      cy.get('#monthly-notifications-settings label').should('contain','Monthly Status Report')
      cy.get('.settings-hint').should('contain.text','The status report informs you monthly by email about storage space, your shares and gives you useful tips about the MagentaCLOUD.')
      cy.get('#monthly-notifications-settings').should('have.css', 'display', 'block').should('have.css', 'max-width', '700px').should('have.css', 'padding-left', '16px')
      cy.wait(5000)
      cy.get('#personal-settings-avatar-container h3').should('contain.text','Account details')
      cy.wait(2000)
      cy.get('#displaynameform label').should('contain','Name')
      cy.get('#language label').should('contain','Language')
      cy.wait(1000)
      cy.get('.multiple-mail').find('div label').first().should('contain','Mail address')
      cy.wait(5000)
      cy.get('.telekom-link label').should('contain','You can add an alternative email address to receive your notifications there. It will also be used as an address for shared content. Your password can can be changed in the ')
      cy.get('#displaynameform [type="text"]').should('have.css', 'width', '400px').should('have.css', 'height', '48px').should('have.css', 'background-color', 'rgb(229, 229, 229)')
    })

    it('For language German check all translation for account information page', () => {
      cy.wait(3000)
      cy.get('.settingsdiv').click()
      cy.wait(1000)
      cy.get('a[href*="/index.php/settings/user"]').contains('Settings').click()
      cy.wait(2000)
      cy.get('#languageinput').select('Deutsch')
      cy.wait(2000)
      cy.visit(`${Cypress.env('local').app_url}/settings/user`);
      cy.wait(1000)
      cy.get('#monthly-notifications-settings h1').should('contain.text','Regelmäßige Mails')
      cy.wait(5000)
      cy.get('#monthly-notifications-settings [type="checkbox"]').check()
      cy.wait(2000)
      cy.get('#monthly-notifications-settings label').should('contain','Monatlicher Statusbericht')
      cy.get('.settings-hint').should('contain.text','Der Status-Bericht informiert Sie monatlich per E-Mail über Speicherplatz, Ihre Freigaben und gibt Ihnen nützliche Tipps rund um die MagentaCLOUD.')
      cy.wait(5000)
      cy.get('#personal-settings-avatar-container h3').should('contain.text','Kontodaten')
      cy.wait(2000)
      cy.get('#displaynameform label').should('contain','Name')
      cy.get('#language label').should('contain','Sprache')
      cy.wait(1000)
      cy.get('.multiple-mail').find('div label').first().should('contain','E-Mail-Adresse')
      cy.wait(5000)
      cy.get('.telekom-link label').should('contain','Sie können eine alternative E-Mail-Adresse angeben um Ihre Benachrichtigungen dort zu erhalten. Sie wird ebenfalls als Adresse für geteilte Inhalte verwendet. Ihr Passwort können Sie in den Login-Einstellungen für alle Telekom Dienste ändern.    ')
    })
})
