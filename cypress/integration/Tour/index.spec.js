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
    it('Should set class corresponding to position', () => {
      cy.name('startTour')
        .click()
        .name('Modal1')
        .parent()
        .should('have.class', 'top')
        .name('Next')
        .click()
        .name('Modal2')
        .parent()
        .should('have.class', 'right')
        .name('Next')
        .click()
        .name('Modal3')
        .parent()
        .should('have.class', 'bottom')
        .name('Next')
        .click()
        .name('Modal4')
        .parent()
        .should('have.class', 'top-left')
        .name('Next')
        .click()
        .name('Modal5')
        .parent()
        .should('have.class', 'top-center')
        .name('Next')
        .click()
        .name('Modal6')
        .parent()
        .should('have.class', 'bottom-center')
        .name('Next')
        .click()
        .name('Modal7')
        .parent()
        .should('have.class', 'bottom-left')
        .name('Close')
        .click()
    });
    it('Tour element on Modal should scroll to viewport', () => {
      cy.name('startModalTour')
        .click()
        .get('.tour-active-element')
        .isInViewport()
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
    it('Should set stepDelay', () => {
      cy.name('stepDelay')
        .click()
        .name('startTour')
        .click()
        .wait(1000)
        .get('.tour-overlay')
        .should('be.visible')
        .should('have.class', 'tour-overlay--loading')
        .wait(4000)
        .get('.tour-overlay')
        .should('be.visible')
        .should('not.have.class', 'tour-overlay--loading')
        .name('Next')
        .click()
        .name('Modal2')
        .should('not.be.visible')
        .wait(5000)
        .name('Modal2')
        .should('be.visible')
        .name('Close')
        .click()
        .name('stepDelay')
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
