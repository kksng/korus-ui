describe('Tabs', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/tabs');
  });

  describe('Interaction', () => {
    it('Basic usage', () => {
      cy.get('.basic')
        .find('.tabs-item')
        .first()
        .click()
        .should('have.class', 'active')
        .parents('.basic')
        .find('.tabs-content')
        .should('be.visible')
        .parents('.basic')
        .find('.tabs-item')
        .eq(1)
        .click()
        .should('have.class', 'active')
        .parents('.basic')
        .find('.tabs-content')
        .should('be.visible')
        .parents('.basic')
        .find('.tabs-item')
        .eq(2)
        .click()
        .should('have.class', 'disabled');
    });
    it('Create a new tab', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.get('.basic')
        .find('.tabs-item')
        .eq(3)
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Good!');
        });
    });
    it.only('Scrolling through tabs', () => {
      cy.get('.scroll').each();
    });
  });
});
