import { defaultDateTimeInputTheme as theme } from '../../../korus-ui/src/DateTimeInput/theme';

describe('DateTimePicker', () => {
  beforeEach(() => {
    cy.visit('/cypress/datetimepicker');
  });

  describe('Events in the console', () => {
    beforeEach(() => {
      cy.visit('/cypress/datetimepicker', {
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
    it('Should render DateTimePicker', () => {
      cy.name('datetimepicker')
        .should('be.visible')
        .snapshot();
    });

    it('Should render placeholder', () => {
      cy.name('datetimepicker')
        .clear()
        .should('have.attr', 'placeholder', 'datetimepicker');
    });

    it('Should be disabled when isDisabled', () => {
      cy.get('[data-test="dp4"]')
        .find('input')
        .should('be.disabled')
        .parent()
        .should('have.class', `${theme.wrapperDisabled}`);
    });

    it('Should render if value set as string', () => {
      cy.name('valueSetString')
        .should('be.visible')
        .and('have.value', '30.04.1991 00:00');
    });

    it('Should render if value set as Date', () => {
      cy.name('valueSetNull')
        .should('be.visible')
        .and('have.value', '');
    });

    it('Should render if value set as null', () => {
      cy.name('valueSetDate')
        .should('be.visible')
        .and('have.value', '05.01.2020 00:00');
    });
  });

  describe('Interaction', () => {
    it('Opening and closing the calendar', () => {
      cy.get('#basic')
        .find(`.${theme.calendarIcon}`)
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
        .should('have.class', `${theme.inputWrapperInvalid}`)
        .and('have.class', `${theme.inputWrapperRequired}`);
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
        .find(`.${theme.calendarIcon}`)
        .click()
        .parents(`.${theme.wrapper}`)
        .find(`.${theme.calendar.wrapper}`)
        .get(`.${theme.calendar.dateCell}[title="23 октября 2018"]`)
        .should('have.class', `${theme.calendar.dateCellActive}`)
        .and('have.class', `${theme.calendar.dateCellSelected}`)
        .get(`.${theme.calendar.dateCell}[title="22 октября 2018"]`)
        .click()
        .name('datetimepicker')
        .should('contain.value', '22.10.18')
        .parent()
        .find(`.${theme.calendarIcon}`)
        .click()
        .parents(`.${theme.wrapper}`)
        .find(`.${theme.calendar.prevButton}`)
        .click()
        .parent()
        .should('contain', 'Сентябрь')
        .get(`.${theme.calendar.dateCell}[title="11 сентября 2018"]`)
        .click()
        .name('datetimepicker')
        .should('contain.value', '11.09.18')
        .clear();
    });

    it('Should work when isOpen', () => {
      cy.name('openedDatePicker')
        .should('be.visible')
        .parents(`.${theme.wrapper}`)
        .find(`.${theme.calendar.wrapper}`)
        .should('be.visible')
        .and('have.class', `${theme.calendar.wrapperVisible}`)
        .contains('19')
        .click()
        .name('openedDatePicker')
        .should('have.value', '19.06.2016 00:00')
        .clear();
    });

    it('Should work with different format', () => {
      cy.name('openedDatePicker')
        .should('be.visible')
        .parents(`.${theme.wrapper}`)
        .find(`.${theme.calendar.wrapper}`)
        .should('be.visible')
        .and('have.class', `${theme.calendar.wrapperVisible}`)
        .contains('19')
        .click()
        .name('openedDatePicker')
        .should('have.value', '19.06.2016 00:00')
        .clear()
        .name('anotherFormat')
        .should('be.visible')
        .next()
        .click()
        .parents(`.${theme.wrapper}`)
        .find(`.${theme.calendar.wrapper}`)
        .should('be.visible')
        .and('have.class', `${theme.calendar.wrapperVisible}`)
        .contains('19')
        .click({ force: true} )
        .name('anotherFormat')
        .should('have.value', '19-е число  06-го месяца  2016-го года в 00:00')
        .clear();
    });

    it('Should work with custom names of days, weeks, months', () => {
      cy.name('CustomMonthsDatePicker')
         .focus()
         .next()
         .click()
         .parents(`.${theme.wrapper}`)
         .find(`.${theme.calendar.title}`)
         .should('contain', 'June')
         .parents(`.${theme.calendar.wrapper}`)
         .find(`.${theme.calendar.weekDaysRow}`)
         .should('contain', 'Mon')
         .and('contain', 'Sun')
         .name('CustomMonthsDatePicker')
         .type('{enter}')
         .should('have.value', '20.06.2016 00:00')
         .clear();
    });

    it('Using the TAB button', () => {
      cy.name('datetimepicker')
        .clear()
        .focus()
        .tab()
        .get(`.${theme.calendar.dateCell}`)
        .should('be.visible')
        .name('datetimepicker')
        .focus()
        .tab()
        .get(`.${theme.calendar.monthCell}`)
        .contains('.')
        .should('be.visible')
        .name('datetimepicker')
        .focus()
        .tab()
        .get(`.${theme.calendar.monthCell}`)
        .contains('20')
        .should('be.visible')
        .name('datetimepicker')
        .blur();
    });
  });
});
