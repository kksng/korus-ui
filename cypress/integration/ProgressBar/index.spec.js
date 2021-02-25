describe('ProgressBar', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/progressbar');
  });

  describe('Interaction', () => {
    it('Start and stop progress on click', () => {
      cy.get('#launchButton')
        .click()
        .parent()
        .find('.progressbar-fill')
        .trigger('start')
        .parent()
        .get('#launchButton')
        .click()
        .parent()
        .find('.progressbar-fill')
        .trigger('stop');
    });

    it('Reset progress', () => {
      cy.get('#resetButton')
        .click()
        .parent()
        .find('.progressbar-fill')
        .should('have.value', '');
    });
  });
});
