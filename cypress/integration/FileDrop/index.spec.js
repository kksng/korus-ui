import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.fileDrop;
const wrapperClassName = `.${theme.wrapper}`;
const contentClassName = `.${theme.content}`;

describe('FileDrop', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/filedrop');
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });
  });

  describe('Events', () => {
    it('Console events', () => {
      cy.name('forLongNameFiles')
        .attachFile('example.json', { subjectType: 'drag-n-drop' })
        .get('@consoleLog')
        .should('be.calledWith', 'droped');
    });
  });

  describe('Display', () => {
    it('Should be displayed', () => {
      cy.get(wrapperClassName).should('have.length', 5).should('be.visible');
    });

    it('isDisabled', () => {
      cy.name('disabledForm')
        .parent()
        .should('have.class', 'disabled')
        .find('.filedrop-button')
        .should('have.class', 'disabled');
    });

    it('Should displayed custom loading text', () => {
      cy.name('loading')
        .click()
        .name('FDwithLoader')
        .parent()
        .find('.loader-component-wrapper')
        .should('have.text', 'Loading...')
        .name('loading')
        .click();
    });
  });

  describe('Interaction', () => {
    it('Should has invalid class on attach file', () => {
      cy.name('FDwithError')
        .attachFile('example.json', { subjectType: 'drag-n-drop' })
        .parents('.filedrop-wrapper')
        .should('have.class', theme.wrapper)
        .should('have.class', theme.invalid);
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
        .should('contain', 'Перетащите сюда файл для загрузки');
    });

    it('Attaching files outside the size range', () => {
      cy.name('FD_basic')
        .attachFile('bigFile.jpeg', {
          subjectType: 'drag-n-drop',
        })
        .next()
        .should(
          'contain',
          'Не удалось загрузить файл. Превышен максимальный размер файла'
        )
        .parents('.filedrop-wrapper')
        .should('have.class', theme.wrapper)
        .should('have.class', theme.invalid)
        .get('#reset')
        .click()
        .name('FD_basic')
        .attachFile('test.png', {
          subjectType: 'drag-n-drop',
        })
        .next()
        .should(
          'contain',
          'Не удалось загрузить файл. Файл меньше допустимого размера'
        )
        .parents('.filedrop-wrapper')
        .should('have.class', theme.wrapper)
        .should('have.class', theme.invalid);
    });

    it('Attaching files with too long name', () => {
      cy.name('forLongNameFiles')
        .attachFile('fileWithTooLongName.json', {
          subjectType: 'drag-n-drop',
        })
        .next()
        .should(
          'contain',
          'Не удалось загрузить файл. Превышена максимальная длина имени файла'
        )
        .parents('.filedrop-wrapper')
        .should('have.class', theme.wrapper)
        .should('have.class', theme.invalid);
    });

    it('Attaching invalid files', () => {
      cy.name('forLongNameFiles')
        .attachFile('txtFile.txt', {
          subjectType: 'drag-n-drop',
        })
        .next()
        .should(
          'contain',
          'Не удалось загрузить файл. Недопустимый формат файла'
        )
        .parents('.filedrop-wrapper')
        .should('have.class', theme.wrapper)
        .should('have.class', theme.invalid);
    });

    it('Replacement of attachments', () => {
      const fileName = 'test.png';
      cy.name('FDwithLoader')
        .attachFile('example.json', { subjectType: 'drag-n-drop' })
        .next()
        .should('contain', 'Файл example.json успешно загружен')
        .prev()
        .attachFile('txtFile.txt', { subjectType: 'drag-n-drop' })
        .next()
        .should('contain', 'Файл txtFile.txt успешно загружен')
        .find('.filedrop-button')
        .click();
      cy.fixture('test.png').then((replaceFile) => {
        cy.name('FDwithLoader')
          .attachFile(fileName, replaceFile, 'image/jpg')
          .next()
          .should('contain', 'Файл test.png успешно загружен');
      });
    });
  });
});
