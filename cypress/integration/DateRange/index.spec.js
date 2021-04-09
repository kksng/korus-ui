/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultAutoCompleteTheme as theme } from '../../../korus-ui/components/AutoComplete/theme';

describe('DateRange', () => {
  before(() => {
    cy.visit('/cypress/daterange')
    cy.viewport(1600, 900)
  });

  describe('Display', () => {
    it('Should render DateRange', () => {
      cy.name('MinMaxDatePicker-from')
        .should('be.visible')
        .name('MinMaxDatePicker-to')
        .should('be.visible')
        .parents('.datepicker-wrapper')
        .snapshot();
    });

    it('Should render delimiter', () => {
      cy.get('.daterange-delimiter')
        .should('have.length', 10)
        .and('be.visible');
    });

    it('Should render placeholders', () => {
      cy.name('firstDatePicker')
        .should('have.attr', 'placeholder', 'Type your date...')
        .name('secondDatePicker')
        .should('have.attr', 'placeholder', 'Type something...')
        .name('MinMaxDatePickerOpened-to')
        .should('have.attr', 'placeholder', 'MinMaxDatePickerOpened');
    });

    it('Should render values in placeholder', () => {
      cy.name('openedCalendar-to')
        .should('have.attr', 'value', '11-е число  22-го месяца  33__-го года');
    });

    it('Should render DateRange with value set as date', () => {
      cy.name('DatePickerNullReset-from')
        .should('be.visible')
        .and('have.value', '05.06.2019')
        .name('DatePickerNullReset-to')
        .should('be.visible')
        .and('have.value', '15.06.2019');
    });

    it('Should render with custom names of months, weekdays and short names', () => {
      cy.name('CustomMonthsDateRange-from')
        .parents('.daterange-wrapper')
        .find('input')
        .each((workingWithCustomNames) => {
          cy.wrap(workingWithCustomNames)
          .type('04052012')
          .next()
          .click()
          .parents('.datepicker-wrapper')
          .find('.calendar-title')
          .should('contain', 'May')
          .parents('.calendar-wrapper')
          .find('.calendar-week-days')
          .should('contain', 'Mon')
          .and('contain', 'Sun')
          .parents('.datepicker-wrapper')
          .find('input')
          .clear();
        });
    });

    it('Should show required message when isRequired', () => {
      cy.name('secondDatePicker')
        .focus()
        .blur()
        .parent()
        .should('have.class', 'danger')
        .parent()
        .find('.invalid-message-list')
        .should('have.text', 'required message')
        .parents('.datepicker-wrapper')
        .snapshot();
    });

    it('Should show different required messages', () => {
      cy.name('ThirdDateRange-from')
        .focus()
        .blur()
        .parent()
        .should('have.class', 'danger')
        .parent()
        .find('.invalid-message-list')
        .should('have.text', 'first message')
        .name('ThirdDateRange-to')
        .focus()
        .blur()
        .parent()
        .should('have.class', 'danger')
        .parent()
        .find('.invalid-message-list')
        .should('have.text', 'second message')
        .parents('.datepicker-wrapper')
        .snapshot();
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('/cypress/daterange', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog');
        },
      });
    });

    it('onBlur event', () => {
      cy.name('ThirdDateRange-from')
        .focus()
        .blur()
        .get('@consoleLog')
        .should('be.calledWith', [null, null]);
    });

    it('onChange event', () => {
      cy.name('MinMaxDatePickerOpened-from')
        .type('{0}')
        .get('@consoleLog')
        .should('be.calledWith', 'change')
        .name('MinMaxDatePickerOpened-from')
        .clear();
    });

    it('onEnterPress event', () => {
      cy.name('MinMaxDatePicker-from')
        .focus()
        .type('{enter}')
        .get('@consoleLog')
        .should('be.calledWith', ['04.05.2012', ''])
        .name('MinMaxDatePicker-from')
        .clear();
    });

    it('onFocus event', () => {
      cy.name('openedCalendar-to')
        .focus()
        .get('@consoleLog')
        .should('be.calledWith', 'focus');
    });
  });

  describe('Interaction', () => {
    it('Should work with different date formats', () => {
      cy.name('ThirdDateRange-from')
        .type('11111111')
        .should('have.value', '11.11.1111')
        .clear()
        .name('openedCalendar-to')
        .should('have.value', '11-е число  22-го месяца  33__-го года');
    });

    it('Selecting a value by enter press', () => {
      cy.name('MinMaxDatePicker-from')
        .parents('.daterange-wrapper')
        .find('input')
        .each((enterPressTesting) => {
          cy.wrap(enterPressTesting)
          .type('{enter}')
          .should('have.value', '04.05.2012')
          .clear()
        });
    });
  
    it('MinMaxTest', () => {
      cy.name('MinMaxDatePicker-from')
        .parents('.daterange-wrapper')
        .find('input')
        .each((minMaxTest) => {
          cy.wrap(minMaxTest)
            .type('03042012')
            .blur()
            .should('have.value', ('04.04.2012'))
            .clear()
            .type('05052012')
            .blur()
            .should('have.value', ('04.05.2012'))
            .clear();
        });
    });
  });
  
  describe('States', () => {
    it('Should be disabled when isDisabled', () => {
      cy.name('firstDatePicker')
        .should('be.disabled')
        .and('have.attr', 'disabled')
        .name('disabledCalendar-from')
        .should('be.disabled')
        .and('have.attr', 'disabled')
        .name('disabledCalendar-to')
        .should('be.disabled')
        .and('have.attr', 'disabled');
    });

    it('Should be open when isOpen', () => {
      cy.name('MinMaxDatePicker-to')
        .parents('.daterange-wrapper')
        .find('.calendar-wrapper')
        .should('be.visible');
    });

    it('Should be required when isRequired', () => {
      cy.name('ThirdDateRange-to')
        .should('have.attr', 'aria-required', 'true')
        .name('ThirdDateRange-from')
        .should('have.attr', 'aria-required', 'true')
        .name('secondDatePicker')
        .should('have.attr', 'aria-required', 'true')
        .focus()
        .blur()
        .parent()
        .should('have.class', 'danger');
    });

    it('Should be able to reset values with empty strings and with null', () => {
      cy.name('resetButton')
        .click()
        .name('DatePickerStringReset-from')
        .should('have.attr', 'value', '')
        .name('DatePickerStringReset-to')
        .should('have.attr', 'value', '')
        .name('DatePickerNullArrayReset-from')
        .should('have.attr', 'value', '')
        .name('DatePickerNullArrayReset-to')
        .should('have.attr', 'value', '')
        .name('DatePickerNullReset-from')
        .should('have.attr', 'value', '')
        .name('DatePickerNullReset-to')
        .should('have.attr', 'value', '')
        .name('toInitialStateButton')
        .click();
    });

    it('Calendar should display today date if value is empty', () => {
      cy.name('resetButton')
        .click()
        .name('DatePickerNullReset-from')
        .next()
        .click()
        .parents('.datepicker-wrapper')
        .find('.today')
        .should('have.class', 'active');
    });
  }); 
});
