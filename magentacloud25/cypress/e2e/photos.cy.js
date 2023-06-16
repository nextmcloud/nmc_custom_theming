/**
 * @copyright Copyright (c) 2022 Louis Chmn <louis@chmn.me>
 *
 * @author Louis Chmn <louis@chmn.me>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */ 
 const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
 Cypress.on('uncaught:exception', (err) => {
   /* returning false here prevents Cypress from failing the test */
   if (resizeObserverLoopErrRe.test(err.message)) {
     return false
   }
 })
 
 describe('My Folders', () => {
   before(function () {
     cy.visit(`${Cypress.env('local').app_url}/apps/photos/`);
     cy.get('#user').type(`${Cypress.env('local').user}{enter}`)
     cy.get('#password').type(`${Cypress.env('local').password}{enter}`)
   })

    it('Go to my album section fail case', () => {
        cy.get('.app-navigation__list > .app-navigation-entry-wrapper > .app-navigation-entry').find('span').should('contain.text', 'Folders')
    })

    it('Go to my album section success case', () => {
        cy.get('.app-navigation__list > .app-navigation-entry-wrapper > .app-navigation-entry').find('span').should('contain.text', 'Folders')
    })

    it('Go to my folder section and check separate files and folder section', () => {
      cy.get('a[href*="/folders"]').click()
        cy.get('#content-vue > #app-content-vue > div').should('contain.text', 'Folders')
    })

    it('Go to my album section and check separate files section if folder are not available', () => {
        cy.get('#content-vue > #app-content-vue > div .list-title').should('have.text', 'Files')
    })
    // Translation script
    
    it('Go to my album section fail case', () => {
      cy.get('.app-navigation__list > .app-navigation-entry-wrapper > .app-navigation-entry').find('span').should('contain.text', 'Ordner')
  })

  it('Go to my album section success case', () => {
      cy.get('.app-navigation__list > .app-navigation-entry-wrapper > .app-navigation-entry').find('span').should('contain.text', 'Ordner')
  })

  it('Go to my folder section and check separate files and folder section', () => {
    cy.get('a[href*="/folders"]').click()
      cy.get('#content-vue > #app-content-vue > div').should('contain.text', 'Ordner')
  })

  it('Go to my album section and check separate files section if folder are not available', () => {
      cy.get('#content-vue > #app-content-vue > div .list-title').should('have.text', 'Dateien')
  })
  

 })

 