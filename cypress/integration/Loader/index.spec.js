describe('Loader', () => {
  beforeEach(() => {
    cy.visit('/cypress/loader');
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });
  });

  describe('Events', () => {
    it('Console event', () => {
      cy.get('#defaultLoader')
        .click()
        .get('@consoleLog')
        .should('be.calledWith', 'ev');
    });
  });

  describe('Display', () => {
    it('Should render and each is assigned its own CSS-class', () => {
      cy.get('#defaultLoader, #spinnerLoader, #customLoader')
        .should('be.visible')
        .get('#spinnerLoader')
        .find('.loader-element')
        .should('have.class', 'loader-spinner')
        .get('#customLoader')
        .find('.loader-element')
        .should('have.class', 'loader-hourglass');
    });

    it('Should be disabled when isLoading={false}', () => {
      cy.get('#disabledLoader')
        .find('.loader-element')
        .should('not.exist');
    });
  });

  describe('Interaction', () => {
    it('Launching of the global loader', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.get('#globalLoader')
        .click()
        .get('body')
        .should('have.class', 'global-loader-overflow')
        .wait(6000)
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith(
            'Полноэкранный лоадер отключен'
          );
        })
        .get('body')
        .should('not.have.class', 'global-loader-overflow');
    });
  });
});
