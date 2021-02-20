const { find } = require('lodash');
const { contains } = require('../../../korus-ui/components/StatusBar/helpers');

describe('Notifications', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/notifications');
  });

  describe('Interactions', () => {
    it('Closing by clicking on the button', () => {
      cy.name('accept')
        .click()
        .parent()
        .find('.notifications-item')
        .contains('Принять')
        .should('be.visible')
        .click()
        .get('.notifications-item')
        .should('not.exist');
    });

    it('Open and close on click', () => {
      cy.name('default')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible')
        .parents()
        .find('.notifications-icon-close')
        .click()
        .get('.notifications-wrapper')
        .should('not.exist');
    });

    it('Open and close with delay 1200ms', () => {
      cy.name('default')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible')
        .wait(1200)
        .get('.notifications-wrapper')
        .should('not.exist');
    });

    it('Opening the maximum number of notifications (max={3})', () => {
      cy.name('default')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible')
        .parent()
        .name('default')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible')
        .parent()
        .name('default')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible');
    });
  });
});
