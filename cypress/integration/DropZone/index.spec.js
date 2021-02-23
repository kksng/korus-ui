import { globalDefaultTheme } from '../../../korus-ui/components/LedaProvider';

const theme = globalDefaultTheme.dropZone;

const wrapperClassName = `.${theme.wrapper}`;

const contentClassName = `.${theme.content}`;

const fileDeleteIconClassName = `.${theme.fileDeleteIcon}`;

const rejectedFilesWrapperClassNames = theme.rejectedFilesWrapper
  .split(' ')
  .map((className) => `.${className}`)
  .join('');

describe('DropZone', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/dropzone');
  });

  describe('Display', () => {
    it('DropZone should be displayed', () => {
      cy.get(wrapperClassName)
        .should('have.length', 4)
        .each((wrapper) => {
          cy.wrap(wrapper).should('be.visible');
        });
    });
  });

  describe('Interaction', () => {
    it('Should attach files to dropZone', () => {
      cy.get(contentClassName)
        .first()
        .attachFile('example.json', { subjectType: 'drag-n-drop' })
        .attachFile('txtFile.txt', { subjectType: 'drag-n-drop' })
        .get(rejectedFilesWrapperClassNames)
        .first()
        .next()
        .contains('example.json')
        .should('exist')
        .get(rejectedFilesWrapperClassNames)
        .first()
        .next()
        .contains('txtFile.txt')
        .should('exist');
    });

    xit('Should download attached files', () => {  //На мой взгляд ничего полезного не делает. Нужен ли вообще?
      cy.get(rejectedFilesWrapperClassNames)
        .first()
        .next()
        .contains('txtFile.txt')
        .then((anchor) => (
          new Cypress.Promise((resolve) => {
            fetch(anchor.prop('href'))
              .then((response) => response.blob())
              .then((body) => body.text())
              .then((text) => resolve(text));
          })
        ))
        .should('equal', 'Lorem ipsum dolor sit amet.\n');
    });

    it('Should remove attached files', () => {
      cy.get(fileDeleteIconClassName)
        .first()
        .click()
        .get(rejectedFilesWrapperClassNames)
        .first()
        .next()
        .contains('txtFile.txt')
        .should('not.exist')
        .get(rejectedFilesWrapperClassNames)
        .first()
        .next()
        .contains('example.json')
        .get(fileDeleteIconClassName)
        .first()
        .click()
        .get(rejectedFilesWrapperClassNames)
        .first()
        .next()
        .contains('example.json')
        .should('not.exist');
    });

    it('Should not remove attached files if is disabled', () => {
      cy.name('disable')
        .click()
        .name('controlledDZ')
        .next()
        .should('have.class', 'disabled')
        .parent()
        .should('have.class', 'disabled')
        .parent()
        .should('have.class', 'disabled')
        .get(fileDeleteIconClassName)
        .click({force: true})
        .get(rejectedFilesWrapperClassNames)
        .eq(2)
        .next()
        .contains('external file')
        .should('exist')
        .name('disable')
        .click()
        .get('.controlledDZ')
        .should('not.have.class', 'disabled')
        .children()
        .should('not.have.class', 'disabled')
    });
  });

  describe('Validation', () => {
    it('Should be invalid when isRequired and files are`t attached', () => {
      cy.get('button')
        .contains('Submit')
        .click()
        .get(wrapperClassName)
        .eq(1)
        .should('have.class', theme.invalid)
        .get(wrapperClassName)
        .eq(1)
        .next()
        .contains('Files are required!');
    });

    it('Should be valid when isRequired and files are attached', () => {
      cy.get(contentClassName)
        .eq(1)
        .attachFile('txtFile.txt', { subjectType: 'drag-n-drop' })
        .get('button')
        .contains('Submit')
        .click()
        .get(wrapperClassName)
        .eq(1)
        .should('not.have.class', theme.invalid)
        .get(wrapperClassName)
        .eq(1)
        .next()
        .contains('Files are required!')
        .should('not.exist');
    });

    it('Should be invalid when isRequired and prop value is null', () => {
      cy.get('button')
        .contains('Submit null value')
        .click()
        .get(wrapperClassName)
        .eq(3)
        .should('have.class', theme.invalid)
        .get(wrapperClassName)
        .eq(3)
        .next()
        .contains('Files are required!');
    });
  });

  describe('Rest', () => {
    describe('Controlled mode', () => {
      it('Should attach and remove files', () => {
        cy.get(rejectedFilesWrapperClassNames)
          .eq(2)
          .next()
          .contains('external file')
          .get(contentClassName)
          .eq(2)
          .attachFile('example.json', { subjectType: 'drag-n-drop' })
          .get(rejectedFilesWrapperClassNames)
          .eq(2)
          .next()
          .contains('example.json')
          .get(fileDeleteIconClassName)
          .last()
          .click()
          .get(fileDeleteIconClassName)
          .last()
          .click()
          .get(rejectedFilesWrapperClassNames)
          .eq(2)
          .next('ul')
          .should('not.exist');
      });

      it('Should clear component state when prop value is null', () => {
        cy.get(contentClassName)
          .eq(2)
          .attachFile('example.json', { subjectType: 'drag-n-drop' })
          .get('button')
          .contains('Set state as null')
          .click()
          .get(rejectedFilesWrapperClassNames)
          .eq(2)
          .next('ul')
          .should('not.exist');
      });
    });
  });

  describe('Loader', () => {
    it('Should display default loader', () => {
      cy.name('loader')
        .click()
        .get('.controlledDZ')
        .find('.loader-wrapper')
        .should('exist')
        .name('loader')
        .click()
        .get('.controlledDZ')
        .find('.loader-wrapper')
        .should('not.exist');
    });

    it('Should display progress loader', () => {
      cy.name('progressLoader')
        .click()
        .get('.controlledDZ')
        .find('.progress-loader')
        .should('exist')
        .name('progressLoader')
        .click()
        .get('.controlledDZ')
        .find('.progress-loader')
        .should('not.exist');
    });
    
    it('Should display custom loader', () => {
      cy.name('customLoader')
        .click()
        .get('.controlledDZ')
        .find('.txt-success')
        .should('have.text', 'Custom loader...')
        .name('customLoader')
        .click()
        .get('.controlledDZ')
        .find('.txt-success')
        .should('not.exist');
    });
  });
});
