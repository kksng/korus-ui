describe('TimePicker tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9000/cypress/timepicker');
    });
    describe('Validation', () => {
      it('Should display validation error', () => {
        cy.name('submit')
          .click()
          .name('MinValueTimePicker')
          .parent()
          .should('have.class', 'danger')
          .name('submitMessage')
          .should('have.text', 'Submit failed!');
      });
    });
    describe('Interaction', () => {
      it('Should not be able to enter more than 23 hours', () => {
        cy.name('TimePicker')
          .clear()
          .type('143030{enter}')
          .type('{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{backspace}{backspace}')
          .type('65{enter}')
          .should('have.value', '14:30:30')
          .clear()
          .type('600000{enter}')
          .should('have.value', '__:__:__')
      });
      it('Should not be able to enter more than 59 minutes', () => {
        cy.name('TimePicker')
          .clear()
          .type('123030{enter}')
          .type('{leftArrow}{leftArrow}{leftArrow}{backspace}{backspace}')
          .type('65{enter}')
          .should('have.value', '12:30:30')
      });
      it('Should not be able to enter more than 59 seconds', () => {
        cy.name('TimePicker')
          .clear()
          .type('152020{enter}')
          .type('{backspace}{backspace}')
          .type('65{enter}')
          .should('have.value', '15:20:20')
      });
    });
  });
