import { defaultCheckBoxTheme as theme } from '../../../korus-ui/components/CheckBox/theme.ts'
/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('CheckBox', () => {
  before(() => {
    cy.visit('/cypress/checkbox');
  });

  describe('Display', () => {
    it('Should render elements inside the checkbox', () => {
      cy.get('#checkBoxButton')
        .should('exist')
        .parent()
        .find('button')
        .should('have.class', 'loading')
        .and('be.visible');
    });

    it('Should render semi', () => {
      cy.contains('isSemi')
        .should('be.visible')
        .and('have.class', `${theme.label}`)
        .and('have.class', `${theme.semi}`);
    });

    it('Should render disabled checkbox', () => {
      cy.get('#checkBoxDisabled')
        .should('have.attr', `${theme.disabled}`);
    });

    it('Should add a custom class', () => {
      cy.get('#checkBoxMain')
        .parent()
        .should('have.class', `${theme.wrapper}`)
        .and('have.class', 'custom-class');
    });

    it('Children should have correct classes', () => {
      cy.get('.custom-class')
        .should('have.class', `${theme.wrapper}`)
        .children('input')
        .should('have.class', `${theme.input}`)
        .parent()
        .children('label')
        .should('have.class', `${theme.label}`)
    })
  });

  describe('Interaction', () => {
    it('Should call onChange', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains("Main")
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Changed!');
        })
        .contains("Main")
        .click();
    });

    it('Should call onClick', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.contains("isSemi")
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Clicked!');
        })
        .contains("isSemi")
        .click();
    });

    it('Should not call onClick when isDisabled', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('isDisabled')
        .click({ force: true })
        .then(() => {
          expect(stub).not.to.be.called;
        })
    });

    it('Should not call onChange when isDisabled', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains('isDisabled')
        .click({ force: true })
        .then(() => {
          expect(stub).not.to.be.called;
        })
    });

    it('Can change value', () => {
      cy.get('#checkBoxGroup')
        .find('label')
        .each((changeValue) => {
          cy.wrap(changeValue)
            .click()
            .parent()
            .find('input')
            .should('be.checked')
            .next()
            .click()
            .prev()
            .should('not.be.checked');
        });
    });
  });
});
