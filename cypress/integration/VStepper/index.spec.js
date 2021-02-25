describe('VStepper tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/vstepper');
  });

  describe('Display', () => {
    it('Titles should render', () => {
      cy.get('.v-stepper-title')
        .first()
        .should('have.text', 'Добавление расходов')
        .get('.v-stepper-title')
        .eq(1)
        .should('have.text', 'Персональные данные')
        .get('.v-stepper-title')
        .eq(2)
        .should('have.text', 'Подтверждение командировки')
        .get('.v-stepper-title')
        .eq(3)
        .should('have.text', 'Печать закрывающих документов')
        .get('.v-stepper-title')
        .eq(4)
        .should('have.text', 'Дополнительная информация');
    });

    it('Current step should highlight', () => {
      cy.get('.v-stepper-wrapper .v-stepper-step')
        .eq(2)
        .should('have.class', 'progress');
    });

    it('Should have icons and number symbols', () => {
      cy.get('.v-stepper-icon')
        .first()
        .should('have.attr', 'type', 'success')
        .and('have.class', 'sign-check')
        .get('.v-stepper-icon')
        .eq(1)
        .should('have.attr', 'type', 'success')
        .get('.v-stepper-icon')
        .eq(2)
        .should('have.attr', 'type', 'progress')
        .get('.v-stepper-icon')
        .eq(3)
        .should('have.class', 'sign-stop')
        .and('have.attr', 'type', 'danger')
        .get('.v-stepper-icon')
        .eq(4)
        .should('not.have.attr', 'type')
        .and('not.have.class', 'sign-check')
        .and('not.have.class', 'sign-stop')
        .get('.v-stepper-icon')
        .eq(5)
        .should('have.attr', 'type', 'warning');
    });

    it('Should display footer content', () => {
      cy.get('.v-stepper-content-wrapper')
        .first()
        .get('.v-stepper-content')
        .next()
        .should('have.class', 'v-stepper-ending')
        .name('btnNext')
        .should('exist');
    });

    it('Should be able to pass next step type to current step lina as className', () => {
      cy.get('.v-stepper-content-wrapper')
        .eq(1)
        .get('.v-stepper-line')
        .should('have.class', 'progress');
    });

    it('Should be open when isOpen', () => {
      cy.contains('isOpen')
        .parents('.v-stepper-step')
        .should('have.class', 'active');
    });

    it('Should be disabled when isDisabled', () => {
      cy.contains('isDisable')
        .parents('.v-stepper-step')
        .should('have.class', 'disabled');
    });
  });

  describe('Interaction', () => {
    it('All steps must be available to open/close', () => {
      cy.contains('Добавление расходов')
        .parents('.v-stepper-step')
        .should('have.class', 'success')
        .find('.v-stepper-icon')
        .should('have.attr', 'type', 'success');

      cy.contains('Персональные данные')
        .parents('.v-stepper-step')
        .should('have.class', 'success')
        .find('.v-stepper-icon')
        .should('have.attr', 'type', 'success');

      cy.contains('Подтверждение командировки')
        .parents('.v-stepper-step')
        .should('have.class', 'progress')
        .find('.v-stepper-icon')
        .should('have.attr', 'type', 'progress');

      cy.contains('Печать закрывающих документов')
        .parents('.v-stepper-step')
        .should('have.class', 'danger')
        .find('.v-stepper-icon')
        .should('have.attr', 'type', 'danger');

      cy.get('.v-stepper-title').each((openStep) => {
        cy.wrap(openStep)
          .click()
          .get('.v-stepper-step')
          .should('have.class', 'active')
          .find('.v-stepper-content')
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
      cy.contains('Статус оплаты')
        .click()
        .parents('.v-stepper-step')
        .should('have.class', 'active')
        .find('.v-stepper-status')
        .should('contain', 'Не оплачен')
        .parents('.v-stepper-step')
        .find('.v-stepper-content')
        .should('be.visible')
        .find('button')
        .contains('Далее')
        .click();

      cy.contains('Статус оплаты')
        .parents('.v-stepper-step')
        .should('not.have.class', 'active')
        .find('.v-stepper-icon')
        .should('have.attr', 'type', 'progress')
        .parents('.v-stepper-step')
        .find('.v-stepper-content')
        .should('not.be.visible');

      cy.contains('Анкета')
        .parents('.v-stepper-step')
        .should('have.class', 'active')
        .find('.v-stepper-status')
        .should('contain', 'Не заполнена')
        .parents('.v-stepper-step')
        .find('.v-stepper-content')
        .should('be.visible')
        .find('button')
        .contains('Далее')
        .click();

      cy.contains('Анкета')
        .parents('.v-stepper-step')
        .should('not.have.class', 'active')
        .find('.v-stepper-icon')
        .should('have.attr', 'type', 'progress')
        .parents('.v-stepper-step')
        .find('.v-stepper-content')
        .should('not.be.visible');

      cy.contains('Результат')
        .parents('.v-stepper-step')
        .should('have.class', 'active')
        .find('.v-stepper-status')
        .should('contain', 'Не получен')
        .parents('.v-stepper-step')
        .find('.v-stepper-content')
        .should('be.visible')
        .find('button')
        .contains('Далее')
        .click();
    });
  });
});
