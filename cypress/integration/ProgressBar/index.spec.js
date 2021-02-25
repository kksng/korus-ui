describe('ProgressBar', () => {
  before(() => {
    cy.visit('/cypress/progressbar');
  });

  describe('Interaction', () => {
    it('Start and stop progress on click', () => {
      cy.get('button')
        .contains('Launch')
        .click()
        .parent()
        .find('.progressbar-fill')
        .trigger('start')
        .parent()
        .get('button')
        .contains('Stop')
        .click()
        .parent()
        .find('.progressbar-fill')
        .trigger('stop');
    });

    it('Reset progress', () => {
      cy.get('button')
        .contains('Reset')
        .click()
        .parent()
        .find('.progressbar-fill')
        .should('have.value', '');
    });
  });
});
