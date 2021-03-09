describe('MultiSelect', () => {
  before(() => {
    cy.visit('/cypress/multi-select');
  });

  describe('Display', () => {
    it('Should open SuggestionList', () => {
      cy.get('#MSCheckboxes')
        .focus()
        .parents('.multiselect-input-wrapper')
        .should('have.class', 'focused')
        .get('#MSCheckboxes')
        .click()
        .parents('.multiselect-wrapper')
        .find('.suggestion-list')
        .should('be.visible')
        .get('#MSCheckboxes')
        .blur();
    });

    it('Should render ClearButton', () => {
      cy.get('#MSCheckboxes')
        .parent()
        .find('.multiselect-clear-icon')
        .should('be.visible');
    });

    it('Should render default values', () => {
      cy.get('#MSCheckboxes')
        .parent()
        .find('.tags-item')
        .first()
        .should('have.text', 'London')
        .parent()
        .find('.tags-item')
        .last()
        .should('have.text', 'Paris');
    });

    it('Should render selectAll checkbox unchecked', () => {
      cy.get('#MSCheckboxes')
        .click()
        .parents('.multiselect-wrapper')
        .find('.suggestion-item')
        .first()
        .should('not.have.class', 'selected')
        .get('#MSCheckboxes')
        .blur();
    });

    it('Should render selectAll checkbox with class semi', () => {
      cy.get('#MSCheckboxes')
        .click()
        .parents('.multiselect-wrapper')
        .find('.suggestion-item')
        .eq(1)
        .click()
        .parent()
        .find('.suggestion-item')
        .first()
        .find('.checkbox-label')
        .should('have.class', 'semi')
        .get('#MSCheckboxes')
        .blur();
    });

    it('Should render text for selectAll item by default', () => {
      cy.get('#MSDefaultWithDataArray')
        .click()
        .parents('.multiselect-wrapper')
        .find('.suggestion-item')
        .first()
        .should('have.text', 'Выбрать все')
        .get('#MSDefaultWithDataArray')
        .blur();
    });

    it('Should render custom text for selectAll item', () => {
      cy.get('#MSDefaultWithDataObject')
        .click()
        .parents('.multiselect-wrapper')
        .find('.suggestion-item')
        .first()
        .should('have.text', 'Select all')
        .get('#MSDefaultWithDataObject')
        .blur();
    });
  });

  describe('Interaction', () => {
    it('Should clear input on clear button click', () => {
      cy.get('#MSCheckboxes')
        .parent()
        .find('.multiselect-clear-icon')
        .click()
        .get('#MSCheckboxes')
        .parent()
        .find('.multiselect-tags-container')
        .should('not.exist')
        .get('#MSCheckboxes')
        .parents('.multiselect-wrapper')
        .find('.suggestion-item')
        .each(($item) => {
          cy.wrap($item).should('not.have.class', 'selected');
        })
        .get('#MSCheckboxes')
        .blur();
    });

    it('Should not check selectAll checkbox if some values are checked', () => {
      cy.get('#MSCheckboxes')
        .click()
        .parents('.multiselect-wrapper')
        .find('.suggestion-item')
        .eq(1)
        .click()
        .parent()
        .find('.suggestion-item')
        .first()
        .should('not.have.class', 'selected')
        .get('#MSCheckboxes')
        .blur();
    });

    it('Should select all values if selectAll checkbox is selected', () => {
      cy.get('#MSCheckboxes')
        .click()
        .parents('.multiselect-wrapper')
        .find('.suggestion-item')
        .first()
        .click()
        .parent()
        .find('.suggestion-item')
        .each(($item) => {
          cy.wrap($item).should('have.class', 'selected');
        })
        .get('#MSCheckboxes')
        .blur();
    });

    it('Should clear input text on item select', () => {
      cy.get('#MSDefaultWithDataObject')
        .type('Isla{downarrow}{enter}')
        .should('have.value', '')
        .get('#MSDefaultWithDataObject')
        .blur();
    });

    it('Selection with the arrow keys', () => {
      cy.get('#MSDefaultWithDataObject')
        .type('{uparrow}{enter}')
        .parent()
        .contains('Paris')
        .should('be.visible')
        .get('#MSDefaultWithDataObject')
        .blur();
    });

    describe('With object data', () => {
      it('Should add and delete correctly on item click', () => {
        cy.get('#MSCheckboxesWithDataObject')
          .click()
          .parents('.multiselect-wrapper')
          .find('.suggestion-item')
          .eq(1)
          .click()
          .next()
          .click()
          .parents('.multiselect-wrapper')
          .find('.tags-item')
          .should('have.length', 1)
          .and('have.text', 'Islamabad')
          .get('#MSCheckboxesWithDataObject')
          .blur()
      });
    });
  });
});
