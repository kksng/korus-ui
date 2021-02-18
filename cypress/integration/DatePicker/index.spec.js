/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultAutoCompleteTheme as theme } from '../../../korus-ui/components/AutoComplete/theme';

describe('DatePicker', () => {
  let lastConsole
  let stub
  before(() => {
    cy.visit('http://localhost:9000/cypress/datepicker')
  });

  beforeEach(() => { cy.name('success').focus() }) // It is needed because of bug with focus on several datepickers

  describe('Display', () => {
    it('Should render placeholder', () => {
      cy.name('firstDatePicker')
        .should('have.attr', 'placeholder', 'Type your date...');
    });

    it('Should render calendar-icon', () => {
      cy.get('.datepicker-calendar-icon')
        .should('be.visible');
    });
  });

  describe('BoundCheck', () => {
    it('Value more than max', () => {
      cy.name('firstDatePicker')
        .clear()
        .type('{home}11122030')
        .blur()
        .should('have.attr', 'value', '12.04.2030');
    });

    it('Value less than min', () => {
      cy.name('firstDatePicker')
        .clear()
        .type('{home}01011999')
        .blur()
        .should('have.attr', 'value', '01.05.2012');
    });

    it('Invalid values', () => {
      cy.name('firstDatePicker')
        .clear()
        .type('{home}1.1ю0@1$2#0&3?0')
        .blur()
        .should('have.attr', 'value', '11.01.2030')
        .name('firstDatePicker')
        .clear();
    });
  });

  describe('States', () => {
    it('Should be disabled when isDisabled', () => {
      cy.name('disabledCalendar')
        .should('be.disabled')
        .and('have.attr', 'disabled');
    });

    it('Should be is open when isOpen', () => {
      cy.name('openedCalendar')
        .parents('.datepicker-wrapper')
        .find('.calendar-wrapper')
        .should('be.visible');
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9000/cypress/datepicker', {
        onBeforeLoad(win) {
          stub = cy.stub(win.console, 'log', (ev) => { lastConsole = ev })
        },
      });
    });

    it('onBlurWithValue', () => {
      cy.name('secondDatePicker')
        .type('11111111')
        .blur()
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'blur')
          expect(lastConsole.component).to.have.property('name', 'secondDatePicker')
          expect(lastConsole.component).to.have.property('value', '11.11.1111');
        })
        .name('secondDatePicker')
        .clear();
    });

    it('onBlurWithNoValue', () => {
      cy.name('secondDatePicker')
        .type('1111111')
        .blur()
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'blur')
          expect(lastConsole.component).to.have.property('name', 'secondDatePicker')
          expect(lastConsole.component).to.have.property('value', '');
        })
        .name('secondDatePicker')
        .clear();
    });

    xit('onFocus', () => { // Does not pass when running all tests at once
      cy.name('openedCalendar')
        .focus()
        .type('{home}12113234')
        .blur()
        .focus()
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'focus')
          expect(lastConsole.component).to.have.property('name', 'openedCalendar')
          expect(lastConsole.component).to.have.property('value', '12-е число  11-го месяца  3234-го года');
        })
        .name('openedCalendar')
        .clear();
    });

    it('onEnterPress', () => {
      cy.name('firstDatePicker')
        .focus()
        .type('12113234{enter}')
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'keydown')
          expect(lastConsole).to.have.property('key', 'Enter')
          expect(lastConsole.component).to.have.property('name', 'firstDatePicker')
          expect(lastConsole.component).to.have.property('value', '12.04.2030');
        })
        .name('firstDatePicker')
        .clear();
    });
  });

  describe('DropdownCalendar', () => {
    it('MouseInput', () => {
      cy.name('firstDatePicker')
        .focus()
        .should('have.attr', 'value', '__.__.____')
        .parent()
        .find('.datepicker-calendar-icon')
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-title')
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-title')
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-month-year-cell[title="2025"]')
        .click()
        .name('firstDatePicker')
        .parents('.datepicker-wrapper')
        .find('.calendar-month-year-cell[title="Июль"]')
        .click()
        .name('firstDatePicker')
        .parents('.datepicker-wrapper')
        .find('.calendar-date-cell[title="18 июля 2025"]')
        .click()
        .name('firstDatePicker')
        .should('have.attr', 'value', '18.07.2025')
        .find('.calendar-wrapper')
        .should('not.exist');
    });

    it('Disabled CalendarTitle and buttons', () => {
      cy.name('MinMaxDatePickerOpened')
        .parents('.datepicker-wrapper')
        .find('.calendar-title')
        .contains('Май 2012')
        .should('have.class', 'disabled-title')
        .parent()
        .find('.calendar-prev-button, .calendar-next-button')
        .should('have.class', 'disabled-button')
        .parents('.calendar-wrapper')
        .find('.calendar-date-cell[title="4 мая 2012"]')
        .click()
        .should('have.class', 'active')
        .name('MinMaxDatePickerOpened')
        .should('have.attr', 'value', '04.05.2012');
    });

    it('Next-Prev-Button', () => {
      cy.name('MinMaxDatePicker')
        .next()
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-title')
        .should('contain', 'Май 2012')
        .prev()
        .click()
        .next()
        .should('contain', 'Апрель 2012')
        .next()
        .click()
        .prev()
        .should('contain','Май 2012')
        .name('MinMaxDatePicker')
        .blur();
    });

    it('ActiveDates', () => {
      cy.name('MinMaxDatePickerOpened')
        .parents('.datepicker-wrapper')
        .find('.calendar-date-cell[title="4 мая 2012"]')
        .type('{enter}')
        .should('have.class', 'active')
        .and('have.class', 'selected')
        .type('{leftarrow}')
        .prev()
        .should('have.class', 'active')
        .type('{enter}')
        .should('have.class','selected')
        .name('MinMaxDatePickerOpened')
        .should('have.attr', 'value', '03.05.2012')
        .parents('.datepicker-wrapper')
        .find('.calendar-date-cell[title="4 мая 2012"]')
        .should('not.have.class', 'active')
        .and('not.have.class', 'selected');
    });

    it('WeekDays', () => {
      cy.name('MinMaxDatePickerOpened')
        .parents('.datepicker-wrapper')
        .find('.calendar-week-days')
        .children('.calendar-date-cell')
        .should('have.length', 7);
    });

    it('MonthView', () => {
      cy.name('MinMaxDatePicker')
        .next()
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-title')
        .click()
        .parents('.calendar-wrapper')
        .find('.calendar-month-year-cell')
        .should('have.length', 12)
        .parent()
        .find('[title="Апрель"]')
        .should('be.visible')
        .parents('.datepicker-wrapper')
        .find('[title="Май"]')
        .should('be.visible')
        .and('have.class', 'active');
    });

    it('YearViewDisabled', () => {
      cy.name('MinMaxDatePicker')
        .type('04052012')
        .next()
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-title')
        .click()
        .click()
        .should('not.have.text', '2010 - 2019')
        .parents('.calendar-wrapper')
        .find('.calendar-month-year-cell')
        .should('not.contain.text', '2012')
        .name('MinMaxDatePicker')
        .parents('.datepicker-wrapper')
        .find('.calendar-title')
        .should('have.text', '2012')
        .parents('.calendar-wrapper')
        .children('.calendar-month-year-view')
        .find('[title="Апрель"]')
        .should('be.visible')
        .name('MinMaxDatePicker')
        .clear()
        .blur();
    });

    it('Custom month names', () => {
      cy.name('CustomMonthsDatePicker')
        .type('04052012')
        .next()
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-title')
        .contains('May 2012')
        .click()
        .parents('.calendar-wrapper')
        .find('.calendar-month-year-cell')
        .first()
        .should('contain', 'Jan')
        .next()
        .should('contain', 'Feb');
    });

    it('Custom week day names', () => {
      cy.name('CustomMonthsDatePicker')
        .next()
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-week-days')
        .contains('Mon')
        .should('have.attr', 'title', 'Monday')
        .parent()
        .contains('Thu')
        .should('have.attr', 'title', 'Thursday')
        .parent()
        .contains('Sun')
        .should('have.attr', 'title', 'Sunday');   
      });
    });

    describe('Keyboard input', () => {
      it('UpDownArrows', () => {
        cy.name('MinMaxDatePicker')
          .clear()
          .next()
          .click()
          .parents('.datepicker-wrapper')
          .find('.calendar-date-cell[title="4 мая 2012"]')
          .should('have.class', 'active')
          .parents('.datepicker-wrapper')
          .type('{uparrow}')
          .find('.calendar-date-cell[title="27 апреля 2012"]')
          .should('have.class', 'active')
          .name('MinMaxDatePicker')
          .parents('.datepicker-wrapper')
          .find('.calendar-date-cell[title="27 апреля 2012"]')
          .should('have.class', 'active')
          .parents('.datepicker-wrapper')
          .type('{downarrow}')
          .find('div.calendar-date-cell[title="4 мая 2012"]')
          .should('have.class', 'active');
      });

      it('LeftRightArrows', () => {
        cy.name('MinMaxDatePicker')
          .next()
          .click()
          .parents('.datepicker-wrapper')
          .find('.calendar-date-cell[title="4 мая 2012"]')
          .should('have.class', 'active')
          .parents('.datepicker-wrapper')
          .type('{leftarrow}')
          .find('.calendar-date-cell[title="3 мая 2012"]')
          .should('have.class', 'active')
          .parent()
          .find('.calendar-date-cell[title="4 мая 2012"]')
          .should('not.have.class', 'active')
          .name('MinMaxDatePicker')
          .parents('.datepicker-wrapper')
          .find('.calendar-date-cell[title="3 мая 2012"]')
          .should('have.class', 'active')
          .parents('.datepicker-wrapper')
          .type('{rightarrow}')
          .find('.calendar-date-cell[title="4 мая 2012"]')
          .should('have.class', 'active');
      });

      it('Pressing "Tab" opens the calendar', () => {
        cy.name('firstDatePicker')
          .focus()
          .tab()
          .name('firstDatePicker')
          .parents('.datepicker-wrapper')
          .find('.calendar-wrapper')
          .should('be.visible')
          .name('firstDatePicker')
          .next()
          .click()
          .parents('.datepicker-wrapper')
          .find('.calendar-wrapper')
          .should('not.be.visible');
      });

      it('If the calendar is open - pressing "Tab" switches to the previous view', () => {
        cy.name('firstDatePicker')
          .next()
          .click()
          .name('firstDatePicker')
          .focus()
          .tab()
          .get('.calendar-month-year-cell[title="Август"]')
          .should('be.visible')
          .name('firstDatePicker')
          .focus()
          .tab()
          .get('.calendar-month-year-cell[title="2030"]')
          .should('be.visible');
      }); 

      it('If the calendar is open and the current view is dates, pressing "Enter" selects the date and closes the calendar', () => {
        cy.name('firstDatePicker')
          .clear()
          .next()
          .click()
          .parents('.datepicker-wrapper')
          .find('.calendar-title')
          .click()
          .parents('.datepicker-wrapper')
          .find('.calendar-title')
          .click()
          .parents('.datepicker-wrapper')
          .find('.calendar-month-year-cell[title="2021"]')
          .click()
          .name('firstDatePicker')
          .parents('.datepicker-wrapper')
          .find('.calendar-month-year-cell[title="Август"]')
          .click()
          .name('firstDatePicker')
          .parents('.datepicker-wrapper')
          .find('.calendar-date-cell[title="2 августа 2021"]')
          .type('{enter}')
          .name('firstDatePicker')
          .should('have.attr', 'value', '02.08.2021')
          .name('firstDatePicker')
          .parents('.datepicker-wrapper')
          .find('.calendar-wrapper')
          .should('not.exist');
      });
      
      it('Pressing "Backspace" will delete characters in "Input"', () => {
        cy.name('firstDatePicker')
          .clear()
          .type('02.08.2020')
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
          .find('.datepicker-calendar-icon')
          .click()
          .type('{esc}')
          .name('firstDatePicker')
          .parents('.datepicker-wrapper')
          .find('.calendar-wrapper')
          .should('not.be.visible');
      });
  });

  describe('Validation', () => {
    it('Should display validation error', () => {
      cy.name('MinValueDatePicker')
        .should('have.value', '12.10.2020')
        .name('submit')
        .click()
        .name('submitMessage')
        .should('have.text', 'Submit failed!')
        .name('MinValueDatePicker')
        .parent()
        .should('have.class', 'danger');
    });
  });
  describe('Use cases', () => {
    it('Should select correctly date in January', () => {
      cy.name('secondDatePicker')
        .parent()
        .find('.datepicker-calendar-icon')
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-title')
        .click()
        .parents('.calendar-wrapper')
        .children('.calendar-month-year-view')
        .contains('февр.')
        .click()
        .name('secondDatePicker')
        .parents('.datepicker-wrapper')
        .find('.calendar-wrapper')
        .find('.calendar-dates-row')
        .children('.calendar-date-cell')
        .contains('31')
        .click()
        .name('secondDatePicker')
        .should(($input) => {
          expect($input[0].value).to.contain('31.01');
        })
    });
  });
});
