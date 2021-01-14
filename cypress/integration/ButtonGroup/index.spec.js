/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultButtonGroupTheme as theme } from '../../../korus-ui/components/ButtonGroup/theme';

describe('ButtonGroup', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/button-group');
  });

  describe('Display', () => {
    it('should render all the buttons in the group', () => {
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
        .should('have.length', 1)
    });

    it('should render selected button with active class', () => {
      cy.datatest('FourButtonGroup')
        .find('.button-wrapper.button-group-item.active')
        .should('have.text', 'three')
        .should('have.length', 1)
    });

    it('Disabled group should be disabled', () => {
      cy.datatest('TwoButtonGroup')
        .find('.button-group-buttons-wrapper.disabled')
        .should('have.length', 1)
    });
  });

  describe('Interaction', () => {
    it('should ignore clicks when isDisabled', () => {
      cy.datatest('TwoButtonGroup')
        .find('.button-wrapper.button-group-item.last')
        .should('have.not.class', 'active')
        .click()
        .should('not.have.class', 'active')
    });

    it('should select button on click', () => {
      cy.datatest('NumberButtonGroup')
        .find('.button-wrapper.button-group-item.last')
        .should('have.not.class', 'active')
        .click()
        .should('have.class', 'active')
        .parent()
        .find('.button-wrapper.button-group-item.first')
        .should('have.not.class', 'active')
        .click()
        .should('have.class', 'active')
        .parent()
        .find('.button-wrapper.button-group-item.last')
        .should('have.class', 'active')
    });

  
    it('should allow only one pressed button in Radio mode', () => {
      cy.datatest('RadioButtonGroup')
        .find('.button-wrapper.button-group-item.last')
        .should('have.not.class', 'active')
        .click()
        .should('have.class', 'active')
        .parent()
        .find('.button-wrapper.button-group-item.first')
        .should('have.not.class', 'active')
        .click()
        .should('have.class', 'active')
        .parent()
        .find('.button-wrapper.button-group-item.last')
        .should('not.have.class', 'active')
    });

    xit('Names', () => {
      cy.name('FourButtonGroup')
        .find('.button-wrapper.button-group-item.active')
        .should('have.text', 'three')
        .should('have.length', 1)
    });
  });
});
