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

    it.only('Left menu position and dropdown opening', () => {
      cy.get(`.${theme.container}`)
        .scrollTo('right')
        .find(`.${theme.menuItem}`)
        .eq(4)
        .isWithinViewport()
    })

    describe('Opening and closing of a dropdown', () => {
      it('Closing by click on dropdown menu', () => {
        cy.name('mainMenu')
        .click()
        .should('have.class', 'opened')
        .children()
        .should('be.visible')
        .contains('Мармелад')
        .click({force:true})
        .name('mainMenu')
        .should('not.have.class', 'opened');
      });

      it('Closing by click outside the dropdown menu', () => {
        cy.name('mainMenu')
        .click()
        .should('have.class', 'opened')
        .children()
        .should('be.visible')
        .get('body')
        .click(0, 100)
        .name('mainMenu')
        .should('not.have.class', 'opened');
      });

      it('Closing by scrolling the tab list', () => {
        cy.name('mainMenu')
          .click()
          .should('have.class', 'opened')
          .children()
          .should('be.visible')
          .get(`.${theme.container}`)
          .scrollTo('right')
          .name('mainMenu')
          .should('not.have.class', 'opened')
          .get(`.${theme.container}`)
          .scrollTo('left');
      });
    })
  });
});
