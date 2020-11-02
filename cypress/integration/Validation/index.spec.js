import { globalDefaultTheme } from '../../../leda/components/LedaProvider';

const theme = globalDefaultTheme.input;

const wrapperInvalid = theme.inputWrapperInvalid;

describe('Validation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/validation');
  });

  describe('Display', () => {
    it('should add class danger if input is invalid', () => {
      cy.name('Toggle')
        .click()
        .name('Input1')
        .parent()
        .should(($element) => {
          expect($element).to.have.length(1);

          const className = $element[0].className;

          expect(className).to.contain(wrapperInvalid);
        })
        .name('Toggle')
        .click();
    });
  });

  describe('Interaction', () => {
    it('submit should fail if input field is set as invalid', () => {
      cy.name('Toggle')
        .click()
        .name('Submit')
        .click()
        .name('Message')
        .should('have.text', 'Submit failed');
    });
  });
});
