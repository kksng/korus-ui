describe('Tabs', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/tabs');
  });

  describe('Interaction', () => {
    it('Basic usage', () => {
      cy.get('.basic')
        .find('.tabs-item')
        .first()
        .click()
        .should('have.class', 'active')
        .parents('.basic')
        .find('.tabs-content')
        .contains('1st tab content')
        .should('be.visible')
        .parents('.basic')
        .find('.tabs-item')
        .eq(1)
        .click()
        .should('have.class', 'active')
        .parents('.basic')
        .find('.tabs-content')
        .contains('2nd tab content')
        .should('be.visible')
        .parents('.basic')
        .find('.tabs-content')
        .first()
        .should('not.have.class', 'active')
        .parents('.basic')
        .find('.tabs-item')
        .eq(2)
        .click()
        .should('have.class', 'disabled');
    });

    it('Scrolling through tabs', () => {
      cy.get('.scrol')
        .find('.tabs-item')
        .each((scrollTab) => {
          cy.wrap(scrollTab)
            .click()
            .should('have.class', 'active')
            .parents('.scrol')
            .find('.tabs-content')
            .should('be.visible');
        })
        .parents('.scrol')
        .find('.tabs-arrow-left')
        .click()
        .parent()
        .trigger('scroll')
        .find('.tabs-item')
        .first()
        .should('be.visible');
    });
    
    it('Using content node', () => {
      cy.get('.tabs-node')
        .find('.tabs-item')
        .each((nodeTab) => {
          cy.wrap(nodeTab)
            .click()
            .should('have.class', 'active')
            .parents()
            .find('.txt-success')
            .should('be.visible')
            .parent()
            .find('.box')
            .should('be.visible');
        });
    });
  });
});
