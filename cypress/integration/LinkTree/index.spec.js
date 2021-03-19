import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.linkTree;
const list = `.${theme.linkTreeList}`
const item = `.${theme.linkTreeItem}`

describe('LinkTree', () => {
  beforeEach(() => {
    cy.visit('/cypress/link-tree');
  });

  describe('Display', () => {
    it('Should render', () => {
      cy.get('#linkTree')
        .find(item)
        .find(list)
        .should('not.be.visible')
        .parent(item)
        .find('a')
        .first()
        .click()
        .parent(item)
        .should('have.class', theme.opened)
        .find(list)
        .should('be.visible')
        .parent(item)
        .find('a')
        .first()
        .click()
    });
  });
});
