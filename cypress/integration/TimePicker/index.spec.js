describe('TimePicker tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9000/cypress/timepicker');
    });
    describe('Validation', () => {
      it('Should display validation error', () => {
        cy.name('submit')
          .click()
          .name('MinValueTimePicker')
          .parent()
          .should('have.class', 'danger')
          .name('submitMessage')
          .should('have.text', 'Submit failed!');
      });
    });
  });
