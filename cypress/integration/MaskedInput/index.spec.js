import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.maskedInput;

describe('MaskedInput', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/masked-input')
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog')
    })         
  });

  describe('Interaction', () => {
    describe('Input', () => {
      it('should clear one char per backspace press', () => {
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

      it('should move cursor if backspace pressed on empty mask', () => {
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

      it('should clear masked value on clear button click', () => {
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

      it('should fill different masks', () => {
        cy.name('MIControlledPhone')
          .should('have.value', '+7 (800)-200-06-00')
          .focusMasked()
          .clear()
          .clear()
          .type('9818862798')
          .should('have.value', '+7 (981)-886-27-98')
          .closest('.demo-story')
          .name('MIControlledInsurance')
          .should('have.attr', 'placeholder', '___-___-___ __')
          .focusMasked()
          .clear()
          .type('12345678901')
          .should('have.value', '123-456-789 01')
          .closest('.demo-story')
          .name('MICarNumber')
          .should('have.attr', 'placeholder', 'Car number')
          .focusMasked()
          .type('AA12BB3456')
          .should('have.value', 'AA12BB3456')
          .closest('.demo-story')
          .name('MICreditCardNumber')
          .should('have.value', '6666-7777-8888-9999')
          .focusMasked()
          .clear()
          .type('1234123412341234')
          .should('have.value', '1234-1234-1234-1234');
      });

      it('should forbid non-mask chars', () => {
        cy.name('MINotControlledPhone')
          .focusMasked()
          .should('have.value', '+7 (___)-___-__-__')
          .type('ABC!@#$%^&*)_=+?/.<>,БЛА')
          .should('have.value', '+7 (___)-___-__-__');
      });
    });

    describe('Validation', () => {
      it('should be invalid when isRequired and value is empty', () => {
        cy.name('MINotControlledPhone')
          .focusMasked()
          .blur()
          .closest(`.${theme.inputWrapper}`)
          .should('have.class', theme.inputWrapperInvalid)
          .next()
          .should('contain', 'Обязательное поле!');
      });

      it('should be invalid when isRequired and value is not complete', () => {
        cy.name('MINotControlledPhone')
          .focusMasked()
          .type('1234')
          .blur()
          .closest(`.${theme.inputWrapper}`)
          .should('have.class', theme.inputWrapperInvalid)
          .next()
          .should('contain', 'Обязательное поле!');
      });

      it('should be valid when isRequired and value is complete', () => {
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
      it('should clear and set value', () => {
        cy.name('MIControlledPhone')
          .clear()
          .type('9818862798')
          .should('have.value', '+7 (981)-886-27-98')
          .name('clearPhoneValue')
          .click()
          .name('MIControlledPhone')
          .should('not.have.value')
          .name('setPhoneValue')
          .click()
          .name('MIControlledPhone')
          .should('have.value', '+7 (981)-886-27-98');
      });
      it('should clear mask value', () => {
        cy.name('clearPhoneValue')
          .click()
          .name('MIControlledPhone')
          .type('{enter}')
          .get('@consoleLog')
          .should('be.calledWith', '+7 (___)-___-__-__')
          .name('MIControlledPhone')
          .type('8888')
          .get('@consoleLog')
          .should('be.calledWith', '+7 (888)-8__-__-__')
          .name('clearPhoneValue')
          .click()
          .name('MIControlledPhone')
          .type('{enter}')
          .get('@consoleLog')
          .should('be.calledWith', '+7 (___)-___-__-__')
      });
      it('should remove mask when value is cleared', () => {
        cy.name('MICardNumberControlled')
          .type('33')
          .get('@consoleLog')
          .should('be.calledWith', '33__-____-____-____')
          .name('clearCardValue')
          .click()
          .get('@consoleLog')
          .should('be.calledWith', '')
          .name('MICardNumberControlled')
      });
    });
  });
});
