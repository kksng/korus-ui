describe('TimeRange tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9000/cypress/timerange');
    });
    describe('Interaction', () => {
      it('Should move cursor to next input on Tab click', () => {
        cy.name('TimeRange-from')
          .tab()
          .name('TimeRange-to')
          .should('be.focused')
      });
    });
  });
