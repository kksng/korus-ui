import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.menu;

describe('Menu', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/menu');
  });

  describe('Interaction', () => {
    it('Basic usage', () => {
      cy.get(`.${theme.wrapper}`)
        .find(`.${theme.menuItem}`)
        .first()
        .click()
        .should('have.class', `${theme.menuItemActive}`)
        .find(`.${theme.menuDropDown}`)
        .should('have.class', 'opened')
        .parent(`.${theme.menuItem}`)
        .click()
        .find(`.${theme.menuDropDown}`)
        .should('not.have.class', 'opened');
    });
  });
});
