import { defaultDrawerTheme as theme } from '../../../korus-ui/components/Drawer/theme';

const bars = `.${theme.bars}`;
const overlay = `.${theme.overlay}`;

describe('Drawer', () => {
  before(() => {
    cy.visit('/cypress/drawer');
  });

  describe('Display', () => {
    it('Should open and close on bars click', () => {
      cy.get('#drawer')
        .should('not.be.visible')
        .find(bars)
        .click()
        .get('#drawer')
        .should('be.visible')
        .find(bars)
        .click()
        .get('#drawer')
        .should('not.be.visible');
    });
    it('Should close on overlay click', () => {
      cy.get('#drawer')
        .find(bars)
        .click()
        .get('#drawer')
        .should('be.visible')
        .get(overlay)
        .click()
        .get('#drawer')
        .should('not.be.visible');
    });
  });
});
