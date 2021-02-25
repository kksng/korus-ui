import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.input;

describe('Input', () => {
  beforeEach(() => {
    cy.visit('/cypress/input');
  });

  describe('Display', () => {
    it('Input should be displayed', () => {
      cy.get('input#only-numbers')
        .should('be.visible');
    });
    it('Placeholder should be displayed  ', () => {
      cy.get('input#only-numbers')
        .should('have.attr', 'placeholder', 'only numbers');
    });
  });
  describe('Interaction', () => {
    it('Should accept and display only numbers, with allowedSymbols="numbers"', () => {
      cy.get('input#only-numbers')
        .type('9818862798')
        .should('have.value', '9818862798')
        .clear()
        .type('981g88627h9d8')
        .should('have.value', '9818862798');
    });
    it('Should accept and display only Latin characters, with allowedSymbols={/([A-Za-z]|\\s)/}', () => {
      cy.get('input#only-Latin-symbols')
        .type('only Latin symbols')
        .should('have.value', 'only Latin symbols')
        .clear()
        .type('999only Latin парварsymbols888')
        .should('have.value', 'only Latin symbols');
    });
    it('IsDisabled must set the component to disabled (the component is visible on the form, but it is inactive, there is no way to enter text)', () => {
      cy.get('input#isDisabled')
        .should('be.visible')
        .should('be.disabled');
      cy.get('input#only-Latin-symbols')
        .should('be.visible')
        .should('not.be.disabled');
    });
    it('LetterCase should convert all letters into upper or lower case', () => {
      cy.get('input#changeToUpperCase')
        .type('test text')
        .should('have.value', 'TEST TEXT');
      cy.get('input#changeToLowerCase')
        .type('TEST TEXT')
        .should('have.value', 'test text');
    });
    it('MaxLength should limit the number of characters', () => {
      cy.get('input#only5Characters')
        .type('test text')
        .should('have.value', 'test ');
    });
    it('Should display characters equivalent to those entered', () => {
      cy.get('input#corr-Input')
        .type('888888899879465143164651356')
        .should('have.value', '888888899879465143164651356')
        .clear()
        .type('dfhdgfhdfghdfhbdgf')
        .should('have.value', 'dfhdgfhdfghdfhbdgf')
        .clear()
        .type('hdgshfjgdashgf25413523')
        .should('have.value', 'hdgshfjgdashgf25413523')
        .clear()
        .type('oklhdskjgfлдопрлдшп9304587230')
        .should('have.value', 'oklhdskjgfлдопрлдшп9304587230');
    });
    it('Should paste text starting from cursor position', () => {
      cy.get('input#corr-Input')
        .type('8888')
        .should('have.value', '8888')
        .type('{leftarrow}')
        .paste('sssss')
        .should('have.value', '888sssss8')
    });
    it('IsRequired should check if the field is required (highlight the field in red if nothing is entered and press the submit button)', () => {
      cy.get('input#checkDangerClass')
        .closest(`.${theme.inputWrapper}`)
        .should('not.have.class', 'input-element-wrapper danger');
      cy.get('button')
        .eq(0)
        .click();
      cy.get('input#checkDangerClass')
        .closest(`.${theme.inputWrapper}`)
        .should('have.class', 'input-element-wrapper danger');
    });
    it('IsRequired must check that the field is required (highlight the field in red if it has been removed from focus)', () => {
      cy.get('input#checkDangerClass')
        .focus()
        .blur();
      cy.get('input#checkDangerClass')
        .closest(`.${theme.inputWrapper}`)
        .should('have.class', 'input-element-wrapper danger');
    });
    it('It should work to access the element by form name', () => {
      cy.get('button')
        .click();
      cy.get('input#checkDangerClass')
        .closest(`.${theme.inputWrapper}`)
        .should('have.class', 'input-element-wrapper danger');
    });
    it('Must show a message if the validation isn\'t past + Validator function check', () => {
      cy.get('input#checkDangerClassValid')
        .type('12335')
        .blur()
        .get(`.${theme.inputWrapperInvalid}`)
        .next()
        .should('have.text', 'Введите два слова латиницей через пробел');
      cy.get('input#checkDangerClassValid')
        .type('rrrrr dfdddd')
        .blur()
        .closest(`.${theme.inputWrapper}`)
        .should('not.have.class', 'input-element-wrapper danger');
    });
    it('RequiredMessage should output a message when the focus is lost from an empty mandatory field', () => {
      cy.get('input#checkMessageDangerClass')
        .focus()
        .blur()
        .get(`.${theme.inputWrapperInvalid}`)
        .next()
        .should('have.text', 'Поле обязательно!');
    });
    it('should clear input on clear button click', () => {
      cy.get('input#hasClearButton')
        .type('Clear me')
        .blur()
        .parent()
        .get('.input-clear-icon')
        .click()
      cy.get('input#hasClearButton')
        .should('have.value', '')
    });
    it('should focus input on clear button click', () => {
      cy.get('input#hasClearButton')
        .type('Clear me')
        .blur()
        .parent()
        .get('.input-clear-icon')
        .click()
      cy.focused().should('have.attr', 'id', 'hasClearButton')
    });
    describe('Paste event + maxLength attribute', () => {
      it('Should paste value adjusted to maxLength, if input is empty', () => {
        cy.get('input#only5Characters')
          .paste('test text')
          .should('have.value', 'test ');
      });
      it('Should paste value adjusted to maxLength, if old value is replaced completely', () => {
        cy.get('input#only5Characters')
          .paste('test text')
          .should('have.value', 'test ')
          .type('{selectall}')
          .paste('888888888888')
          .should('have.value', '88888')
      });
    });
  });
});
