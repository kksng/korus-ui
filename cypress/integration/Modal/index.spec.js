import { defaultModalTheme as theme } from '../../../korus-ui/components/Modal/theme'

/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('Modal', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/modal');
  });

  describe('Interaction', () => {
    it('Should open and close', () => {
      cy.datatest('openModalButton')
        .click()
        .get(`.${theme.window}`)
        .should('be.visible')
        .get(`.${theme.cross}`)
        .click()
        .get(`.${theme.window}`)
        .should('not.exist')
    });

    it('Closing by close button', () => {
      cy.datatest('openModalButton')
        .click()
        .get(`.${theme.window}`)
        .should('be.visible')
        .get(`.${theme.cross}`)
        .click()
        .get(`.${theme.window}`)
        .should('not.exist');
    });

    it('Closing by cancel button', () => {
      cy.datatest('openModalButton')
        .click()
        .get(`.${theme.window}`)
        .should('be.visible')
        .get('#cancel')
        .click()
        .get(`.${theme.window}`)
        .should('not.exist');
    });

    it('Closing by click outside the modal window', () => {
      cy.datatest('openModalButton')
        .click()
        .get(`.${theme.window}`)
        .should('be.visible')
        .get(`.${theme.wrapper}`)
        .click(0, 100)
        .get(`.${theme.window}`)
        .should('not.exist');
    });

    it('Closing with the ESС key', () => {
      cy.datatest('openModalButton')
        .click()
        .get(`.${theme.window}`)
        .should('be.visible');
      cy.focused().type('{esc}');
      cy.get(`.${theme.window}`)
        .should('not.exist');
    });

    it('Leave alert', () => {
      cy.datatest('openModalButton')
        .click()
        .datatest('openAlertLeaveButton')
        .click()
        .get('#leave')
        .should('be.visible')
        .get('#okButton')
        .click()
        .get('#leave')
        .should('not.exist')
        .get('#cancel')
        .click();
    });

    it('Simple alert', () => {
      cy.datatest('openModalButton')
        .click()
        .datatest('openAlertSimpleButton')
        .click()
        .get('#simple')
        .should('be.visible')
        .get('.modal-alert-cross')
        .click()
        .get('#simple')
        .should('not.exist')
        .get('#cancel')
        .click();
    });
  });
});
