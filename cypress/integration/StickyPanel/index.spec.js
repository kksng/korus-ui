describe('StickyPanel', () => {
  before(() => {
    cy.visit('/cypress/stickypanel');
  });
  describe('Interaction', () => {
    it('Basic usage', () => {
      cy.get('#stickyTest')
        .scrollIntoView()
        .find('.stickypanel-wrapper')
        .should('have.class', 'fixed')
        .get('#stickyTest');
      cy.scrollTo('bottom')
        .get('.stickypanel-wrapper')
        .should('not.have.class', 'fixed');
    });

    it('Use elements', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.get('#stickyTest')
        .find('.switcher-wrapper')
        .should('have.class', 'active')
        .get('.switcher-handle')
        .click()
        .parent()
        .should('not.have.class', 'active')
        .parents()
        .should('have.class', 'width-50')
        .get('.switcher-handle')
        .click()
        .parent()
        .should('have.class', 'active')
        .parents()
        .should('not.have.class', 'width-50')
        .get('.stickypanel-container')
        .find('button')
        .should('be.visible')
        .get('#success')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Clicked!');
        });
    });
  });
});
