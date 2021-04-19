import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.checkBoxTree;
const checkboxTheme = globalDefaultTheme.checkBox
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
        .click();
    });

    it('Rendering with default value (defaultValue = [3])', () => {
      cy.get('#defaultTree')
        .contains('one')
        .should('have.class', `${checkboxTheme.semi}`)
        .prev()
        .should('be.checked')
        .parent()
        .next()
        .click()
        .next()
        .contains('two')
        .should('have.class', `${checkboxTheme.semi}`)
        .prev()
        .should('be.checked')
        .parent()
        .next()
        .click()
        .next()
        .contains('three')
        .should('not.have.class', `${checkboxTheme.semi}`)
        .prev()
        .should('be.checked')
        .parents(item)
        .next()
        .find('#21')
        .should('not.be.checked')
        .get('#1')
        .parent()
        .next()
        .click();
    });
  });

  describe('Interaction', () => {
    it('Basic usage', () => {
      cy.get('#checkBoxTree')
        .find('#1')
        .click({ force: true })
        .should('be.checked')
        .parent()
        .next()
        .click()
        .next()
        .should('be.visible')
        .find('input')
        .each((clicking) => {
          cy.wrap(clicking)
            .click({ force: true })
            .should('not.be.checked')
            .click({ force: true })
            .should('be.checked')
        })
        .parent()
        .next()
        .click()
        .next()
        .should('be.visible')
        .find('input')
        .each((clicking) => {
          cy.wrap(clicking)
            .click({ force: true })
            .should('not.be.checked')
            .click({ force: true })
            .should('be.checked')
        })
        .get('#1')
        .click({ force: true })
        .should('not.be.checked')
        .parents(item)
        .find('input')
        .each((shouldBeUnchecked) => {
          cy.wrap(shouldBeUnchecked)
            .should('not.be.checked')
        })
        .get('#1')
        .parent()
        .next()
        .click();
    });

    it('Child branches should close when the parent branch is closed', () => {
      cy.get('#1')
        .parent()
        .next()
        .click()
        .parent()
        .children()
        .should('be.visible')
        .contains('two')
        .parent()
        .next()
        .click()
        .parent()
        .children()
        .should('be.visible')
        .get('#1')
        .parent()
        .next()
        .click()
        .next()
        .should('not.be.visible');
    });

    it('Should attach class "opened" to opened level and remove class when level closed', () => {
      cy.get('#1')
        .parent()
        .next()
        .click()
        .parent()
        .should('have.class', `${theme.opened}`)
        .children()
        .contains('two')
        .parent()
        .next()
        .click()
        .parent()
        .should('have.class', `${theme.opened}`)
        .get('#1')
        .parent()
        .next()
        .click()
        .parent()
        .should('not.have.class', `${theme.opened}`);
    });

    it('Should attach class "semi" to semi-state checkbox', () => {
      cy.get('#checkBoxTree')
        .find('#1')
        .click({ force: true })
        .should('be.checked')
        .parent()
        .next()
        .click()
        .next()
        .should('be.visible')
        .find('input')
        .each((clicking) => {
          cy.wrap(clicking)
            .click({ force: true })
            .should('not.be.checked')
            .click({ force: true })
            .should('be.checked')
        })
        .parent()
        .next()
        .click()
        .next()
        .contains('three')
        .prev()
        .click({ force: true })
        .parents(list)
        .contains('two')
        .should('have.class', `${checkboxTheme.semi}`)
        .parents(list)
        .contains('one')
        .should('have.class', `${checkboxTheme.semi}`)
        .get('#checkBoxTree')
        .find('#1')
        .click({ force: true })
        .should('not.have.class', `${checkboxTheme.semi}`)
        .click({ force: true })
        .parent()
        .next()
        .click();
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('/cypress/checkbox-tree', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog');
        },
      });
    });
    
    const selectedCheckboxesIds = {
      selected: [31, 41, 51, 61, 62, 63, 21, 11],
      selectedGroups: [1, 2, 3, 4, 5, 6],
    };

    it('onChange event', () => {
      cy.get('#checkBoxTree')
        .find('#1')
        .click({ force: true })
        .get('@consoleLog')
        .should('be.calledWith', selectedCheckboxesIds);
    });
  });

  describe('Working with big data', () => {
    it('Should be displayed and basic work', () => {
      cy.get('#bigTree')
        .contains('Россия')
        .should('be.visible')
        .prev()
        .click({ force: true })
        .should('be.checked')
        .parent()
        .next()
        .click()
        .next()
        .find('input')
        .each((bigDataInputs) => {
          cy.wrap(bigDataInputs)
            .should('be.checked')
            .next()
            .should('be.visible');
        });
    });

    it('Should attach class "semi" to semi-state checkbox', () => {
      cy.get('#bigTree')
        .contains('Россия')
        .should('not.have.class', `${checkboxTheme.semi}`)
        .prev()
        .click({ force: true })
        .parent()
        .next()
        .click()
        .next()
        .contains('Санкт-Петербург')
        .parent()
        .next()
        .click()
        .next()
        .contains('СЕСТРОРЕЦК')
        .prev()
        .click({ force: true })
        .parents(list)
        .contains('Санкт-Петербург')
        .should('have.class', `${checkboxTheme.semi}`)
        .parents(list)
        .contains('Россия')
        .should('have.class', `${checkboxTheme.semi}`)
        .prev()
        .click({ force: true })
        .next()
        .should('not.have.class', `${checkboxTheme.semi}`)
        .prev()
        .click({ force: true })
        .parent()
        .next()
        .click();
    });

    it('Should attach class "opened" to opened level and remove class when level closed', () => {
      cy.get('#bigTree')
        .contains('Россия')
        .parent()
        .next()
        .click()
        .next()
        .contains('Санкт-Петербург')
        .parent()
        .should('not.have.class', `${theme.opened}`)
        .next()
        .click()
        .parent()
        .should('have.class', `${theme.opened}`)
        .find(icon)
        .click()
        .parent()
        .should('not.have.class', `${theme.opened}`)
        .parents(list)
        .contains('Россия')
        .parents(item)
        .should('have.class', `${theme.opened}`)
        .contains('Россия')
        .parent()
        .next()
        .click()
        .prev()
        .should('not.have.class', `${theme.opened}`);
    });
  });
});
