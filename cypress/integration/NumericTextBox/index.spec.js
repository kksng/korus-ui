describe('NumericTextBox', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/numeric-text-box');
  });
  describe('Validation', () => {
    it('should validate min values dynamically', () => {
      cy.name('increaseMin')
        .click()
      cy.name('numeric')
        .should('have.value', '5')
    });
    it('should validate max values dynamically', () => {
      cy.name('decreaseMax')
        .click()
        .click()
      cy.name('numeric')
        .should('have.value', '4')
    });
  });
});
