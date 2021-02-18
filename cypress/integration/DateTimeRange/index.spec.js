describe('DateTimeRange', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/datetimerange');
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });
  });

  describe('Events in console', () => {
    it('Name, value and date events', () => {
      cy.name('DateTimeRange-from')
        .focus()
        .type('{enter}')
        .get('@consoleLog')
        .should('be.calledWith', 'date')
        .and('be.calledWith', 'value')
        .and('be.calledWith', 'name');
    });
  });

  describe('Display', () => {
    it('Should be disabled when isDisabled', () => {
      cy.get('.disabled-field')
        .find('input')
        .should('be.disabled')
        .parent()
        .should('have.class', 'disabled-state');
    });
  });

  describe('Interaction', () => {
    it('Opening and closing the calendar', () => {
      cy.name('basicUsage')
        .find('.datepicker-calendar-icon')
        .should('be.visible')
        .each((openingCalendar) => {
          cy.wrap(openingCalendar)
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
    });

    it('Entering values from the keyboard', () => {
      cy.name('DateTimeRange-from')
        .clear()
        .focus()
        .blur()
        .should('have.value', '')
        .type('99.99.99 99:99:99{enter}')
        .should('have.value', '15.05.2018 16:30')
        .type('{backspace}'.repeat(5))
        .type('{enter}')
        .should('have.value', '15.05.2018 __:__')
        .name('DateTimeRange-to')
        .clear()
        .focus()
        .blur()
        .should('have.value', '')
        .type('99.99.99 99:99:99{enter}')
        .should('have.value', '20.06.2019 17:00')
        .type('{backspace}'.repeat(5))
        .type('{enter}')        
        .should('have.value', '20.06.2019 __:__')
        .name('DateTimeRange-from')
        .clear()
        .name('DateTimeRange-to')
        .clear();
    });

    it('Maximal, minimal and invalid values', () => {
      cy.name('DateTimeRange-from')
        .clear()
        .type('21.06.20 23:60:01{enter}')
        .should('have.value', '15.05.2018 16:30')
        .clear()
        .type('02.04.16 23:60:00{enter}')
        .should('have.value', '14.04.2001 16:30')
        .clear()
        .type('1q2we3erfv ``{enter}')
        .should('have.value', '12.3_.____ __:__')
        .name('DateTimeRange-to')
        .clear()
        .type('21.06.20 23:60:01{enter}')
        .should('have.value', '20.06.2019 17:00')
        .clear()
        .type('02.04.16 23:60:00{enter}')
        .should('have.value', '14.04.2001 16:30')
        .clear()
        .type('1q2we3erfv ``{enter}')
        .should('have.value', '12.3_.____ __:__')
        .name('DateTimeRange-from')
        .clear()
        .name('DateTimeRange-to')
        .clear();
    });

    it('Selecting a date from the calendar', () => {
      cy.name('DateTimeRange-from')
        .next()
        .click()
        .parents()
        .find('.calendar-wrapper')
        .get('.calendar-date-cell[title="12 мая 2018"]')
        .should('have.class', 'active')
        .and('have.class', 'selected')
        .get('.calendar-date-cell[title="30 апреля 2018"]')
        .parents()
        .find('.calendar-wrapper')
        .get('.calendar-prev-button')
        .click()
        .parent()
        .should('contain', 'Апрель')
        .get('.calendar-date-cell[title="11 апреля 2018"]')
        .click()
        .get('.datepicker-input')
        .should('contain.value', '11.04.2018')
        .name('DateTimeRange-to')
        .next()
        .click()
        .parents()
        .find('.calendar-wrapper')
        .get('.calendar-date-cell[title="15 мая 2018"]')
        .should('have.class', 'active')
        .and('have.class', 'selected')
        .get('.calendar-date-cell[title="30 апреля 2018"]')
        .parents()
        .find('.calendar-wrapper')
        .get('.calendar-prev-button')
        .click()
        .parent()
        .should('contain', 'Апрель')
        .get('.calendar-date-cell[title="11 апреля 2018"]')
        .click()
        .get('.datepicker-input')
        .should('contain.value', '11.04.2018')
        .name('DateTimeRange-from')
        .clear()
        .name('DateTimeRange-to')
        .clear();
    });

    it('Using the TAB button', () => {
      cy.name('DateTimeRange-from')
        .clear()
        .focus()
        .tab()
        .get('.calendar-date-cell')
        .should('be.visible')
        .name('DateTimeRange-from')
        .focus()
        .tab()
        .get('.calendar-month-year-cell')
        .contains('.')
        .should('be.visible')
        .name('DateTimeRange-from')
        .focus()
        .tab()
        .get('.calendar-month-year-cell')
        .contains('20')
        .should('be.visible')
        .name('DateTimeRange-from')
        .tab()
        .name('DateTimeRange-to')
        .should('be.focused')
        .name('DateTimeRange-from')
        .clear()
        .name('DateTimeRange-to')
        .clear();
    });
  });
});
