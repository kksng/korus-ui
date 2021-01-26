describe('StickyPanel', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/stickypanel');
  });
  describe('Interaction', () => {
    it('Basic use', () => {
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
        .get('button.success')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Clicked!');
        });
    });
  });
});
