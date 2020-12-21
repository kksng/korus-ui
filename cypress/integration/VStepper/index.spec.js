describe('VStepper tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/vstepper');
  });

  describe('Display', () => {
    it('Titles should render', () => cy
      .get('.v-stepper-title')
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
      .should('have.text', 'Дополнительная информация'));

    it('Current step should highlight', () => cy
      .get('.v-stepper-wrapper .v-stepper-step')
      .eq(2)
      .should('have.class', 'progress'));

    it('Should have icons and number symbols', () => cy
      .get('.v-stepper-icon')
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
      .should('have.attr', 'type', 'warning'));

    it('Should display footer content', () => cy
      .get('.v-stepper-content-wrapper')
      .first()
      .get('.v-stepper-content')
      .next()
      .should('have.class', 'v-stepper-ending')
      .name('btnNext')
      .should('exist'));

    it('Should be able to pass next step type to current step lina as className', () => cy
      .get('.v-stepper-content-wrapper')
      .eq(1)
      .get('.v-stepper-line')
      .should('have.class', 'progress'));
  });

  describe('Interaction', () => {
    it('All steps must be available to open/close', () => cy
      .get('.v-stepper-wrapper .v-stepper-heading')
      .first()
      .get('.v-stepper-heading-icon')
      .should('not.have.class', 'open')
      .get('.v-stepper-heading')
      .last()
      .next('div')
      .should('not.be.visible')
      .get('.v-stepper-wrapper .v-stepper-heading')
      .first()
      .click()
      .get('.v-stepper-heading-icon')
      .should('have.class', 'open')
      .get('.v-stepper-heading')
      .first()
      .next('div')
      .should('be.visible'));
  });
});
