describe('Rating', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/rating');
  });

  describe('Interaction', () => {
    it('Default mode', () => {
      cy.get('.default')
        .find('.rating-item')
        .eq(0)
        .click()
        .should('have.class', 'filled')
        .parent()
        .find('.rating-item')
        .eq(4)
        .click()
        .should('have.class', 'filled')
        .prevAll()
        .should('have.class', 'filled')
        .parents()
        .find('button')
        .contains('Обнулить')
        .click()
        .parents()
        .get('.default')
        .find('.rating-item')
        .should('not.have.class', 'filled');
    });
    it('Custom mode', () => {
      cy.get('.custom')
        .find('.rating-empty')
        .eq(0)
        .click()
        .should('have.class', 'rating-filled')
        .parent()
        .find('.rating-empty')
        .eq(4)
        .click()
        .should('have.class', 'rating-filled')
        .prevAll()
        .should('have.class', 'rating-filled')
        .parents()
        .find('button')
        .contains('Обнулить')
        .click()
        .parents()
        .get('.custom')
        .find('.rating-empty')
        .should('not.have.class', 'rating-filled');
    });
    it('ReadOnly mode', () => {
      cy.get('.disabled')
        .find('.rating-item')
        .eq(2)
        .click()
        .should('not.have.class', 'filled');
    });
  });
});
