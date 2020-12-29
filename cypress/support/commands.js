/* eslint-disable jest/no-standalone-expect */
/* eslint-disable jest/valid-expect */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('focusMasked', { prevSubject: 'element' }, (subject) => cy
  .wrap(subject)
  .focus()
  .wait(20)
  .type('{uparrow}')
  .clear());

Cypress.Commands.add('name', (searchName) => cy.get(`[name="${searchName}"]`));

Cypress.Commands.add('datatest', (searchName) => cy.get(`[data-test="${searchName}"]`));

Cypress.Commands.add('isNotInViewport', { prevSubject: 'element' }, (element) => {
  cy.get(element).should((it) => {
    const bottom = Cypress.$(cy.state('window')).height();
    const rect = it[0].getBoundingClientRect();
    expect(rect.top).to.be.greaterThan(bottom);
    expect(rect.bottom).to.be.greaterThan(bottom);
  });
});

Cypress.Commands.add('isInViewport', { prevSubject: 'element' }, (element) => {
  cy.get(element).should((it) => {
    const bottom = Cypress.$(cy.state('window')).height();
    const rect = it[0].getBoundingClientRect();
    expect(rect.top).not.to.be.greaterThan(bottom);
    expect(rect.bottom).not.to.be.greaterThan(bottom);
  });
});

/**
 * Simulates a paste event.
 *
 * @param subject A jQuery context representing a DOM element.
 * @param pastePayload Simulated data that is on the clipboard.
 *
 * @returns The subject parameter.
 *
 * @example
 * cy.get('some-selector').paste('text');
 */
Cypress.Commands.add('paste', { prevSubject: true }, (element, pastePayload) => {
  const pasteEvent = Object.assign(new Event('paste', { bubbles: true, cancelable: true }), {
      clipboardData: {
          getData: () => pastePayload,
      },
  });
  element[0].dispatchEvent(pasteEvent);
  cy.wrap(element[0]).type('{insert}' + pastePayload);
});

/**
 * Command changes default behavior of cy.window().blur() event
 * so that it simulates blur event on last active element
 */
Cypress.Commands.add('windowBlur', {prevSubject: true}, (element) => {
  cy.window()
    .blur().then(() => {
      element.blur();
      return element;
    })
})

/**
 * Command changes default behavior of cy.window().focus() event
 * so that it simulates returning focus to last active element
 */
Cypress.Commands.add('windowFocus', {prevSubject: true}, (element) => {
  cy.window()
    .focus().then(() => {
      element.focus();
      return element;
    })
})

