/* eslint-disable no-unused-expressions,jest/valid-expect */
describe('CheckBox', () => {
  before(() => {
    cy.visit('/cypress/checkbox');
  });

  describe('Display', () => {
    it('should render elements inside the checkbox', () => {
      cy.name('checkBoxButton')
        .should('exist')
        .parent()
        .find('button')
        .should('be.visible')
    });

    it('should render semi', () => {
      cy.contains('isSemi')
        .should('be.visible')
        .should('have.class', 'semi')
    });

    it('should render disabled checkbox', () => {
      cy.name('checkBoxDisabled')
        .should('exist')
        .should('be.disabled')
    });
  });

  describe('Interaction', () => {
    it('should call onChange', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.contains("Main")
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert!');
        });
    });

    it('should not call onClick when isDisabled', () => {
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
      cy.name('checkBoxSemi')
        .should('be.checked')
        .get('label')
        .contains('isSemi')
        .click()
        .name('checkBoxSemi')
        .should('not.be.checked')
        .get('label')
        .contains('isSemi')
        .click()
        .name('checkBoxSemi')
        .should('be.checked')
    })
  });
  xit('Validation tests', () => {})
});
