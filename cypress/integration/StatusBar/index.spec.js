describe('Statusbar', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/statusbar');
  });
  describe('Display',() => {
    it('Shouldrender types', () => {
      cy.get('.types')
        .should('be.visible');
    });
  });
  
  describe('Interaction', () => {
    it('Previous step', () => {
      cy.name('prev')
        .click()
        .parent()
        .find('.progress')
        .contains('Оформление')
        .parent()
        .find('.statusbar-icon')
        .should('have.class', 'progress');
    });

    it('Next step', () => {
      cy.name('next')
        .click()
        .parent()
        .find('.progress')
        .contains('Подписание')
        .parent()
        .find('.statusbar-icon')
        .should('have.class', 'progress');
    });

    it('Start animation progress', () => {
      cy.name('start')
        .click()
        .parent()
        .find('.animate')
        .get('.statusbar-line')
        .eq(2)
        .trigger('start')
        .wait(2000)
        .invoke('attr', 'style')
        .should('contains', '100%');
    });

    it('onClick event', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.get('#progress')
        .find('.statusbar-icon')
        .eq(3)
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('clicked!');
        });
    })
  });
});
