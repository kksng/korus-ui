import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.input;

describe('Input', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/input');
  });

  describe('Display', () => {
    it('Input should be displayed', () => {
      cy.get('#only-numbers')
        .should('be.visible');
    });

    it('Placeholder should be displayed  ', () => {
      cy.get('#only-numbers')
        .should('have.attr', 'placeholder', 'only numbers');
    });

    it('IsDisabled must set the component to disabled (the component is visible on the form, but it is inactive, there is no way to enter text)', () => {
      cy.get('#isDisabled')
        .parent()
        .should('have.class', `${theme.inputWrapperDisabled}`)
        .children()
        .should('be.visible')
        .and('have.attr', 'disabled');
    });
  });

  describe('Interaction', () => {
    it('Should accept and display only numbers, with allowedSymbols="numbers"', () => {
      cy.get('#only-numbers')
        .type('9818862798')
        .should('have.value', '9818862798')
        .clear()
        .type('981g88627h9d8')
        .should('have.value', '9818862798');
    });

    it('Only numbers or symbols', () => {
      cy.get('#numbersAndSymbols')
        .type('123456789')
        .should('have.value', '123456789')
        .clear()
        .type('!@#$%^&')
        .should('have.value', '!@#$%^&')
        .clear()
        .type('Hello')
        .should('have.value', '');
    })

    it('Should accept and display only Latin characters, with allowedSymbols={/([A-Za-z]|\\s)/}', () => {
      cy.get('#only-Latin-symbols')
        .type('only Latin symbols')
        .should('have.value', 'only Latin symbols')
        .clear()
        .type('999only Latin парварsymbols888')
        .should('have.value', 'only Latin symbols')
        .clear()
        .type('!@#@#$$%')
        .should('have.value', '')
        .clear()
        .paste('999only Latin парварsymbols888')
        .should('have.value', 'only Latin symbols')
        .clear();
    });

    it('LetterCase should convert all letters into upper or lower case', () => {
      cy.get('#changeToUpperCase')
        .type('test text')
        .should('have.value', 'TEST TEXT')
        .clear()
        .paste('test text')
        .should('have.value', 'TEST TEXT')
        .clear()
        .get('#changeToLowerCase')
        .type('TEST TEXT')
        .should('have.value', 'test text')
        .clear()
        .paste('TEST TEXT')
        .should('have.value', 'test text')
        .clear();
    });

    it('MaxLength should limit the number of characters', () => {
      cy.get('#only5Characters')
        .type('test text')
        .should('have.value', 'test ')
        .clear()
        .type('123456')
        .should('have.value', '12345')
        .clear();
    });

    it('Should display characters equivalent to those entered', () => {
      cy.get('#corr-Input')
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
        .should('have.value', 'oklhdskjgfлдопрлдшп9304587230')
        .clear()
        .type('!@#$$~&*&')
        .should('have.value', '!@#$$~&*&')
        .clear();
    });

    it('Should paste text starting from cursor position', () => {
      cy.get('#corr-Input')
        .type('8888')
        .should('have.value', '8888')
        .type('{leftarrow}')
        .paste('sssss')
        .should('have.value', '888sssss8');
    });

    it('IsRequired should check if the field is required (highlight the field in red if nothing is entered and press the submit button)', () => {
      cy.get('#checkDangerClass')
        .closest(`.${theme.inputWrapper}`)
        .should('not.have.class', `${theme.inputWrapperInvalid}`)
        .get('#submit')
        .click()
        .get('#checkDangerClass')
        .closest(`.${theme.inputWrapper}`)
        .should('have.class', `${theme.inputWrapperInvalid}`);
    });

    it('IsRequired must check that the field is required (highlight the field in red if it has been removed from focus)', () => {
      cy.get('#checkDangerClass')
        .focus()
        .blur()
        .closest(`.${theme.inputWrapper}`)
        .should('have.class', `${theme.inputWrapperInvalid}`);
    });

    it('It should work to access the element by form name', () => {
      cy.get('#submit')
        .click()
        .get('#checkDangerClass')
        .closest(`.${theme.inputWrapper}`)
        .should('have.class', `${theme.inputWrapperInvalid}`);
    });

    it('Must show a message if the validation isn\'t past + Validator function check', () => {
      cy.get('#checkDangerClassValid')
        .type('12335')
        .blur()
        .get(`.${theme.inputWrapperInvalid}`)
        .next()
        .should('have.text', 'Введите два слова латиницей через пробел')
        .get('input#checkDangerClassValid')
        .type('rrrrr dfdddd')
        .blur()
        .closest(`.${theme.inputWrapper}`)
        .should('not.have.class', `${theme.inputWrapperInvalid}`);
    });

    it('RequiredMessage should output a message when the focus is lost from an empty mandatory field', () => {
      cy.get('#checkMessageDangerClass')
        .focus()
        .blur()
        .get(`.${theme.inputWrapperInvalid}`)
        .next()
        .should('have.text', 'Поле обязательно!');
    });

    it('Should clear input on clear button click', () => {
      cy.get('#hasClearButton')
        .type('Clear me')
        .blur()
        .parent()
        .find(`.${theme.closeIcon}`)
        .click()
        .get('#hasClearButton')
        .should('have.value', '');
    });

    it('Should focus input on clear button click', () => {
      cy.get('#hasClearButton')
        .type('Clear me')
        .blur()
        .parent()
        .get(`.${theme.closeIcon}`)
        .click()
      cy.focused().should('have.attr', 'id', 'hasClearButton');
    });

    describe('Paste event + maxLength attribute', () => {
      it('Should paste value adjusted to maxLength, if input is empty', () => {
        cy.get('#only5Characters')
          .paste('test text')
          .should('have.value', 'test ')
          .clear();
      });

      it('Should paste value adjusted to maxLength, if old value is replaced completely', () => {
        cy.get('#only5Characters')
          .paste('test text')
          .should('have.value', 'test ')
          .type('{selectall}')
          .paste('888888888888')
          .should('have.value', '88888')
          .clear();
      });
    });
  });
});
