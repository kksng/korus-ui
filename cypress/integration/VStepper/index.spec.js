import { defaultVStepperTheme as theme } from '../../../korus-ui/components/VStepper/theme';

const itemTitle = `.${theme.itemTitle}`;
const itemIcon = `.${theme.itemIcon}`;
const itemWrapper = `.${theme.itemWrapper}`;
const itemContent = `.${theme.itemContent}`;
const itemWrapperDisabled = `${theme.itemWrapperDisabled}`;
const statusDanger = `${theme.statusDanger}`;
const statusProgress = `${theme.statusProgress}`;
const statusSuccess = `${theme.statusSuccess}`;
const statusWarning = `${theme.statusWarning}`;
const itemActive = `${theme.itemActive}`;

describe('VStepper tests', () => {
  beforeEach(() => {
    cy.visit('/cypress/vstepper');
  });

  describe('Display', () => {
    it('Titles should render', () => {
      cy.get(itemTitle)
        .first()
        .should('have.text', 'Adding expenses')
        .get(itemTitle)
        .eq(1)
        .should('have.text', 'Personal data')
        .get(itemTitle)
        .eq(2)
        .should('have.text', 'Confirmation of business trip')
        .get(itemTitle)
        .eq(3)
        .should('have.text', 'Print of closing documents')
        .get(itemTitle)
        .eq(4)
        .should('have.text', 'Additional information');
    });

    it('Current step should highlight', () => {
      cy.get('.v-stepper-wrapper .v-stepper-step')
        .eq(2)
        .should('have.class', statusProgress);
    });

    it('Should have icons and number symbols', () => {
      cy.get(itemIcon)
        .first()
        .should('have.attr', 'type', statusSuccess)
        .and('have.class', 'sign-check')
        .get(itemIcon)
        .eq(1)
        .should('have.attr', 'type', statusSuccess)
        .get(itemIcon)
        .eq(2)
        .should('have.attr', 'type', statusProgress)
        .get(itemIcon)
        .eq(3)
        .should('have.class', 'sign-stop')
        .and('have.attr', 'type', statusDanger)
        .get(itemIcon)
        .eq(4)
        .should('not.have.attr', 'type')
        .and('have.not.class', 'sign-check')
        .and('have.not.class', 'sign-stop')
        .get(itemIcon)
        .eq(5)
        .should('have.attr', 'type', statusWarning);
    });

    it('Should display footer content', () => {
      cy.get('.v-stepper-content-wrapper')
        .first()
        .get(itemContent)
        .next()
        .should('have.class', 'v-stepper-ending')
        .name('btnNext')
        .should('exist');
    });

    it('Should be able to pass next step type to current step lina as className', () => {
      cy.get('.v-stepper-content-wrapper')
        .eq(1)
        .get('.v-stepper-line')
        .should('have.class', statusProgress);
    });

    it('Should be open when isOpen', () => {
      cy.contains('isOpen')
        .parents(itemWrapper)
        .should('have.class', itemActive);
    });

    it('Should be disabled when isDisabled', () => {
      cy.contains('isDisable')
        .parents(itemWrapper)
        .should('have.class', itemWrapperDisabled);
    });
  });

  describe('Interaction', () => {
    it('All steps must be available to open/close', () => {
      cy.contains('Adding expenses')
        .parents(itemWrapper)
        .should('have.class', statusSuccess)
        .find(itemIcon)
        .should('have.attr', 'type', statusSuccess);

      cy.contains('Personal data')
        .parents(itemWrapper)
        .should('have.class', statusSuccess)
        .find(itemIcon)
        .should('have.attr', 'type', statusSuccess);

      cy.contains('Confirmation of business trip')
        .parents(itemWrapper)
        .should('have.class', statusProgress)
        .find(itemIcon)
        .should('have.attr', 'type', statusProgress);

      cy.contains('Print of closing documents')
        .parents(itemWrapper)
        .should('have.class', statusDanger)
        .find(itemIcon)
        .should('have.attr', 'type', statusDanger);

      cy.get(itemTitle).each((openStep) => {
        cy.wrap(openStep)
          .click()
          .get(itemWrapper)
          .should('have.class', itemActive)
          .find(itemContent)
          .should('be.visible');
      });
    });
    it('onClick event', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.contains('Click me!')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Click!');
        });
    });
    it('Dynamic steps', () => {
      cy.contains('Payment status')
        .click()
        .parents(itemWrapper)
        .should('have.class', itemActive)
        .find('.v-stepper-status')
        .should('contain', 'Not paid for')
        .parents(itemWrapper)
        .find(itemContent)
        .should('be.visible')
        .find('button')
        .contains('Further')
        .click();

      cy.contains('Payment status')
        .parents(itemWrapper)
        .should('have.not.class', itemActive)
        .find(itemIcon)
        .should('have.attr', 'type', statusProgress)
        .parents(itemWrapper)
        .find(itemContent)
        .should('not.be.visible');

      cy.contains('Questionnaire')
        .parents(itemWrapper)
        .should('have.class', itemActive)
        .find('.v-stepper-status')
        .should('contain', 'Not filled in')
        .parents(itemWrapper)
        .find(itemContent)
        .should('be.visible')
        .find('button')
        .contains('Further')
        .click();

      cy.contains('Questionnaire')
        .parents(itemWrapper)
        .should('have.not.class', itemActive)
        .find(itemIcon)
        .should('have.attr', 'type', statusProgress)
        .parents(itemWrapper)
        .find(itemContent)
        .should('not.be.visible');

      cy.contains('Result')
        .parents(itemWrapper)
        .should('have.class', itemActive)
        .find('.v-stepper-status')
        .should('contain', 'Not received')
        .parents(itemWrapper)
        .find(itemContent)
        .should('be.visible')
        .find('button')
        .contains('Further')
        .click();
    });
  });
});
