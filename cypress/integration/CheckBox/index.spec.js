/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('CheckBox', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/checkbox');
  });

  describe('Display', () => {
    it('Should render elements inside the checkbox', () => {
      cy.name('checkBoxButton')
        .should('exist')
        .parent()
        .find('button')
        .should('have.class', 'loading')
        .and('be.visible');
    });

    it('Should render semi', () => {
      cy.contains('isSemi')
        .should('be.visible')
        .and('have.class', 'semi');
    });

    it('Should render disabled checkbox', () => {
      cy.name('checkBoxDisabled')
        .should('have.attr', 'disabled');
    });
  });

  describe('Interaction', () => {
    it('Should call onChange', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains("Main")
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert!');
        })
        .contains("Main")
        .click();
    });

    it('Can change value', () => {
      cy.name('checkBoxGroup')
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
