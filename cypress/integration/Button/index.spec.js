import { defaultButtonTheme as theme } from '../../../korus-ui/components/Button/theme';

/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('Button', () => {
  before(() => {
    cy.visit('/cypress/button', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });
  });

  describe('Events in console', () => {
    it('Event in the console on click', () => {
      cy.get('#consoleButton')
        .click()
        .get('@consoleLog')
        .should('be.calledWith', 'Do not click the button!');
    });
  });

  describe('Display', () => {
    it('Should render button', () => {
      cy.get('#basicButton')
        .should('be.visible')
        .snapshot();
    });

    it('Should render button when isLoading', () => {
      cy.get('#loadButton')
        .should('be.visible')
        .snapshot();
    });

    it('Should render button when isDisabled', () => {
      cy.get('#disabledButton')
        .should('be.visible')
        .snapshot();
    });

    it('Should render with form', () => {
      cy.get('#renderWithForm')
        .should('be.visible')
        .next()
        .should('be.visible')
        .snapshot();
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
      cy.get('#basicButton')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert!');
        });
    });

    it('Validation failed', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.get('#validation')
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
        .get('#validation')
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

      cy.get('#validation')
        .scrollIntoView()
        .name('Input1')
        .isNotInViewport()
        .get('#validation')
        .click()
        .name('Input1')
        .isInViewport();
    });

    it('Should not call onClick when isLoading', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.get('#loadButton')
        .click()
        .then(() => {
          expect(stub).not.to.be.called;
        })
        .contains('isLoading')
        .should('have.class', `${theme.loading}`);
    });

    it('Should not call onClick when isDisabled', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('isDisabled')
        .click()
        .then(() => {
          expect(stub).not.to.be.called;
        })
        .contains('isDisabled')
        .should('have.class', `${theme.disabled}`);
    });
  });
});
