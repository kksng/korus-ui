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
    cy.visit('/cypress/dropzone');
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
        .contains('txtFile.txt')
        .should('exist')
        .parent()
        .find(fileDeleteIconClassName)
        .click({force: true})
        .get(rejectedFilesWrapperClassNames)
        .first()
        .next()
        .contains('example.json')
        .should('exist')
        .parent()
        .find(fileDeleteIconClassName)
        .click({force: true});
    });

    it('Should download attached files', () => {
      cy.get(contentClassName)
        .first()
        .attachFile('testTxtFile.txt', { subjectType: 'drag-n-drop' })
        .get(rejectedFilesWrapperClassNames)
        .first()
        .next()
      cy.contains('testTxtFile.txt')
        .then((anchor) => (
          new Cypress.Promise((resolve) => {
            fetch(anchor.prop('href'))
              .then((response) => response.blob())
              .then((body) => body.text())
              .then((text) => resolve(text));
          })
        ))
        .should('contain', 'Lorem ipsum dolor sit amet.')
        .get(contentClassName)
        .first()
        .get(rejectedFilesWrapperClassNames)
        .first()
        .next()
        .contains('testTxtFile.txt')
        .parent()
        .find(fileDeleteIconClassName)
        .click({force: true});
    });

    it('Should remove attached files', () => {
      cy.get(contentClassName)
        .first()
        .attachFile('fileWithTooLongName.json', { subjectType: 'drag-n-drop' })
        .attachFile('test.png', { subjectType: 'drag-n-drop' })
        .get(rejectedFilesWrapperClassNames)
        .first()
        .next()
        .contains('test.png')
        .parent()
        .find(fileDeleteIconClassName)
        .click({force: true})
        .get('test.png')
        .should('not.exist')
        .get(rejectedFilesWrapperClassNames)
        .first()
        .next()
        .contains('fileWithTooLongName.json')
        .parent()
        .find(fileDeleteIconClassName)
        .click({force: true})
        .get('fileWithTooLongName.json')
        .should('not.exist');
    });

    it('Should not remove attached files if is disabled', () => {
      cy.get('#disable')
        .click()
        .get('#controlledDZ')
        .next()
        .should('have.class', `${theme.disabled}`)
        .parent()
        .should('have.class', `${theme.disabled}`)
        .parent()
        .should('have.class', `${theme.disabled}`)
        .get(fileDeleteIconClassName)
        .eq(0)
        .click({force: true})
        .get(rejectedFilesWrapperClassNames)
        .eq(2)
        .next()
        .contains('external file')
        .should('exist')
        .get('#disable')
        .click()
        .get('.controlledDZ')
        .should('not.have.class', `${theme.disabled}`)
        .children()
        .should('not.have.class', `${theme.disabled}`)
    });
  });

  describe('Validation', () => {
    it('Should be invalid when isRequired and files are`t attached', () => {
      cy.get('#submit')
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
        .get('#submit')
        .click()
        .get(wrapperClassName)
        .eq(1)
        .should('not.have.class', theme.invalid)
        .get(wrapperClassName)
        .eq(1)
        .next()
        .contains('Files are required!')
        .should('not.exist');
      cy.contains('txtFile.txt')
        .parent()
        .find(fileDeleteIconClassName)
        .click();
    });

    it('Should be invalid when isRequired and prop value is null', () => {
      cy.get('#nullValue')
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
          .parent()
          .find(fileDeleteIconClassName)
          .click({force: true})
          .get(contentClassName)
          .eq(2)
          .attachFile('bigFile.jpeg', { subjectType: 'drag-n-drop' })
          .get(rejectedFilesWrapperClassNames)
          .eq(2)
          .next()
        cy.contains('bigFile.jpeg')
          .should('exist')
          .parent()
          .find(fileDeleteIconClassName)
          .click({force: true})
          .get(rejectedFilesWrapperClassNames)
          .eq(2)
          .next('ul')
          .should('not.exist');
      });

      it('Should clear component state when prop value is null', () => {
        cy.get(contentClassName)
          .eq(2)
          .attachFile('example.json', { subjectType: 'drag-n-drop' })
          .get('#stateAsNull')
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
      cy.get('#loader')
        .click()
        .get('.controlledDZ')
        .find('.loader-wrapper')
        .should('exist')
        .get('#loader')
        .click()
        .get('.controlledDZ')
        .find('.loader-wrapper')
        .should('not.exist');
    });

    it('Should display progress loader', () => {
      cy.get('#progressLoader')
        .click()
        .get('.controlledDZ')
        .find('.progress-loader')
        .should('exist')
        .get('#progressLoader')
        .click()
        .get('.controlledDZ')
        .find('.progress-loader')
        .should('not.exist');
    });
    
    it('Should display custom loader', () => {
      cy.get('#customLoader')
        .click()
        .get('.controlledDZ')
        .find('.txt-success')
        .should('have.text', 'Custom loader...')
        .get('#customLoader')
        .click()
        .get('.controlledDZ')
        .find('.txt-success')
        .should('not.exist');
    });
  });
});
