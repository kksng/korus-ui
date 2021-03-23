import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.checkBoxTree;
const list = `.${theme.checkBoxTreeList}`
const item = `.${theme.checkBoxTreeItem}`
const icon = `.${theme.checkBoxTreeIcon}`

describe('CheckBoxTree', () => {
  beforeEach(() => {
    cy.visit('/cypress/checkbox-tree');
  });

  describe('Display', () => {
    it('Should render', () => {
      cy.get('#checkBoxTree')
        .find(item)
        .find(list)
        .should('not.be.visible')
        .parent(item)
        .find(icon)
        .first()
        .click()
        .parent(item)
        .should('have.class', theme.opened)
        .find(list)
        .should('be.visible')
        .parent(item)
        .find(icon)
        .first()
        .click()
    });
  });
});