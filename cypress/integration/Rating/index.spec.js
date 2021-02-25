import { defaultRatingTheme as theme} from '../../../korus-ui/components/Rating/theme';

const item = `.${theme.item}`;
const itemFilled = `${theme.itemFilled}`;


describe('Rating', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/rating');
  });

  describe('Interaction', () => {
    it('Default mode', () => {
      cy.get('#default')
        .find(item)
        .eq(0)
        .click()
        .should('have.class', itemFilled)
        .parent()
        .find(item)
        .eq(4)
        .click()
        .should('have.class', itemFilled)
        .prevAll()
        .should('have.class', itemFilled)
        .parents()
        .get('#reset')
        .click()
        .parents()
        .get('#default')
        .find(item)
        .should('not.have.class', itemFilled);
    });

    it('Custom mode', () => {
      cy.get('#custom')
        .find('.rating-empty')
        .eq(0)
        .click()
        .should('have.class', 'rating-filled')
        .parent()
        .find('.rating-empty')
        .eq(4)
        .click()
        .should('have.class', 'rating-filled')
        .prevAll()
        .should('have.class', 'rating-filled')
        .parents()
        .get('#reset')
        .click()
        .parents()
        .get('#custom')
        .find('.rating-empty')
        .should('not.have.class', 'rating-filled');
    });

    it('ReadOnly mode', () => {
      cy.get('#disabled')
        .find(item)
        .eq(2)
        .click()
        .should('not.have.class', itemFilled);
    });
  });
});
