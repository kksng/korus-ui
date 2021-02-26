import { defaultTourTheme as theme} from '../../../korus-ui/components/Tour/theme';

const tourOverlay = `.${theme.overlay}`;
const activeElement = `${theme.activeElement}`;
const overlayLoading = `${theme.overlayLoading}`

describe('Tour tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/tour');
  });

  describe('Display', () => {
    it('Should start tour and end tour', () => {
      cy.get('#startTour')
        .click()
        .get(tourOverlay)
        .should('be.visible')
        .get('#Modal1')
        .should('be.visible')
        .get('#Close')
        .click()
        .get(tourOverlay)
        .should('not.exist');
    });

    it('Should set class corresponding to position', () => {
      cy.get('#startTour')
        .click()
        .get('#Modal1')
        .parent()
        .should('have.class', 'top')
        .get('#Next')
        .click()
        .get('#Modal2')
        .parent()
        .should('have.class', 'right')
        .get('#Next')
        .click()
        .get('#Modal3')
        .parent()
        .should('have.class', 'bottom')
        .get('#Next')
        .click()
        .get('#Modal4')
        .parent()
        .should('have.class', 'top-left')
        .get('#Next')
        .click()
        .get('#Modal5')
        .parent()
        .should('have.class', 'top-center')
        .get('#Next')
        .click()
        .get('#Modal6')
        .parent()
        .should('have.class', 'bottom-center')
        .get('#Next')
        .click()
        .get('#Modal7')
        .parent()
        .should('have.class', 'bottom-left')
        .get('#Close')
        .click()
    });

    it('Tour element on Modal should scroll to viewport', () => {
      cy.get('#startModalTour')
        .click()
        .get('.tour-active-element')
        .isInViewport()
    });
  });

  describe('Interaction', () => {
    it('Should be able to interact with tour elements during tour', () => {
      cy.get('#startTour')
        .click()
        .get('#tourElement1')
        .click()
        .get('#message')
        .should('have.text', 'Clicked 1!')
        .get('#Next')
        .click()
        .get('#tourElement2')
        .click()
        .get('#message')
        .should('have.text', 'Clicked 2!')
        .get('#Close')
        .click();
    });

    it('Should set stepDelay', () => {
      cy.get('#stepDelay')
        .click()
        .get('#startTour')
        .click()
        .wait(1000)
        .get('.tour-overlay')
        .should('be.visible')
        .should('have.class', overlayLoading)
        .wait(4000)
        .get('.tour-overlay')
        .should('be.visible')
        .should('not.have.class', overlayLoading)
        .get('#Next')
        .click()
        .get('#Modal2')
        .should('not.exist')
        .wait(5000)
        .get('#Modal2')
        .should('be.visible')
        .get('#Close')
        .click()
        .get('#stepDelay')
        .click();
    });

    it('Switching elements of the tour', () => {
      cy.get('#startTour')
        .click()
        .get('#Modal1')
        .parent()
        .should('have.class', 'top')
        .get('#Next')
        .click()
        .get('#Modal2')
        .parent()
        .should('have.class', 'right')
        .get('#Next')
        .click()
        .get('#Modal3')
        .parent()
        .should('have.class', 'bottom')
        .get('#Back')
        .click()
        .get('#Modal2')
        .parent()
        .should('have.class', 'right')
        .get('#Back')
        .click()
        .get('#Modal1')
        .parent()
        .should('have.class', 'top')
        .get('#Close')
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
        cy.get('#startTour')
          .click()
          .get('#Next')
          .click()
          .get('#Next')
          .click()
          .get('#tourElement3')
          .click()
          .get('#tourElement3')
          .click()
          .get('#Close')
          .click();
      });

      it('Should set and remove active class', () => {
        cy.get('#startTour')
          .click()
          .get('#tourElement1')
          .should('have.class', activeElement)
          .get('#Next')
          .click()
          .get('#tourElement1')
          .should('not.have.class', activeElement)
          .get('#tourElement2')
          .should('have.class', activeElement)
          .get('#Close')
          .click();
      });
    });
  });
});
