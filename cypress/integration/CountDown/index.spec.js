import { defaultCountDownTheme } from '../../../korus-ui/components/CountDown/theme'

describe('CountDown', () => {
  before(() => {
    cy.visit('/cypress/countdown');
  });

  describe('Display', () => {
    it('Should render countdown', () => {
      cy.get('#countDown')
        .should('contain', '00:45')
        .and('be.visible')
        .wait(5000)
        .should('contain', '00:40')
        .and('be.visible');
    });

    it('Should render text', () => {
      cy.get('#countDown')
        .should('contain', 'Send the code again');
    });

    it('Should pass custom classes to wrapper', () => {
      cy.get('#countDown')
        .should('have.class', 'countdown-wrapper')
        .and('have.class', 'customClassName');
    });

    it('Should work with hh:mm:ss format', () => {
      cy.get('#formatStart')
        .click()
        .get('#countDownFormat')
        .wait(5000)
        .should('contain', '00:00:40')
    });
  });

  describe('Interaction', () => {
    it('Should pause and resume countdown', () => {
      cy.contains('45 sec')
        .click()
        .get('#countDown')
        .should('contain', '00:45')
        .wait(5000)
        .get('#pause')
        .click()
        .get('#countDown')
        .should('contain', '00:40')
        .get('#resume')
        .click()
        .wait(5000)
        .get('#countDown')
        .should('contain', '00:35')
        .get('#restart')
        .click();
    });

    it('Should restart countdown', () => {
      cy.contains('45 sec')
        .click()
        .get('#countDown')
        .should('contain', '00:45')
        .wait(5000)
        .should('contain', '00:40')
        .get('#restart')
        .click()
        .get('#countDown')
        .should('contain', '00:45');
    });

    it('Should set new time', () => {
      cy.contains('45 sec')
        .click()
        .get('#countDown')
        .should('contain', '00:45')
      cy.contains('1 min')
        .click()
        .get('#countDown')
        .should('contain', '01:00')
      cy.contains('3 sec')
        .click()
        .get('#countDown')
        .should('contain', '00:03')
      cy.contains('45 sec')
        .click();
    });
  });

  describe('Callbacks', () => {
    beforeEach(() => {
      cy.visit('/cypress/countdown', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog');
        },
      });
    });

    it('Should call onStart', () => {
      cy.contains('45 sec')
        .click()
        .get('#countDown')
        .should('contain', '00:45')
        .wait(1000)
        .get('@consoleLog')
        .should('be.calledWith', 'onStart!')
        .get('#restart')
        .click();
    });

    it('Should call onTick', () => {
      cy.contains('45 sec')
        .click()
        .get('#countDown')
        .should('contain', '00:45')
        .wait(1000)
        .get('@consoleLog')
        .should('be.calledWith', 'Tick!')
        .get('#restart')
        .click();
    });

    it('Should call onPause', () => {
      cy.get('#pause')
        .click()
        .get('@consoleLog')
        .should('be.calledWith', 'onPause!');
    });

    it('Should call onComplete', () => {
      cy.contains('3 sec')
        .click()
        .get('#resume')
        .click()
        .get('#countDown')
        .should('contain', '00:03')
        .wait(3000)
        .should('contain', '00:00')
        .get('@consoleLog')
        .should('be.calledWith', 'Completed!');
    });
  });
});
