import { defaultNotificationsTheme as theme} from '../../../korus-ui/components/Notifications/theme';

const notificationWrapper = `.${theme.notificationWrapper}`;
const wrapper = `.${theme.wrapper}`;


const { find } = require('lodash');
const { contains } = require('../../../korus-ui/components/StatusBar/helpers');

describe('Notifications', () => {
  before(() => {
    cy.visit('/cypress/notifications');
  });

  describe('Interactions', () => {
    it('Closing by clicking on the button', () => {
      cy.get('#accept')
        .click()
        .parent()
        .find(notificationWrapper)
        .contains('Принять')
        .should('be.visible')
        .click()
        .get(notificationWrapper)
        .should('not.exist');
    });

    it('Open and close on click', () => {
      cy.get('#default')
        .click()
        .parent()
        .find(wrapper)
        .should('be.visible')
        .parents()
        .find('.notifications-icon-close')
        .click()
        .get(wrapper)
        .should('not.exist');
    });

    it('Open and close with delay 1200ms', () => {
      cy.get('#default')
        .click()
        .parent()
        .find(wrapper)
        .should('be.visible')
        .wait(1200)
        .get(wrapper)
        .should('not.exist');
    });

    it('Opening the maximum number of notifications (max={3})', () => {
      cy.get('#default')
        .click()
        .parent()
        .find(wrapper)
        .should('be.visible')
        .parent()
        .get('#default')
        .click()
        .parent()
        .find(wrapper)
        .should('be.visible')
        .parent()
        .get('#default')
        .click()
        .parent()
        .find(wrapper)
        .should('be.visible');
    });
  });
});
