/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultAutoCompleteTheme as theme } from '../../../korus-ui/components/AutoComplete/theme';

describe('AutoComplete', () => {
  let lastConsole;
  let stub;
  before(() => {
    cy.visit('cypress/autocomplete');
  });

  describe('Display', () => {
    it('Should render placeholder', () => {
      cy.name('AutoComplete2')
        .should('have.attr', 'placeholder', 'Type your city...');
    });

    it('Should render ClearButton', () => {
      cy.name('AutoComplete1')
        .clear()
        .type('Paris')
        .parent()
        .find('.autocomplete-clear-icon')
        .should('be.visible');
    });

    it('Should render SuggestionList when isOpen', () => {
      cy.name('AutoComplete1')
        .clear()
        .blur()
        .parents('.autocomplete-wrapper')
        .find('.suggestion-wrapper')
        .should('be.visible')
        .and('have.class', 'visible')
        .find('.suggestion-list')
        .should('be.visible')
        .find('.suggestion-item')
        .should('have.length', 2);
    });

    it('Should appear css-class "danger" and render requiredMessage when the focus is lost', () => {
      cy.name('AutoComplete2')
        .focus()
        .blur()
        .parent()
        .should('have.class', 'danger')
        .parent()
        .find('.invalid-message-list')
        .should('have.text', 'Поле обязательно!');
    });

    describe('noSuggestionsRender', () => {
      it('Should render defaultMessage', () => {
        cy.name('AutoComplete2')
          .clear()
          .type('Z')
          .parents('.autocomplete-wrapper')
          .find('.suggestion-wrapper .nodata')
          .should('have.text', 'Ничего не найдено');
      });

      it('Should render customMessage', () => {
        cy.name('AutoComplete4')
          .clear()
          .type('Z')
          .parents('.autocomplete-wrapper')
          .find('.suggestion-wrapper .nodata')
          .should('have.text', 'набери что-то, что я знаю');
      });

      it('nullMessage', () => {
        cy.name('AutoComplete1')
          .clear()
          .type('Z')
          .parent()
          .find('.suggestion-wrapper .nodata')
          .should('not.exist');
      });
    });

    it('Should render loader when isLoading', () => {
      cy.name('AutoComplete6')
        .clear()
        .type('z')
        .parents('.autocomplete-wrapper')
        .find('.loader-container, .loader-element')
        .should('be.visible');
    });

    it('Should be disabled when isDisabled', () => {
      cy.name('AutoComplete5')       
        .parent()
        .should('have.class', 'disabled')
        .children()
        .should('be.disabled')
        .and('have.attr', 'disabled');
    });

    describe('itemRender', () => {
      it('Bold', () => {
        cy.name('AutoComplete4')
          .clear()
          .type('n')
          .parents('.autocomplete-wrapper')
          .contains('Berlin')
          .should('have.class', 'txt-bold')
          .and('not.have.class', 'txt-success')
          .name('AutoComplete4')
          .clear();
      });

      it('Success', () => {
        cy.name('AutoComplete4')
          .clear()
          .type('n')
          .parents('.autocomplete-wrapper')
          .contains('Bangkok')
          .should('have.class', 'txt-success')
          .and('not.have.class', 'txt-bold')
          .name('AutoComplete4')
          .clear();
      });

      it('None', () => {
        cy.name('AutoComplete4')
          .clear()
          .type('n')
          .parents('.autocomplete-wrapper')
          .contains('New York')
          .should('not.have.class', 'txt-bold')
          .and('not.have.class', 'txt-success')
          .name('AutoComplete4')
          .clear();
      });
    });
  });

  describe('minSearchLength', () => {
    it('0', () => {
      cy.name('AutoComplete2')
        .clear()
        .parents('.autocomplete-wrapper')
        .find('.suggestion-wrapper')
        .should('be.visible')
        .and('have.class', 'visible')
        .children('.suggestion-list')
        .children('.suggestion-item')
        .should('have.length', 10);
    });

    it('3', () => {
      cy.name('AutoComplete3')
        .clear()
        .type('Lo')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-list')
        .should('not.exist')
        .name('AutoComplete3')
        .clear()
        .type('Lon')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-list')
        .should('be.visible')
        .find('.suggestion-item')
        .should('have.length', 1)
        .and('have.text', 'London');
    });
  });

  describe('FilterRule', () => {
    it('Includes', () => {
      cy.name('AutoComplete4')
        .clear()
        .type('don')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-item')
        .should('have.length', 1)
        .and('have.text', 'London (region: Europe)')
        .name('AutoComplete4')
        .clear()
        .type('don lon')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-wrapper .nodata')
        .should('be.visible');
    });

    it('Smart', () => {
      cy.name('AutoComplete3')
        .clear()
        .type('don')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-item')
        .should('have.length', 1)
        .and('have.text', 'London')
        .name('AutoComplete3')
        .clear()
        .type('don lon')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-item')
        .should('have.length', 1)
        .and('have.text', 'London');
    });

    it('StartsWith', () => {
      cy.name('AutoComplete2')
        .clear()
        .type('lon')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-item')
        .should('have.length', 1)
        .and('have.text', 'London')
        .name('AutoComplete2')
        .clear()
        .type('don')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-wrapper .nodata')
        .should('be.visible');
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('cypress/autocomplete', {
        onBeforeLoad(win) {
          stub = cy.stub(win.console, 'log', (ev) => { lastConsole = ev; });
        },
      });
    });

    it('onBlur', () => {
      cy.name('AutoComplete3')
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
      cy.name('AutoComplete1')
        .focus()
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'focus');
          expect(lastConsole.component).to.have.property('name', 'AutoComplete1');
          expect(lastConsole.component).to.have.property('value', '');
        });
    });

    it('onEnterPress', () => {
      cy.name('AutoComplete2')
        .focus()
        .type('{upArrow}{enter}')
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'keydown');
          expect(lastConsole.component).to.have.property('name', 'AutoComplete2');
          expect(lastConsole.component).to.have.property('value', '');
        });
    });

    it('OnChange', () => {
      cy.name('AutoComplete4')
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
        .parents('.autocomplete-wrapper')
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
    it('Should allow input and remove chars', () => {
      cy.name('AutoComplete2')
        .clear()
        .type('Mo')
        .should('have.value', 'Mo')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-item')
        .click()
        .name('AutoComplete2')
        .should('have.value', 'Moscow')
        .type('{backspace}'.repeat(5))
        .should('have.value', 'M')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-item')
        .first()
        .click()
        .name('AutoComplete2')
        .should('have.value', 'Magadan')
        .clear()
        .blur();
    });

    it('Should synchronize selected and highlighted values', () => {
      cy.name('AutoComplete7')
        .type('3')
        .should('have.value', '3')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-item')
        .first()
        .click()
        .name('AutoComplete7')
        .should('have.value', '3')
        .type('3{enter}')
        .should('have.value', '33')
        .clear()
        .blur();
    });

    it('Should clear input on clear button click', () => {
      cy.name('AutoComplete1')
        .clear()
        .type('Paris')
        .parent()
        .find('.autocomplete-clear-icon')
        .click()
        .name('AutoComplete1')
        .should('have.value', '');
    });

    it('Selecting values using the keyboard', () => {
      cy.name('AutoComplete2')
        .focus()
        .type('{downArrow}')
        .parents('.autocomplete-wrapper')
        .find('.suggestion-list')
        .should('be.visible')
        .name('AutoComplete2')
        .type('{downArrow}'.repeat(3))
        .type('{enter}')
        .should('have.value', 'Washington')
        .clear()
        .blur();
    });
  });
});
