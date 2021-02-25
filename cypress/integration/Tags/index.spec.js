describe('Tags', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/tags');
  });

  describe('Display', () => {
    it('Should be render', () => {
      cy.get('.tags-item')
        .should('be.visible');
    });
  });

  describe('Interaction', () => {
    it('Click on icon', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.name('spb')
        .find('.tags-icon')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Clicked');
        });
    });
  });
});
