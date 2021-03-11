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

    it('Should pass custom classes to wrapper', () => {

    });

    it('Should work with hh:mm:ss format', () => {

    });
  });

  describe('Interaction', () => {
    it('Should pause and resume countdown', () => {

    });

    it('Should restart countdown', () => {

    });

    it('Should set new time', () => {

    });
  });

  describe('Callbacks', () => {
    it('Should call onStart', () => {

    });

    it('Should call onTick', () => {

    });

    it('Should call onPause', () => {

    });

    it('Should call onComplete', () => {

    });
  });
});
