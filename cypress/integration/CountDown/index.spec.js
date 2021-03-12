describe('CountDown', () => {
  before(() => {
    cy.visit('/cypress/countdown');
  });

  describe('Display', () => {
    it('Should render countdown', () => {
      cy.get('#countDown')
        .should('contain', '00:45')
        .wait(5000)
        .should('contain', '00:40');
    });

    it('Should render text', () => {
      cy.get('#countDown')
        .should('contain', 'Send the code again')
    });
  });
});
