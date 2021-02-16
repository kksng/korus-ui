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
    it('Event in the console on click', () => {
      cy.name('consoleButton')
        .click()
        .get('@consoleLog')
        .should('be.calledWith', 'Do not click the button!');
    });
  });

  describe('Display', () => {
    it('Should render button', () => {
      cy.contains('Клик!').should('be.visible');
    });
  });

  describe('Styles', () => {
    it('Should have class "danger"', () => {
      cy.contains('danger!')
        .should('have.class', 'danger');
    });

    it('Should have class "warning"', () => {
      cy.contains('warning!')
        .should('have.class', 'warning');
    });

    it('Should have class "success"', () => {
      cy.contains('success!')
        .should('have.class', 'success');
    });
  });

  describe('Interaction', () => {
    it('Should call onClick', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('Клик!')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert!');
        });
    });

    it('Validation failed', () => {
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

    it('Validation succeeds', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.get('input')
        .each((validationSuccess) => {
          cy.wrap(validationSuccess)
            .type('on Validation Success');
        })
        .name('validation')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Submitted');
        })
        .get('input')
        .clear();
    });

    it('Should Scroll To Invalid Fields', () => {
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

    it('Should not call onClick when isLoading', () => {
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
