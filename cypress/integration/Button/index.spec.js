/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('Button', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/button', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });
  });

  describe('Events in console', () => {
    it('event in the console on click', () => {
      cy.name('consoleButton')
        .click()
        .get('@consoleLog')
        .should('be.calledWith', 'Do not click the button!');
    });
  });

  describe('Display', () => {
    it('should render button', () => {
      cy.contains('Клик!').should('be.visible');
    });
  });

  describe('Styles', () => {
    it('_danger', () => {
      cy.contains('danger!').should('have.class', 'danger');
    });

    it('_warning', () => {
      cy.contains('warning!').should('have.class', 'warning');
    });

    it('_success', () => {
      cy.contains('success!').should('have.class', 'success');
    });
  });

  describe('Interaction', () => {
    it('should call onClick', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('Клик!')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert!');
        });
    });

    it('on Validation Fail', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('Validate!')
        .click()
        .name('Input1')
        .should('have.attr', 'aria-invalid', 'true')
        .name('Input2')
        .should('have.attr', 'aria-invalid', 'true')
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert!');
        });
    });

    it('on Validation Success', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.get('input')
        .each((validationSuccess) => {
          cy.wrap(validationSuccess).type('on Validation Success');
        })
        .name('validation')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Submitted');
        })
        .get('input')
        .clear();
    });

    it('should Scroll To Invalid Fields', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.contains('Validate!')
        .scrollIntoView()
        .name('Input1')
        .isNotInViewport()
        .get('button')
        .contains('Validate!')
        .click()
        .name('Input1')
        .isInViewport();
    });

    it('should not call onClick when isLoading', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('isLoading')
        .click()
        .then(() => {
          expect(stub).not.to.be.called;
        })
        .contains('isLoading')
        .should('have.class', 'loading');
    });

    it('should not call onClick when isDisabled', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('isDisabled')
        .click()
        .then(() => {
          expect(stub).not.to.be.called;
        })
        .contains('isDisabled')
        .should('have.class', 'disabled');
    });
  });
});
