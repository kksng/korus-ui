import { defaultDateTimeInputTheme as theme } from '../../../korus-ui/src/DateTimeInput/theme';

describe('DateTimeRange', () => {
  beforeEach(() => {
    cy.visit('/cypress/datetimerange');
  });

  describe('Events in console', () => {
    beforeEach(() => {
      cy.window().then((win) => {
        cy.spy(win.console, 'log').as('consoleLog');
      });
    });
    it('onBlur event', () => {
      cy.name('DateTimeRange-from')
        .focus()
        .blur()
        .get('@consoleLog')
        .should('be.calledWith', 'Blur')
    });

    it('onChange event', () => {
      cy.name('DateTimeRange-from')
        .clear()
        .get('@consoleLog')
        .should('be.calledWith', 'date')
        .and('be.calledWith', 'value')
        .and('be.calledWith', 'name');
    });

    it('onFocus event', () => {
      cy.name('DateTimeRange-from')
        .focus()
        .get('@consoleLog')
        .should('be.calledWith', 'Focus');
    });

    it('onEnterPress event', () => {
      cy.name('secondRange-from')
        .type('{enter}')
        .get('@consoleLog')
        .should('not.be.calledWith')
        .name('secondRange-to')
        .type('{enter}')
        .get('@consoleLog')
        .should('be.calledWith', 'Enter');
    });
  });

  describe('Display', () => {
    it('Should render DateTimeRange', () => {
      cy.name('DateTimeRange-from')
        .should('be.visible')
        .name('DateTimeRange-to')
        .should('be.visible')
        .parents(`.${theme.wrapper}`)
        .snapshot()
    });

    it('Should render placeholder', () => {
      cy.name('secondRange-from')
        .should('have.attr', 'placeholder', 'secondRange')
        .name('secondRange-to')
        .should('have.attr', 'placeholder', 'secondRange');
    });

    it('Should be disabled when isDisabled', () => {
      cy.get('.disabled-field')
        .find('input')
        .should('be.disabled')
        .parent()
        .should('have.class', `${theme.wrapperDisabled}`);
    });

    it('Should be open when isOpen', () => {
      cy.name('openedDateRange-from')
        .should('be.visible')
        .parents('.daterange-wrapper')
        .find(`.${theme.calendar.wrapper}`)
        .each((workingWithDefaultFormat) => {
          cy.wrap(workingWithDefaultFormat)
            .should('be.visible')
            .and('have.class', `${theme.calendar.wrapperVisible}`)
        });    
    });

    it('Should render when value set as string', () => {
      cy.name('valueSetString-from')
        .should('be.visible')
        .and('have.value', '30.04.1991 00:00')
        .name('valueSetString-to')
        .should('be.visible')
        .and('have.value', '30.05.1991 05:00')
    });

    it('Should render when value set as Date', () => {
      cy.name('valueSetDate-from')
        .should('be.visible')
        .and('have.value', '05.01.2020 00:00')
        .name('valueSetDate-to')
        .should('be.visible')
        .and('have.value', '05.01.2020 05:00')
    });

    it('Should render when value set as null', () => {
      cy.name('valueSetNull-from')
        .should('be.visible')
        .and('have.value', '')
        .name('valueSetNull-to')
        .and('have.value', '')
        .should('be.visible')
    });
  });

  describe('Interaction', () => {
    it('Opening and closing the calendar', () => {
      cy.name('DateTimeRange-from')
        .parents('.daterange-wrapper')
        .find('input')
        .each((openingCalendar) => {
          cy.wrap(openingCalendar)
            .next()
            .should('be.visible')
            .click()
            .parents(`.${theme.wrapper}`)
            .find(`.${theme.calendar.wrapper}`)
            .should('have.class', `${theme.calendar.wrapperVisible}`)
            .and('be.visible')
            .parent()
            .find(`.${theme.calendarIcon}`)
            .click()
            .parents(`.${theme.wrapper}`)
            .find(`.${theme.calendar.wrapper}`)
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
        .parents(`.${theme.wrapper}`)
        .find(`.${theme.calendar.wrapper}`)
        .get(`.${theme.calendar.dateCell}[title="12 мая 2018"]`)
        .should('have.class', `${theme.calendar.dateCellActive}`)
        .and('have.class', `${theme.calendar.dateCellSelected}`)
        .get(`.${theme.calendar.dateCell}[title="30 апреля 2018"]`)
        .parents(`.${theme.calendar.wrapper}`)
        .find('.calendar-prev-button')
        .click()
        .parent()
        .should('contain', 'Апрель')
        .get(`.${theme.calendar.dateCell}[title="11 апреля 2018"]`)
        .click()
        .name('DateTimeRange-from')
        .should('contain.value', '11.04.2018')
        .name('DateTimeRange-to')
        .next()
        .click()
        .parents(`.${theme.wrapper}`)
        .find(`.${theme.calendar.wrapper}`)
        .get(`.${theme.calendar.dateCell}[title="15 мая 2018"]`)
        .should('have.class', `${theme.calendar.dateCellActive}`)
        .and('have.class', `${theme.calendar.dateCellSelected}`)
        .get(`.${theme.calendar.dateCell}[title="30 апреля 2018"]`)
        .parents(`.${theme.calendar.wrapper}`)
        .find('.calendar-prev-button')
        .click()
        .parent()
        .should('contain', 'Апрель')
        .get(`.${theme.calendar.dateCell}[title="11 апреля 2018"]`)
        .click()
        .name('DateTimeRange-to')
        .should('contain.value', '11.04.2018')
        .name('DateTimeRange-from')
        .clear()
        .name('DateTimeRange-to')
        .clear();
    });

    it('Should work with custom names of months, weekdays and short names', () => {
      cy.name('CustomMonthsDateTimeRange-from')
        .parents('.daterange-wrapper')
        .find('input')
        .each((workingWithCustomNames) => {
          cy.wrap(workingWithCustomNames)
          .type('04052012')
          .next()
          .click()
          .parents(`.${theme.wrapper}`)
          .find('.calendar-title')
          .should('contain', 'April')
          .parents(`.${theme.calendar.wrapper}`)
          .find('.calendar-week-days')
          .should('contain', 'Mon')
          .and('contain', 'Sun')
          .parents(`.${theme.wrapper}`)
          .find('input')
          .clear();
        });
    });

    it('Should work with different format', () => {
      cy.name('openedDateRange-from')
        .should('be.visible')
        .parents('.daterange-wrapper')
        .find(`.${theme.calendar.wrapper}`)
        .each((workingWithDefaultFormat) => {
          cy.wrap(workingWithDefaultFormat)
            .should('be.visible')
            .and('have.class', `${theme.calendar.wrapperVisible}`)
            .contains('19')
            .click()
            .parents(`.${theme.wrapper}`)
            .find('input')
            .should('have.value', '19.06.2016 00:00')
            .clear()
        })
        .name('secondRange-from')
        .should('be.visible')
        .parents('.daterange-wrapper')
        .find('input')
        .each((workWithCustomFormat) => {
          cy.wrap(workWithCustomFormat)
            .next()
            .click()
            .parents(`.${theme.wrapper}`)
            .find(`.${theme.calendar.wrapper}`)
            .should('be.visible')
            .and('have.class', `${theme.calendar.wrapperVisible}`)
            .contains('19')
            .click()
        })
        .name('secondRange-from')
        .parents('.daterange-wrapper')
        .find('input')
        .should('have.value', '19-е число  06-го месяца  2016-го года в 00:00')
        .clear();

    });
        
    it('Using the TAB button', () => {
      cy.name('DateTimeRange-from')
        .clear()
        .focus()
        .tab()
        .get(`.${theme.calendar.dateCell}`)
        .should('be.visible')
        .name('DateTimeRange-from')
        .focus()
        .tab()
        .get(`.${theme.calendar.monthCell}`)
        .contains('.')
        .should('be.visible')
        .name('DateTimeRange-from')
        .focus()
        .tab()
        .get(`.${theme.calendar.monthCell}`)
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
