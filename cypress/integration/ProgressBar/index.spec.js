describe('ProgressBar', () => {
  before(() => {
    cy.visit('/cypress/progressbar');
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
