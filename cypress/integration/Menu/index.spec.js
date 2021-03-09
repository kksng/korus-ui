import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.menu;

describe('Menu', () => {
  before(() => {
    cy.visit('/cypress/menu');
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

    it('Left menu-item position and dropdown opening', () => {
      cy.get(`.${theme.container}`)
        .scrollTo('right')
        .find(`.${theme.menuItem}`)
        .eq(4)
        .itemPositionIsWithinViewport()
        .click()
        .trigger('scroll')
        .should('have.class', `${theme.menuItemActive}`)
        .itemPositionIsInViewport()  
        .click()
        .children()
        .should('have.class', 'opened')
        .and('be.visible')
        .get(`.${theme.container}`)
        .scrollTo('left');  
      })

    describe('Opening and closing of a dropdown', () => {
      it('Closing by click on dropdown menu', () => {
        cy.get('#mainMenu')
          .click()
          .should('have.class', 'opened')
          .children()
          .should('be.visible')
          .contains('Мармелад')
          .click({force:true})
          .get('#mainMenu')
          .should('not.have.class', 'opened');
      });

      it('Closing by click outside the dropdown menu', () => {
        cy.get('#mainMenu')
          .click()
          .should('have.class', 'opened')
          .children()
          .should('be.visible')
          .get('body')
          .click(0, 100)
          .get('#mainMenu')
          .should('not.have.class', 'opened');
      });

      it('Closing by scrolling the tab list', () => {
        cy.get('#mainMenu')
          .click()
          .should('have.class', 'opened')
          .children()
          .should('be.visible')
          .get(`.${theme.container}`)
          .scrollTo('right')
          .get('#mainMenu')
          .should('not.have.class', 'opened')
          .get(`.${theme.container}`)
          .scrollTo('left');
      });
    });
  });
});
