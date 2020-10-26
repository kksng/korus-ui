/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultAutoCompleteTheme as theme } from '../../../leda/components/AutoComplete/theme';

describe('AutoComplete', () => {
  let lastConsole;
  let stub;
  before(() => {
    cy.visit('http://localhost:9000/cypress/autocomplete');
  });

  describe('Display', () => {
    it('should render placeholder', () => {
      cy.get('[name=AutoComplete2]')
        .should('have.attr', 'placeholder', 'Type your city...');
    });

    it('should render ClearButton', () => {
      cy.get('[name=AutoComplete1]')
        .clear()
        .type('Paris')
        .parent()
        .children('i.autocomplete-clear-icon')
        .should('be.visible');
    });

    it('should render SuggestionList when isOpen', () => {
      cy.get('[name=AutoComplete1]')
        .clear()
        .blur()
        .parent()
        .parent()
        .children('.suggestion-wrapper')
        .should('be.visible')
        .children('.suggestion-list')
        .should('be.visible')
        .children('.suggestion-item')
        .should('have.length', 2);
    });

    describe('noSuggestionsRender', () => {
      it('defaultMessage', () => {
        cy.get('[name=AutoComplete2]')
          .clear()
          .type('Z')
          .parent()
          .parent()
          .find('.suggestion-wrapper .nodata')
          .should('have.text', 'Ничего не найдено');
      });

      it('customMessage', () => {
        cy.get('[name=AutoComplete4]')
          .clear()
          .type('Z')
          .parent()
          .parent()
          .find('.suggestion-wrapper .nodata')
          .should('have.text', 'набери что-то, что я знаю');
      });

      it('nullMessage', () => {
        cy.get('[name=AutoComplete1]')
          .clear()
          .type('Z')
          .parent()
          .find('.suggestion-wrapper .nodata')
          .should('not.exist');
      });
    });

    it('should render loader when isLoading', () => {
      cy.get('[name=AutoComplete6]')
        .clear()
        .type('z')
        .parent()
        .parent()
        .find('.loader-container')
        .should('be.visible')
        .children('.loader-element')
        .should('be.visible');
    });

    it('should be disabled when isDisabled', () => {
      cy.get('[name=AutoComplete5]')
        .should('be.disabled')
        .parent()
        .should('have.class', 'disabled');
    });

    describe('itemRender', () => {
      it('bold', () => {
        cy.get('[name=AutoComplete4]')
          .clear()
          .type('n')
          .parent()
          .parent()
          .contains('Berlin')
          .should('have.class', 'txt-bold')
          .should('not.have.class', 'txt-success');
      });

      it('success', () => {
        cy.get('[name=AutoComplete4]')
          .clear()
          .type('n')
          .parent()
          .parent()
          .contains('Bangkok')
          .should('not.have.class', 'txt-bold')
          .should('have.class', 'txt-success');
      });

      it('none', () => {
        cy.get('[name=AutoComplete4]')
          .clear()
          .type('n')
          .parent()
          .contains('New York')
          .should('not.have.class', 'txt-bold')
          .should('not.have.class', 'txt-success');
      });
    });
  });

  describe('minSearchLength', () => {
    it('0', () => {
      cy.get('[name=AutoComplete2]')
        .clear()
        .parent()
        .parent()
        .children('.suggestion-wrapper')
        .should('be.visible')
        .children('.suggestion-list')
        .children('.suggestion-item')
        .should('have.length', 10);
    });

    it('3', () => {
      cy.get('[name=AutoComplete3]')
        .clear()
        .type('Lo')
        .parent()
        .parent()
        .find('.suggestion-list')
        .should('not.be.visible');
      cy.get('[name=AutoComplete3]')
        .clear()
        .type('Lon')
        .parent()
        .parent()
        .find('.suggestion-list')
        .should('be.visible')
        .children('.suggestion-item')
        .should('have.length', 1)
        .should('have.text', 'London');
    });
  });

  describe('FilterRule', () => {
    it('includes', () => {
      cy.get('[name=AutoComplete4]')
        .clear()
        .type('don')
        .parent()
        .parent()
        .find('.suggestion-item')
        .should('have.length', 1)
        .should('have.text', 'London (region: Europe)')
        .get('[name=AutoComplete4]')
        .clear()
        .type('don lon')
        .parent()
        .parent()
        .find('.suggestion-wrapper .nodata')
        .should('be.visible');
    });

    it('smart', () => {
      cy.get('[name=AutoComplete3]')
        .clear()
        .type('don')
        .parent()
        .parent()
        .find('.suggestion-item')
        .should('have.length', 1)
        .should('have.text', 'London')
        .get('[name=AutoComplete3]')
        .clear()
        .type('don lon')
        .parent()
        .parent()
        .find('.suggestion-item')
        .should('have.length', 1)
        .should('have.text', 'London');
    });

    it('startsWith', () => {
      cy.get('[name=AutoComplete2]')
        .clear()
        .type('lon')
        .parent()
        .parent()
        .find('.suggestion-item')
        .should('have.length', 1)
        .should('have.text', 'London')
        .get('[name=AutoComplete2]')
        .clear()
        .type('don')
        .parent()
        .parent()
        .find('.suggestion-wrapper .nodata')
        .should('be.visible');
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9000/cypress/autocomplete', {
        onBeforeLoad(win) {
          stub = cy.stub(win.console, 'log', (ev) => { lastConsole = ev; });
        },
      });
    });
    it('onBlur', () => {
      cy.get('[name=AutoComplete3]')
        .clear()
        .type('London')
        .blur()
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'blur');
          expect(lastConsole.component).to.have.property('name', 'AutoComplete3');
          expect(lastConsole.component).to.have.property('value', 'London');
        });
    });

    it('onFocus', () => {
      cy.get('[name=AutoComplete1]')
        .focus()
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'focus');
          expect(lastConsole.component).to.have.property('name', 'AutoComplete1');
          expect(lastConsole.component).to.have.property('value', '');
        });
    });

    it('OnChange', () => {
      cy.get('[name=AutoComplete4]')
        .clear()
        .type('lon')
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'change');
          expect(lastConsole.component).to.have.property('name', 'AutoComplete4');
          expect(lastConsole.component).to.have.property('method', 'type');
          expect(lastConsole.component).to.have.property('value', 'lon');
          expect(lastConsole.component).to.have.property('suggestion', null);
        })
        .parent()
        .parent()
        .find('.suggestion-item')
        .click()
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'click');
          expect(lastConsole.component).to.have.property('name', 'AutoComplete4');
          expect(lastConsole.component).to.have.property('method', 'click');
          expect(lastConsole.component).to.have.property('value', 'London');
          expect(lastConsole.component.suggestion).to.have.property('name', 'London');
          expect(lastConsole.component.suggestion).to.have.property('region', 'Europe');
        });
    });
  });

  describe('Interaction', () => {
    it('should allow input and remove chars', () => {
      cy.get('[name=AutoComplete2]')
        .clear()
        .type('Mo')
        .should('have.value', 'Mo')
        .parent()
        .parent()
        .find('.suggestion-item')
        .click()
        .get('[name=AutoComplete2]')
        .should('have.value', 'Moscow')
        .type('{backspace}'.repeat(5))
        .should('have.value', 'M')
        .parent()
        .parent()
        .find('.suggestion-item')
        .first()
        .click()
        .get(`.${theme.wrapper} input`)
        .should('have.value', 'Magadan');
    });

    it('should synchronize selected and highlighted values', () => {
      cy.name('AutoComplete7')
        .type('3')
        .should('have.value', '3')
        .parent()
        .parent()
        .find('.suggestion-item')
        .first()
        .click()
        .name('AutoComplete7')
        .should('have.value', '3')
        .type('3')
        .type('{enter}')
        .should('have.value', '33')
    });

    it('should clear input on clear button click', () => {
      cy.get('[name=AutoComplete1]')
        .clear()
        .type('Paris')
        .parent()
        .children('i.autocomplete-clear-icon')
        .click()
        .get('[name=AutoComplete1]')
        .should('have.value', '');
    });
  });
});
