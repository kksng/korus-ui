import { globalDefaultTheme } from '../../../leda/components/LedaProvider';

const theme = globalDefaultTheme.fileDrop;
const wrapperClassName = `.${theme.wrapper}`;
const contentClassName = `.${theme.content}`;

describe('FileDrop', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/filedrop');
  });

  describe('Display', () => {
    it('Should be displayed', () => {
      cy.get(wrapperClassName)
        .should('have.length', 1)
        .should('be.visible');
    });
  });


  describe('Interaction', () => {
    it('Should has invalid class on attach file', () => {
      cy.get(contentClassName)
        .first()
        .attachFile('example.json', { subjectType: 'drag-n-drop' })
        .parent()
        .should('have.class', theme.wrapper)
        .should('have.class', theme.invalid)
    });
  });

});
