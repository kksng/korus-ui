/* eslint-disable no-unused-expressions,jest/valid-expect */
import { defaultAutoCompleteTheme as theme } from '../../../leda/components/AutoComplete/theme';

describe('DatePicker', () => {
  let lastConsole
  let stub
  before(() => {
    cy.visit('http://localhost:9000/cypress/datepicker')
  });

  beforeEach(() => { cy.name('success').focus() }) // It is needed because of bug with focus on several datepickers

  describe('Display', () => {
    it('should render placeholder', () => {
      cy.name('firstDatePicker')
        .should('have.attr', 'placeholder', 'Type your date...')
    })

    it('should render calendar-icon', () => {
      cy.name('firstDatePicker')
        .parent()
        .children('.datepicker-icons-wrapper')
        .children('.datepicker-calendar-icon')
        .should('be.visible');
    })
  });

  describe('BoundCheck', () => {
    it('ValueMoreThanMax', () => {
      cy.name('firstDatePicker')
        .clear()
        .type('{home}11122030')
        .blur()
        .should('have.attr', 'value', '12.04.2030');
    })

    it('ValueLessThanMin', () => {
      cy.name('firstDatePicker')
        .clear()
        .type('{home}01011999')
        .blur()
        .should('have.attr', 'value', '01.05.2012');
    })

    it('ValuewithSomeTrash', () => {
      cy.name('firstDatePicker')
        .clear()
        .type('{home}1.1ю0@1$2#0&3?0')
        .blur()
        .should('have.attr', 'value', '11.01.2030');
    })
  });

  describe('States', () => {
    it('should be disabled when isDisabled', () => {
      cy.name('disabledCalendar')
        .should('be.disabled')
        .should('have.attr', 'disabled');
    })

    it('should be is open when isOpen', () => {
      cy.name('openedCalendar')
        .parents()
        .children('.calendar-wrapper')
        .should('be.visible')
    })
  })

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('http://localhost:9000/cypress/datepicker', {
        onBeforeLoad(win) {
          stub = cy.stub(win.console, 'log', (ev) => { lastConsole = ev })
        },
      })
    })

    it('onBlurWithValue', () => {
      cy.name('secondDatePicker')
        .clear()
        .type('11111111')
        .blur()
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'blur')
          expect(lastConsole.component).to.have.property('name', 'secondDatePicker')
          expect(lastConsole.component).to.have.property('value', '11.11.1111')
        })
    })

    it('onBlurWithNoValue', () => {
      cy.name('secondDatePicker')
        .clear()
        .type('1111111')
        .blur()
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'blur')
          expect(lastConsole.component).to.have.property('name', 'secondDatePicker')
          expect(lastConsole.component).to.have.property('value', '')
        })
    })

    it('onFocus', () => {
      cy.name('openedCalendar')
        .focus()
        .wait(200) // сори, но хоум не сработал
        .type('{home}12113234')
        .blur()
        .focus()
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'focus')
          expect(lastConsole.component).to.have.property('name', 'openedCalendar')
          expect(lastConsole.component).to.have.property('value', '12-е число  11-го месяца  3234-го года')
        })
    })

    it('onEnterPress', () => {
      cy.name('firstDatePicker')
        .focus()
        .wait(200) // сори, но хоум не сработал
        .type('12113234')
        .type('{enter}')
        .then(() => {
          expect(stub).to.be.called
          expect(lastConsole).to.have.property('type', 'keydown')
          expect(lastConsole).to.have.property('key', 'Enter')
          expect(lastConsole.component).to.have.property('name', 'firstDatePicker')
          expect(lastConsole.component).to.have.property('value', '12.04.2030')
        })
    })
  });

  describe('DropdownCalendar', () => {
    it('MouseInput', () => {
      cy.name('firstDatePicker')
        .focus()
        .clear()
        .focus()
        .wait(200)
        .type('11112020')
        .type('{enter}')
        .clear()
        .name('firstDatePicker')
        .focus()
        .should('have.attr', 'value', '__.__.____')
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
        .find('.calendar-month-year-cell[title="2025"]')
        .click()
        .name('firstDatePicker')
        .parents('div.datepicker-wrapper')
        .find('.calendar-month-year-cell[title="Июль"]')
        .click()
        .name('firstDatePicker')
        .parents('div.datepicker-wrapper')
        .find('div.calendar-date-cell.different-month-date')
        .should('have.length', 4)
        .parent()
        .parent()
        .find('div.calendar-date-cell[title="18 июля 2025"]')
        .click()
        .name('firstDatePicker')
        .should('have.attr', 'value', '18.07.2025')
        .find('div.calendar-wrapper')
        .should('not.be.visible')
    })

    it('CalendarTitle', () => {
      cy.name('MinMaxDatePickerOpened')
        .parents('div.datepicker-wrapper')
        .find('span.calendar-title.disabled-title')
        .contains('Май 2012')
        .click()
        .contains('Май 2012')
        .parent()
        .find('.calendar-prev-button.disabled-button')
        .click()
        .parents('div.datepicker-wrapper')
        .find('span.calendar-title.disabled-title')
        .contains('Май 2012')
        .parents('.calendar-wrapper.visible')
        .find('.calendar-month-dates')
        .find('div.calendar-date-cell.disabled-date')
        .should('have.length', 33)
        .parent()
        .find('div.calendar-date-cell.active[title="4 мая 2012"]')
        .click()
        .name('MinMaxDatePickerOpened')
        .should('have.attr', 'value', '04.05.2012')
    })

    it('Next-Prev-Button', () => {
      cy.name('MinMaxDatePicker')
        .parent()
        .find('span.datepicker-calendar-icon')
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-prev-button')
        .click()
        .parents('div.datepicker-wrapper')
        .find('span.calendar-title')
        .contains('Апрель 2012')
        .should('be.visible')
        .parents('div.datepicker-wrapper')
        .find('.calendar-next-button')
        .click()
        .parents('div.datepicker-wrapper')
        .find('span.calendar-title')
        .contains('Май 2012')
        .should('be.visible')
    })

    it('Prev-ButtonDisabled', () => {
      cy.name('MinMaxDatePickerOpened')
        .parent()
        .parent()
        .find('.calendar-prev-button.disabled-button')
        .click()
        .parents('div.datepicker-wrapper')
        .find('span.calendar-title.disabled-title')
        .contains('Май 2012')
        .should('be.visible')
    })

    it('Next-ButtonDisabled', () => {
      cy.name('MinMaxDatePickerOpened')
        .parent()
        .parent()
        .find('.calendar-next-button.disabled-button')
        .click()
        .parents('div.datepicker-wrapper')
        .find('span.calendar-title.disabled-title')
        .should('be.visible')
        .contains('Май 2012')
        .should('be.visible')
    })

    it('DisabledDates', () => {
      cy.name('MinMaxDatePickerOpened')
        .parent()
        .parent()
        .find('div.calendar-date-cell.disabled-date')
        .should('have.length', 33)
    })

    it('ActiveDates', () => {
      cy.name('MinMaxDatePickerOpened')
        .parent()
        .parent()
        .find('div.calendar-date-cell[title="4 мая 2012"]')
        .should('have.class', 'active')
        .parent()
        .parent()
        .type('{leftarrow}')
        .find('div.calendar-date-cell[title="3 мая 2012"]')
        .should('have.class', 'active')
        .should('not.have.class', 'selected')
        .parent()
        .type('{enter}')
        .name('MinMaxDatePickerOpened')
        .should('have.attr', 'value', '03.05.2012')
        .parents('.datepicker-wrapper')
        .find('div.calendar-wrapper.visible')
        .should('be.visible')
    })

    it('SelectedDates', () => {
      cy.name('MinMaxDatePickerOpened')
        .clear()
        .focus()
        .wait(200)
        .type('04052012')
        .blur()
        .should('have.attr', 'value', '04.05.2012')
        .focus()
        .wait(200)
        .clear() // Последняя выбранная дата должна быть 04.05.2012
        .should('have.attr', 'value', '__.__.____')
        .parents('.datepicker-wrapper')
        .find('div.calendar-date-cell[title="4 мая 2012"]')
        .should('have.class', 'active')
        .should('not.have.class', 'selected')
        .parent()
        .parent()
        .type('{leftarrow}')
        .find('div.calendar-date-cell[title="3 мая 2012"]')
        .should('have.class', 'active')
        .should('not.have.class', 'selected')
        .parent()
        .type('{enter}')
        .name('MinMaxDatePickerOpened')
        .should('have.attr', 'value', '03.05.2012')
        .parents('.datepicker-wrapper')
        .find('div.calendar-wrapper.visible')
        .should('be.visible')
        .find('div.calendar-date-cell[title="3 мая 2012"]')
        .should('have.class', 'active')
        .should('have.class', 'selected')
    })

    it('WeekDays', () => {
      cy.name('MinMaxDatePickerOpened')
        .parents('.datepicker-wrapper')
        .find('.calendar-week-days')
        .children('.calendar-date-cell')
        .should('have.length', 7)
    })

    it('MonthView', () => {
      cy.name('MinMaxDatePicker')
        .parent()
        .find('span.datepicker-calendar-icon')
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-wrapper')
        .children('.calendar-nav')
        .children('.calendar-title')
        .click()
        .parents('.calendar-wrapper')
        .children('.calendar-month-year-view')
        .find('.calendar-month-year-cell.disabled-month-year')
        .should('have.length', 10)
        .parent()
        .find('[title="Апрель"]')
        .should('be.visible')
        .should('not.be.disabled')
        .parent()
        .parent()
        .find('[title="Май"]')
        .should('be.visible')
        .should('have.class', 'active')
    })

    it('YearViewDisabled', () => {
      cy.name('MinMaxDatePicker')
        .focus()
        .wait(200)
        .type('04052012')
        .parent()
        .find('span.datepicker-calendar-icon')
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-wrapper')
        .children('.calendar-nav')
        .children('.calendar-title')
        .click()
        .click()
        .should('not.have.text', '2010 - 2019')
        .parents('.calendar-wrapper')
        .children('.calendar-month-year-view')
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
    })

    it('YearViewPositive', () => {
      cy.name('firstDatePicker')
        .clear()
        .parent()
        .find('span.datepicker-calendar-icon')
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-wrapper')
        .children('.calendar-nav')
        .children('.calendar-title')
        .click()
        .click()
        .parents('.calendar-wrapper')
        .children('.calendar-month-year-view')
        .find('.calendar-month-year-cell')
        .should('have.length', 12)
    })

    it('Custom month names', () => {
      cy.name('CustomMonthsDatePicker')
        .focus()
        .wait(200)
        .type('04052012')
        .parent()
        .find('span.datepicker-calendar-icon')
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-title')
        .contains('May 2012')
        .click()
        .parents('.calendar-wrapper')
        .children('.calendar-month-year-view')
        .first()
        .contains('Jan')
    })

    it('Custom week day names', () => {
      cy.name('CustomMonthsDatePicker')
        .parent()
        .find('span.datepicker-calendar-icon')
        .click()
        .parents('.datepicker-wrapper')
        .find('.calendar-wrapper')
        .children('.calendar-week-days')
        .first()
        .contains('Mon')
        .should('have.attr', 'title', 'Monday')
    })

    describe('ArrowsInput', () => {
      it('UpDownArrows', () => {
        cy.name('MinMaxDatePicker')
          .clear()
          .parent()
          .find('span.datepicker-calendar-icon')
          .click()
          .parents('.datepicker-wrapper')
          .find('div.calendar-date-cell[title="4 мая 2012"]')
          .should('have.class', 'active')
          .parents('.datepicker-wrapper')
          .type('{uparrow}')
          .find('div.calendar-date-cell[title="27 апреля 2012"]')
          .should('have.class', 'active')
        cy.name('MinMaxDatePicker')
          .parents('.datepicker-wrapper')
          .find('div.calendar-date-cell[title="27 апреля 2012"]')
          .should('have.class', 'active')
          .parents('.datepicker-wrapper')
          .type('{downarrow}')
          .find('div.calendar-date-cell[title="4 мая 2012"]')
          .should('have.class', 'active')
      })

      it('LeftRightArrows', () => {
        cy.name('MinMaxDatePicker')
          .parent()
          .find('span.datepicker-calendar-icon')
          .click()
          .parents('.datepicker-wrapper')
          .find('div.calendar-date-cell[title="4 мая 2012"]')
          .should('have.class', 'active')
          .parents('.datepicker-wrapper')
          .type('{leftarrow}')
          .find('div.calendar-date-cell[title="3 мая 2012"]')
          .should('have.class', 'active')
          .parent()
          .find('div.calendar-date-cell[title="4 мая 2012"]')
          .should('not.have.class', 'active')
        cy.name('MinMaxDatePicker')
          .parents('.datepicker-wrapper')
          .find('div.calendar-date-cell[title="3 мая 2012"]')
          .should('have.class', 'active')
          .parents('.datepicker-wrapper')
          .type('{rightarrow}')
          .find('div.calendar-date-cell[title="4 мая 2012"]')
          .should('have.class', 'active')
      })

      xit('Validation tests', () => { })
      xit('InputWithTab', () => { })
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
});
