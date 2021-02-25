describe('TimePicker tests', () => {
    beforeEach(() => {
      cy.visit('/cypress/timepicker');
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
      it('Should autocomplete time with 0', () => {
        cy.name('TimePicker')
          .clear()
          .type('1{enter}')
          .should('have.value', '10:00:00')
          .type('23{enter}')
          .should('have.value', '12:30:00')
          .clear()
          .type('{rightArrow}9{enter}')
          .should('have.value', '09:00:00')
          .clear()
      });
      it('Should not be able to enter more than 23 hours', () => {
        cy.name('TimePicker')
          .clear()
          .type('143030{enter}')
          .type('{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}')
          .type('6{enter}')
          .should('have.value', '14:30:30')
          .clear()
          .type('6{enter}')
          .should('have.value', '00:00:00')
          .clear()
      });
      it('Should not be able to enter more than 59 minutes', () => {
        cy.name('TimePicker')
          .clear()
          .type('123030{enter}')
          .type('{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}')
          .type('6{enter}')
          .should('have.value', '12:30:30')
          .clear()
      });
      it('Should not be able to enter more than 59 seconds', () => {
        cy.name('TimePicker')
          .clear()
          .type('152020{enter}')
          .type('{leftArrow}{leftArrow}')
          .type('6{enter}')
          .should('have.value', '15:20:20')
          .clear()
      });
    });
  });
