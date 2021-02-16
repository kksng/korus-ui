/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('NumericRange', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/numericrange');
  });

  describe('Display', () => {
    it('Should be rendered', () => {
      cy.get('#basicUse').should('be.visible');
    });

    it('Placeholder should be displayed', () => {
      cy.get('#basicUse')
        .find('input')
        .should('have.attr', 'placeholder', 'Only numbers');
    });

    it('Should be disabled when isDisabled', () => {
      cy.get('#disabledRange')
        .find('input')
        .should('have.attr', 'disabled');
    });
  });

  describe('Interaction', () => {
    it('Should handle null value', () => {
      cy.get('#basicUse')
        .find('input')
        .each((handleNullValue) => {
          cy.wrap(handleNullValue)
            .click()
            .type('42')
            .blur()
            .should('have.value', '42')
            .clear()
            .blur()
            .should('have.value', '')
            .clear()
            .blur()
            .parent()
            .should('have.class', 'danger');
        });
    });

    it('Should handle only numbers', () => {
      cy.get('#basicUse')
        .find('input')
        .each((enteringValues) => {
          cy.wrap(enteringValues)
            .type('0')
            .should('have.value', '0')
            .clear()
            .type('1')
            .should('have.value', '1')
            .clear()
            .type('1000000000')
            .should('have.value', '1000000000')
            .clear()
            .type('-1')
            .should('have.value', '-1')
            .clear()
            .type('-1000000000')
            .should('have.value', '-1000000000')
            .clear()
            .type('A!с,')
            .should('have.value', '')
            .clear()
            .paste('0')
            .should('have.value', '0')
            .clear()
            .paste('1')
            .should('have.value', '1')
            .clear()
            .paste('-1')
            .should('have.value', '-1')
            .clear()
            .paste('A!с,')
            .should('have.value', '')
            .clear();
        });
    });
  });
});
