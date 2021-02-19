/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultDropDownSelectTheme as theme } from '../../../korus-ui/components/DropDownSelect/theme';

describe('DropDownSelect', () => {
  let lastConsole;
  let stub;
  before(() => {
    cy.visit('http://localhost:9000/cypress/dropdownselect');
    cy.viewport(1600, 900)
  });

  describe('Display', () => {
    it('should render ClearButton', () => {
      cy.name('DDSDisabled')
        .next()
        .should('be.visible')
        .click()
        .name('DDSDisabled')
        .parent()
        .find('.dropdownselect-clear-icon')
        .should('not.exist')
    });

    it('Should render placeholder', () => {
      cy.name('Opened')
        .should('have.attr', 'placeholder', 'Choose a city')
    });

    it('Should render SuggestionList when isOpen', () => {
      cy.name('toggleIsOpen')
        .click()
        .name('Opened')
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-wrapper')
        .should('exist')
        .children('.suggestion-list')
        .should('be.visible')
        .children('.suggestion-item')
        .should('have.length', 9)
        .parent('.suggestion-list')
        .children('.txt-bold')
        .should('have.length', 5)
        .parent('.suggestion-list')
        .children('.txt-success')
        .should('have.length', 3)
        .name('toggleIsOpen')
        .click()
    });
  });

  describe('noSuggestionsRender', () => {
    it('Should have a default message', () => {
      cy.name('DDSBoundingContainerRef')
        .clear()
        .type('Z')
        .parents('.dropdownselect-wrapper')
        .find('.nodata')
        .should('have.text', 'Ничего не найдено');
    });

    it('Should allow custom messages', () => {
      cy.name('Opened')
        .clear()
        .type('Z')
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-wrapper')
        .should('have.text', 'Ничего не скажу по этому поводу');
    });

    it('Should allow an empty message', () => {
      cy.name('DDSonBlur')
        .clear()
        .type('Z')
        .parents('.dropdownselect-wrapper')
        .find('.nodata')
        .should('not.exist')
    });
  });

  it('Should render loader when isLoading', () => {
    cy.name('toggleIsLoading')
      .click()
      .name('DDSBoundingContainerRef')
      .clear()
      .type('z')
      .parents('.dropdownselect-wrapper')
      .find('.loader-container')
      .should('be.visible')
      .find('.loader-element')
      .should('be.visible')
      .name('toggleIsLoading')
      .click()
      .name('DDSBoundingContainerRef')
      .parents('.dropdownselect-wrapper')
      .find('.loader-container')
      .should('not.exist');
  });

  it('Should be disabled when isDisabled', () => {
    cy.name('toggleIsDisabled')
      .click()
      .name('DDSDisabled')     
      .parent()
      .should('have.class', 'disabled')
      .children('[name="DDSDisabled"]')
      .should('have.attr', 'disabled')
      .name('toggleIsDisabled')
      .click()
      .name('DDSDisabled')     
      .parent()
      .should('not.have.class', 'disabled')
      .children('[name="DDSDisabled"]')
      .should('not.have.attr', 'disabled')
  });

  describe('Item Render', () => {
    it('Should customize a suggestion item', () => {
      cy.name('toggleIsOpen')
        .click()
        .name('Opened')
        .type('n')
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-wrapper')
        .should('be.visible')
        .contains('Berlin')
        .should('have.class', 'txt-bold')
        .and('not.have.class', 'txt-success')
        .name('toggleIsOpen')
        .click()
        .name('Opened')
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-wrapper')
        .should('not.exist')
    });

    it('Should add a custom css-class to a suggestion item', () => {
      cy.name('toggleIsOpen')
        .click()
        .name('Opened')
        .type('n')
        .parents('.dropdownselect-wrapper')
        .contains('Bangkok')
        .should('not.have.class', 'txt-bold')
        .and('have.class', 'txt-success')
        .name('toggleIsOpen')
        .click()
        .name('Opened')
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-wrapper')
        .should('not.exist');
    });

    it('Customization on suggestion item should not exist', () => {
      cy.name('toggleIsOpen')
        .click()
        .name('Opened')
        .type('n')
        .parents('.dropdownselect-wrapper')
        .contains('New-York')
        .should('not.have.class', 'txt-bold')
        .and('not.have.class', 'txt-success')
        .name('toggleIsOpen')
        .click()
        .name('Opened')
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-wrapper')
        .should('not.exist');
    });
  });


  describe('FilterRule', () => {
    it('Smart', () => {
      cy.name('DDSFilterRule')
        .clear()
        .type('don')
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-item')
        .should('have.length', 1)
        .and('have.text', 'London')
        .name('DDSFilterRule')
        .clear()
        .type('don lon')
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-item')
        .should('have.length', 1)
        .and('have.text', 'London')
        .name('DDSFilterRule')
        .clear();
    });

    it('Includes', () => {
      cy.get('button')
        .contains('Includes')
        .click()
        .name('DDSFilterRule')
        .clear()
        .type('don')
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-item')
        .should('have.length', 1)
        .and('have.text', 'London')
        .name('DDSFilterRule')
        .clear()
        .type('don lon')
        .parents('.dropdownselect-wrapper')
        .find('.nodata')
        .should('be.visible');
    });

    it('StartsWith', () => {
      cy.get('button')
        .contains('StartsWith')
        .click()
        .name('DDSFilterRule')
        .clear()
        .type('lon')
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-item')
        .should('have.length', 1)
        .and('have.text', 'London')
        .name('DDSFilterRule')
        .clear()
        .type('don')
        .parents('.dropdownselect-wrapper')
        .find('.nodata')
        .should('be.visible');
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9000/cypress/dropdownselect', {
        onBeforeLoad(win) {
          stub = cy.stub(win.console, 'log', (ev) => { lastConsole = ev; });
        },
      });
    });

    it('onBlur', () => {
      cy.name('DDSonBlur')
        .clear()
        .type('London')
        .type('{downarrow}{enter}')
        .blur()
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'blur');
          expect(lastConsole.component).to.have.property('name', 'DDSonBlur');
          expect(lastConsole.component).to.have.property('value', 'London');
        });
    });

    it('onFocus', () => {
      cy.name('Opened')
        .focus()
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'focus');
          expect(lastConsole.component).to.have.property('name', 'Opened');
          expect(lastConsole.component).to.have.property('value', null);
        });
    });

    it('Should not open on Window focus event', () => {
      cy.name('DDSFocusCheck')
        .focus()
        .type('{downarrow}', { force: true })
        .type('{enter}', { force: true })
        .windowBlur()
        .windowFocus()
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-list')
        .should('not.exist')
    });

    it('OnFocus: should not open on focus event', () => {
      cy.name('DDSFocusCheck')
        .focus()
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-wrapper')
        .should('not.exist')
    })

    it('OnClick: should open on click event', () => {
      cy.name('DDSFocusCheck')
        .click()
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-wrapper')
        .should('exist')
    })

    it('OnChange', () => {
      cy.name('DDSCompareObjectsByObjects')
        .focus()
        .type('{downarrow}', { force: true })
        .type('{enter}', { force: true })
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'keydown');
          expect(lastConsole.component).to.have.property('name', 'DDSCompareObjectsByObjects');
          expect(lastConsole.component.value).to.have.property('id', 0);
          expect(lastConsole.component.value).to.have.property('city', 'Moscow');
        });
    });

    it('onFilterChange', () => {
      cy.name('DDSDisabled')
        .focus()
        .type('{downarrow}{enter}')
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'keydown');
          expect(lastConsole.component).to.have.property('name', 'DDSDisabled');
          expect(lastConsole.component).to.have.property('value', 'Washington');
        });
    });
  });

  describe('Interaction', () => {
    it('Should clear input on clear button click', () => {
      cy.name('DDSBoundingContainerRef')
        .clear()
        .type('Paris{downarrow}{enter}')
        .parent()
        .children('.dropdownselect-clear-icon')
        .click()
        .name('DDSBoundingContainerRef')
        .should('have.value', '')
        .name('DDSBoundingContainerRef')
        .clear()
        .type('Paris{uparrow}{enter}')
        .parent()
        .children('.dropdownselect-clear-icon')
        .click()
        .name('DDSBoundingContainerRef')
        .should('have.value', '');
    });

    it('CompareObjectsBy', () => {
      cy.name('DDSCompareObjectsBy')
        .click()
        .parents('.dropdownselect-wrapper')
        .find('.suggestion-wrapper')
        .contains('Moscow')
        .click()
        .name('DDSCompareObjectsBy')
        .click()
        .parents('.dropdownselect-wrapper')
        .children('.suggestion-wrapper.visible')
        .find('.suggestion-item.highlighted.selected')
        .eq(0)
        .should('contain', 'Moscow')
        .parents('.suggestion-wrapper.visible')
        .find('.suggestion-item.highlighted.selected')
        .eq(1)
        .should('contain', 'Minsk')
    });

    it('SortSuggestions', () => {
      cy.name('DDSSortSuggestions')
        .click()
        .parents('.dropdownselect-wrapper')
        .children('.suggestion-wrapper.pos-top.visible')
        .find('.suggestion-item')
        .eq(0)
        .parents('.suggestion-wrapper.visible')
        .find('.suggestion-item')
        .eq(13)
        .should('contain', 'Tallin')
    });
  });

  describe('DataTypes', () => {
    it('Should render 0', () => {
      cy.name('DDSShouldAllowEmpty')
        .should('have.value', 0);
    });
  });
});
