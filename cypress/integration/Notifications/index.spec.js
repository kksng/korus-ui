const { find } = require('lodash');
const { contains } = require('../../../leda/components/StatusBar/helpers');

describe('Notifications', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/notifications');
  });

  describe('Interactions', () => {
    it('Open and close on click', () => {
      cy.get('.demo-story')
        .find('button.button-wrapper')
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
    //Исправить тест после фикса бага с закрытием окна с задержкой

    // it('Open and close with delay 1500ms', () => {
    //   cy.get('.demo-story')
    //     .find('button.button-wrapper')
    //     .click()
    //     .parent()
    //     .find('.notifications-wrapper')
    //     .should('be.visible')
    //     .wait(1500)
    //     .get('.notifications-wrapper')
    //     .should('not.be.visible');
    // });

    it('Opening the maximum number of notifications (max={3})', () => {
      cy.get('.demo-story')
        .find('button.button-wrapper')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible')
        .parent()
        .find('button.button-wrapper')
        .contains('Добавить')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible')
        .parent()
        .find('button.button-wrapper')
        .contains('Добавить')
        .click()
        .parent()
        .find('.notifications-wrapper')
        .should('be.visible');
    });
  });
});
