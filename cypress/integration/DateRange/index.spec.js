/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultAutoCompleteTheme as theme } from '../../../korus-ui/components/AutoComplete/theme';

describe('DateRange', () => {
  before(() => {
    cy.visit('/cypress/daterange')
    cy.viewport(1600, 900)
  });

  describe('Display', () => {
    it('Should render delimiter', () => {
      cy.get('.daterange-delimiter')
        .should('have.length', 9)
        .and('be.visible');
    });

    it('Should render placeholders', () => {
      cy.name('firstDatePicker')
        .should('have.attr', 'placeholder', 'Type your date...')
        .name('secondDatePicker')
        .should('have.attr', 'placeholder', 'Type something...')
        .name('MinMaxDatePickerOpened-to')
        .should('have.attr', 'placeholder', 'Type your date...');
    });

    it('Should render values in placeholder', () => {
      cy.name('openedCalendar-to')
        .should('have.attr', 'value', '11-е число  22-го месяца  33__-го года');
    });
  });

  describe('Interaction', () => {
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
