/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('NumericRange', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/numericrange');
  });

  describe('Display', () => {
    it('should be rendered', () => {
      cy.get('input[name="min-num"]')
        .should('be.visible')
    });
  });

  describe('Interaction', () => {
    it('should handle null value', () => {
      cy.get('input[name="min-num"]')
        .click()
        .type('42')
        .blur()
        .should('have.value', '42')
        .clear()
        .blur()
        .should('have.value', '')
    });
  });
});
