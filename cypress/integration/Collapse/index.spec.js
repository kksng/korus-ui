import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.collapse;
const headingWrapper = `.${theme.headingWrapper}`;
const headingDisabled = `${theme.headingDisabled}`;



describe('Collapse', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/collapse');
  });

  describe('Interaction', () => {
    it('Should be open on click', () => {
      cy.get('#collapse-main')
        .find(headingWrapper)
        .first()
        .click()
        .next()
        .should('not.be.visible')
        .get('#collapse-main')
        .find(headingWrapper)
        .each((collapse) => {
          cy.wrap(collapse)
            .click()
            .next()
            .should('be.visible')
            .prev()
            .click()
            .next()
            .should('not.be.visible');
        });
    });

    it('Should be accordion', () => {
      cy.get('#collapse-accordion')
        .find(headingWrapper)
        .first()
        .click()
        .next()
        .should('be.visible')
        .parent()
        .find('#second')
        .should('not.exist')
        .get('#collapse-accordion')
        .find(headingWrapper)
        .last()
        .click()
        .next()
        .should('be.visible')
        .parent()
        .find('#first')
        .should('not.exist');
    });

    it('Should be disabled', () => {
      cy.get('#collapse-disabled')
        .contains('1 Disabled')
        .click()
        .next()
        .should('be.visible')
        .get('#collapse-disabled')
        .find(headingWrapper)
        .last()
        .should('have.class', headingDisabled);
    });
  });
});
