describe('Pagination', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/pagination');
  });

  describe('Interaction', () => {
    it('Default', () => {
      cy.get('.active')
        .find('.first', '.prev')
        .should('have.class', 'disabled')
        .parents('.active')
        .find('ul')
        .get('.pagination-button')
        .contains('1')
        .should('have.class', 'selected');
    });
    it('Basic usage', () => {
      cy.get('.active')
        .find('ul')
        .get('.pagination-button')
        .contains('1')
        .should('have.class', 'selected')
        .get('.pagination-button')
        .contains('2')
        .click()
        .should('have.class', 'selected')
        .get('.pagination-button')
        .contains('1')
        .should('have.attr', 'tabindex', '-1');
    });
    it.only('Selecting the number of pages.only', () => {
      cy.get('.active')
        .find('.dropdownselect-select-icon')
        .click()
        .parents()
        .find('.suggestion-wrapper')
        .contains('.suggestion-item', '5')
        .click()
        .parent()
        .get('.pagination-label-info')
        .should('contains', '5');
    });
  });
});
