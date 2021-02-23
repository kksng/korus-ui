describe('NumericTextBox', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/numerictextbox');
  });

  describe('Interaction', () => {
    it('Empty field', () => {
      cy.name('basicUsage')
        .should('have.attr', 'placeholder', 'Gimme ur number!')
        .focus()
        .blur()
        .parents('.basic')
        .find('.invalid-message-list')
        .should('have.text', 'Required field!')
        .parents('.basic')
        .find('.required')
        .should('have.class', 'danger');
    });
    
    it('Using the arrows', () => {
      cy.get('.basic')
        .find('.numeric-text-box-arrow-down')
        .click({ force: true })
        .name('basicUsage')
        .should('have.value', '20 000 000 000 000.0000')
        .clear()
        .parents('.basic')
        .find('.numeric-text-box-arrow-up')
        .click({ force: true })
        .name('basicUsage')
        .should('have.value', '-100 000 000 000.0000')
        .clear()
        .type('123456789')
        .parents('.basic')
        .find('.numeric-text-box-arrow-up')
        .click({ force: true })
        .name('basicUsage')
        .should('have.value', '123 456 790.0000')
        .parents('.basic')
        .find('.numeric-text-box-arrow-down')
        .click({ force: true })
        .name('basicUsage')
        .should('have.value', '123 456 789.0000')
        .clear()
        .name('basicUsage')
        .type('{uparrow}')
        .should('have.value', '1.0000')
        .clear()
        .type('{downarrow}')
        .should('have.value', '-1.0000')
        .clear();
    });

    it('Invalid values', () => {
      cy.name('basicUsage')
        .type('Hello')
        .should('have.value', '')
        .paste('Hello')
        .should('have.value', '')
        .type('Привет')
        .should('have.value', '')
        .paste('Привет')
        .should('have.value', '')
        .type('~`ёЁ!@')
        .should('have.value', '')
        .paste('~`ёЁ!@')
        .should('have.value', '');
    });

    it('Basic usage', () => {
      cy.name('basicUsage')
        .type('0')
        .blur()
        .should('have.value', '0.0000')
        .clear()
        .type('-0')
        .blur()
        .should('have.value', '0.0000')
        .clear()
        .type('10')
        .blur()
        .should('have.value', '10.0000')
        .clear()
        .type('-10')
        .blur()
        .should('have.value', '-10.0000')
        .clear()
        .type('99999999999999999999999999999')
        .blur()
        .should('have.value', '20 000 000 000 000.0000')
        .clear()
        .type('-99999999999999999999999999999')
        .blur()
        .should('have.value', '-100 000 000 000.0000')
        .clear();
    });

    it('Comma separator', () => {
      cy.get('.comma-separator')
        .find('.numeric-text-box-prefix', '.numeric-text-box-suffix')
        .should('be.visible')
        .name('commaSeparator')
        .type('123456789')
        .blur()
        .should('contain.value', ',')
        .clear();
    });

    it('Trailing zeros', () => {
      cy.name('numer')
        .type('123456789.0000')
        .blur()
        .should('have.value', '123 456 789')
        .clear()
        .type('0000.0000')
        .blur()
        .should('have.value', '0')
        .clear()
        .type('-123456789.0000')
        .blur()
        .should('have.value', '-123 456 789')
        .clear()
        .type('-0000.0000')
        .blur()
        .should('have.value', '0')
        .clear();
    });

    it('Should be disabled', () => {
      cy.name('disabledInput')
        .should('have.attr', 'disabled');
    });
  });
});
