import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.maskedInput;

describe('MaskedInput', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/masked-input');
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
          .type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}')
          .type('{backspace}{backspace}')
          .type('981')
          .should('have.value', '+7 (_98)-1__-__-__')
          .clear()
          .type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}')
          .type('886')
          .should('have.value', '+7 (___)-886-__-__')
          .type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}')
          .type('{backspace}{backspace}')
          .type('27')
          .should('have.value', '+7 (___)-886-__-27')
          .clear()
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
          .should('have.value', '+7 (800)-200-06-00')
          .closest('.demo-story')
          .contains('Clear Value')
          .click()
          .closest('.demo-story')
          .name('MIControlledPhone')
          .should('not.have.value')
          .closest('.demo-story')
          .contains('Set Value')
          .click()
          .closest('.demo-story')
          .name('MIControlledPhone')
          .should('have.value', '+7 (981)-886-27-98');
      });
      it('should clear mask value', () => {
        cy.name('clearValue')
          .click()
          .name('MIControlledPhone')
          .type('{enter}')
          .name('InputValue')
          .should('have.text', 'InputValue: +7 (___)-___-__-__')
          .name('MIControlledPhone')
          .type('8888')
          .name('InputValue')
          .should('have.text', 'InputValue: +7 (888)-8__-__-__')
          .name('clearValue')
          .click()
          .name('MIControlledPhone')
          .type('{enter}')
          .name('InputValue')
          .should('have.text', 'InputValue: +7 (___)-___-__-__')
      });
    });
  });
});
