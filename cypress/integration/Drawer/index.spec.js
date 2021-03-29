import { defaultDrawerTheme as theme } from '../../../korus-ui/components/Drawer/theme';

const bars = `.${theme.bars}`;
const overlay = `.${theme.overlay}`;

describe('Drawer', () => {
  before(() => {
    cy.visit('/cypress/drawer');
  });

  describe('Display', () => {
    it('Should open and close on bars click', () => {
      cy.get('#drawerRight')
        .should('not.be.visible')
        .find(bars)
        .click()
        .should('have.class', `${theme.barsOpen}`)
        .get('#drawerRight')
        .should('be.visible')
        .and('have.class', `${theme.wrapperVisible}`)
        .and('have.class', `${theme.wrapperRight}`)
        .find(bars)
        .click()
        .should('not.have.class', `${theme.barsOpen}`)
        .get('#drawerRight')
        .should('not.be.visible')
        .and('not.have.class', `${theme.wrapperVisible}`);
    });
    it('Should close on overlay click', () => {
      cy.get('#drawerRight')
        .find(bars)
        .click()
        .get('#drawerRight')
        .should('be.visible')
        .get(overlay)
        .first()
        .click()
        .get('#drawerRight')
        .should('not.be.visible');
    });
  });

  describe('Interaction', () => {
    it('Left position', () => {
      cy.get('#drawerLeft')
        .should('not.be.visible')
        .find(bars)
        .click()
        .should('have.class', `${theme.barsOpen}`)
        .get('#drawerLeft')
        .should('be.visible')
        .and('have.class', `${theme.wrapperLeft}`)
        .and('have.class', `${theme.wrapperVisible}`)
        .find(bars)
        .click()
        .get('#drawerLeft')
        .should('not.be.visible');
    });
  });
});
