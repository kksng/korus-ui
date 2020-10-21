import { defaultAutoCompleteTheme as theme } from '../../../leda/components/AutoComplete/theme';
describe('DatePicker', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/datepicker')
  });
  it('Should close after picking a date', () => {
  	cy.name('firstDatePicker')
  	  .parent()
  	  .find('span.datepicker-calendar-icon')
  	  .click()
      .parents('div.datepicker-wrapper')
      .find('span.calendar-title')
      .click()
      .parents('div.datepicker-wrapper')
      .find('span.calendar-title')
      .click()
      .parents('div.datepicker-wrapper')
      .find('.calendar-month-year-cell[title="2021"]')
      .click()
      .name('firstDatePicker')
      .parents('div.datepicker-wrapper')
      .find('.calendar-month-year-cell[title="Август"]')
      .click()
  	  .name('firstDatePicker')
      .parents('div.datepicker-wrapper')
      .find('div.calendar-date-cell[title="2 августа 2021"]')
      .click()
      .name('firstDatePicker')
      .parents('div.datepicker-wrapper')
      .find('div.calendar-wrapper')
      .should('not.be.visible')
  	  .name('firstDatePicker')
      .should('have.attr', 'value', '02.08.2021')
      .clear();
  });
  it('Should open by clicking on the icon', () => {
  	cy.name('firstDatePicker')
  	  .parent()
  	  .find('span.datepicker-calendar-icon')
  	  .click()
  	  .parents('div.datepicker-wrapper')
  	  .find('div.calendar-wrapper.visible')
  	  .should('be.visible')
  	  .wait(1500)
  	  .name('firstDatePicker')
  	  .parent()
  	  .find('span.datepicker-calendar-icon')
  	  .click()
  	  .parents('div.datepicker-wrapper')
  	  .find('div.calendar-wrapper')
  	  .should('not.be.visible');
  });
  it('Pressing "Tab" opens the calendar', () => {
  	cy.name('firstDatePicker')
  	  .tab()
  	  .name('firstDatePicker')
  	  .parents('div.datepicker-wrapper')
  	  .find('div.calendar-wrapper')
  	  .should('be.visible')
  	  .name('firstDatePicker')
      .parent()
      .find('span.datepicker-calendar-icon')
      .click()
      .parents('div.datepicker-wrapper')
      .find('div.calendar-wrapper')
      .should('not.be.visible');
  });
  it('If the calendar is open - pressing "Tab" switches to the previous view', () => {
    cy.name('firstDatePicker')
      .parent()
      .find('span.datepicker-calendar-icon')
      .click()
      .name('firstDatePicker')
      .tab()
      .parents('div.datepicker-wrapper')
      .find('.calendar-month-year-cell[title="Август"]')
      .should('be.visible')
      .name('firstDatePicker')
      .tab()
      .parents('div.datepicker-wrapper')
      .find('.calendar-month-year-cell[title="2030"]')
      .should('be.visible');
  });
  it('If the calendar is open and the current view is years or months - "Enter" switches to the next view', () => {
    cy.name('firstDatePicker')
      .parents('div.datepicker-wrapper')
      .find('.calendar-month-year-cell[title="2020"]')
      .should('be.visible') //from the last test the calendar is open and the current view - year
      .name('firstDatePicker')
      .parents('div.datepicker-wrapper')
      .type('{enter}')
      .find('.calendar-month-year-cell[title="Октябрь"]')
      .should('be.visible')
  });
  it('Pressing "Backspace" will delete characters in "Input"', () => {
    cy.name('firstDatePicker') //from the last test in Input date 02.08.2020
      .type('{backspace}')
      .name('firstDatePicker')
      .should('have.attr', 'value', '02.08.202_')
      .type('{backspace}')
      .name('firstDatePicker')
      .should('have.attr', 'value', '02.08.20__')
      .type('{backspace}')
      .name('firstDatePicker')
      .should('have.attr', 'value', '02.08.2___')
      .name('firstDatePicker')
      .clear();
  });
  it('Pressing "Esc" closes the calendar', () => {
    cy.name('firstDatePicker')
      .parent()
      .find('span.datepicker-calendar-icon')
      .click()
      .type('{esc}')
      .name('firstDatePicker')
      .parents('div.datepicker-wrapper')
      .find('div.calendar-wrapper')
      .should('not.be.visible');
  });
  it('If the calendar is open and the current view is dates, pressing "Enter" selects the date and closes the calendar', () => {
    cy.name('firstDatePicker')
      .parent()
      .find('span.datepicker-calendar-icon')
      .click()
      .parents('div.datepicker-wrapper')
      .find('div.calendar-wrapper')
      .should('be.visible')
      .type('{enter}')
      .name('firstDatePicker')
      .should('have.attr', 'value', '05.08.2021')
      .should('have.attr', 'value', '05.08.2021')//random selection
      .name('firstDatePicker')
      .parents('div.datepicker-wrapper')
      .find('div.calendar-wrapper')
      .should('not.be.visible');
  });
});

