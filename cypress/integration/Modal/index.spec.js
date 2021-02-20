/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('Modal', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/modal');
  });

  describe('Interaction', () => {
    it('Open and close', () => {
      cy.datatest('openModalButton')
        .click()
        .get('.modal-window')
        .should('be.visible')
        .get('.modal-cross')
        .click()
        .get('.modal-window')
        .should('not.exist')
    });

    it('Different closing methods', () => {
      cy.datatest('openModalButton')
        .click()
        .get('.modal-window')
        .should('be.visible')
        .get('.modal-cross')
        .click()
        .get('.modal-window')
        .should('not.exist')
        .datatest('openModalButton')
        .click()
        .get('.modal-window')
        .should('be.visible')
        .name('cancel')
        .click()
        .get('.modal-window')
        .should('not.exist')
        .datatest('openModalButton')
        .click()
        .get('.modal-window')
        .should('be.visible')
        .get('.modal-wrapper')
        .click(0, 100)
        .get('.modal-window')
        .should('not.exist');
    });

    it('Closing with the ESС key', () => {
      cy.datatest('openModalButton')
        .click()
        .get('.modal-window')
        .should('be.visible');
      cy.focused().type('{esc}')
        .get('.modal-window')
        .should('not.exist');
    });

    it('Leave alert', () => {
      cy.datatest('openModalButton')
        .click()
        .datatest('openAlertLeaveButton')
        .click()
        .name('leave')
        .should('be.visible')
        .name('okButton')
        .click()
        .name('leave')
        .should('not.exist')
        .name('cancel')
        .click();
    });

    it('Simple alert', () => {
      cy.datatest('openModalButton')
        .click()
        .datatest('openAlertSimpleButton')
        .click()
        .name('simple')
        .should('be.visible')
        .get('.modal-alert-cross')
        .click()
        .name('simple')
        .should('not.exist')
        .name('cancel')
        .click();
    });
  });
});
