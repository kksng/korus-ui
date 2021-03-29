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
        .click();
    });
  });

  describe('Interaction', () => {
    it('The open level must be assigned the "opened" class', () => {
      cy.contains('title1')
        .click()
        .parent()
        .should('have.class', theme.opened)
        .children()
        .should('be.visible')
        .contains('title2')
        .click()
        .parent()
        .should('have.class', theme.opened)
        .children()
        .should('be.visible')
        .contains('title3')
        .click()
        .parent()
        .should('have.class', theme.opened)
        .children()
        .should('be.visible')
        .contains('title3')
        .click()
        .parents(item)
        .contains('title2')
        .click()
        .parents(item)
        .contains('title1')
        .click();
    });

    it('The active level must be assigned the "current" class.', () => {
      cy.contains('title1')
        .click()
        .parent()
        .should('have.class', theme.current)
        .contains('title2')
        .click()
        .parent()
        .should('have.class', theme.current)
        .next()
        .children()
        .click()
        .parent()
        .should('have.class', theme.current);
      cy.contains('title2')
        .click();
      cy.contains('title')
        .click();
    });

    it('The last level of every list must be assigned the "last" class.', () => {
      cy.contains('title1')
        .click()
        .parents(list)
        .children()
        .last()
        .should('have.class', theme.last)
        .parent()
        .parent()
        .contains('title1')
        .parent()
        .children()
        .contains('title2')
        .click()
        .parent()
        .parent()
        .children()
        .last()
        .should('have.class', theme.last)
        .parent()
        .children()
        .contains('title3')
        .click()
        .parent()
        .parent()
        .children()
        .last()
        .should('have.class', theme.last);
      cy.contains('title2')
        .click();
      cy.contains('title2')
        .click();
      cy.contains('title')
        .click();
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('/cypress/link-tree', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog');
        },
      });
    });

    it('Event when a link is clicked', () => {
      cy.contains('one')
        .click({ force: true })
        .get('@consoleLog')
        .should('be.calledWith', 'one');
    });
  });
});
