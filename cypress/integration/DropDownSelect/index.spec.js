/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultDropDownSelectTheme as theme } from '../../../korus-ui/components/DropDownSelect/theme';

const clearIcon = `.${theme.clearIcon}`;
const selectIcon = `.${theme.selectIcon}`;
const wrapper = `.${theme.wrapper}`;
const container = `.${theme.container}`;
const list = `.${theme.list}`;
const item = `.${theme.item}`;
const inputWrapperDisabled = `${theme.inputWrapperDisabled}`;
const noSuggestions = `.${theme.noSuggestions}`;

describe('DropDownSelect', () => {
  let lastConsole;
  let stub;
  before(() => {
    cy.visit('/cypress/dropdownselect');
    cy.viewport(1600, 900)
  });

  describe('Display', () => {
    it('Should render the component', () => {
      cy.get('#DDSBoundingContainerRef')
        .should('be.visible')
        .parent()
        .snapshot();
    });

    it('Should render ClearButton', () => {
      cy.get('#DDSDisabled')
        .next()
        .should('be.visible')
        .click()
        .get('#DDSDisabled')
        .parent()
        .find(clearIcon)
        .should('not.exist')
    });

    it('Should render placeholder', () => {
      cy.get('#Opened')
        .should('have.attr', 'placeholder', 'Choose a city')
    });

    it('Should render SuggestionList when isOpen', () => {
      cy.get('#toggleIsOpen')
        .click()
        .get('#Opened')
        .parents(wrapper)
        .find(container)
        .should('exist')
        .children(list)
        .should('be.visible')
        .children(item)
        .should('have.length', 9)
        .parent(list)
        .children('.txt-bold')
        .should('have.length', 5)
        .parent(list)
        .children('.txt-success')
        .should('have.length', 3)
        .get('#toggleIsOpen')
        .click()
    });

    it('Should render value', () => {
      cy.get('#DDSCompareObjectsBy')
        .should('be.visible')
        .and('have.value', 'London')
        .snapshot();
    });

    it('Should render data', () => {
      cy.get('#DDSCompareObjectsBy')
        .next()
        .click()
        .parents(wrapper)
        .find(`.${theme.container}`)
        .should('be.visible')
        .and('have.class', `${theme.containerVisible}`)
        .snapshot()
        .get('#DDSCompareObjectsBy')
        .blur();
    });

    it('Should render with string data', () => {
      cy.get('#DDSBoundingContainerRef')
        .next()
        .click()
        .parents(wrapper)
        .find(`.${theme.container}`)
        .should('be.visible')
        .and('have.class', `${theme.containerVisible}`)
        .get('#DDSBoundingContainerRef')
        .blur();
    });

    it('Should render with object data', () => {
      cy.get('#DDSSortSuggestions')
        .next()
        .click()
        .parents(wrapper)
        .find(`.${theme.container}`)
        .should('be.visible')
        .and('have.class', `${theme.containerVisible}`)
        .get('#DDSSortSuggestions')
        .blur();
    });

    it('Should render component if no data', () => {
      cy.get('#noData')
        .should('be.visible')
        .and('have.value', 'no data, lol')
        .parents(wrapper)
        .should('have.class', 'no-data');
    });
  });

  describe('noSuggestionsRender', () => {
    it('Should have a default message', () => {
      cy.get('#DDSBoundingContainerRef')
        .clear()
        .type('Z')
        .parents(wrapper)
        .find(noSuggestions)
        .should('have.text', 'Ничего не найдено');
    });

    it('Should allow custom messages', () => {
      cy.get('#Opened')
        .clear()
        .type('Z')
        .parents(wrapper)
        .find(container)
        .should('have.text', 'Ничего не скажу по этому поводу');
    });

    it('Should allow an empty message', () => {
      cy.get('#DDSonBlur')
        .clear()
        .type('Z')
        .parents(wrapper)
        .find(noSuggestions)
        .should('not.exist')
    });
  });

  it('Should render loader when isLoading', () => {
    cy.get('#toggleIsLoading')
      .click()
      .get('#DDSBoundingContainerRef')
      .clear()
      .type('z')
      .parents(wrapper)
      .find('.loader-container')
      .should('be.visible')
      .snapshot()
      .find('.loader-element')
      .should('be.visible')
      .get('#toggleIsLoading')
      .click()
      .get('#DDSBoundingContainerRef')
      .parents(wrapper)
      .find('.loader-container')
      .should('not.exist');
  });

  it('Should be disabled when isDisabled', () => {
    cy.get('#toggleIsDisabled')
      .click()
      .get('#DDSDisabled')     
      .parent()
      .should('have.class', inputWrapperDisabled)
      .children('#DDSDisabled')
      .should('have.attr', inputWrapperDisabled)
      .get('#toggleIsDisabled')
      .click()
      .get('#DDSDisabled')     
      .parent()
      .should('not.have.class', inputWrapperDisabled)
      .children('#DDSDisabled')
      .should('not.have.attr', inputWrapperDisabled)
  });

  describe('Item Render', () => {
    it('Should customize a suggestion item', () => {
      cy.get('#toggleIsOpen')
        .click()
        .get('#Opened')
        .type('n')
        .parents(wrapper)
        .find(container)
        .should('be.visible')
        .contains('Berlin')
        .should('have.class', 'txt-bold')
        .and('not.have.class', 'txt-success')
        .get('#toggleIsOpen')
        .click()
        .get('#Opened')
        .parents(wrapper)
        .find(container)
        .should('not.exist')
    });

    it('Should add a custom css-class to a suggestion item', () => {
      cy.get('#toggleIsOpen')
        .click()
        .get('#Opened')
        .type('n')
        .parents(wrapper)
        .contains('Bangkok')
        .should('not.have.class', 'txt-bold')
        .and('have.class', 'txt-success')
        .get('#toggleIsOpen')
        .click()
        .get('#Opened')
        .parents(wrapper)
        .find(container)
        .should('not.exist');
    });

    it('Customization on suggestion item should not exist', () => {
      cy.get('#toggleIsOpen')
        .click()
        .get('#Opened')
        .type('n')
        .parents(wrapper)
        .contains('New-York')
        .should('not.have.class', 'txt-bold')
        .and('not.have.class', 'txt-success')
        .get('#toggleIsOpen')
        .click()
        .get('#Opened')
        .parents(wrapper)
        .find(container)
        .should('not.exist');
    });
  });


  describe('FilterRule', () => {
    it('Smart', () => {
      cy.get('#DDSFilterRule')
        .clear()
        .type('don')
        .parents(wrapper)
        .find(item)
        .should('have.length', 1)
        .and('have.text', 'London')
        .get('#DDSFilterRule')
        .clear()
        .type('don lon')
        .parents(wrapper)
        .find(item)
        .should('have.length', 1)
        .and('have.text', 'London')
        .get('#DDSFilterRule')
        .clear();
    });

    it('Includes', () => {
      cy.get('button')
        .contains('Includes')
        .click()
        .get('#DDSFilterRule')
        .clear()
        .type('don')
        .parents(wrapper)
        .find(item)
        .should('have.length', 1)
        .and('have.text', 'London')
        .get('#DDSFilterRule')
        .clear()
        .type('don lon')
        .parents(wrapper)
        .find(noSuggestions)
        .should('be.visible');
    });

    it('StartsWith', () => {
      cy.get('button')
        .contains('StartsWith')
        .click()
        .get('#DDSFilterRule')
        .clear()
        .type('lon')
        .parents(wrapper)
        .find(item)
        .should('have.length', 1)
        .and('have.text', 'London')
        .get('#DDSFilterRule')
        .clear()
        .type('don')
        .parents(wrapper)
        .find(noSuggestions)
        .should('be.visible');
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('/cypress/dropdownselect', {
        onBeforeLoad(win) {
          stub = cy.stub(win.console, 'log', (ev) => { lastConsole = ev; });
        },
      });
    });

    it('onEnterPress', () => {
      cy.get('#Opened')
        .type('{enter}')
        .then(() => {
          expect(stub).to.be.calledWith('Enter');
        });
    });

    it('onBlur', () => {
      cy.get('#DDSonBlur')
        .clear()
        .type('London')
        .type('{downarrow}{enter}')
        .blur()
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'blur');
          expect(lastConsole.component).to.have.property('value', 'London');
        });
    });

    it('onFocus', () => {
      cy.get('#Opened')
        .focus()
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'focus');
          expect(lastConsole.component).to.have.property('value', null);
        });
    });

    it('Should not open on Window focus event', () => {
      cy.get('#DDSFocusCheck')
        .focus()
        .type('{downarrow}', { force: true })
        .type('{enter}', { force: true })
        .windowBlur()
        .windowFocus()
        .parents(wrapper)
        .find(list)
        .should('not.exist');
    });

    it('OnFocus: should not open on focus event', () => {
      cy.get('#DDSFocusCheck')
        .focus()
        .parents(wrapper)
        .find(container)
        .should('not.exist');
    });

    it('OnClick: should open on click event', () => {
      cy.get('#DDSFocusCheck')
        .click()
        .parents(wrapper)
        .find(container)
        .should('exist');
    });

    it('OnChange', () => {
      cy.get('#DDSCompareObjectsByObjects')
        .focus()
        .type('{downarrow}', { force: true })
        .type('{enter}', { force: true })
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'keydown');
          expect(lastConsole.component.value).to.have.property('id', 0);
          expect(lastConsole.component.value).to.have.property('city', 'Moscow');
        });
    });

    it('onFilterChange', () => {
      cy.get('#DDSDisabled')
        .focus()
        .type('{downarrow}{enter}')
        .then(() => {
          expect(stub).to.be.called;
          expect(lastConsole).to.have.property('type', 'keydown');
          expect(lastConsole.component).to.have.property('value', 'Washington');
        });
    });
  });

  describe('Interaction', () => {
    it('Should attach a class name through "_" and className prop', () => {
      cy.get('#DDSBoundingContainerRef')
        .parents(wrapper)
        .should('have.class', 'attached-by-underlining')
        .and('have.class', 'attachedByClassNameProp');
    });

    it('Should clear input on clear button click', () => {
      cy.get('#DDSBoundingContainerRef')
        .clear()
        .type('Paris{downarrow}{enter}')
        .parent()
        .children(clearIcon)
        .click()
        .get('#DDSBoundingContainerRef')
        .should('have.value', '')
        .get('#DDSBoundingContainerRef')
        .clear()
        .type('Paris{uparrow}{enter}')
        .parent()
        .children(clearIcon)
        .click()
        .get('#DDSBoundingContainerRef')
        .should('have.value', '');
    });

    it('CompareObjectsBy', () => {
      cy.get('#DDSCompareObjectsBy')
        .click()
        .parents(wrapper)
        .find(container)
        .contains('Moscow')
        .click()
        .get('#DDSCompareObjectsBy')
        .click()
        .parents(wrapper)
        .children('.suggestion-wrapper.visible')
        .find('.suggestion-item.highlighted.selected')
        .eq(0)
        .should('contain', 'Moscow')
        .parents('.suggestion-wrapper.visible')
        .find('.suggestion-item.highlighted.selected')
        .eq(1)
        .should('contain', 'Minsk');
    });

    it('CompareObjectsBy with function as value', () => {
      cy.get('#DDSCompareObjectsWithFuctionInId')
        .click()
        .parents(wrapper)
        .find(container)
        .contains('Madrid')
        .click()
        .get('#DDSCompareObjectsWithFuctionInId')
        .click()
        .parents(wrapper)
        .children('.suggestion-wrapper.visible')
        .find('.suggestion-item.highlighted.selected')
        .eq(0)
        .should('contain', 'Madrid')
        .parents('.suggestion-wrapper.visible')
        .find('.suggestion-item.highlighted.selected')
        .eq(1)
        .should('contain', 'Madrid');
    });

    it('Should not compare if the string does not match data objects structure', () => {
      cy.get('#notCompared')
        .click()
        .parents(wrapper)
        .find(container)
        .contains('Madrid')
        .click()
        .get('#notCompared')
        .click()
        .parents(wrapper)
        .children('.suggestion-wrapper.visible')
        .find('.suggestion-item')
        .should('not.have.class', 'highlighted')
        .and('not.have.class', 'selected');
    });

    it('SortSuggestions', () => {
      cy.get('#DDSSortSuggestions')
        .click()
        .parents(wrapper)
        .children('.suggestion-wrapper.pos-top.visible')
        .find(item)
        .eq(0)
        .parents('.suggestion-wrapper.visible')
        .find(item)
        .eq(13)
        .should('contain', 'Tallin');
    });
  });

  describe('DataTypes', () => {
    it('Should render 0', () => {
      cy.get('#DDSShouldAllowEmpty')
        .should('have.value', 0);
    });
    it('Should put the cursor to initial position on icon click', () => {
      cy.get('#DDSLongStrings')
        .should('have.value', 'Information about the status of payments for taxes, fees, insurance premiums, penalties, fines, and interest')
        .next(selectIcon)
        .click()
        .get('#DDSLongStrings')
        .type('Some ')
        .should('have.value', 'Some Information about the status of payments for taxes, fees, insurance premiums, penalties, fines, and interest')
        .blur();
    });
  });

  describe('Validation', () => {
    it('Should add class "danger" on blur if is required and value is empty', () => {
      cy.get('#DDSRequired')
        .focus()
        .blur()
        .parent()
        .should('have.class', theme.inputWrapperInvalid)
    });
  });
});
