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
    describe('Should set and remove active styles correctly', () => {
      it('Previous active element should not be interactive', (done) => {
        cy.on('fail', (err, runnable) => {
          expect(err.message).to.include('`cy.click()` failed because this element:') 
          expect(err.message).to.include('name="tourElement3"')
          expect(err.message).to.include('is being covered by another element')
          done()
          return false
        })
        cy.name('startTour')
          .click()
          .name('Next')
          .click()
          .name('Next')
          .click()
          .name('tourElement3')
          .click()
          .name('tourElement3')
          .click()
          .name('Close')
          .click();
      })
      it('Should set and remove active class', () => {
        cy.name('startTour')
          .click()
          .name('tourElement1')
          .should('have.class', 'tour-active-element') 
          .name('Next')
          .click()   
          .name('tourElement1')
          .should('not.have.class', 'tour-active-element')  
          .name('tourElement2')
          .should('have.class', 'tour-active-element')   
          .name('Close')
          .click();
      })
    });
  });
});
