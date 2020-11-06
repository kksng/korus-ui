describe('Tour tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/tour');
  });
  describe('Display', () => {
    it('Should start tour and end tour', () => {
      cy.name('startTour')
        .click()
        .get('.tour-overlay')
        .should('be.visible')
        .name('Modal1')
        .should('be.visible')
        .name('Close')
        .click()
        .get('.tour-overlay')
        .should('not.be.visible');
    });
  });
  describe('Interaction', () => {
    it('Should be able to interact with tour elements during tour', () => {
      cy.name('startTour')
        .click()
        .name('tourElement1')
        .click()
        .name('message')
        .should('have.text', 'Clicked 1!')
        .name('Next')
        .click()
        .name('tourElement2')
        .click()
        .name('message')
        .should('have.text', 'Clicked 2!')
        .name('Close')
        .click();
    });
  });
});
