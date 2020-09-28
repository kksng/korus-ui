/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('Modal', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/modal');
  });

  describe('Open and Close', () => {
    it('should be closed', () => {
      cy.contains('Modal header')
        .should('not.be.visible')
    });

    it('should be open', () => {
      cy.get('[data-test=openModalButton]').click()
      cy.contains('Modal header')
        .should('be.visible')
    });

    it('should be closed', () => {
      cy.get('.modal-window > .modal-cross').click()
      cy.contains('Modal header')
        .should('not.be.visible')
    });
  });

  describe('Alert', () => {
    it('should open Alert', () => {
      cy.get('[data-test=openModalButton]').click()
      cy.contains('Simple alert')
        .should('not.be.visible')
      cy.get('[data-test=openAlertSimpleButton]').click()
      cy.contains('Simple alert')
        .should('be.visible')
    });

    it('should hide Modal close button', () => {
      cy.get('.modal-window > .modal-cross')
        .should('not.be.visible')
    });

    it('should disable Modal close on overlay click', () => {
      cy.get('.modal-wrapper').click()
      cy.contains('Simple alert')
        .should('be.visible')
    });

    it('should close Alert', () => {
      cy.get('.modal-alert > .modal-alert-cross').click()
      cy.contains('Simple alert')
        .should('not.be.visible')
    });

    it('should close Modal', () => {
      cy.contains('Modal header')
        .should('be.visible')
      cy.get('.modal-window > .modal-cross').click()
      cy.contains('Modal header')
        .should('not.be.visible')
    });
  });
});
