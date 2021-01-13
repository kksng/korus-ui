const { find } = require('lodash');
const { contains } = require('../../../korus-ui/components/StatusBar/helpers');

describe('Notifications', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/notifications');
  });

  describe('Interactions', () => {
    it('Closing by clicking on the button', () => {
      cy.get('.demo-story')
        .find('button.accept')
        .click()
        .parent()
        .find('.notifications-item')
        .contains('Принять')
        .should('be.visible')
        .click()
        .get('.notifications-item')
        .should('not.be.visible');
    });

    it('Open and close on click', () => {
      cy.get('.demo-story')
        .find('button.default')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible')
        .parents()
        .find('.notifications-icon-close')
        .click()
        .get('.notifications-wrapper')
        .should('not.be.visible');
    });

    it('Open and close with delay 1200ms', () => {
      cy.get('.demo-story')
        .find('button.default')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible')
        .wait(1200)
        .get('.notifications-wrapper')
        .should('not.be.visible');
    });

    it('Opening the maximum number of notifications (max={3})', () => {
      cy.get('.demo-story')
        .find('button.default')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible')
        .parent()
        .find('button.default')
        .contains('Добавить')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible')
        .parent()
        .find('button.default')
        .contains('Добавить')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible');
    });
  });
});
