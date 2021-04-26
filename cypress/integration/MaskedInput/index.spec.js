import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.maskedInput;

describe('MaskedInput', () => {
  beforeEach(() => {
    cy.visit('/cypress/masked-input')
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog')
    })         
  });

  describe('Display', () => {
    it('Should render component without placeholder', () => {
      cy.get('#MICardNumberControlled')
        .should('have.value', '')
        .focus()
        .should('have.value', '____-____-____-____')
        .parent()
        .should('have.class', `${theme.inputWrapperFocused}`)
        .snapshot();
    });

    it('Should render placeholder', () => {
      cy.get('#MIControlledInsurance')
        .should('have.attr', 'placeholder', '___-___-___ __')
        .parents(`.${theme.wrapper}`)
        .should('be.visible')
        .snapshot();
    });

    it('Should render disabled state', () => {
      cy.contains('isDisabled')
        .prev()
        .click()
        .name('MINotControlledPhone')
        .parent()
        .should('have.class', `${theme.inputWrapperDisabled}`)
        .snapshot()
        .children()
        .should('have.attr', `${theme.inputWrapperDisabled}`)
      cy.contains('isDisabled')
        .prev()
        .click();       
    });
  });

  describe('Events', () => {
    it('onFocus event', () => {
      cy.get('#MIControlledInsurance')
        .focus()
        .get('@consoleLog')
        .should('be.calledWith', 'Focused')
    });

    it('onBlur event', () => {
      cy.get('#MIControlledInsurance')
        .focus()
        .blur()
        .get('@consoleLog')
        .should('be.calledWith', 'Blured')
    });

    it('onChange event', () => {
      cy.get('#MIControlledPhone')
        .clear()
        .type('9')
        .get('@consoleLog')
        .should('be.calledWith', '+7 (9__)-___-__-__')
        .get('#MIControlledPhone')
        .type('99')
        .get('@consoleLog')
        .should('be.calledWith', '+7 (999)-___-__-__')
        .get('#MIControlledPhone')
        .clear();
    });

    it('onEnterPress event', () => {
      cy.get('#MIControlledPhone')
        .type('{enter}')
        .get('@consoleLog')
        .should('be.calledWith', '+7 (800)-200-06-00')
        .get('#MIControlledPhone')
        .clear();
    });

    it('Paste event', () => {
      cy.get('#MICardNumberControlled')
        .paste('6666-7777-8888-9999')
        .should('have.value', '6666-7777-8888-9999')
        .clear();
    });
  });

  describe('Interaction', () => {
    describe('Input', () => {
      it('Should working with default value', () => {
        cy.get('#MICreditCardNumber')
          .should('have.value', '6666-7777-8888-9999')
          .and('be.visible')
          .clear()
          .type('1234567834567899')
          .should('have.value', '1234-5678-3456-7899')
          .clear()
      });

      it('Should clear one char per backspace press', () => {
        cy.name('MINotControlledPhone')
          .focusMasked()
          .clear()
          .type('9818862798')
          .should('have.value', '+7 (981)-886-27-98')
          .type('{backspace}'.repeat(5))
          .should('have.value', '+7 (981)-886-__-__')
          .type('{backspace}'.repeat(9))
          .should('have.value', '+7 (___)-___-__-__')
          .type('9818862798')
          .should('have.value', '+7 (981)-886-27-98')
          .type('{leftarrow}'.repeat(5))
          .type('{selectall}')
          .type('{del}')
          .should('have.value', '+7 (___)-___-__-__')
          .type('{selectall}')
          .type('{backspace}')
          .type('9818862798')
          .should('have.value', '+7 (981)-886-27-98')
          .type('{selectall}')
          .type('{backspace}')
          .should('have.value', '+7 (___)-___-__-__');
      });

      it('Should move cursor if backspace pressed on empty mask', () => {
        cy.name('MINotControlledPhone')
          .focusMasked()
          .type('{rightArrow}'.repeat(7))
          .type('{backspace}'.repeat(2))
          .type('981')
          .should('have.value', '+7 (_98)-1__-__-__')
          .clear()
          .type('{rightArrow}'.repeat(7))
          .type('886')
          .should('have.value', '+7 (___)-886-__-__')
          .type('{rightArrow}'.repeat(6))
          .type('{backspace}'.repeat(2))
          .type('27')
          .should('have.value', '+7 (___)-886-__-27')
          .clear()
          .should('have.value', '+7 (___)-___-__-__');
      });

      it('Should clear masked value on clear button click', () => {
        cy.name('MINotControlledPhone')
          .type('9818862798')
          .should('have.value', '+7 (981)-886-27-98') 
          .next(`.${theme.closeIcon}`)
          .click()
          .name('MINotControlledPhone')
          .should('have.value', '+7 (___)-___-__-__')
          .focusMasked()
          .type('981')
          .should('have.value', '+7 (981)-___-__-__')
          .next(`.${theme.closeIcon}`)
          .click()
          .name('MINotControlledPhone')
          .should('have.value', '+7 (___)-___-__-__');
      });

      it('Should fill different masks', () => {
        cy.get('#MIControlledPhone')
          .should('have.value', '+7 (800)-200-06-00')
          .focusMasked()
          .clear()
          .clear()
          .type('9818862798')
          .should('have.value', '+7 (981)-886-27-98')
          .closest('.demo-story')
          .get('#MIControlledInsurance')
          .should('have.attr', 'placeholder', '___-___-___ __')
          .focusMasked()
          .clear()
          .type('12345678901')
          .should('have.value', '123-456-789 01')
          .closest('.demo-story')
          .get('#MICarNumber')
          .should('have.attr', 'placeholder', 'Car number')
          .focusMasked()
          .type('AA12BB3456')
          .should('have.value', 'AA12BB3456')
          .closest('.demo-story')
          .get('#MICreditCardNumber')
          .should('have.value', '6666-7777-8888-9999')
          .focusMasked()
          .clear()
          .type('1234123412341234')
          .should('have.value', '1234-1234-1234-1234');
      });

      it('Should forbid non-mask chars', () => {
        cy.name('MINotControlledPhone')
          .focusMasked()
          .should('have.value', '+7 (___)-___-__-__')
          .type('ABC!@#$%^&*)_=+?/.<>,БЛА')
          .should('have.value', '+7 (___)-___-__-__');
      });
    });

    describe('Validation', () => {
      it('Should be invalid when isRequired and value is empty', () => {
        cy.name('MINotControlledPhone')
          .focusMasked()
          .blur()
          .closest(`.${theme.inputWrapper}`)
          .should('have.class', theme.inputWrapperInvalid)
          .next()
          .should('contain', 'Обязательное поле!');
      });

      it('Should be invalid when isRequired and value is not complete', () => {
        cy.name('MINotControlledPhone')
          .focusMasked()
          .type('1234')
          .blur()
          .closest(`.${theme.inputWrapper}`)
          .should('have.class', theme.inputWrapperInvalid)
          .next()
          .should('contain', 'Обязательное поле!');
      });

      it('Should be valid when isRequired and value is complete', () => {
        cy.name('MINotControlledPhone')
          .focusMasked()
          .type('9818862798')
          .blur()
          .closest(`.${theme.inputWrapper}`)
          .should('not.have.class', theme.inputWrapperInvalid)
          .next()
          .should('not.exist');
      });
    });
  });

  describe('Rest', () => {
    describe('Controlled mode', () => {
      it('Should clear and set value', () => {
        cy.get('#MIControlledPhone')
          .clear()
          .type('9818862798')
          .should('have.value', '+7 (981)-886-27-98')
          .get('#clearPhoneValue')
          .click()
          .get('#MIControlledPhone')
          .should('not.have.value')
          .get('#setPhoneValue')
          .click()
          .get('#MIControlledPhone')
          .should('have.value', '+7 (981)-886-27-98');
      });

      it('Should clear mask value', () => {
        cy.get('#clearPhoneValue')
          .click()
          .get('#MIControlledPhone')
          .type('{enter}')
          .get('@consoleLog')
          .should('be.calledWith', '+7 (___)-___-__-__')
          .get('#MIControlledPhone')
          .type('8888')
          .get('@consoleLog')
          .should('be.calledWith', '+7 (888)-8__-__-__')
          .get('#clearPhoneValue')
          .click()
          .get('#MIControlledPhone')
          .type('{enter}')
          .get('@consoleLog')
          .should('be.calledWith', '+7 (___)-___-__-__')
      });

      it('Should remove mask when value is cleared', () => {
        cy.get('#MICardNumberControlled')
          .type('33')
          .get('@consoleLog')
          .should('be.calledWith', '33__-____-____-____')
          .get('#clearCardValue')
          .click()
          .get('@consoleLog')
          .should('be.calledWith', '')
          .get('#MICardNumberControlled')
      });
    });
  });
});
