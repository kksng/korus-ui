import {defaultRadioTheme as theme} from '../../../korus-ui/components/Radio/theme';

const item = `.${theme.item}`


describe('RadioGroup', () => {
  beforeEach(() => {
    cy.visit('/cypress/radio-group');
  });

  describe('Display', () => {
    it('Should render first radio checked in uncontrolled mode', () => {
      cy.get('.uncontrolled')
        .find(item)
        .first()
        .find('input')
        .should('be.checked')
    });
    
    it('Should render value checked if it is passed in controlled mode', () => {
      cy.get('.controlled-with-initial-value')
        .find(item)
        .last()
        .find('input')
        .should('be.checked')
    });

    it('Should render first radio checked in controlled mode if no value provided', () => {
      cy.get('.controlled-without-initial-value')
        .find(item)
        .first()
        .find('input')
        .should('be.checked')
    });
  });

  describe('Interaction', () => {
    it('Should reset to first value in uncontrolled mode', () => {
      cy.get('.uncontrolled')
        .find(item)
        .last()
        .click()
        .find('input')
        .should('be.checked')
        .get('button')
        .click()
        .get('.uncontrolled')
        .find(item)
        .first()
        .find('input')
        .should('be.checked')
    });

    it('Should reset to initial value in controlled mode', () => {
      cy.get('.controlled-with-initial-value')
        .find(item)
        .eq(1)
        .click()
        .find('input')
        .should('be.checked')
        .get('button')
        .click()
        .get('.controlled-with-initial-value')
        .find(item)
        .last()
        .find('input')
        .should('be.checked')       
    });
    
    it('Should reset to first value in controlled mode without initial value', () => {
      cy.get('.controlled-without-initial-value')
        .find(item)
        .eq(1)
        .click()
        .find('input')
        .should('be.checked') 
        .get('button')
        .click()
        .get('.controlled-without-initial-value')
        .find(item)
        .first()
        .find('input')
        .should('be.checked')       
    });
  });
});
