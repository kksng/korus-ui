describe('DateTimePicker', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/datetimepicker');
  });

  describe('Events in the console', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9000/cypress/datetimepicker', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog');
        },
      });
    });

    it('Focus and blur', () => {
      cy.get('[data-test="dp1"]')
        .focus()
        .blur()
        .get('@consoleLog')
        .should('be.calledWith', 'focus')
        .and('be.calledWith', 'blur');
    });

    it('Change event', () => {
      console.clear();
      cy.get('[data-test="dp1"]')
        .clear()
        .get('@consoleLog')
        .should('be.calledWith', 'change');
    });

    it('Enter press', () => {
      console.clear();
      cy.get('[data-test="dp1"]')
        .type('{enter}')
        .get('@consoleLog')
        .should('be.calledWith', 'enter');
    });
  });

  describe('Display', () => {
    it('Should be disabled', () => {
      cy.get('[data-test="dp4"]')
        .find('input')
        .should('be.disabled')
        .parent()
        .should('have.class', 'disabled-state');
    });
  });

  describe('Interaction', () => {
    it('Opening and closing the calendar', () => {
      cy.get('#basic')
        .find('.datepicker-calendar-icon')
        .should('be.visible')
        .click()
        .parents()
        .find('.calendar-wrapper')
        .should('have.class', 'visible')
        .and('be.visible')
        .parent()
        .find('.datepicker-calendar-icon')
        .click()
        .parents()
        .find('.calendar-wrapper')
        .should('not.exist');
    });

    it('Should validate the form', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.name('submit')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Submitted!');
        });
    });

    it('Should validation failed', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.name('datetimepicker')
        .clear()
        .name('submit')
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Submit failed!');
        })
        .name('datetimepicker')
        .parent()
        .should('have.class', 'danger')
        .and('have.class', 'required');
    });

    it('Entering values from the keyboard', () => {
      cy.name('datetimepicker')
        .clear()
        .focus()
        .blur()
        .should('have.value', '')
        .type('99.99.99 99:99:99{enter}')
        .should('have.value', '20.06.19 00:00:00')
        .type('{backspace}'.repeat(5))
        .type('{enter}')
        .should('have.value', '20.06.19 00:__:__');
    });

    it('Maximal, minimal and invalid values', () => {
      cy.name('datetimepicker')
        .clear()
        .type('21.05.19 23:60:01{enter}')
        .should('have.value', '22.05.19 00:00:01')
        .clear()
        .type('02.04.16 23:60:00{enter}')
        .should('have.value', '03.05.16 00:00:00')
        .clear()
        .type('1q2we3erfv ``{enter}')
        .should('have.value', '12.3_.__ __:__:__');
    });

    it('Selecting a date from the calendar', () => {
      cy.get('#basic')
        .find('.datepicker-calendar-icon')
        .click()
        .parents()
        .find('.calendar-wrapper')
        .get('.calendar-date-cell[title="23 октября 2018"]')
        .should('have.class', 'active')
        .and('have.class', 'selected')
        .get('.calendar-date-cell[title="22 октября 2018"]')
        .click()
        .name('datetimepicker')
        .should('contain.value', '22.10.18')
        .parent()
        .find('.datepicker-calendar-icon')
        .click()
        .parents()
        .find('.calendar-wrapper')
        .get('.calendar-prev-button')
        .click()
        .parent()
        .should('contain', 'Сентябрь')
        .get('.calendar-date-cell[title="11 сентября 2018"]')
        .click()
        .name('datetimepicker')
        .should('contain.value', '11.09.18');
    });

    it('Using the TAB button', () => {
      cy.name('datetimepicker')
        .clear()
        .focus()
        .tab()
        .get('.calendar-date-cell')
        .should('be.visible')
        .name('datetimepicker')
        .focus()
        .tab()
        .get('.calendar-month-year-cell')
        .contains('.')
        .should('be.visible')
        .name('datetimepicker')
        .focus()
        .tab()
        .get('.calendar-month-year-cell')
        .contains('20')
        .should('be.visible')
        .name('datetimepicker')
        .blur();
    });
  });
});
