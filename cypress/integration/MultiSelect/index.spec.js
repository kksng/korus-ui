describe('MultiSelect', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/multi-select');
  });
  describe('Display', ()=> {
    it('should open SuggestionList', () => {
      cy.get('#MSCheckboxes')
        .click()
        .parent()
        .parent()
        .find('.suggestion-list')
        .should('be.visible')
    });
    it('should render ClearButton', () => {
      cy.get('#MSCheckboxes')
        .parent()
        .find('.multiselect-clear-icon')
        .should('be.visible')
    });
    it('should render default values', () => {
      cy.get('#MSCheckboxes')
        .parent()
        .find('.tags-item')
        .first()
        .should('have.text', 'London')
        .parent()
        .find('.tags-item')
        .last()
        .should('have.text', 'Paris')
    });
    it('should render selectAll checkbox unchecked', () => {
      cy.get('#MSCheckboxes')
        .parent()
        .parent()
        .find('.suggestion-list')
        .find('.suggestion-item')
        .first()
        .should('not.have.class', 'selected')
    });
    it('should render selectAll checkbox with class semi', () => {
      cy.get('#MSCheckboxes')
        .parent()
        .parent()
        .find('.suggestion-list')
        .find('.suggestion-item')
        .first()
        .click()
        .find('.checkbox-label')
        .should('have.class', 'semi')
    });
  });
  describe('Interaction', () => {
    it('should clear input on clear button click', () => {
      cy.get('#MSCheckboxes')
        .parent()
        .find('.multiselect-clear-icon')
        .click()
        .get('#MSCheckboxes')
        .parent()
        .find('.multiselect-tags-container')
        .should('not.exist')
        .get('#MSCheckboxes')
        .parent()
        .parent()
        .find('.suggestion-list')
        .find('.suggestion-item')
        .each(($item) => {
          cy.wrap($item).should('not.have.class', 'selected')
        })
    });
    it('should not check selectAll checkbox if some values are checked', () => {
      cy.get('#MSCheckboxes')
        .parent()
        .parent()
        .find('.suggestion-list')
        .find('.suggestion-item')
        .eq(1)
        .click()
        .parent()
        .find('.suggestion-item')
        .first()
        .should('not.have.class', 'selected')
    });
    it('should select all values if selectAll checkbox is selected', () => {
      cy.get('#MSCheckboxes')
        .parent()
        .parent()
        .find('.suggestion-list')
        .find('.suggestion-item')
        .first()
        .click()
        .parent()
        .find('.suggestion-item')
        .each(($item) => {
          cy.wrap($item).should('have.class', 'selected')
        })
    });
  });
});
