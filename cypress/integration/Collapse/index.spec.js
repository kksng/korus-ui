describe('Collapse', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/collapse');
  });

  describe('Interaction', () => {
    it('Should be open on click', () => {
      cy.name('collapse-main')
        .find('.collapse-heading-wrapper')
        .first()
        .click()
        .next()
        .should('not.be.visible')
        .name('collapse-main')
        .find('.collapse-heading-wrapper')
        .each((collapse) => {
          cy.wrap(collapse)
            .click()
            .next()
            .should('be.visible')
            .prev()
            .click()
            .next()
            .should('not.be.visible');
        });
    });

    it('Should be accordion', () => {
      cy.name('collapse-accordion')
        .find('.collapse-heading-wrapper')
        .first()
        .click()
        .next()
        .should('be.visible')
        .parent()
        .find('.inner-accordion-second')
        .should('not.be.visible')
        .name('collapse-accordion')
        .find('.collapse-heading-wrapper')
        .last()
        .click()
        .next()
        .should('be.visible')
        .parent()
        .find('.inner-accordion-first')
        .should('not.be.visible');
    });

    it('Should be disabled', () => {
      cy.name('collapse-disabled')
        .contains('1 Disabled')
        .click()
        .next()
        .should('be.visible')
        .name('collapse-disabled')
        .find('.collapse-heading-wrapper')
        .last()
        .should('have.class', 'heading-disabled');
    });
  });
});
