import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

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
        .should('have.length', 2)
        .should('be.visible');
    });
    it('Should displayed custom loading text', () => {
      cy.name('loading')
        .click()
        .name('FDwithLoader')
        .parent()
        .find('.loader-component-wrapper')
        .should('have.text', 'Loading...')
        .name('loading')
        .click()
    });
  });


  describe('Interaction', () => {
    it('Should has invalid class on attach file', () => {
      cy.name('FDwithError')
        .attachFile('example.json', { subjectType: 'drag-n-drop' })
        .parent()
        .parent()
        .should('have.class', theme.wrapper)
        .should('have.class', theme.invalid)
    });
    it('Reset should work properly', () => {
      cy.name('FDwithLoader')
        .attachFile('example.json', { subjectType: 'drag-n-drop' })
        .next()
        .should('contain', 'Файл example.json успешно загружен')
        .name('reset')
        .click()
        .name('FDwithLoader')
        .next()
        .should('contain', 'Перетащите сюда файл для загрузки')
        .name('FDwithError')
        .next()
        .should('contain', 'Перетащите сюда файл для загрузки')
    });
  });

});
