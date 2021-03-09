import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.dropDownLink;

const adjustedClassNames = Object.values(theme).map((value) =>
  value.split(' ').join('.')
);

Object.keys(theme).forEach((key, index) => {
  theme[key] = adjustedClassNames[index];
});

const linkClassName = `.${theme.currentText}`;

const itemClassName = `.${theme.item}`;

const wrapperVisibleClassName = `.${theme.wrapperVisible}`;

describe('DropDown', () => {
  before(() => {
    cy.visit('/cypress/dropdownlink');
  });

  describe('Display', () => {
    it('Should display value', () => {
      cy.get('#DropDownLink')
        .find(linkClassName)
        .should('have.text', 'Saint Petersburg');
    });

    it('Should set new value', () => {
      cy.get('#DropDownLink')
        .trigger('mouseover')
        .find(itemClassName)
        .first()
        .click()
        .get('#DropDownLink')
        .find(linkClassName)
        .should('have.text', 'London');
    });
  });

  describe('Interaction', () => {
    it('Should open on mouseenter and close on mouseleave', () => {
      cy.get('#DropDownLink')
        .trigger('mouseover')
        .find(wrapperVisibleClassName)
        .should('exist')
        .trigger('mouseout')
        .find(wrapperVisibleClassName)
        .should('not.exist');
    });
    
    it('Should close on item click', () => {
      cy.get('#DropDownLink')
        .trigger('mouseover')
        .find(itemClassName)
        .first()
        .click()
        .find(wrapperVisibleClassName)
        .should('not.exist');
    });
  });
});
