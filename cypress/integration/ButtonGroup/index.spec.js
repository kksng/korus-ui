/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultButtonGroupTheme as theme } from '../../../korus-ui/components/ButtonGroup/theme';

describe('ButtonGroup', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/button-group', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });
  });

  describe('Display', () => {
    it('Should render all the buttons in the group', () => {
      cy.datatest('FourButtonGroup')
        .find('button')
        .should('have.length', 4)
        .datatest('TwoButtonGroup')
        .find('button')
        .should('have.length', 2)
        .datatest('ThreeButtonGroup')
        .find('button')
        .should('have.length', 3)
        .datatest('OneButtonGroup')
        .find('button')
        .should('have.length', 1);
    });

    it('Should render selected button with active class', () => {
      cy.datatest('FourButtonGroup')
        .contains('three')
        .should('have.length', 1)
        .and('have.class', 'active');
    });

    it('Disabled group should be disabled', () => {
      cy.datatest('TwoButtonGroup')
        .find('.button-group-buttons-wrapper')
        .should('have.length', 1)
        .and('have.class', 'disabled');
    });
  });

  describe('Events', () => {
    it('onChange event', () => {
      cy.datatest('OneButtonGroup')
        .find('button')
        .click()
        .get('@consoleLog')
        .should('be.calledWith', 'Click');
    });

    it('onClick event', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.datatest('OneButtonGroup')
        .find('button')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert!');
        });
    });
  });

  describe('Interaction', () => {
    it('Should ignore clicks when isDisabled', () => {
      cy.datatest('TwoButtonGroup')
        .find('.button-group-item')
        .last()
        .should('have.not.class', 'active')
        .click()
        .should('not.have.class', 'active');
    });

    it('Working in Checkbox mode', () => {
      cy.datatest('NumberButtonGroup')
        .should('have.attr', 'type', 'checkbox')
        .find('button')
        .each((checkboxTypeCheck) => {
          cy.wrap(checkboxTypeCheck)
            .click()
            .should('have.class', 'active')
            .click()
            .should('not.have.class', 'active');
        });
    });

    it('Should allow only one pressed button in Radio mode', () => {
      cy.datatest('ThreeButtonGroup')
        .should('have.attr', 'type', 'radio')
        .find('button')
        .each((radioTypeCheck) => {
          cy.wrap(radioTypeCheck)
            .click()
            .should('have.class', 'active')
            .prev()
            .should('not.have.class', 'active');
        });
    });
  });
});
