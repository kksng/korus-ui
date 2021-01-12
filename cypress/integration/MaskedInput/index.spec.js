import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.maskedInput;

describe('MaskedInput', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/masked-input');
  });

  describe('Interaction', () => {
    describe('Input', () => {
      it('should clear one char per backspace press', () => {
        cy.get(`.${theme.wrapper}`)
          .eq(0)
          .get(`.${theme.input}`)
          .eq(0)
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

      it('should fill different masks', () => {
        cy.get(`.${theme.wrapper} input`)
          .eq(2)
          .should('have.value', '+7 (800)-200-06-00')
          .focusMasked()
          .clear()
          .clear()
          .type('9818862798')
          .should('have.value', '+7 (981)-886-27-98')
          .closest('.demo-story')
          .find('input')
          .eq(1)
          .should('have.attr', 'placeholder', '___-___-___ __')
          .focusMasked()
          .clear()
          .type('12345678901')
          .should('have.value', '123-456-789 01')
          .closest('.demo-story')
          .find('input')
          .eq(3)
          .should('have.attr', 'placeholder', 'Car number')
          .focusMasked()
          .type('AA12BB3456')
          .should('have.value', 'AA12BB3456')
          .closest('.demo-story')
          .find('input')
          .eq(4)
          .should('have.value', '6666-7777-8888-9999')
          .focusMasked()
          .clear()
          .type('1234123412341234')
          .should('have.value', '1234-1234-1234-1234');
      });

      it('should forbid non-mask chars', () => {
        cy.get(`.${theme.wrapper} input`)
          .eq(0)
          .focusMasked()
          .should('have.value', '+7 (___)-___-__-__')
          .type('ABC!@#$%^&*)_=+?/.<>,БЛА')
          .should('have.value', '+7 (___)-___-__-__');
      });
    });

    describe('Validation', () => {
      it('should be invalid when isRequired and value is empty', () => {
        cy.get(`.${theme.wrapper} input`)
          .eq(0)
          .focusMasked()
          .blur()
          .closest(`.${theme.inputWrapper}`)
          .should('have.class', theme.inputWrapperInvalid)
          .next()
          .should('contain', 'Обязательное поле!');
      });

      it('should be invalid when isRequired and value is not complete', () => {
        cy.get(`.${theme.wrapper} input`)
          .eq(0)
          .focusMasked()
          .type('1234')
          .blur()
          .closest(`.${theme.inputWrapper}`)
          .should('have.class', theme.inputWrapperInvalid)
          .next()
          .should('contain', 'Обязательное поле!');
      });

      it('should be valid when isRequired and value is complete', () => {
        cy.get(`.${theme.wrapper} input`)
          .eq(0)
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
        cy.get(`.${theme.wrapper} input`)
          .eq(2)
          .should('have.value', '+7 (800)-200-06-00')
          .closest('.demo-story')
          .contains('Clear Value')
          .click()
          .closest('.demo-story')
          .get(`.${theme.wrapper} input`)
          .eq(2)
          .should('not.have.value')
          .closest('.demo-story')
          .contains('Set Value')
          .click()
          .closest('.demo-story')
          .get(`.${theme.wrapper} input`)
          .eq(2)
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
