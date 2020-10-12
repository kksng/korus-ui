describe('RadioGroup', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/radio-group');
  });

  describe('Display', () => {
    it('should render first radio checked in uncontrolled mode', () => {
      cy.get('.uncontrolled')
        .find('.radio-button')
        .first()
        .find('input')
        .should('be.checked')
    });
    it('should render value checked if it is passed in controlled mode', () => {
      cy.get('.controlled-with-initial-value')
        .find('.radio-button')
        .last()
        .find('input')
        .should('be.checked')
    });
    it('should render first radio checked in controlled mode if no value provided', () => {
      cy.get('.controlled-without-initial-value')
        .find('.radio-button')
        .first()
        .find('input')
        .should('be.checked')
    });
  });

  describe('Interaction', () => {
    it('should reset to first value in uncontrolled mode', () => {
      cy.get('.uncontrolled')
        .find('.radio-button')
        .last()
        .click()
        .find('input')
        .should('be.checked')
        .get('button')
        .click()
        .get('.uncontrolled')
        .find('.radio-button')
        .first()
        .find('input')
        .should('be.checked')
    });
    it('should reset to initial value in controlled mode', () => {
      cy.get('.controlled-with-initial-value')
        .find('.radio-button')
        .eq(1)
        .click()
        .find('input')
        .should('be.checked')
        .get('button')
        .click()
        .get('.controlled-with-initial-value')
        .find('.radio-button')
        .last()
        .find('input')
        .should('be.checked')       
    });
    it('should reset to first value in controlled mode without initial value', () => {
      cy.get('.controlled-without-initial-value')
        .find('.radio-button')
        .eq(1)
        .click()
        .find('input')
        .should('be.checked') 
        .get('button')
        .click()
        .get('.controlled-without-initial-value')
        .find('.radio-button')
        .first()
        .find('input')
        .should('be.checked')       
    });
  });
});
